import { FunctionComponent } from "react";

const Volet1: FunctionComponent = () => {
  return (
    <div className="rounded-8xs box-border w-[366.5px] h-[91px] overflow-hidden text-left text-sm text-mediumblue-100 font-text-2xl-leading-8-font-bold border-[1px] border-dashed border-blueviolet">
      <div className="absolute top-[20px] left-[20px] flex flex-row items-center justify-center gap-[8px]">
        <div className="relative leading-[20.03px] font-semibold">
          Détails de l’apport
        </div>
        <img
          className="relative w-2.5 h-1.5 object-cover"
          alt=""
          src="/icon311.png"
        />
      </div>
      <div className="absolute top-[50px] left-[20.5px] w-[326px] flex flex-row items-center justify-start gap-[8px]">
        <div className="relative leading-[20.03px] font-semibold">
          Détails de l’apport
        </div>
        <img
          className="relative w-2.5 h-1.5 object-cover"
          alt=""
          src="/icon1111.png"
        />
      </div>
    </div>
  );
};

export default Volet1;
