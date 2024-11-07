import { atom } from "nanostores";

type OpenedProject = {
    title: string;
    text: string;
    isOpen: boolean;
    component?: React.FC;
};

export const projectOpened = atom<OpenedProject>({
    title: "",
    text: "",
    isOpen: false,
});
