import { configureStore } from '@reduxjs/toolkit';
import rootReducers from './RootReducers';
import { middlewares } from './Middlewares'

export const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;