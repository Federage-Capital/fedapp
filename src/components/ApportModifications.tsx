import { FunctionComponent } from "react";

const ApportModifications: FunctionComponent = () => {
  return (
    <div className="relative rounded-lg bg-white box-border w-[346px] overflow-hidden flex flex-col p-[15px] items-start justify-start text-left text-xl text-gray-900 font-text-sm-leading-5-font-medium border-[2px] border-solid border-gray-200">
      <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[13px]">
          <div className="self-stretch flex flex-row py-3 px-0 items-start justify-between sm:flex-row sm:gap-[0px] sm:items-center sm:justify-between">
            <div className="relative leading-[26px] font-semibold flex items-end w-[225px] shrink-0">
              Améliorer l’ergonomie de l’application mobile
            </div>
            <div className="rounded-lg bg-gray-100 w-[44.09px] h-11 flex flex-row p-1.5 box-border items-center justify-center">
              <img className="relative w-3 h-3" alt="" src="/icon8.svg" />
            </div>
          </div>
          <div className="w-[130px] flex flex-col items-start justify-start gap-[19px] text-base">
            <div className="self-stretch h-[47px] flex flex-col items-start justify-start gap-[7px]">
              <div className="self-stretch relative leading-[20px] font-medium">
                Prix proposé
              </div>
              <div className="self-stretch relative leading-[20px] font-medium text-dimgray">
                3 285,00€
              </div>
            </div>
            <div className="self-stretch h-[47px] flex flex-col items-start justify-start gap-[7px]">
              <div className="self-stretch relative leading-[20px] font-medium">
                Délai de livraison
              </div>
              <div className="self-stretch relative leading-[20px] font-medium text-dimgray">
                30 mai 2023
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch rounded-lg bg-white flex flex-col py-[15px] px-[17px] items-center justify-center text-base text-mediumblue-100 border-[2px] border-solid border-mediumblue-100">
          <div className="relative w-[280px] h-5">
            <div className="absolute top-[0px] left-[0px] leading-[20px] font-semibold">
              Mes informations sont exactes
            </div>
            <div className="absolute top-[2px] left-[264px] rounded bg-mediumblue-100 flex flex-col py-[5.333333492279053px] px-[4.266666889190674px] items-start justify-start border-[2px] border-solid border-mediumblue-100">
              <img
                className="relative w-[9.6px] h-[7.47px]"
                alt=""
                src="/icon9.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApportModifications;
