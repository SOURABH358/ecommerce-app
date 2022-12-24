import React from "react";
import ReactDOM from "react-dom/client"
import App from "./App";
import "./index.css"
import AuthContextWrapper from "./Reducer/AuthContext";
// import { Provider } from "react-redux";
// import store from "./store";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <React.StrictMode>
        <BrowserRouter>
        <AuthContextWrapper>
            <App />
        </AuthContextWrapper>
        </BrowserRouter>
    </React.StrictMode>
)