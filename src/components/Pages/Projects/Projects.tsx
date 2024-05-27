import { FC } from "react";
import st from "./Projects.module.css";
import Slider from "./Parts/Slider";
import { projects } from "@/Fakeserver";

const Projects: FC = () => {
  return (
    <div className={st.Projects}>
      <h2>Наши проекты</h2>
      <Slider projects={projects} />
    </div>
  );
};

export default Projects;
