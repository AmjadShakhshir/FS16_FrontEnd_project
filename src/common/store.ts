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

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['products']
};

const rootReducer = combineReducers({
    productsReducer,
    cartReducer
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