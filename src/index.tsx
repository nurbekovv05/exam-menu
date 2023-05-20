import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from "./store/store";
import {BrowserRouter} from "react-router-dom";
import LayOut from "./layOut/LayOut";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
    <Provider store={store}>
        <BrowserRouter>
            <LayOut>
                <App />
            </LayOut>
        </BrowserRouter>
    </Provider>
);

