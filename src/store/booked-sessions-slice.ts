import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type BookedSession = { id: string; title: string; date: string };

type BookedSessionState = {
  session: BookedSession[];
};

const initialState: BookedSessionState = { session: [] };

const bookedSessionsSlice = createSlice({
  name: "bookedSessions",
  initialState,
  reducers: {
    addSession(state, actions: PayloadAction<BookedSession>) {
      state.session.push(actions.payload);
    },

    removeSession(state, actions: PayloadAction<{ id: string }>) {
      const sessionIndex = state.session.findIndex(
        (session) => session.id === actions.payload.id
      );

      if (sessionIndex >= 0) {
        console.log("first");
        state.session.splice(sessionIndex, 1);
      }
    },
  },
});

export const { addSession, removeSession } = bookedSessionsSlice.actions;
export default bookedSessionsSlice.reducer;
