//import {createStore, applyMiddleWare} from "redux";
import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootreducers from "./root-reducer";
import rootSaga from "./root-saga";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
if (process.env.NODE_ENV === "development") {
    middlewares.push(logger)
}
export const store = createStore(rootreducers, applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);