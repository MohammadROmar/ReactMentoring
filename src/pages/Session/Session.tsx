import { useParams } from "react-router-dom";

import Error404Icon from "../../assets/icons/Error404.tsx";
import BookSession from "../../components/BookSession/BookSession.tsx";

import { formatDate } from "../../util/formatDate.ts";
import { SESSIONS } from "../../data/dummy-sessions.ts";

import "./Sessions.css";

export default function SessionPage() {
  const params = useParams();
  const id = params.id;
  const session = SESSIONS.find((session) => session.id === id);

  if (session) {
    const { title, image, date, description } = session;

    const sessionDate = new Date(date);
    const formattedDate = formatDate(sessionDate);

    return (
      <section className="session-page">
        <div className="session-page__heading">
          <div className="session-page__image-wrapper">
            <img src={image} alt={title} className="session-page__image" />
          </div>
          <div className="session-page__heading-text-container">
            <h2 className="session-page__title">{title}</h2>
            <time
              dateTime={sessionDate.toISOString()}
              className="session-page__date"
            >
              {formattedDate}
            </time>
            <BookSession session={session} />
          </div>
        </div>
        <div className="session-page__description-wrapper">
          <p className="session-page__description">{description}</p>
        </div>
      </section>
    );
  }

  return (
    <section
      className="session-page"
      style={{
        justifyContent: "center",
        margin: "0 auto",
      }}
    >
      <div className="session-page__icon">
        <Error404Icon />
      </div>
      <h3>Could not find the requested session.</h3>
    </section>
  );
}
