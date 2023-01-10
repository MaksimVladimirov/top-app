import { FooterProps } from "./Footer.props";
import styles from "./Footer.module.css";

export const Footer = ({ ...props }: FooterProps): JSX.Element => {
  return <footer {...props}></footer>;
};
