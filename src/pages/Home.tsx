import Mission from "../components/Mission";
import { MISSIONS } from "../data/dummy-messions";

export default function HomePage() {
  const missions = MISSIONS.map((mission) => (
    <Mission
      key={mission.title}
      image={mission.image}
      title={mission.title}
      description={mission.description}
    />
  ));

  return <ul className="missions">{missions}</ul>;
}
