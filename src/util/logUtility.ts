// logUtility.ts
let isLoggingEnabled: boolean = false;  // Feature flag

// Function to set the logging flag
export function setLoggingFlag(flag: boolean): void {
  isLoggingEnabled = flag;
}

// Function to initialize the logging behavior
export function initLogging(): void {
  const originalConsoleLog = console.log;

  // Override the console.log method
  console.log = (...args: any[]): void => {
    if (isLoggingEnabled) {
      originalConsoleLog.apply(console, args);  // Log to the console if enabled
    }
  };
}
