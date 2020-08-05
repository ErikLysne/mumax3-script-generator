import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./redux";

import Header from "./components/Header";
import MaterialSelector from "./components/MaterialSelector";
import InitialStateSelector from "./components/InitialStateSelector";
import MaterialParameterSelector from "./components/MaterialParameterSelector";
import GeometrySelector from "./components/GeometrySelector";

const store = createStore(rootReducer, composeWithDevTools());

function App() {
    return (
        <Provider store={store}>
            <Header />
            <MaterialSelector />
            <InitialStateSelector />
            <MaterialParameterSelector />
            <GeometrySelector />
        </Provider>
    );
}

export default App;
