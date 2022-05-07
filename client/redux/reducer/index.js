import { combineReducers} from "redux";
import input from "./input.js";

const createRoorReducer = () => 
    combineReducers({
        input
    })

export default createRoorReducer
