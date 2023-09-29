import { FunctionComponent } from "react";

const ApportModifications: FunctionComponent = () => {
  return (
    <div className="rounded-lg bg-white box-border w-[346px] overflow-hidden flex flex-col items-start justify-start p-[15px] text-left text-xl text-gray-900 font-text-xs-leading-4-font-normal border-[2px] border-solid border-gray-200">
      <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[13px]">
          <div className="self-stretch flex flex-row items-start justify-between py-3 px-0 sm:flex-row sm:gap-[0px] sm:items-center sm:justify-between">
            <div className="relative leading-[26px] font-semibold flex items-end w-[225px] shrink-0">
              Améliorer l’ergonomie de l’application mobile
            </div>
            <div className="rounded-lg bg-gray-100 w-[44.09px] h-11 flex flex-row items-center justify-center p-1.5 box-border">
              <img
                className="relative w-3 h-3 object-cover"
                alt=""
                src="/icon81.svg"
              />
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
        <div className="self-stretch rounded-lg bg-white flex flex-col items-center justify-center py-[15px] px-[17px] text-base text-mediumblue-100 border-[2px] border-solid border-mediumblue-100">
          <div className="relative w-[280px] h-5">
            <div className="absolute top-[0px] left-[0px] leading-[20px] font-semibold">
              Mes informations sont exactes
            </div>
            <div className="absolute top-[2px] left-[264px] rounded bg-mediumblue-100 flex flex-col items-start justify-start py-[5.333333492279053px] px-[4.266666889190674px] border-[2px] border-solid border-mediumblue-100">
              <img
                className="relative w-[9.6px] h-[7.47px] object-cover"
                alt=""
                src="/icon91.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApportModifications;
