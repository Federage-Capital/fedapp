import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const MobileServiceAjouterUnAppo1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onAjouterUnAppoContainerClick = useCallback(() => {
    navigate("/-ajouterunappo-2");
  }, [navigate]);

  return (
    <div
      className="relative w-full overflow-y-auto flex flex-col items-start justify-start cursor-pointer text-left text-base text-gray-700 font-text-xs-leading-4-font-normal"
      onClick={onAjouterUnAppoContainerClick}
    >
      <div className="self-stretch bg-white flex flex-row items-center justify-between py-[9px] px-3.5 text-center text-mini text-black">
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
      <div className="self-stretch bg-white flex flex-row items-start justify-start border-b-[2px] border-solid border-whitesmoke-400">
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
      <div className="self-stretch bg-white flex flex-col items-start justify-start py-5 px-4 gap-[32px] text-dimgray">
        <div className="self-stretch flex flex-row items-center justify-between">
          <div className="w-[167px] flex flex-row items-center justify-start gap-[11px]">
            <div className="rounded-lg bg-gray-100 w-[38px] h-[38px] flex flex-row items-center justify-center p-1.5 box-border">
              <img className="relative w-1.5 h-2.5" alt="" src="/icon211.svg" />
            </div>
            <div className="flex-1 relative leading-[24px] font-semibold">
              Nouvel apport
            </div>
          </div>
          <div className="rounded-3xs flex flex-row items-center justify-center py-0.5 px-2.5 text-right text-xs">
            <div className="relative leading-[16px] font-medium">
              Étape 1 sur 2
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-center gap-[10px] text-9xl text-black">
          <div className="self-stretch relative leading-[20px] font-semibold">
            Ajouter un apport
          </div>
          <div className="self-stretch relative text-base leading-[20px] font-medium text-dimgray">
            Veuillez fournir des informations pour enregistrer votre
            participation au projet.
          </div>
        </div>
      </div>
      <div className="self-stretch bg-gray-50 flex flex-col items-center justify-start pt-6 px-4 pb-0 gap-[48px]">
        <div className="self-stretch flex flex-col items-center justify-start">
          <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
            <b className="self-stretch relative leading-[20px]">
              De quels apports avez-vous besoin ?
            </b>
            <div className="self-stretch rounded-lg bg-white flex flex-col items-start justify-start py-[18px] px-0 gap-[12px] text-xs text-dimgray">
              <div className="flex flex-row items-start justify-between py-0 px-3.5 text-lg text-gray-900">
                <div className="relative leading-[24px] font-semibold">
                  Ajouter un apport
                </div>
              </div>
              <div className="self-stretch bg-white h-[58.29px] flex flex-col items-start justify-between py-2 px-3.5 box-border text-gray-500">
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
                    <div className="self-stretch rounded-lg bg-white shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] overflow-hidden flex flex-col items-start justify-start pt-2.5 px-3 pb-3 gap-[12px] text-base text-gray-900 border-[2px] border-solid border-gray-200">
                      <div className="self-stretch relative leading-[24px]">
                        Ajustements de conception, tests utilisateurs,
                        améliorations de la navigation et d'autres ajustements
                        visant à rendre l'application plus conviviale.
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start">
                        <div className="flex-1 relative box-border h-0.5 border-t-[2px] border-solid border-gray-200" />
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start gap-[16px] text-sm">
                        <div className="h-5 flex flex-row items-start justify-start gap-[8px]">
                          <img
                            className="relative w-5 h-5 overflow-hidden shrink-0"
                            alt=""
                            src="/paper-clip11.svg"
                          />
                          <div className="relative leading-[20px]">
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
                          <div className="rounded-md bg-white overflow-hidden flex flex-row items-center justify-start">
                            <div className="relative leading-[20px] font-medium">
                              Supprimer
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-between">
                  <div className="flex flex-col items-start justify-start gap-[4px]">
                    <div className="relative leading-[20px] font-semibold">
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
                          src="/calendar31.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[346px] flex flex-col items-center justify-start text-sm">
                <div className="rounded-lg bg-gray-100 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] w-[318px] h-[46px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-2.5 px-[18px] box-border">
                  <div className="relative leading-[20px] font-semibold">
                    Ajouter l’apport
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-6 text-center text-white">
          <div className="self-stretch flex flex-col items-center justify-center gap-[24px]">
            <div className="self-stretch bg-gray-200" />
            <div className="self-stretch rounded-lg bg-gray-900 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] flex flex-row items-center justify-center py-4 px-[18px]">
              <div className="flex-1 relative leading-[20px] font-semibold">
                Créer le projet
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileServiceAjouterUnAppo1;
