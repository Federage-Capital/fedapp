import { FunctionComponent } from "react";

const ApportTatVide: FunctionComponent = () => {
  return (
    <div className="rounded-lg bg-white box-border w-[358px] flex flex-col items-center justify-start py-[25px] px-[26px] gap-[20px] text-center text-lg text-gray-900 font-text-sm-leading-5-font-medium border-[2px] border-solid border-gray-200">
      <img
        className="relative w-[57.35px] h-[160.93px]"
        alt=""
        src="/freepikcharacterinject245.svg"
      />
      <div className="flex flex-col items-center justify-center gap-[10px]">
        <div className="relative leading-[20px] font-semibold inline-block w-[258px]">
          Enregistrer un premier apport
        </div>
        <div className="relative text-sm leading-[20px] font-medium inline-block w-[306px] text-dimgray">
          <span>Ajoutez votre participation dans l'avancement du projet.</span>
          <span className="text-gray-500">{` `}</span>
          <span className="text-mediumblue-100">Lisez notre guide.</span>
        </div>
      </div>
      <div className="rounded-lg bg-gray-900 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] w-[296px] overflow-hidden flex flex-row items-center justify-center py-[13px] px-[25px] box-border text-base text-white">
        <div className="relative leading-[24px] font-semibold inline-block w-[137px] shrink-0">
          Ajouter un apport
        </div>
      </div>
    </div>
  );
};

export default ApportTatVide;
