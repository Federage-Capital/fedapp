import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Ouverture4: FunctionComponent = () => {
  const navigate = useNavigate();

  const onOuverture4ContainerClick = useCallback(() => {
    navigate("/-ouverture-1");
  }, [navigate]);

  return (
    <div
      className="relative w-full h-[844px] flex flex-col items-start justify-start cursor-pointer text-center text-mini text-black font-text-xs-leading-4-font-normal"
      onClick={onOuverture4ContainerClick}
    >
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
      <div className="self-stretch flex-1 bg-gray-50 overflow-hidden flex flex-col items-center justify-center text-5xl text-black2">
        <div className="self-stretch flex flex-col items-center justify-center">
          <div className="self-stretch relative font-black">
            <p className="m-0">{`Rejoignez Federage `}</p>
            <p className="m-0">dès aujourd’hui 🚀</p>
          </div>
          <img
            className="self-stretch relative max-w-full overflow-hidden h-[389.94px] shrink-0"
            alt=""
            src="/international-traderafiki-1.svg"
          />
          <div className="self-stretch flex flex-col items-center justify-center gap-[32px] text-base text-mediumblue-100">
            <div className="w-[291px] flex flex-row items-center justify-center">
              <div className="flex-1 relative leading-[20px] font-semibold">
                <span className="text-black2">{`En continuant, vous acceptez nos `}</span>
                <span>CGU</span>
                <span className="text-gray-900">{` et notre `}</span>
                <span>Politique de confidentialité</span>
                <span className="text-gray-900">.</span>
              </div>
            </div>
            <div className="rounded-lg bg-gray-900 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] w-[285px] overflow-hidden flex flex-row items-center justify-center py-[13px] px-[25px] box-border text-white">
              <div className="flex-1 relative leading-[24px] font-semibold">
                Accepter
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ouverture4;
