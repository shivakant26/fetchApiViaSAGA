import axios from "axios";
import { call, put,takeLatest,takeEvery } from "@redux-saga/core/effects";
import { GET_DATA ,GET_DATA_S, GET_POST,GET_POST_S} from "../ActionType";


 function*  getApiData   () {
try {
    const  data  = yield call(axios.get, 'https://jsonplaceholder.typicode.com/users')
    yield put({ 
        type: GET_DATA_S,
        payload: data 
    })
  } catch (e) {
    console.log(e.message)
  }
}

function*  getPostApi() {
    try {
        const  result  = yield call(axios.get, 'https://jsonplaceholder.typicode.com/posts')
        yield put({ 
            type: GET_POST_S,
            payload: result 
        })
      } catch (e) {
        console.log(e.message)
      }
    }

export default function* userSendAll() {
    yield takeEvery(GET_DATA, getApiData)
    yield takeEvery(GET_POST, getPostApi)
  }
  


