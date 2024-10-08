import SessionCard from "../../components/SessionCard/SessionCard.tsx";
import { SESSIONS } from "../../data/dummy-sessions.ts";

import "./Sessions.css";

export default function SessionsPage() {
  const sessions = SESSIONS.map((session) => (
    <SessionCard
      key={session.id}
      id={session.id}
      title={session.title}
      image={session.image}
      summary={session.summary}
    />
  ));

  return <ul className="sessions">{sessions}</ul>;
}
