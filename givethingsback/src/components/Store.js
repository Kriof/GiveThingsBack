import reducer from "./Reducers";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { logger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = [thunk, logger];
const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
);
export default store;