import ReactDOM from "react-dom";
import App from "./components/App";
import React from "react";
import GetServerAccess from "./components/GetServerAccess";
import {Provider} from "react-redux";
import store from "./redux/store";
import ReduxApp from "./components/ReduxApp";

ReactDOM.render(
    <Provider store={store}>
        <ReduxApp/>
    </Provider>,
    document.getElementById('root')
)
//ReactDOM.render(<App/> , document.getElementById('root'))
