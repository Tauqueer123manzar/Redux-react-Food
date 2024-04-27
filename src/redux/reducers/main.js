import {combinerReducers} from 'redux'
import { cartreducer } from './reducer'

const rooterd=combinerReducers({
    cartreducer
})

export default rooterd