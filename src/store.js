import {createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import reduce from "./reducer";

const store = createStore(reduce,applyMiddleware(thunk))

export default store