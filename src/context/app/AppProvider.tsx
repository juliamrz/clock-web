import {AppContext} from "@/context/app/AppContext.tsx";
import {type FC, type PropsWithChildren, useState} from "react";

const AppProvider: FC<PropsWithChildren<unknown>> = (props) => {
  const {
    children,
  } = props;

  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(true);

  return (
    <AppContext.Provider
      value={{
        isDrawerOpen,
        setIsDrawerOpen
      }}
    >
      {children}
    </AppContext.Provider>
);
};

export default AppProvider;
