import { combineReducers} from "redux";
import input from "./input.js";
import table from "./table.js"

const createRoorReducer = () => 
    combineReducers({
        input,
        table
    })

export default createRoorReducer
