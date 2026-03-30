import { ReactNode } from "react";
import ClientWrapper from "./ClientWrapper";

const AppProvidersWrapper = ({ children }: { children: ReactNode }) => {
  return <ClientWrapper>{children}</ClientWrapper>;
};

export default AppProvidersWrapper;