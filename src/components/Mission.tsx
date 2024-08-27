import { type Mission as MissionData } from "../data/dummy-messions";

export default function Mission({ image, title, description }: MissionData) {
  return (
    <li className="mission">
      <img src={image} alt="" className="mission__image" />
      <div className="mission__text-wrapper">
        <h3 className="mission__title">{title}</h3>
        <h3 className="mission__description">{description}</h3>
      </div>
    </li>
  );
}
