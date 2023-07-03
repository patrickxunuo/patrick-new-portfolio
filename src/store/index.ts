import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "./globalSlice.ts";
import eventReducer from "./eventSlice.ts";
import { getEvents } from "../request";

export const store = configureStore({
  reducer: {
    global: globalReducer,
    eventState: eventReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: getEvents,
      },
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
