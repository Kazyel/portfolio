import { atom } from "nanostores";

type OpenedProject = {
    title: string;
    text: string;
    component?: React.FC;
};

export const openedProject = atom<OpenedProject>({
    title: "",
    text: "",
});

export const isProjectOpen = atom(false);
