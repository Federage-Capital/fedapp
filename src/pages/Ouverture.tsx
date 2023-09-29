import { FunctionComponent } from "react";

const Ouverture: FunctionComponent = () => {
  return (
    <div className="relative w-full h-[844px] flex flex-col items-start justify-start text-center text-mini text-black font-text-xs-leading-4-font-normal">
      <div className="self-stretch bg-gray-50 flex flex-row items-center justify-between py-[9px] px-3.5">
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
      <img
        className="flex-1 relative max-h-full w-[390px] overflow-hidden"
        alt=""
        src="/arrireplan.svg"
      />
    </div>
  );
};

export default Ouverture;
