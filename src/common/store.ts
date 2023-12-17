import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";

import productsReducer from "../features/products/productsReducer";
import cartReducer from "../features/cart/cartReducer";
import categoriesReducer from "../features/categories/categoriesReducer";
import usersReducer from "../features/users/usersReducer";
import authReducer from "../features/users/authReducer";

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['categories', 'users', 'products', 'auth']
};

const rootReducer = combineReducers({
    productsReducer,
    cartReducer,
    categoriesReducer,
    usersReducer,
    authReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
});

export const persistor = persistStore(store)
export type AppState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;