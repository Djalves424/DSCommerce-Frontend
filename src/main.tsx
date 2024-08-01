import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

window.React = React;

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
