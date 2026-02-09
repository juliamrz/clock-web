import {useContext} from "react";
import {AppContext} from "@/context//app/AppContext.tsx";

const useApp = () => useContext(AppContext);

export default useApp;
