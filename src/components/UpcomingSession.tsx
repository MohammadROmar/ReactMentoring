import {
  removeSession,
  type BookedSession,
} from "../store/booked-sessions-slice";
import { useBookedSessionsDispatch } from "../store/hooks";

type UpcomingSessionProps = {
  session: BookedSession;
};

export default function UpcomingSession({ session }: UpcomingSessionProps) {
  const dispatch = useBookedSessionsDispatch();

  return (
    <li className="upcoming-session">
      <div className="upcoming-session__text-wrapper">
        <h3 className="upcoming-session__title">{session.title}</h3>
        <p className="upcoming-session__date">{session.date}</p>
      </div>
      <button
        type="button"
        onClick={() => dispatch(removeSession({ id: session.id }))}
        className="upcoming-session__cancel-btn"
      >
        Cancel
      </button>
    </li>
  );
}
