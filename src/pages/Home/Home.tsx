import Mission from "../../components/Mission/Mission";
import StaggeredList from "../../components/UI/animated/StaggeredList";

import { MISSIONS } from "../../data/dummy-messions";

import "./Home.css";

export default function HomePage() {
  const missions = MISSIONS.map((mission) => (
    <Mission
      key={mission.title}
      image={mission.image}
      title={mission.title}
      description={mission.description}
    />
  ));

  return (
    <StaggeredList duration={0.2} className="missions">
      {missions}
    </StaggeredList>
  );
}
