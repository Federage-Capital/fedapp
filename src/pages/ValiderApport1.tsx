import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const ValiderApport1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onValiderApportContainerClick = useCallback(() => {
    navigate("/-voirapport2");
  }, [navigate]);

  return (
    <div
      className="relative w-full overflow-y-auto flex flex-col items-start justify-start cursor-pointer text-center text-3xs text-gray-900 font-text-xs-leading-4-font-normal"
      onClick={onValiderApportContainerClick}
    >
      <div className="self-stretch bg-white flex flex-row items-center justify-between py-[9px] px-3.5 z-[0] text-mini text-black">
        <div className="w-[54px] h-[21px] flex flex-col items-center justify-end">
          <b className="relative tracking-[-0.3px] inline-block w-[54px]">
            21:41
          </b>
        </div>
        <img
          className="relative w-[66.66px] h-[11.34px]"
          alt=""
          src="/group-721.svg"
        />
      </div>
      <div className="self-stretch bg-white flex flex-row items-start justify-start z-[1] text-left text-base text-gray-700 border-b-[2px] border-solid border-whitesmoke-400">
        <div className="flex flex-row items-center justify-start p-4">
          <img
            className="rounded-xl w-10 h-10 object-cover"
            alt=""
            src="/avatar7@2x.png"
          />
        </div>
        <div className="flex-1 h-[72px] flex flex-row items-center justify-start py-0 pr-4 pl-0 box-border gap-[16px]">
          <div className="self-stretch flex-1 flex flex-row items-center justify-start py-[9px] px-0">
            <b className="flex-1 relative leading-[24px]">Clément Zablocki</b>
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
      <div className="self-stretch bg-gray-50 overflow-y-auto shrink-0 flex flex-col items-start justify-start py-6 px-4 gap-[30px] z-[2] text-left text-[9.83px] text-darkgray-200">
        <div className="self-stretch h-[173px] flex flex-col items-center justify-center gap-[28px]">
          <div className="self-stretch flex flex-row items-center justify-start gap-[11px]">
            <div className="rounded-lg bg-white w-[38px] h-[38px] flex flex-row items-center justify-center p-1.5 box-border gap-[6px]">
              <img className="relative w-1.5 h-2.5" alt="" src="/icon211.svg" />
              <div className="relative leading-[14.05px] font-semibold hidden">
                Site web
              </div>
            </div>
            <div className="flex-1 relative text-base leading-[20px] font-semibold text-gray-500 overflow-hidden text-ellipsis whitespace-nowrap">
              Développement de l’application web Federage
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start text-5xl text-gray-900">
            <div className="self-stretch flex flex-col items-start justify-center gap-[19px]">
              <b className="self-stretch relative leading-[32px]">
                Traduction du site et de l’application en anglais
              </b>
              <div className="self-stretch relative text-base leading-[24px] text-gray-500">
                <span className="font-medium">
                  <span>Publié par</span>
                  <span className="text-black">{` `}</span>
                </span>
                <span className="font-semibold text-mediumblue-200">
                  Arnaud RAMPONNEAU
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[20px] text-lg text-gray-900">
          <div className="self-stretch rounded-lg bg-white flex flex-col items-start justify-start py-5 px-0 gap-[12px] text-sm text-gray-500 border-[2px] border-solid border-whitesmoke-400">
            <div className="self-stretch flex flex-row items-start justify-between py-0 px-3.5 text-lg text-gray-900">
              <div className="relative leading-[24px] font-semibold">
                Ajouter un apport
              </div>
            </div>
            <div className="self-stretch h-[58.29px] flex flex-col items-start justify-between py-2 px-3.5 box-border text-xs">
              <div className="self-stretch flex-1 rounded-lg bg-gray-100 flex flex-row items-center justify-start">
                <div className="flex-1 rounded-lg bg-gray-100 flex flex-row items-center justify-start p-1 gap-[32px]">
                  <div className="flex-1 rounded-md flex flex-col items-center justify-center py-2 px-3">
                    <div className="relative leading-[20px] font-semibold">
                      Objet
                    </div>
                  </div>
                  <div className="flex-1 rounded-md bg-white flex flex-col items-center justify-center py-2 px-3 text-mediumblue-100">
                    <div className="relative leading-[20px] font-semibold">
                      Détails
                    </div>
                  </div>
                  <div className="flex-1 rounded-md flex flex-col items-center justify-center py-2 px-3">
                    <div className="relative leading-[20px] font-semibold">
                      Membres
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start pt-0 px-3.5 pb-2.5 gap-[18px]">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                  <div className="relative leading-[20px] font-semibold">
                    Description de l’apport
                  </div>
                  <div className="self-stretch rounded-lg bg-white overflow-hidden flex flex-col items-start justify-start py-2.5 px-3 gap-[12px] text-base text-gray-900 border-[2px] border-solid border-gray-200">
                    <div className="self-stretch relative leading-[24px]">
                      Mise en œuvre dans le code : chaînes de caractères
                      traduites dans le code de l’application en utilisant des
                      mécanismes web.
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-between">
                      <img
                        className="flex-1 relative max-w-full overflow-hidden h-0.5"
                        alt=""
                        src="/line-561.svg"
                      />
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start gap-[16px] text-sm">
                      <div className="flex flex-row items-start justify-start gap-[8px]">
                        <img
                          className="relative w-5 h-5 overflow-hidden shrink-0"
                          alt=""
                          src="/paper-clip1.svg"
                        />
                        <div className="flex-1 relative leading-[20px]">
                          Illustrations.svg
                        </div>
                      </div>
                      <div className="flex-1 flex flex-row items-start justify-start gap-[8px] text-mediumblue-100">
                        <div className="rounded-md bg-white overflow-hidden flex flex-row items-center justify-start">
                          <div className="relative leading-[20px] font-medium">
                            Modifier
                          </div>
                        </div>
                        <div className="relative leading-[20px] font-medium text-gray-300">
                          |
                        </div>
                        <div className="flex-1 rounded-md bg-white overflow-hidden flex flex-row items-center justify-start">
                          <div className="relative leading-[20px] font-medium">
                            Supprimer
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-between text-dimgray">
                <div className="flex flex-col items-start justify-start gap-[4px]">
                  <div className="self-stretch relative leading-[20px] font-semibold">
                    Prix
                  </div>
                  <div className="rounded-lg bg-white overflow-hidden flex flex-row items-center justify-start py-[9px] px-[13px] gap-[8px] text-base text-gray-500 border-[2px] border-solid border-gray-200">
                    <div className="flex flex-row items-center justify-start">
                      <div className="relative leading-[24px] font-medium">
                        7 500,00
                      </div>
                    </div>
                    <div className="relative leading-[24px] font-medium">
                      EUR
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[4px]">
                  <div className="relative leading-[20px] font-semibold">
                    Date
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start relative gap-[10px] text-base text-gray-500">
                    <div className="relative rounded-lg bg-white box-border w-[140px] h-11 z-[0] border-[2px] border-solid border-gray-200" />
                    <div className="self-stretch my-0 mx-[!important] absolute top-[12px] left-[11px] flex flex-row items-center justify-start gap-[8px] z-[1]">
                      <div className="relative leading-[20px] font-medium">
                        30/09/2023
                      </div>
                      <img
                        className="relative w-4 h-4 overflow-hidden shrink-0"
                        alt=""
                        src="/calendar2.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-start py-0 px-[17px] text-dimgray">
              <div className="self-stretch rounded-lg bg-gray-100 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] h-[46px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-2.5 px-[18px] box-border">
                <div className="relative leading-[20px] font-semibold">
                  Ajouter l’apport
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-lg bg-white flex flex-col items-start justify-start py-5 px-4 gap-[20px]">
            <div className="self-stretch relative leading-[20px] font-semibold">
              Historique de l’apport
            </div>
            <div className="self-stretch flex flex-row items-start justify-between text-base text-mediumblue-200">
              <div className="flex flex-row items-start justify-between">
                <div className="w-[201px] flex flex-col items-center justify-center gap-[4px]">
                  <div className="flex flex-row items-center justify-start gap-[10px]">
                    <img
                      className="relative w-[19px] h-[19px] overflow-hidden shrink-0"
                      alt=""
                      src="/check-circle.svg"
                    />
                    <div className="flex-1 relative leading-[20px] font-semibold">
                      Démarrage de l’apport
                    </div>
                  </div>
                  <div className="relative text-xs leading-[20px] font-medium text-dimgray inline-block w-[201px]">
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
                  src="/icon4.svg"
                />
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
                    src="/vector5.svg"
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
                    src="/vector5.svg"
                  />
                </div>
                <div className="self-stretch relative text-xs leading-[20px] font-medium text-dimgray">
                  cahier_charges_19_03_23.pdf
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-white flex flex-row items-center justify-between py-5 px-[30px] z-[3] border-t-[2px] border-solid border-whitesmoke-300">
        <div className="w-[46px] flex flex-col items-center justify-start gap-[4px]">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/component-27.svg"
          />
          <div className="relative leading-[16px] font-medium">Accueil</div>
        </div>
        <div className="w-[46px] flex flex-col items-center justify-start gap-[4px] text-mediumblue-100">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/component-51.svg"
          />
          <div className="relative leading-[16px] font-medium">Explorer</div>
        </div>
        <div className="w-[46px] flex flex-col items-center justify-start gap-[4px]">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/component-15.svg"
          />
          <div className="relative leading-[16px] font-medium">Messagerie</div>
        </div>
        <div className="w-[46px] h-[46px] flex flex-col items-center justify-start gap-[4px]">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/component-25.svg"
          />
          <div className="relative leading-[16px] font-medium">Compte</div>
        </div>
      </div>
      <div className="self-stretch my-0 mx-[!important] absolute top-[764px] left-[0px] bg-white hidden flex-row items-center justify-between py-5 px-[30px] z-[4] border-t-[2px] border-solid border-whitesmoke-300">
        <div className="w-[46px] flex flex-col items-center justify-start gap-[4px] text-mediumblue-100">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/component-23.svg"
          />
          <div className="relative leading-[16px] font-medium">Accueil</div>
        </div>
        <div className="w-[46px] flex flex-col items-center justify-start gap-[4px]">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/component-52.svg"
          />
          <div className="relative leading-[16px] font-medium">Explorer</div>
        </div>
        <div className="w-[46px] flex flex-col items-center justify-start gap-[4px]">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/component-18.svg"
          />
          <div className="relative leading-[16px] font-medium">Messagerie</div>
        </div>
        <div className="w-[46px] flex flex-col items-center justify-start gap-[4px]">
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

export default ValiderApport1;
