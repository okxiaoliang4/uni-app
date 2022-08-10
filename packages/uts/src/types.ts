export enum UtsTarget {
  KOTLIN = 'kotlin',
  SWIFT = 'swift',
}
export interface UtsParserConfig {
  /**
   * Defaults to `false`
   */
  allowImportWithoutSpecifiers?: boolean
}

export type UtsParseOptions = UtsParserConfig & {
  filename?: string
  comments?: boolean
}

export type UtsInputOptions = UtsParseOptions & {
  root: string
  filename: string
}

export type UtsOutputOptions = {
  outDir: string
  package: string
  imports?: string[]
  sourceMap?: boolean | string
  inlineSourcesContent?: boolean
  extname: string
  logFilename?: boolean
}
export interface UtsOptions {
  input: UtsInputOptions
  output: UtsOutputOptions
}

export interface UtsResult {
  filename?: string
  time?: number
  error?: Error
}

export interface UtsBundleOptions extends UtsOptions {
  target: UtsTarget
}
