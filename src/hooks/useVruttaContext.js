import { VruttaContext } from "../context/vruttaContext";
import { useContext } from "react";

export const useVruttaContext = () => {
  const context = useContext(VruttaContext);

  if (!context) {
    throw Error(
      "useVruttaContext must be used inside an vruttaContextProvider"
    );
  }

  return context;
};
