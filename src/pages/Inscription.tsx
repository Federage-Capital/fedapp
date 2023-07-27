import { FunctionComponent } from "react";

const Inscription: FunctionComponent = () => {
  return (
    <div className="relative bg-gray-50 w-full overflow-y-auto flex flex-col pt-6 px-0 pb-0 box-border items-center justify-start mix-blend-normal text-left text-9xl text-black1 font-text-sm-leading-5-font-medium">
      <div className="self-stretch flex flex-col items-center justify-start">
        <div className="self-stretch h-[98px] overflow-hidden shrink-0 flex flex-col items-center justify-start">
          <div className="self-stretch flex flex-row pt-[30px] px-4 pb-0 items-center justify-between z-[0]">
            <img
              className="relative w-[154.89px] h-8"
              alt=""
              src="/a304a9a1adfc477d9233fbc4749af052.svg"
            />
            <div className="rounded-3xs-5 overflow-hidden flex flex-row items-center justify-center">
              <img
                className="relative w-9 h-9 overflow-hidden shrink-0"
                alt=""
                src="/menu.svg"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch overflow-y-auto flex flex-col pt-6 px-4 pb-12 items-start justify-start gap-[32px]">
          <div className="self-stretch flex flex-col items-center justify-start gap-[32px]">
            <div className="self-stretch flex flex-col items-start justify-center gap-[10px]">
              <div className="self-stretch relative leading-[20px] font-semibold">
                Inscription
              </div>
              <div className="self-stretch relative text-base leading-[20px] font-medium text-dimgray">{`Veuillez enregistrer votre structure pour démarrer. `}</div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[20px] text-sm text-gray-700">
              <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                <b className="self-stretch relative leading-[20px]">
                  Type de structure
                </b>
                <div className="self-stretch rounded-lg bg-white overflow-hidden flex flex-row py-[9px] px-[13px] items-center justify-start gap-[8px] text-base text-gray-900 border-[2px] border-solid border-gray-200">
                  <div className="flex-1 flex flex-row items-center justify-start">
                    <div className="flex-1 relative leading-[24px]">
                      Entreprise
                    </div>
                  </div>
                  <img
                    className="relative w-5 h-5 overflow-hidden shrink-0"
                    alt=""
                    src="/chevron-down1.svg"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                <b className="relative leading-[20px]">
                  Nom ou dénomination sociale
                </b>
                <div className="self-stretch rounded-lg bg-white overflow-hidden flex flex-row py-[9px] px-[13px] items-center justify-start text-base text-gray-900 border-[2px] border-solid border-gray-200">
                  <div className="flex-1 relative leading-[24px]">
                    Société Active de Lutte contre le Cancer
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                <b className="relative leading-[20px]">Adresse électronique</b>
                <div className="self-stretch rounded-lg bg-white overflow-hidden flex flex-row py-[9px] px-[13px] items-center justify-start text-base text-gray-900 border-[2px] border-solid border-gray-200">
                  <div className="flex-1 relative leading-[24px]">
                    lisa.martel@salcc.org
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch relative h-[142px] text-base text-gray-500">
            <div className="absolute h-[50.7%] w-full top-[0%] right-[0%] bottom-[49.3%] left-[0%] flex flex-row items-start justify-start gap-[12px]">
              <div className="rounded-xl bg-mediumblue-100 w-11 h-6 overflow-hidden shrink-0 flex flex-row p-0.5 box-border items-center justify-end">
                <div className="relative rounded-[50%] bg-white shadow-[0px_1px_3px_rgba(0,_0,_0,_0.1),_0px_1px_2px_rgba(0,_0,_0,_0.06)] w-5 h-5" />
              </div>
              <div className="flex-1 relative leading-[24px] font-medium">
                <span>{`En cochant cette case, vous acceptez notre `}</span>
                <span className="text-mediumblue-100">
                  Politique de confidentialité.
                </span>
              </div>
            </div>
            <div className="absolute h-[35.21%] w-full top-[64.79%] right-[0%] bottom-[0%] left-[0%] rounded-lg bg-mediumblue-100 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] overflow-hidden flex flex-row py-[13px] px-[25px] box-border items-center justify-center text-center text-white">
              <div className="flex-1 relative leading-[24px] font-medium">
                Créer un compte
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch bg-white flex flex-col items-center justify-start text-center text-base text-white">
          <div className="self-stretch bg-white flex flex-col items-center justify-start">
            <div className="self-stretch flex flex-col items-center justify-start">
              <div className="self-stretch relative bg-gray-200 h-px" />
              <div className="self-stretch bg-black1 flex flex-col py-12 px-0 items-center justify-start gap-[24px]">
                <div className="relative leading-[24px] font-medium flex items-center justify-center w-[298px]">
                  FEDERAGE SAS • SIREN n°828743369 • Paris • 2023
                </div>
                <div className="self-stretch flex flex-row items-center justify-center gap-[32px]">
                  <div className="flex flex-row items-center justify-start">
                    <img
                      className="relative w-6 h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/footerssocial-icon1.svg"
                    />
                  </div>
                  <div className="flex flex-row items-center justify-start">
                    <img
                      className="relative w-6 h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/footerssocial-icon2.svg"
                    />
                  </div>
                  <div className="flex flex-row items-center justify-start">
                    <img
                      className="relative w-6 h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/mail1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inscription;
