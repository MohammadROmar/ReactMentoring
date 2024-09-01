import { type ReactNode } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

type StaggeredListProps = {
  duration: number;
  children: ReactNode;
} & HTMLMotionProps<"ul">;

export default function StaggeredList({
  duration,
  children,
  ...props
}: StaggeredListProps) {
  return (
    <motion.ul
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: duration } },
      }}
      initial="hidden"
      animate="visible"
      {...props}
    >
      {children}
    </motion.ul>
  );
}
