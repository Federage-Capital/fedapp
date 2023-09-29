import { FunctionComponent } from "react";

const ApportTatVide1: FunctionComponent = () => {
  return (
    <div className="self-stretch rounded-lg bg-white flex flex-col items-center justify-start py-[25px] px-[26px] gap-[20px] text-center text-lg text-gray-900 font-text-xs-leading-4-font-normal border-[2px] border-solid border-gray-200">
      <img
        className="relative w-[57.35px] h-[160.93px]"
        alt=""
        src="/freepikcharacterinject2451.svg"
      />
      <div className="self-stretch flex flex-col items-center justify-center gap-[10px]">
        <div className="self-stretch relative leading-[20px] font-semibold">
          Enregistrer un premier apport
        </div>
        <div className="self-stretch relative text-sm leading-[20px] font-medium text-dimgray">
          <span>Ajoutez votre participation dans l'avancement du projet.</span>
          <span className="text-gray-500">{` `}</span>
          <span className="text-mediumblue-100">Lisez notre guide.</span>
        </div>
      </div>
      <div className="self-stretch rounded-lg bg-gray-900 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] overflow-hidden flex flex-row items-center justify-center py-[13px] px-[25px] text-base text-white">
        <div className="flex-1 relative leading-[24px] font-semibold">
          Ajouter un apport
        </div>
      </div>
    </div>
  );
};

export default ApportTatVide1;
