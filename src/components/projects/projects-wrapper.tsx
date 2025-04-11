import { useRef } from "react";
import { useStore } from "@nanostores/react";
import { isProjectOpen, currentProject } from "@/lib/stores/store";
import { CSSTransition, SwitchTransition } from "react-transition-group";

import { MainProjects } from "@/components/projects/projects-main";
import { ProjectView } from "@/components/projects/project-view";

export const ProjectsWrapper = () => {
  const $currentProject = useStore(currentProject);
  const $isProjectOpen = useStore(isProjectOpen);

  const nodeRef = useRef<HTMLDivElement>(null);

  const handleTransitionEnd = (done: () => void) => {
    nodeRef.current?.addEventListener("transitionend", done, { once: true });
  };

  return (
    <>
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={$isProjectOpen ? "project-open" : "project-closed"}
          nodeRef={nodeRef}
          addEndListener={handleTransitionEnd}
          timeout={250}
          classNames="fade"
        >
          <div
            ref={nodeRef}
            className="z-10 flex min-h-screen flex-col items-center justify-center"
          >
            {!$isProjectOpen ? <MainProjects /> : <ProjectView {...$currentProject} />}
          </div>
        </CSSTransition>
      </SwitchTransition>
    </>
  );
};
