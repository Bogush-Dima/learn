import { 
  take, 
  takeEvery, 
  takeLatest, 
  takeLeading, 
  put, 
  call, 
  fork,
  spawn,
  join,
  select
} from "redux-saga/effects"

import { 
  CLICK, 
  PEOPLE, 
  PLANETS, 
  SET_PEOPLE, 
  SET_PLANETS 
} from "../actionTypes"

// const wait = (t) => new Promise((resolve => {
//   setTimeout(resolve, t)
// }))

const getSWAPI = async (pattern) => {
  const request = await fetch(`https://swapi.dev/api/${pattern}`)
  const data = await request.json()
  return data
}

export function* getPeoples() {
  // ===============================

  // throw new Error()

  // ===============================

  const peoples = yield call(getSWAPI, PEOPLE)
  yield put({type: SET_PEOPLE, payload: peoples.results})
}

export function* getPlanets() {
  const planets = yield call(getSWAPI, PLANETS)
  yield put({type: SET_PLANETS, payload: planets.results})
}

export function* workerSaga() {
  // yield wait(1000)

  // ===============================

  // const data = yield getPeople()

  // ===============================

  // const data = yield call(getSWAPI)

  // ===============================

  // console.log(data);

  // ===============================

  // yield put({type: SET_PEOPLE, payload: data.results})

  // ===============================

  // yield fork(getPeoples)
  // yield fork(getPlanets)

  // ===============================

  yield spawn(getPeoples)
  yield spawn(getPlanets)

  // ===============================

  // const task = yield fork(getPeoples)
  // yield spawn(getPlanets)

  // const people = yield join(task)

  // ===============================

  const store = yield select(store => store)
  console.log("STORE: ", store);
}

export function* watchClickSaga() {
  // yield take("CLICK")
  // yield workerSaga()

  // ===============================

  // yield takeLatest("CLICK", workerSaga)
  
  // ===============================

  // yield takeLeading("CLICK", workerSaga)

  // ===============================

  yield takeEvery(CLICK, workerSaga)
}

export function* rootSaga() {
  yield watchClickSaga()
}