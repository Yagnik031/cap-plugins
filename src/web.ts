import { WebPlugin } from '@capacitor/core';

import type { ScannerFlashPlugin } from './definitions';

export class ScannerFlashWeb extends WebPlugin implements ScannerFlashPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
