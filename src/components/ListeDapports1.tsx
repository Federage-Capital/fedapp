import { FunctionComponent, useCallback } from "react";

const ListeDapports1: FunctionComponent = () => {
  const onFrameContainer1Click = useCallback(() => {
    // Please sync "₣ - AjouterUnAppo" to the project
  }, []);

  return (
    <div className="self-stretch flex flex-col items-center justify-start text-left text-base text-black2 font-text-2xl-leading-8-font-bold">
      <div
        className="self-stretch rounded-t-lg rounded-b-none flex flex-row p-4 items-center justify-between cursor-pointer border-[2px] border-solid border-gray-100"
        onClick={onFrameContainer1Click}
      >
        <div className="flex-1 flex flex-col py-0 pr-2.5 pl-0 items-start justify-start gap-[2px]">
          <div className="self-stretch relative leading-[20px] font-semibold">{`Formule bio-synthétique humanoïde `}</div>
          <div className="self-stretch relative text-xs leading-[24px] font-semibold text-mediumblue-100">
            Prix recherché : 40 000,00€
          </div>
        </div>
        <div className="rounded-[8.11px] bg-gray-100 flex flex-row py-[14.186664581298828px] px-[16.21333122253418px] items-start justify-start">
          <img
            className="relative w-[5.78px] h-[9.63px] object-cover"
            alt=""
            src="/icon6.png"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-row p-4 items-center justify-between border-r-[2px] border-solid border-gray-100 border-b-[2px] border-l-[2px]">
        <div className="flex-1 flex flex-col py-0 pr-2.5 pl-0 items-start justify-start gap-[2px]">
          <div className="self-stretch relative leading-[20px] font-semibold">
            Traitement immunothérapie
          </div>
          <div className="self-stretch relative text-xs leading-[24px] font-semibold text-mediumblue-100">
            Prix recherché : 60 000,00€
          </div>
        </div>
        <div className="rounded-[8.06px] bg-gray-100 flex flex-row py-[14.111400604248047px] px-[16.127315521240234px] items-start justify-start">
          <img
            className="relative w-[5.75px] h-[9.58px] object-cover"
            alt=""
            src="/icon11.png"
          />
        </div>
      </div>
      <div className="self-stretch rounded-t-none rounded-b-lg flex flex-row p-4 items-center justify-between border-r-[2px] border-solid border-gray-100 border-b-[2px] border-l-[2px]">
        <div className="flex-1 flex flex-col py-0 pr-2.5 pl-0 items-start justify-start gap-[2px]">
          <div className="self-stretch relative leading-[20px] font-semibold">
            Laboratoire de type Cancéropôle
          </div>
          <div className="self-stretch relative text-xs leading-[24px] font-semibold text-mediumblue-100">
            Prix recherché : 110 000,00€
          </div>
        </div>
        <div className="rounded-[8.06px] bg-gray-100 flex flex-row py-[14.111400604248047px] px-[16.127315521240234px] items-start justify-start">
          <img
            className="relative w-[5.75px] h-[9.58px] object-cover"
            alt=""
            src="/icon11.png"
          />
        </div>
      </div>
    </div>
  );
};

export default ListeDapports1;
