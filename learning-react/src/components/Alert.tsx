import type { ReactNode } from "react";

interface Props {
  children: ReactNode; // nome children significa quello che metti come figlio dell'elemento. reactnode significa che può essere altri elementi html o react
  color?: "primary" | "secondary" | "danger" | "success";
}

const Alert = (props: Props) => {
  const { color = "primary" } = props; // unpacking della variabile color per darle un valore di default
  return <div className={"alert alert-" + color}>{props.children}</div>;
};

export default Alert;
