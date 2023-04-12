import { toggle } from "../store";

export const Button = ({ children }) => (
  <button onClick={toggle}>{children}</button>
);
