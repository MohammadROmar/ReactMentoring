import { motion, AnimatePresence } from "framer-motion";

import { useBookedSessionsSelector } from "../../store/hooks.ts";

import EmptyIcon from "../../assets/icons/Empty.tsx";
import UpcomingSession from "../UpcomingSession/UpcomingSession.tsx";

export default function UpcomingSessionsContent() {
  const fetchedBookedSessions = useBookedSessionsSelector(
    (state) => state.bookedSessions.sessions
  );

  if (fetchedBookedSessions.length === 0) {
    return (
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: "auto" }}
        className="upcoming-sessions--empty"
      >
        <EmptyIcon />
        <h3 className="upcoming-sessions--empty__title">No booked sessions</h3>
        <p className="upcoming-sessions--empty__note">Try booking some!</p>
      </motion.div>
    );
  }

  const bookedSessions = fetchedBookedSessions.map((session) => (
    <UpcomingSession session={session} key={session.id} />
  ));

  return (
    <ul className="upcoming-sessions">
      <AnimatePresence>{bookedSessions}</AnimatePresence>
    </ul>
  );
}
