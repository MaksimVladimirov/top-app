import { HTMLAttributes, DetailedHTMLProps } from "react";
import up from "./up.svg";
import close from "./crest.svg";
import menu from "./burger.svg";

export const icons = {
  up,
  close,
  menu,
};

export type IconName = keyof typeof icons;

export interface ButtonIconProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  appearance: "primary" | "white";
  icon: IconName;
}
