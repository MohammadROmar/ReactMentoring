import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type BookedSession = { id: string; title: string; date: string };

type BookedSessionState = {
  sessions: BookedSession[];
};

const initialState: BookedSessionState = { sessions: [] };

const bookedSessionsSlice = createSlice({
  name: "bookedSessions",
  initialState,
  reducers: {
    addSession(state, actions: PayloadAction<BookedSession>) {
      const sessionExists = state.sessions.findIndex(
        (session) => session.id === actions.payload.id
      );

      if (sessionExists === -1) {
        state.sessions.push(actions.payload);
      }
    },

    removeSession(state, actions: PayloadAction<{ id: string }>) {
      const sessionIndex = state.sessions.findIndex(
        (session) => session.id === actions.payload.id
      );

      if (sessionIndex >= 0) {
        state.sessions.splice(sessionIndex, 1);
      }
    },
  },
});

export const { addSession, removeSession } = bookedSessionsSlice.actions;
export default bookedSessionsSlice.reducer;
