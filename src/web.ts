import { WebPlugin } from '@capacitor/core';
import { BarcodeScannerPlugin, CheckPermissionOptions, CheckPermissionResult, ScanResult } from './definitions';

import type { ScannerFlashPlugin } from './definitions';

export class ScannerFlashWeb extends WebPlugin implements ScannerFlashPlugin, BarcodeScannerPlugin {
  async prepare(): Promise<void> {
    throw new Error('Method not implemented.');
  }
  async hideBackground(): Promise<void> {
    throw new Error('Method not implemented.');
  }
  async showBackground(): Promise<void> {
    throw new Error('Method not implemented.');
  }
  async startScan(): Promise<ScanResult> {
    throw new Error('Method not implemented.');
  }
  async stopScan(): Promise<void> {
    throw new Error('Method not implemented.');
  }
  async checkPermission(_options: CheckPermissionOptions): Promise<CheckPermissionResult> {
    throw new Error('Method not implemented.');
  }
  async openAppSettings(): Promise<void> {
    throw new Error('Method not implemented.');
  }
  async isAvailable(): Promise<{ value: boolean; }> {
    throw new Error('Method not implemented.');
  }
  async switchOn(_options: { intensity?: number | undefined; }): Promise<void> {
    throw new Error('Method not implemented.');
  }
  async switchOff(): Promise<void> {
    throw new Error('Method not implemented.');
  }
  async isSwitchedOn(): Promise<{ value: boolean; }> {
    throw new Error('Method not implemented.');
  }
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
