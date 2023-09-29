import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const MobileServiceProjet22: FunctionComponent = () => {
  const navigate = useNavigate();

  const onAjoutApportContainerClick = useCallback(() => {
    navigate("/-crerprojet3");
  }, [navigate]);

  return (
    <div
      className="relative w-full overflow-y-auto flex flex-col items-start justify-start cursor-pointer text-left text-base text-gray-700 font-text-xs-leading-4-font-normal"
      onClick={onAjoutApportContainerClick}
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
          src="/group-71.svg"
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
              Créer un projet
            </div>
          </div>
          <div className="rounded-3xs flex flex-row items-center justify-center py-0.5 px-2.5 text-right text-xs">
            <div className="relative leading-[16px] font-medium">
              Étape 3 sur 3
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-center gap-[10px] text-9xl text-black">
          <div className="self-stretch relative leading-[20px] font-semibold">
            Proposer des apports
          </div>
          <div className="self-stretch relative text-base leading-[20px] text-gray-500">
            <span className="font-medium">{`Publiez vos besoins afin de recevoir des offres de partenariats. Vous pouvez également `}</span>
            <span className="font-semibold text-mediumblue-100">
              passer cette étape
            </span>
            <span className="font-medium">.</span>
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
                    <div className="flex-1 rounded-md bg-white flex flex-col items-center justify-center py-2 px-3 text-mediumblue-100">
                      <div className="relative leading-[20px] font-semibold">
                        Objet
                      </div>
                    </div>
                    <div className="flex-1 rounded-md flex flex-col items-center justify-center py-2 px-3">
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
              <div className="w-[358px] flex flex-col items-start justify-start pt-0 px-3.5 pb-2.5 box-border gap-[18px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                  <div className="relative leading-[20px] font-semibold">
                    Sélectionner le projet
                  </div>
                  <div className="self-stretch rounded-lg bg-white overflow-hidden flex flex-row items-center justify-start py-[9px] px-[13px] gap-[8px] text-base text-gray-900 border-[2px] border-solid border-gray-200">
                    <div className="flex-1 flex flex-row items-center justify-start">
                      <div className="flex-1 relative leading-[24px]">
                        Développement de l’application we...
                      </div>
                    </div>
                    <img
                      className="relative w-5 h-5 overflow-hidden shrink-0"
                      alt=""
                      src="/chevron-down2.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                  <div className="relative leading-[20px] font-semibold">
                    Titre de l’apport
                  </div>
                  <div className="self-stretch rounded-lg bg-white flex flex-row items-center justify-center py-2.5 px-3 text-base text-gray-900 border-[2px] border-solid border-gray-200">
                    <div className="flex-1 relative leading-[24px]">
                      Amélioration ergonomique d’une application mobile
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                  <div className="relative leading-[20px] font-semibold">
                    Type d’apport
                  </div>
                  <div className="self-stretch rounded-md bg-white overflow-hidden flex flex-row items-center justify-start py-[9px] px-[13px] gap-[4px] text-base text-gray-900 border-[2px] border-solid border-gray-200">
                    <div className="flex-1 relative leading-[24px]">
                      Industrie
                    </div>
                    <img
                      className="relative w-5 h-5 overflow-hidden shrink-0"
                      alt=""
                      src="/selector1.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-center justify-start text-sm">
                <div className="self-stretch rounded-lg bg-gray-100 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] h-[46px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-2.5 px-[18px] box-border">
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

export default MobileServiceProjet22;
