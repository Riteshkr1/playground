import * as ReactDOM from "react-dom";
import App from "./components/app";
import {setLoggingFlag, initLogging } from './util/logUtility';
import './theam/theam.less'; // Import global styles
import * as React from "react";
import { ThemeProvider } from "./context/ThemeContext";

// Function to get query parameter value by name
const getQueryParam = (param: string): string | null => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
};

// Extract 'log' parameter from the URL and convert it to a boolean flag
const logFlag = getQueryParam('log');
if (logFlag !== null) {
  setLoggingFlag(logFlag === 'true'); // Enable logging if 'log=true' in URL
}

// Initialize logging
initLogging();


const Index = () => {
  return (
    <React.StrictMode>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  );
  
};

ReactDOM.render(<Index />, document.getElementById("root"));