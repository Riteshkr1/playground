import * as ReactDOM from "react-dom";
import App from "./components/app";
import {LogUtility} from './util/LogUtility';

// Function to get query parameter value by name
const getQueryParam = (param: string): string | null => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
};

// Extract 'log' parameter from the URL and convert it to a boolean flag
const logFlag = getQueryParam('log');
if (logFlag !== null) {
  LogUtility.setLoggingFlag(logFlag === 'true'); // Enable logging if 'log=true' in URL
}

// Initialize logging
LogUtility.init();


const Index = () => {
  return <App />;
};

ReactDOM.render(<Index />, document.getElementById("root"));