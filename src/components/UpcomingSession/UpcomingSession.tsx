import { motion } from "framer-motion";

import {
  removeSession,
  type BookedSession,
} from "../../store/booked-sessions-slice.ts";
import { useBookedSessionsDispatch } from "../../store/hooks.ts";
import { formatDate } from "../../util/formatDate.ts";

import "./UpcomingSession.css";

type UpcomingSessionProps = {
  session: BookedSession;
};

export default function UpcomingSession({ session }: UpcomingSessionProps) {
  const dispatch = useBookedSessionsDispatch();

  const sessionDate = new Date(session.date);
  const formattedDate = formatDate(sessionDate);

  return (
    <motion.li
      animate={{ height: "auto" }}
      exit={{ height: 0, padding: 0 }}
      className="upcoming-session"
      style={{ padding: "0.5rem 0.25rem" }}
    >
      <div className="upcoming-session__text-wrapper">
        <h3 className="upcoming-session__title">{session.title}</h3>
        <time
          dateTime={sessionDate.toISOString()}
          className="upcoming-session__date"
        >
          {formattedDate}
        </time>
      </div>
      <button
        type="button"
        onClick={() => dispatch(removeSession({ id: session.id }))}
        className="upcoming-session__cancel-btn"
      >
        Cancel
      </button>
    </motion.li>
  );
}
