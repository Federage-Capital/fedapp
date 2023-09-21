import { FunctionComponent } from "react";

const TabulationEssaiSteven: FunctionComponent = () => {
  return (
    <div className="w-[238.67px] flex flex-row items-center justify-start gap-[28px] text-center text-[11.28px] text-dimgray font-text-2xl-leading-8-font-bold">
      <div className="flex-1 rounded-lg bg-white flex flex-col py-1.5 px-[15px] items-center justify-center text-mediumblue-200">
        <b className="relative leading-[18.8px]">Tous</b>
      </div>
      <b className="flex-1 relative leading-[18.8px]">Annonces</b>
      <b className="flex-1 relative leading-[18.8px]">Partenaires</b>
    </div>
  );
};

export default TabulationEssaiSteven;
