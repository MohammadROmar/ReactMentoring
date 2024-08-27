import { useParams } from "react-router-dom";

import { SESSIONS } from "../data/dummy-sessions";
import BookSession from "../components/BookSession";

export default function SessionPage() {
  const params = useParams();
  const id = params.id;
  const session = SESSIONS.find((session) => session.id === id);

  if (session) {
    const { /*id,*/ title, image, date, description } = session;

    return (
      <section className="session-page">
        <div className="session-page__heading">
          <img src={image} alt={title} className="session-page__image" />
          <div className="session-page__heading-text-container">
            <h2 className="session-page__title">{title}</h2>
            <p className="session-page__date">{date}</p>
            <BookSession session={session} />
          </div>
        </div>
        <div className="session-page__description-wrapper">
          <p className="session-page__description">{description}</p>
        </div>
      </section>
    );
  }

  return <p>Could not find the requested session.</p>;
}
