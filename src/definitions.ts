export interface ScannerFlashPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
