import { FunctionComponent } from "react";

const Ouverture3: FunctionComponent = () => {
  return (
    <div className="relative w-full h-[844px] flex flex-col items-start justify-start text-center text-mini text-black2 font-text-2xl-leading-8-font-bold">
      <div className="self-stretch bg-gray-50 flex flex-row py-[9px] px-3.5 items-center justify-between">
        <div className="w-[54px] h-[21px] flex flex-col items-center justify-end">
          <b className="relative tracking-[-0.3px] inline-block w-[54px]">
            21:41
          </b>
        </div>
        <img
          className="relative w-[66.66px] h-[11.34px]"
          alt=""
          src="/group-71.svg"
        />
      </div>
      <div className="self-stretch flex-1 bg-gray-50 overflow-hidden flex flex-col pt-[110px] px-5 pb-[60px] items-center justify-center gap-[24px] text-xl">
        <div className="self-stretch relative leading-[26px] font-black">
          Tracez en temps réel la croissance de votre activité
        </div>
        <img
          className="self-stretch relative max-w-full overflow-hidden h-[396px] shrink-0"
          alt=""
          src="/team-goalsrafiki-1.svg"
        />
        <div className="flex flex-row items-start justify-start gap-[17px]">
          <img className="relative w-3.5 h-3.5" alt="" src="/point.svg" />
          <img className="relative w-3.5 h-3.5" alt="" src="/point.svg" />
          <img className="relative w-3.5 h-3.5" alt="" src="/point1.svg" />
        </div>
        <div className="self-stretch h-[95px] flex flex-col items-center justify-start gap-[24px] text-base text-white">
          <div className="self-stretch rounded-lg bg-mediumblue-100 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] overflow-hidden flex flex-row py-[13px] px-[25px] items-center justify-center">
            <div className="flex-1 relative leading-[24px] font-semibold">
              Suivant
            </div>
          </div>
          <div className="[align-self:start] flex flex-row items-center justify-center h-[21px] ml-[81px] text-mediumblue-100">
            <div className="flex-1 relative leading-[20.03px] font-semibold">
              Passer
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ouverture3;
