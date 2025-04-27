export class LogUtility {
  private static isLoggingEnabled: boolean = false;

  // Function to set the logging flag
  static setLoggingFlag(flag: boolean): void {
    this.isLoggingEnabled = flag;
  }

  // Override console.log based on the feature flag
  static init(): void {
    const originalConsoleLog = console.log;
    console.log = (...args: any[]): void => {
      if (this.isLoggingEnabled) {
        originalConsoleLog.apply(console, args);  // Log to the console if enabled
      }
    };
  }
}