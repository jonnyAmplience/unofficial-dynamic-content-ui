import { ContentFieldExtension } from "dc-extensions-sdk";
import React from "react";

export interface SdkContextProps {
  sdk?: ContentFieldExtension;
}

const context = React.createContext<SdkContextProps>({});
export default context;
