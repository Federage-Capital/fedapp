import { FunctionComponent } from "react";

const ExplorerAnnonces: FunctionComponent = () => {
  return (
    <div className="relative bg-gray-50 w-full overflow-y-auto flex flex-col items-center justify-start mix-blend-normal text-center text-mini text-black font-text-sm-leading-5-font-medium">
      <div className="self-stretch bg-gray-50 flex flex-row items-center justify-between py-[9px] px-3.5">
        <div className="w-[54px] h-[21px] flex flex-col items-center justify-end">
          <b className="relative tracking-[-0.3px] inline-block w-[54px]">
            21:41
          </b>
        </div>
        <img
          className="relative w-[66.66px] h-[11.34px]"
          alt=""
          src="/group-7.svg"
        />
      </div>
      <div className="self-stretch flex flex-col items-center justify-start text-left text-3xs text-mediumblue-100">
        <div className="self-stretch h-[98px] overflow-hidden shrink-0 flex flex-col items-center justify-start">
          <div className="self-stretch flex flex-row items-center justify-between pt-[30px] px-4 pb-0 z-[0]">
            <img
              className="relative w-[174.81px] h-9"
              alt=""
              src="/logoidentitcomposants.svg"
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
        <div className="self-stretch overflow-y-auto flex flex-col items-start justify-start pt-6 px-4 pb-12 gap-[22px]">
          <div className="self-stretch flex flex-col items-center justify-start gap-[24px] text-9xl text-black">
            <div className="self-stretch flex flex-col items-start justify-center gap-[10px]">
              <div className="self-stretch relative leading-[20px] font-semibold">
                Explorer
              </div>
              <div className="self-stretch relative text-base leading-[20px] font-medium text-dimgray">
                Vous pouvez consulter les annonces, répondre à une demande
                d’apport et contacter les membres du réseau.
              </div>
            </div>
            <div className="self-stretch rounded-lg bg-white overflow-hidden flex flex-row items-center justify-start text-base text-darkgray-200 border-[2px] border-solid border-gray-200">
              <div className="flex-1 flex flex-row items-center justify-start py-[9px] px-[13px] gap-[8px]">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/search.svg"
                />
                <div className="relative leading-[24px] font-medium">
                  Rechercher des opportunités
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start py-0 pr-0 pl-1.5 gap-[28px] text-center text-[11.28px] text-dimgray">
              <div className="rounded-lg bg-white flex flex-col items-center justify-center py-1.5 px-[15px] text-mediumblue-200">
                <b className="relative leading-[18.8px]">Annonces</b>
              </div>
              <b className="relative leading-[18.8px]">Projets</b>
              <b className="relative leading-[18.8px] inline-block w-[53px] shrink-0">
                Membres
              </b>
              <b className="relative leading-[18.8px] inline-block w-[53px] shrink-0" />
            </div>
          </div>
          <div className="self-stretch rounded-lg bg-white flex flex-col items-start justify-start p-4 gap-[20px]">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-col items-start justify-start gap-[22px]">
                <div className="self-stretch flex flex-row items-center justify-between">
                  <div className="rounded-10xs bg-indigo-50 flex flex-row items-start justify-start py-0 px-1.5">
                    <b className="relative leading-[20px]">Annonce</b>
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[5px] text-dimgray">
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/clock.svg"
                    />
                    <b className="relative leading-[20px]">Il y a 2 jours</b>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[24px] text-xl text-gray-900">
                  <div className="self-stretch flex flex-row items-center justify-start">
                    <div className="flex-1 relative leading-[20px] font-semibold">
                      Amélioration ergonomique d’une application web mobile
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start text-base text-dimgray">
                    <div className="relative w-[226px] h-5">
                      <div className="absolute top-[0px] left-[0px] leading-[20px] font-semibold">{`7 000€ • 23 septembre 2023 `}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[5px] text-sm">
              <div className="flex flex-row items-center justify-center gap-[8px]">
                <div className="relative leading-[20.03px] font-semibold">
                  Détails de l’offre
                </div>
                <img
                  className="relative w-2.5 h-1.5"
                  alt=""
                  src="/icon2111.svg"
                />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start text-base text-gray-900">
                <div className="relative w-[318px] h-[91px]">
                  <div className="absolute top-[0px] left-[0px] w-[318px] h-[91px] flex flex-col items-start justify-start gap-[7px]">
                    <div className="self-stretch relative leading-[20px] font-medium">
                      Urgence pour modifier des composants graphiques et des
                      animations dans l’application
                    </div>
                    <div className="flex flex-row items-center justify-start text-dimgray">
                      <div className="relative leading-[24px] font-medium">
                        23 réponses
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-lg bg-gray-100 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] h-[47px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-2.5 px-[18px] box-border text-base text-dimgray">
              <div className="relative leading-[20px] font-semibold">
                Répondre
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-lg bg-white flex flex-col items-start justify-start p-4 gap-[20px]">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-col items-start justify-start gap-[22px]">
                <div className="self-stretch flex flex-row items-center justify-between">
                  <div className="rounded-10xs bg-indigo-50 flex flex-row items-start justify-start py-0 px-1.5">
                    <b className="relative leading-[20px]">Annonce</b>
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[5px] text-dimgray">
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/clock.svg"
                    />
                    <b className="relative leading-[20px]">Il y a 6 jours</b>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[24px] text-xl text-gray-900">
                  <div className="self-stretch flex flex-row items-center justify-start">
                    <div className="flex-1 relative leading-[20px] font-semibold">
                      Amélioration ergonomique d’une application web mobile
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start text-base text-dimgray">
                    <div className="relative w-[168px] h-5">
                      <div className="absolute top-[0px] left-[0px] leading-[20px] font-semibold">
                        3 000€ • 19 mai 2023
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-lg bg-white overflow-hidden flex flex-row items-center justify-start text-sm">
              <div className="flex flex-row items-center justify-center gap-[8px]">
                <div className="relative leading-[20.03px] font-semibold">
                  Détails de l’offre
                </div>
                <img
                  className="relative w-2.5 h-1.5"
                  alt=""
                  src="/icon311.svg"
                />
              </div>
            </div>
            <div className="self-stretch rounded-lg bg-gray-100 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] h-[47px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-2.5 px-[18px] box-border text-base text-dimgray">
              <div className="relative leading-[20px] font-semibold">
                Répondre
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-center text-sm text-darkslategray-100">
            <div className="w-[143px] flex flex-col items-start justify-start">
              <div className="self-stretch rounded-lg bg-white flex flex-col items-start justify-start">
                <div className="self-stretch rounded-md bg-white h-[46px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-2 px-3.5 box-border gap-[8px]">
                  <div className="relative leading-[20px] font-semibold">
                    Tout afficher
                  </div>
                  <img
                    className="relative w-5 h-5 overflow-hidden shrink-0"
                    alt=""
                    src="/chevron-down.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch bg-white flex flex-col items-center justify-start text-center text-base text-white">
          <div className="self-stretch bg-white flex flex-col items-center justify-start">
            <div className="self-stretch flex flex-col items-center justify-start">
              <div className="self-stretch relative bg-gray-200 h-px" />
              <div className="self-stretch bg-black flex flex-col items-center justify-start py-12 px-0 gap-[24px]">
                <div className="relative leading-[24px] font-medium flex items-center justify-center w-[298px]">
                  FEDERAGE SAS • SIREN n°828743369 • Paris • 2023
                </div>
                <div className="self-stretch flex flex-row items-center justify-center gap-[32px]">
                  <div className="flex flex-row items-center justify-start">
                    <img
                      className="relative w-6 h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/footerssocial-icon3.svg"
                    />
                  </div>
                  <div className="flex flex-row items-center justify-start">
                    <img
                      className="relative w-6 h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/footerssocial-icon4.svg"
                    />
                  </div>
                  <div className="flex flex-row items-center justify-start">
                    <img
                      className="relative w-6 h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/mail2.svg"
                    />
                  </div>
                  <img
                    className="relative w-[21px] h-4"
                    alt=""
                    src="/vector1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExplorerAnnonces;
