import { HtmlHTMLAttributes } from "react";

type DivProps = HtmlHTMLAttributes<HTMLDivElement>;

export const Button = ({
  someState,
  ...props
}: { someState: string } & DivProps) => {
  props.onChange;
  return <div>{someState}</div>;
};
