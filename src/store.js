import {createStore} from "redux"
import rooterd from "./redux/reducers/main"

const store= createStore(
    rooterd
);

export default store;

