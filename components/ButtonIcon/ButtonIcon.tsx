import cn from "classnames";

import styles from "./ButtonIcon.module.css";
import { ButtonIconProps, icons } from "./ButtonIcon.props";

export const ButtonIcon = ({ icon, appearance, className, ...props }: ButtonIconProps): JSX.Element => {
  const IconComponent = icons[icon];

  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appearance === "primary",
        [styles.white]: appearance === "white",
      })}
      {...props}
    >
      <IconComponent />
    </button>
  );
};
