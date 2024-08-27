import { FormEvent, useRef } from "react";

import Modal, { ModalHandler } from "./Modal";
import Input from "./Input";
import { useBookedSessionsDispatch } from "../store/hooks";
import { addSession, type BookedSession } from "../store/booked-sessions-slice";

export default function BookSession({ session }: { session: BookedSession }) {
  const dialog = useRef<ModalHandler>(null);
  const dispatch = useBookedSessionsDispatch();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // const formData = new FormData(event.currentTarget);
    // const data = Object.fromEntries(formData);

    dispatch(addSession(session));

    event.currentTarget.reset();
    dialog.current?.close();
  }

  return (
    <>
      <Modal ref={dialog}>
        <h3 className="modal__title">Book Session</h3>
        <form
          method="dialog"
          onSubmit={handleSubmit}
          className="modal__actions-form"
        >
          <Input id="email" label="Your Email" type="email" />
          <Input id="name" label="Your Name" type="text" />
          <button
            className="modal_close-button"
            type="button"
            onClick={() => dialog.current?.close()}
          >
            Close
          </button>
          <button className="modal_book-session">Book Session</button>
        </form>
      </Modal>
      <button
        className="session-page__booking"
        onClick={() => dialog.current?.open()}
      >
        Book Session
      </button>
    </>
  );
}
