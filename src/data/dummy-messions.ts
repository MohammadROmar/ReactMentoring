import studentsImg from "../assets/students.jpg";
import listImg from "../assets/list.jpg";
import certificateImg from "../assets/certificate.jpg";

export type Mission = {
  image: string;
  title: string;
  description: string;
};

export const MISSIONS: Mission[] = [
  {
    image: studentsImg,
    title: "What we do",
    description:
      "ReactMentoring is a platform for React developers to find mentors who can help them with their React-related questions and problems. We are a community of React developers who want to help each other succeed.",
  },
  {
    image: listImg,
    title: "What we offer",
    description:
      " We offer a variety of mentoring sessions, from one-on-one mentoring to group mentoring sessions. Browse our available sessions to find the one that best fits your needs.",
  },
  {
    image: certificateImg,
    title: "What you get",
    description:
      "No matter if you are a beginner or an experienced React developer, we are here to help you level up your React skills.",
  },
];
