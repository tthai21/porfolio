import React, { useRef } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import { Project } from "./project";

export default function Projects() {
  return (
    <section className="mb-10">
      <SectionHeading title="My Projects" />
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
