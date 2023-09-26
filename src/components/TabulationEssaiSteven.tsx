import { FunctionComponent } from "react";

const TabulationEssaiSteven: FunctionComponent = () => {
  return (
    <div className="w-[238.67px] flex flex-row items-center justify-start gap-[28px] text-center text-[11.28px] text-dimgray font-text-sm-leading-5-font-medium">
      <div className="flex-1 rounded-lg bg-white flex flex-col items-center justify-center py-1.5 px-[15px] text-mediumblue-200">
        <b className="relative leading-[18.8px]">Tous</b>
      </div>
      <b className="flex-1 relative leading-[18.8px]">Annonces</b>
      <b className="flex-1 relative leading-[18.8px]">Partenaires</b>
    </div>
  );
};

export default TabulationEssaiSteven;
