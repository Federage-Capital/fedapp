import { FunctionComponent } from "react";
import Property1VoletInactif from "../pages/Property1VoletInactif";
import Property1VoletActif from "../pages/Property1VoletActif";

const Volet1: FunctionComponent = () => {
  return (
    <div className="rounded-8xs box-border w-[366.5px] h-[91px] overflow-hidden border-[1px] border-dashed border-blueviolet">
      <Property1VoletInactif />
      <Property1VoletActif />
    </div>
  );
};

export default Volet1;
