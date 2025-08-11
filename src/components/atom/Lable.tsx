import { FC, ReactNode } from "react";
import classNames from "classnames";

type LabelProps = {
  children: ReactNode;
  className?: string;
};

const Label: FC<LabelProps> = ({ children, className }) => {
  return (
    <div
      className={classNames(
        "inline-flex w-fit rounded-3xl bg-background-label px-3 py-2 text-white text-Label-SB",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Label;
