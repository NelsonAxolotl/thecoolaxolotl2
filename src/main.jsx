import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Disable browser automatic scroll restoration
if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

// Detect homepage refresh and remove section hash
const navigation = performance.getEntriesByType("navigation")[0];

if (
  navigation?.type === "reload" &&
  window.location.pathname === "/" &&
  window.location.hash
) {
  window.history.replaceState(
    null,
    "",
    window.location.pathname + window.location.search,
  );
}

// Start at the top of the page
window.scrollTo(0, 0);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
