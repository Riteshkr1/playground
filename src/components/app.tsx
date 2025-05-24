import * as React from "react";
import { Emp } from "./newEmp/emp";

export interface IAppProps {}


export const App: React.FC<React.PropsWithChildren<IAppProps>> = (props: IAppProps) => {
  return (
    <Emp />
  );
}
