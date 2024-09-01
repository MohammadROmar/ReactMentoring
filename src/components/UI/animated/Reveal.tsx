import { type ReactNode, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

type RevealProps = {
  children: ReactNode;
};

export default function Reveal({ children }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, { once: true });

  const animationController = useAnimation();

  useEffect(() => {
    if (isInView) {
      animationController.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={animationController}
      transition={{ type: "spring", duration: 1 }}
      style={{ overflow: "hdden" }}
    >
      {children}
    </motion.div>
  );
}
