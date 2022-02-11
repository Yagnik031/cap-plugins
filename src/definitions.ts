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


export declare enum SupportedFormat {
  UPC_A = "UPC_A",
  UPC_E = "UPC_E",
  UPC_EAN_EXTENSION = "UPC_EAN_EXTENSION",
  EAN_8 = "EAN_8",
  EAN_13 = "EAN_13",
  CODE_39 = "CODE_39",
  CODE_39_MOD_43 = "CODE_39_MOD_43",
  CODE_93 = "CODE_93",
  CODE_128 = "CODE_128",
  CODABAR = "CODABAR",
  ITF = "ITF",
  ITF_14 = "ITF_14",
  AZTEC = "AZTEC",
  DATA_MATRIX = "DATA_MATRIX",
  MAXICODE = "MAXICODE",
  PDF_417 = "PDF_417",
  QR_CODE = "QR_CODE",
  RSS_14 = "RSS_14",
  RSS_EXPANDED = "RSS_EXPANDED"
}


export interface ScanOptions {
  targetedFormats?: SupportedFormat[];
}


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

