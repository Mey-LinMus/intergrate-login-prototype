import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GoogleOAuthProvider } from "@react-oauth/google";

const rootElement = document.getElementById("root");
const clientId =
  "513765114638-393vae6t7uifr8avo9mpserq9bcjla93.apps.googleusercontent.com";

ReactDOM.createRoot(rootElement).render(
  <GoogleOAuthProvider clientId={clientId}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GoogleOAuthProvider>
);

reportWebVitals();
