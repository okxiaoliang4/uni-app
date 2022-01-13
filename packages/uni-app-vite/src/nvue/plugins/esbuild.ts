import path from 'path'
import fs from 'fs-extra'
import { transformWithEsbuild } from '@dcloudio/uni-cli-shared'
import type { BuildOptions, PluginBuild } from 'esbuild'
import type { Plugin } from 'vite'
import { nvueOutDir } from '../../utils'

export function uniEsbuildPlugin(): Plugin {
  let buildOptions: BuildOptions
  const outputDir = process.env.UNI_OUTPUT_DIR
  return {
    name: 'uni:app-nvue-esbuild',
    enforce: 'post',
    configResolved(config) {
      buildOptions = {
        format: 'iife',
        minify: config.build.minify ? true : false,
        bundle: true,
        write: false,
        plugins: [esbuildGlobalPlugin({ vue: 'Vue' })],
      }
    },
    async writeBundle(_, bundle) {
      const entryPoints: string[] = []
      Object.keys(bundle).forEach((name) => {
        const chunk = bundle[name]
        if (
          chunk.type === 'chunk' &&
          chunk.facadeModuleId &&
          chunk.facadeModuleId.endsWith('.nvue')
        ) {
          entryPoints.push(name)
        }
      })
      await Promise.all(
        entryPoints.map((filename) => {
          return buildNVuePage(filename, buildOptions).then((code) => {
            return fs.outputFile(path.resolve(outputDir, filename), code)
          })
        })
      )
    },
  }
}

function buildNVuePage(filename: string, options: BuildOptions) {
  return transformWithEsbuild(
    `import NVuePageComponent from './${filename}'
Vue.createApp(NVuePageComponent).mount('#root')`,
    path.join(nvueOutDir(), 'main.js'),
    options
  ).then((res) => {
    if (res.outputFiles) {
      return res.outputFiles[0].text
    }
    return ''
  })
}

function esbuildGlobalPlugin(options: Record<string, string>) {
  const keys = Object.keys(options)
  return {
    name: 'global',
    setup(build: PluginBuild) {
      keys.forEach((key) => {
        const namespace = key + '-ns'
        build.onResolve({ filter: new RegExp('^' + key + '$') }, ({ path }) => {
          return {
            path,
            namespace,
          }
        })
        build.onLoad({ filter: /.*/, namespace }, () => ({
          contents: `module.exports = ${options[key]}`,
          loader: 'js',
        }))
      })
    },
  }
}