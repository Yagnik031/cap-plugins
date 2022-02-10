import { registerPlugin } from '@capacitor/core';

import type { ScannerFlashPlugin } from './definitions';

const ScannerFlash = registerPlugin<ScannerFlashPlugin>('ScannerFlash', {
  web: () => import('./web').then(m => new m.ScannerFlashWeb()),
});

export * from './definitions';
export { ScannerFlash };
