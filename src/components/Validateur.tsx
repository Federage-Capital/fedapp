import { FunctionComponent } from "react";

const Validateur: FunctionComponent = () => {
  return (
    <div className="relative rounded-[5px] box-border w-[356px] h-[156px] overflow-hidden text-left text-base text-mediumblue-100 font-text-xs-leading-4-font-medium border-[1px] border-dashed border-blueviolet">
      <div className="absolute top-[86px] left-[20px] rounded-lg bg-white box-border w-[316px] flex flex-col py-[15px] px-[17px] items-start justify-start border-[2px] border-solid border-mediumblue-100">
        <div className="self-stretch flex flex-row items-center justify-between">
          <div className="relative leading-[20px] font-semibold">
            Ces informations sont exactes
          </div>
          <div className="rounded bg-mediumblue-100 flex flex-col py-[5.333333492279053px] px-[4.266666889190674px] items-start justify-start border-[2px] border-solid border-mediumblue-100">
            <img
              className="relative w-[9.6px] h-[7.47px]"
              alt=""
              src="/icon1.svg"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[20px] left-[20px] rounded-lg bg-white box-border w-[316px] h-[50px] flex flex-col py-[15px] px-[17px] items-start justify-start text-dimgray border-[2px] border-solid border-gray-200">
        <div className="self-stretch flex flex-row items-center justify-between">
          <div className="relative leading-[20px] font-semibold">
            Ces informations sont exactes
          </div>
          <div className="relative rounded box-border w-4 h-4 border-[2px] border-solid border-dimgray" />
        </div>
      </div>
    </div>
  );
};

export default Validateur;
