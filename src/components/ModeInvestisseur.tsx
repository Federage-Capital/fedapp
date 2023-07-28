import { FunctionComponent } from "react";

const ModeInvestisseur: FunctionComponent = () => {
  return (
    <div className="relative rounded-lg bg-gainsboro box-border w-[346px] flex flex-row py-[15px] px-4 items-start justify-between text-left text-base text-gray-500 font-text-2xl-leading-8-font-bold border-[2px] border-solid border-darkgray-100 sm:shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]">
      <div className="w-[282px] flex flex-col items-start justify-start gap-[4px]">
        <div className="relative leading-[20px] font-semibold">
          Mode investisseur
        </div>
        <div className="self-stretch relative text-xs leading-[16px] font-medium">
          Le projet est entièrement configurable. Ce paramètre est désactivé par
          défaut.
        </div>
      </div>
      <div className="rounded-lg w-4 h-5 flex flex-row items-center justify-center">
        <div className="relative rounded-lg bg-gainsboro box-border w-4 h-4 overflow-hidden shrink-0 border-[2px] border-solid border-gray-500" />
      </div>
    </div>
  );
};

export default ModeInvestisseur;
