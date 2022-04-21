import {combineReducers} from 'redux';
import { todoReducers } from '../redux/reducers';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist'
import {configureStore} from '@reduxjs/toolkit'

const reducer = combineReducers({
    todoList: todoReducers
})

const persistConfig  = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)

const store = configureStore({
    reducer: persistedReducer
})

export const persistor = persistStore(store);

export default store;