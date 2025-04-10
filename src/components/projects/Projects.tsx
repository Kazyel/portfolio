import { useRef, type Key } from "react";
import { useStore } from "@nanostores/react";
import { isProjectOpen, openedProject } from "@/stores/store";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import AvailableProjects from "./AvailableProjects";

const ProjectsJSX = () => {
  const $isProjectOpen = useStore(isProjectOpen);
  const $openedProject = useStore(openedProject);
  const nodeRef = useRef<HTMLDivElement>(null);

  function OpenedProject() {
    if (!$openedProject) return;

    let ProjectComponent = $openedProject.createComponent({
      ...$openedProject,
    })!;

    return (
      <div className="sm:p-8 xl:max-h-[900px] xl:px-20 xl:pt-8 2xl:min-w-[1600px] 2xl:max-w-[1600px]">
        <div className="flex flex-col items-center justify-between">
          <button
            className="group mb-2 flex cursor-pointer items-center gap-1 self-start italic text-off-w/75"
            onClick={() => isProjectOpen.set(!$isProjectOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 transition-all duration-200 group-hover:-translate-x-1 group-hover:text-off-w"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
              />
            </svg>
            <span className="transition-all duration-200 group-hover:text-off-w">
              Back to Projects
            </span>
          </button>

          <ProjectComponent />
        </div>
      </div>
    );
  }

  return (
    <>
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={$isProjectOpen as unknown as Key}
          nodeRef={nodeRef}
          addEndListener={(done) => {
            nodeRef.current!.addEventListener("transitionend", done, false);
          }}
          timeout={250}
          classNames="fade"
        >
          <div
            ref={nodeRef}
            className="z-20 flex min-h-screen flex-col items-center justify-center"
          >
            {!$isProjectOpen ? <AvailableProjects /> : <OpenedProject />}
          </div>
        </CSSTransition>
      </SwitchTransition>
    </>
  );
};

export default ProjectsJSX;
