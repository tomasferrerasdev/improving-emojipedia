import { FC } from "react";

interface Props {
  children: React.ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
  return <div className="max-w-6xl mx-auto p-5 my-8">{children}</div>;
};
