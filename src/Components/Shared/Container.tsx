import { ReactNode } from "react";

interface Containerprops {
  children?: ReactNode;
  className?: string;
}

const Container: React.FC<Containerprops> = ({ className, children }) => {
  return (
    <div className={`max-w-[1520px] mx-auto ${className || ""}`}>
      {children}
    </div>
  );
};

export default Container;
