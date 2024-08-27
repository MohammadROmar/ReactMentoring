import { Link } from "react-router-dom";

type SessionCardProps = {
  id: string;
  title: string;
  image: string;
  summary: string;
};

export default function SessionCard({
  id,
  title,
  image,
  summary,
}: SessionCardProps) {
  return (
    <li key={id} className="session">
      <img src={image} alt={title} className="session__image" />
      <div className="session__text-container">
        <h2 className="session__title">{title}</h2>
        <p className="session__summary">{summary}</p>
        <Link to={id} className="session__navigation">
          Learn More
        </Link>
      </div>
    </li>
  );
}
