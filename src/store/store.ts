import { configureStore } from "@reduxjs/toolkit";

import bookedSessionsReducer from "./booked-sessions-slice";

export const store = configureStore({
  reducer: {
    bookedSessions: bookedSessionsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
