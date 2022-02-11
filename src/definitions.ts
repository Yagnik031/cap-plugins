// flash light methods....
export interface ScannerFlashPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;

  // check if flashlight available
  isAvailable(): Promise<{ value: boolean; }>;

  // turn on flash-light
  switchOn(options: {
    intensity?: number;
  }): Promise<void>;

  // turn off flash-light
  switchOff(): Promise<void>;

  // check flashlight state
  isSwitchedOn(): Promise<{ value: boolean; }>;

  // start scanner methods....
  prepare(): Promise<void>;
  hideBackground(): Promise<void>;
  showBackground(): Promise<void>;
  startScan(): Promise<ScanResult>;
  stopScan(): Promise<void>;
  checkPermission(
    options: CheckPermissionOptions,
  ): Promise<CheckPermissionResult>;
  openAppSettings(): Promise<void>;


}
// end of flash-light methods....

// start scanner methods....

// export interface BarcodeScannerPlugin {

// }

export interface ScanResult {
  hasContent: boolean;
  content?: string;
}

export interface CheckPermissionOptions {
  force?: boolean;
}

export interface CheckPermissionResult {
  granted?: boolean;
  denied?: boolean;
  asked?: boolean;
  neverAsked?: boolean;
  restricted?: boolean; // ios only
  unknown?: boolean; // ios only
}

