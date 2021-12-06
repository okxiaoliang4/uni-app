import path from 'path'
import {
  addMiniProgramComponentJson,
  normalizeMiniProgramFilename,
  normalizePath,
  removeExt,
  encodeBase64Url,
  decodeBase64Url,
} from '@dcloudio/uni-cli-shared'
import { Plugin } from 'vite'

import { UniMiniProgramPluginOptions } from '../plugin'

const uniPagePrefix = 'uniPage://'
const uniComponentPrefix = 'uniComponent://'

export function virtualPagePath(filepath: string) {
  return uniPagePrefix + encodeBase64Url(filepath)
}
export function virtualComponentPath(filepath: string) {
  return uniComponentPrefix + encodeBase64Url(filepath)
}

export function parseVirtualPagePath(uniPageUrl: string) {
  return decodeBase64Url(uniPageUrl.replace(uniPagePrefix, ''))
}

export function parseVirtualComponentPath(uniComponentUrl: string) {
  return decodeBase64Url(uniComponentUrl.replace(uniComponentPrefix, ''))
}

export function isUniPageUrl(id: string) {
  return id.startsWith(uniPagePrefix)
}

export function isUniComponentUrl(id: string) {
  return id.startsWith(uniComponentPrefix)
}

export function uniEntryPlugin({
  global,
}: UniMiniProgramPluginOptions): Plugin {
  const inputDir = process.env.UNI_INPUT_DIR
  return {
    name: 'vite:uni-virtual',
    enforce: 'pre',
    resolveId(id) {
      if (isUniPageUrl(id) || isUniComponentUrl(id)) {
        return id
      }
    },
    load(id) {
      if (isUniPageUrl(id)) {
        const filepath = normalizePath(
          path.resolve(inputDir, parseVirtualPagePath(id))
        )
        this.addWatchFile(filepath)
        return {
          code: `import MiniProgramPage from '${filepath}'
${global}.createPage(MiniProgramPage)`,
        }
      } else if (isUniComponentUrl(id)) {
        const filepath = normalizePath(
          path.resolve(inputDir, parseVirtualComponentPath(id))
        )
        this.addWatchFile(filepath)
        addMiniProgramComponentJson(
          removeExt(normalizeMiniProgramFilename(filepath, inputDir)),
          { component: true }
        )
        return {
          code: `import Component from '${filepath}'
${global}.createComponent(Component)`,
        }
      }
    },
  }
}
