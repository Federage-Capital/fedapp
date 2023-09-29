import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const MobileServiceModificationAp: FunctionComponent = () => {
  const navigate = useNavigate();

  const onModiApportContainerClick = useCallback(() => {
    navigate("/-partenaires");
  }, [navigate]);

  return (
    <div
      className="relative bg-whitesmoke-200 w-full overflow-y-auto flex flex-col items-start justify-start cursor-pointer text-left text-mini text-gray-900 font-text-xs-leading-4-font-normal"
      onClick={onModiApportContainerClick}
    >
      <div className="self-stretch bg-white flex flex-row items-center justify-between py-[9px] px-3.5 text-center text-black">
        <div className="w-[54px] h-[21px] flex flex-col items-center justify-end">
          <b className="relative tracking-[-0.3px] inline-block w-[54px]">
            21:41
          </b>
        </div>
        <img
          className="relative w-[66.66px] h-[11.34px]"
          alt=""
          src="/group-73.svg"
        />
      </div>
      <div className="self-stretch bg-white flex flex-row items-start justify-start text-base text-gray-700 border-b-[2px] border-solid border-whitesmoke-400">
        <div className="flex flex-row items-center justify-start p-4">
          <img
            className="rounded-xl w-10 h-10 object-cover"
            alt=""
            src="/avatar111@2x.png"
          />
        </div>
        <div className="flex-1 h-[72px] flex flex-row items-center justify-start py-0 pr-4 pl-0 box-border gap-[16px]">
          <div className="self-stretch flex-1 flex flex-row items-center justify-start py-[9px] px-0">
            <b className="flex-1 relative leading-[24px]">William BALDIÈRE</b>
          </div>
          <div className="rounded-2xl bg-white overflow-hidden flex flex-row items-center justify-center p-1">
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/bell.svg"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch bg-whitesmoke-200 flex flex-col items-start justify-start py-5 px-4 gap-[32px] text-[9.83px] text-darkgray-200">
        <div className="self-stretch flex flex-row items-center justify-start gap-[11px]">
          <div className="rounded-lg bg-white w-[38px] h-[38px] flex flex-row items-center justify-center p-1.5 box-border gap-[6px]">
            <img className="relative w-1.5 h-2.5" alt="" src="/icon211.svg" />
            <div className="relative leading-[14.05px] font-semibold hidden">
              Site web
            </div>
          </div>
          <div className="flex-1 relative text-base leading-[20px] font-semibold text-gray-500 overflow-hidden text-ellipsis whitespace-nowrap">
            Solution de nutriments actifs anti-cancérigène
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-center gap-[10px] text-5xl text-black">
          <b className="self-stretch relative leading-[32px]">
            Nouvelle formule magique nutritionnelle
          </b>
          <div className="self-stretch relative text-base leading-[24px] text-gray-500">
            <span className="font-medium">
              <span>Publié par</span>
              <span className="text-black">{` `}</span>
            </span>
            <span className="font-semibold text-mediumblue-200">
              Sylvie DEPARDIEU
            </span>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-4 pb-6 gap-[20px] text-lg">
        <div className="self-stretch rounded-lg bg-white overflow-hidden flex flex-col items-start justify-start p-4">
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[13px]">
              <div className="self-stretch flex flex-row items-start justify-between">
                <div className="relative leading-[20px] font-semibold flex items-end w-[225px] shrink-0">
                  Statut de l’apport
                </div>
                <div className="rounded-10xs bg-gray-100 flex flex-row items-start justify-start py-0 px-1.5 text-3xs text-dimgray">
                  <b className="relative leading-[20px]">En attente</b>
                </div>
              </div>
              <div className="w-[130px] flex flex-col items-start justify-start gap-[19px] text-base">
                <div className="self-stretch h-[47px] flex flex-col items-start justify-start gap-[7px]">
                  <div className="self-stretch relative leading-[20px] font-medium">
                    Prix négocié
                  </div>
                  <div className="self-stretch relative leading-[20px] font-semibold text-dimgray">
                    7 285,00€
                  </div>
                </div>
                <div className="self-stretch h-[47px] flex flex-col items-start justify-start gap-[7px]">
                  <div className="self-stretch relative leading-[20px] font-medium">
                    Délai de livraison
                  </div>
                  <div className="relative leading-[20px] font-semibold text-dimgray">
                    30 avril 2023
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-lg bg-gray-900 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] h-[46px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-[9px] px-[17px] box-border text-sm text-white">
              <div className="relative leading-[20px] font-semibold">
                Modifier l’apport
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch rounded-lg bg-white flex flex-row items-start justify-start p-4">
          <div className="flex-1 flex flex-col items-start justify-start py-0 pr-0 pl-0.5 gap-[20px]">
            <div className="self-stretch relative leading-[20px] font-semibold">
              Historique de l’apport
            </div>
            <div className="self-stretch flex flex-col items-center justify-start gap-[24px] text-base">
              <div className="self-stretch flex flex-row items-start justify-between">
                <div className="flex flex-row items-start justify-between">
                  <div className="relative w-[201px] h-11">
                    <div className="absolute top-[0px] left-[0px] flex flex-row items-center justify-start gap-[10px]">
                      <img
                        className="relative w-[19px] h-[19px] overflow-hidden shrink-0"
                        alt=""
                        src="/check-circle4.svg"
                      />
                      <div className="flex-1 relative leading-[20px] font-semibold">
                        Démarrage de l’apport
                      </div>
                    </div>
                    <div className="absolute top-[24px] left-[29px] text-xs leading-[20px] font-medium text-dimgray">
                      01/04/2023 10h40 UTC+2
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center gap-[5px] text-right text-3xs text-gray-500">
                  <div className="relative leading-[20px] font-medium">
                    #18127
                  </div>
                  <img
                    className="relative w-[11.11px] h-[11.11px]"
                    alt=""
                    src="/icon42.svg"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-between">
                <div className="w-[184px] flex flex-row items-start justify-start">
                  <div className="flex-1 relative h-11">
                    <div className="absolute top-[0px] left-[0px] flex flex-row items-center justify-start gap-[10px]">
                      <img
                        className="relative w-[19px] h-[19px] overflow-hidden shrink-0"
                        alt=""
                        src="/check-circle4.svg"
                      />
                      <div className="flex-1 relative leading-[20px] font-semibold">
                        Modification du prix
                      </div>
                    </div>
                    <div className="absolute top-[24px] left-[0px] w-[179px] h-5 overflow-hidden text-xs text-dimgray">
                      <div className="absolute top-[0px] left-[29px] leading-[20px] font-medium">
                        03/05/2023 21h19 UTC+2
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center gap-[5px] text-right text-3xs text-gray-500">
                  <div className="relative leading-[20px] font-medium">
                    #19271
                  </div>
                  <img
                    className="relative w-[11.11px] h-[11.11px]"
                    alt=""
                    src="/icon42.svg"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-between text-mediumblue-100">
                <div className="w-[191px] flex flex-row items-start justify-start">
                  <div className="flex-1 relative h-11">
                    <div className="absolute top-[0px] left-[0px] flex flex-row items-center justify-start gap-[10px]">
                      <img
                        className="relative w-[19px] h-[19px] overflow-hidden shrink-0"
                        alt=""
                        src="/check-circle2.svg"
                      />
                      <div className="flex-1 relative leading-[20px] font-semibold">
                        Modification du délai
                      </div>
                    </div>
                    <div className="absolute top-[24px] left-[0px] w-[182px] h-5 overflow-hidden text-xs text-dimgray">
                      <div className="absolute top-[0px] left-[29px] leading-[20px] font-medium">
                        04/05/2023 09h31 UTC+2
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center gap-[5px] text-right text-3xs text-gray-500">
                  <div className="relative leading-[20px] font-medium">
                    #26182
                  </div>
                  <img
                    className="relative w-[11.11px] h-[11.11px]"
                    alt=""
                    src="/icon42.svg"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-between text-mediumseagreen">
                <div className="w-[181px] flex flex-row items-start justify-start">
                  <div className="flex-1 relative h-11">
                    <div className="absolute top-[0px] left-[0px] flex flex-row items-center justify-start gap-[10px]">
                      <img
                        className="relative w-[19px] h-[19px] overflow-hidden shrink-0"
                        alt=""
                        src="/check-circle11.svg"
                      />
                      <div className="relative leading-[20px] font-semibold">
                        Executé
                      </div>
                    </div>
                    <div className="absolute top-[24px] left-[0px] w-[181px] h-5 overflow-hidden text-xs text-dimgray">
                      <div className="absolute top-[0px] left-[29px] leading-[20px] font-medium">
                        08/05/2023 09h31 UTC+2
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center gap-[5px] text-right text-3xs text-gray-500">
                  <div className="relative leading-[20px] font-medium">
                    #26228
                  </div>
                  <img
                    className="relative w-[11.11px] h-[11.11px]"
                    alt=""
                    src="/icon42.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch rounded-lg bg-white flex flex-col items-start justify-start p-4 gap-[20px]">
          <div className="relative leading-[20px] font-semibold">
            Ressources
          </div>
          <div className="w-[237px] flex flex-col items-start justify-start gap-[16px] text-base text-mediumblue-100">
            <div className="self-stretch flex flex-col items-start justify-center">
              <div className="flex flex-row items-start justify-start gap-[6px]">
                <div className="relative leading-[20px] font-semibold">
                  Icône à intégrer
                </div>
                <img
                  className="relative w-[18px] h-[18px]"
                  alt=""
                  src="/vector.svg"
                />
              </div>
              <div className="self-stretch relative text-xs leading-[20px] font-medium text-dimgray">
                icône_eng.svg
              </div>
            </div>
            <div className="w-[174px] hidden flex-col items-start justify-center">
              <div className="self-stretch flex flex-row items-start justify-start gap-[6px]">
                <div className="relative leading-[20px] font-semibold">
                  Cahier des charges
                </div>
                <img
                  className="relative w-[18px] h-[18px]"
                  alt=""
                  src="/vector.svg"
                />
              </div>
              <div className="self-stretch relative text-xs leading-[20px] font-medium text-dimgray">
                cahier_charges_19_03_23.pdf
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch rounded-lg bg-white flex flex-row items-center justify-start py-3 px-4 gap-[8px] text-base text-dimgray">
          <img
            className="relative w-5 h-5 overflow-hidden shrink-0"
            alt=""
            src="/exclamation.svg"
          />
          <div className="flex-1 relative leading-[20px] font-semibold">
            Tout apport valorise le projet. Les données financières doivent être
            validées entre partenaires.
          </div>
        </div>
      </div>
      <div className="self-stretch bg-white flex flex-row items-center justify-between py-5 px-[30px] text-center text-3xs border-t-[2px] border-solid border-whitesmoke-300">
        <div className="w-[46px] flex flex-col items-center justify-start gap-[4px]">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/component-222.svg"
          />
          <div className="relative leading-[16px] font-medium">Accueil</div>
        </div>
        <div className="w-[46px] flex flex-col items-center justify-start gap-[4px] text-mediumblue-100">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/component-55.svg"
          />
          <div className="relative leading-[16px] font-medium">Explorer</div>
        </div>
        <div className="w-[46px] flex flex-col items-center justify-start gap-[4px]">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/component-121.svg"
          />
          <div className="relative leading-[16px] font-medium">Messagerie</div>
        </div>
        <div className="w-[46px] h-[46px] flex flex-col items-center justify-start gap-[4px]">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/component-131.svg"
          />
          <div className="relative leading-[16px] font-medium">Compte</div>
        </div>
      </div>
    </div>
  );
};

export default MobileServiceModificationAp;
