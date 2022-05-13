import { combineReducers } from "redux";
import input from "./input.js";
import table from "./table.js";
import connection from "./connection.js";

const createRoorReducer = () =>
    combineReducers({
        input,
        table,
        connection
    })

export default createRoorReducer
