import React from 'react';
import "./styles/_main.scss";
import App from './App';
import { Provider } from "react-redux";
import store from './redux/store';
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactDOM from 'react-dom/client';

const container: any = document.getElementById("app");

if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <Router>
        <Provider store={store}>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={true}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <App/>
        </Provider>
      </Router>
    </React.StrictMode>
  );
} else {
  console.error('Root element not found');
}
