import React from "react";
import ReactDOM from "react-dom";
import TheMainApp from "./shared/TheMainApp";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<TheMainApp />, document.getElementById("root"));
registerServiceWorker();
