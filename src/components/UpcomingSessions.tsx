import { useRef } from "react";

import Modal, { type ModalHandler } from "./Modal.tsx";

import { useBookedSessionsSelector } from "../store/hooks.ts";
import UpcomingSession from "./UpcomingSession.tsx";

export default function UpcomingSessions() {
  const dialog = useRef<ModalHandler>(null);

  const fetchedBookedSessions = useBookedSessionsSelector(
    (state) => state.bookedSessions.session
  );

  const bookedSessions = fetchedBookedSessions.map((session) => (
    <UpcomingSession session={session} key={session.id} />
  ));

  return (
    <>
      <Modal ref={dialog}>
        <h2 className="upcoming-sessions__title">Upcoming Sessions</h2>
        <form method="dialog" className="modal__actions-form">
          <ul className="upcoming-sessions">{bookedSessions}</ul>
          <button className="modal_close-button">Close</button>
        </form>
      </Modal>
      <button
        className="upcoming-sessions-btn"
        onClick={() => dialog.current?.open()}
      >
        Upcoming Sessions
      </button>
    </>
  );
}
