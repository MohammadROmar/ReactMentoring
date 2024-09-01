import { motion } from "framer-motion";

import { type Mission as MissionData } from "../../data/dummy-messions.ts";

import "./Mission.css";

export default function Mission({ image, title, description }: MissionData) {
  return (
    <motion.li
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      className="mission"
    >
      <img src={image} alt="" className="mission__image" />
      <div className="mission__text-wrapper">
        <h3 className="mission__title">{title}</h3>
        <h3 className="mission__description">{description}</h3>
      </div>
    </motion.li>
  );
}
