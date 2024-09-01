import { useRef } from "react";

import Modal, { type ModalHandler } from "../UI/Modal/Modal.tsx";
import UpcomingSessionsContent from "./UpcomingSessionsContent.tsx";

import "./UpcomingSessions.css";

export default function UpcomingSessions() {
  const dialog = useRef<ModalHandler>(null);

  return (
    <>
      <Modal ref={dialog} style={{ width: "50%" }}>
        <h2 className="upcoming-sessions__title">Upcoming Sessions</h2>
        <UpcomingSessionsContent />
        <form method="dialog" className="modal__actions-form">
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
