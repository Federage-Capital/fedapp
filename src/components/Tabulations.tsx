import { FunctionComponent } from "react";

const Tabulations: FunctionComponent = () => {
  return (
    <div className="relative rounded-8xs box-border w-[386px] h-[262.29px] overflow-hidden text-left text-xs text-gray-500 font-text-xs-leading-4-font-normal border-[1px] border-dashed border-blueviolet">
      <div className="absolute top-[20px] left-[20px] bg-white w-[346px] h-[58.29px] flex flex-col py-2 px-3.5 box-border items-start justify-between">
        <div className="self-stretch flex-1 rounded-lg bg-gray-100 flex flex-row items-center justify-start">
          <div className="flex-1 rounded-lg bg-gray-100 flex flex-row p-1 items-center justify-start gap-[32px]">
            <div className="flex-1 rounded-md bg-white flex flex-col py-2 px-3 items-center justify-center text-mediumblue-100">
              <div className="relative leading-[20px] font-semibold">Objet</div>
            </div>
            <div className="flex-1 rounded-md flex flex-col py-2 px-3 items-center justify-center">
              <div className="relative leading-[20px] font-semibold">
                Détails
              </div>
            </div>
            <div className="flex-1 rounded-md flex flex-col py-2 px-3 items-center justify-center">
              <div className="relative leading-[20px] font-semibold">
                Membres
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[102px] left-[20px] bg-white w-[346px] h-[58.29px] flex flex-col py-2 px-3.5 box-border items-start justify-between">
        <div className="self-stretch flex-1 rounded-lg bg-gray-100 flex flex-row items-center justify-start">
          <div className="flex-1 rounded-lg bg-gray-100 flex flex-row p-1 items-center justify-start gap-[32px]">
            <div className="flex-1 rounded-md flex flex-col py-2 px-3 items-center justify-center">
              <div className="relative leading-[20px] font-semibold">Objet</div>
            </div>
            <div className="flex-1 rounded-md bg-white flex flex-col py-2 px-3 items-center justify-center text-mediumblue-100">
              <div className="relative leading-[20px] font-semibold">
                Détails
              </div>
            </div>
            <div className="flex-1 rounded-md flex flex-col py-2 px-3 items-center justify-center">
              <div className="relative leading-[20px] font-semibold">
                Membres
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[184px] left-[20px] bg-white w-[346px] h-[58.29px] flex flex-col py-2 px-3.5 box-border items-start justify-between">
        <div className="self-stretch flex-1 rounded-lg bg-gray-100 flex flex-row items-center justify-start">
          <div className="flex-1 rounded-lg bg-gray-100 flex flex-row p-1 items-center justify-start gap-[32px]">
            <div className="flex-1 rounded-md flex flex-col py-2 px-3 items-center justify-center">
              <div className="relative leading-[20px] font-semibold">Objet</div>
            </div>
            <div className="flex-1 rounded-md flex flex-col py-2 px-3 items-center justify-center">
              <div className="relative leading-[20px] font-semibold">
                Détails
              </div>
            </div>
            <div className="flex-1 rounded-md bg-white flex flex-col py-2 px-3 items-center justify-center text-mediumblue-100">
              <div className="relative leading-[20px] font-semibold">
                Membres
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabulations;
