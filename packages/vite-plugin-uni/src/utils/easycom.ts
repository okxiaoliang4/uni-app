import debug from 'debug'
import type { FSWatcher } from 'chokidar'
import { debounce } from '@dcloudio/uni-shared'
import { chokidar, initEasycomsOnce } from '@dcloudio/uni-cli-shared'

const debugEasycom = debug('vite:uni:easycom')
export const initEasycom = (watcher?: FSWatcher) => {
  const { filter, refresh, options } = initEasycomsOnce(
    process.env.UNI_INPUT_DIR,
    process.env.UNI_PLATFORM
  )
  if (!watcher) {
    // build 模式，手动初始化 watcher
    debugEasycom('initWatch', options.dirs!)
    watcher = chokidar.watch(options.dirs!, {
      ignored: ['**/node_modules/**', '**/.git/**'],
      ignoreInitial: true,
      ignorePermissionErrors: true,
      disableGlobbing: true,
    })
  }
  const refreshEasycom = debounce(refresh, 100)
  watcher.on('all', (eventName, path) => {
    if (!['add', 'unlink'].includes(eventName)) {
      return
    }
    if (filter(path)) {
      debugEasycom('watch', eventName, path)
      refreshEasycom()
    }
  })
}