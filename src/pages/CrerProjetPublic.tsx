import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const MobileServiceProjet22: FunctionComponent = () => {
  const navigate = useNavigate();

  const onAjoutApportContainerClick = useCallback(() => {
    navigate("/-crerprojet3");
  }, [navigate]);

  return (
    <div
      className="relative w-full overflow-y-auto flex flex-col items-start justify-start cursor-pointer text-left text-base text-gray-700 font-text-sm-leading-5-font-normal"
      onClick={onAjoutApportContainerClick}
    >
      <div className="self-stretch bg-white flex flex-row py-[9px] px-3.5 items-center justify-between text-center text-mini text-black">
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
        <div className="flex flex-row p-4 items-center justify-start">
          <img
            className="rounded-xl w-10 h-10 object-cover"
            alt=""
            src="/avatar111@2x.png"
          />
        </div>
        <div className="flex-1 h-[72px] flex flex-row py-0 pr-4 pl-0 box-border items-center justify-start gap-[16px]">
          <div className="self-stretch flex-1 flex flex-row py-[9px] px-0 items-center justify-start">
            <b className="flex-1 relative leading-[24px]">William BALDIÈRE</b>
          </div>
          <div className="rounded-2xl bg-white overflow-hidden flex flex-row p-1 items-center justify-center">
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/bell.svg"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch bg-white flex flex-col py-5 px-4 items-start justify-start gap-[32px] text-dimgray">
        <div className="self-stretch flex flex-row items-center justify-between">
          <div className="w-[167px] flex flex-row items-center justify-start gap-[11px]">
            <div className="rounded-lg bg-gray-100 w-[38px] h-[38px] flex flex-row p-1.5 box-border items-center justify-center">
              <img className="relative w-1.5 h-2.5" alt="" src="/icon211.svg" />
            </div>
            <div className="flex-1 relative leading-[24px] font-semibold">
              Créer un projet
            </div>
          </div>
          <div className="rounded-3xs flex flex-row py-0.5 px-2.5 items-center justify-center text-right text-xs">
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
      <div className="self-stretch bg-gray-50 flex flex-col pt-6 px-4 pb-0 items-center justify-start gap-[48px]">
        <div className="self-stretch flex flex-col items-center justify-start">
          <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
            <b className="self-stretch relative leading-[20px]">
              De quels apports avez-vous besoin ?
            </b>
            <div className="self-stretch rounded-lg bg-white flex flex-col py-[18px] px-0 items-start justify-start gap-[12px] text-xs text-dimgray">
              <div className="flex flex-row py-0 px-3.5 items-start justify-between text-lg text-gray-900">
                <div className="relative leading-[24px] font-semibold">
                  Ajouter un apport
                </div>
              </div>
              <div className="self-stretch bg-white h-[58.29px] flex flex-col py-2 px-3.5 box-border items-start justify-between text-gray-500">
                <div className="self-stretch flex-1 rounded-lg bg-gray-100 flex flex-row items-center justify-start">
                  <div className="flex-1 rounded-lg bg-gray-100 flex flex-row p-1 items-center justify-start gap-[32px]">
                    <div className="flex-1 rounded-md bg-white flex flex-col py-2 px-3 items-center justify-center text-mediumblue-100">
                      <div className="relative leading-[20px] font-semibold">
                        Objet
                      </div>
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
              <div className="w-[358px] flex flex-col pt-0 px-3.5 pb-2.5 box-border items-start justify-start gap-[18px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                  <div className="relative leading-[20px] font-semibold">
                    Sélectionner le projet
                  </div>
                  <div className="self-stretch rounded-lg bg-white overflow-hidden flex flex-row py-[9px] px-[13px] items-center justify-start gap-[8px] text-base text-gray-900 border-[2px] border-solid border-gray-2001">
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
                  <div className="self-stretch rounded-lg bg-white flex flex-row py-2.5 px-3 items-center justify-center text-base text-gray-900 border-[2px] border-solid border-gray-2001">
                    <div className="flex-1 relative leading-[24px]">
                      Amélioration ergonomique d’une application mobile
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                  <div className="relative leading-[20px] font-semibold">
                    Type d’apport
                  </div>
                  <div className="self-stretch rounded-md bg-white overflow-hidden flex flex-row py-[9px] px-[13px] items-center justify-start gap-[4px] text-base text-gray-900 border-[2px] border-solid border-gray-2001">
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
                <div className="self-stretch rounded-lg bg-gray-100 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] h-[46px] overflow-hidden shrink-0 flex flex-row py-2.5 px-[18px] box-border items-center justify-center">
                  <div className="relative leading-[20px] font-semibold">
                    Ajouter l’apport
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col pt-0 px-0 pb-6 items-center justify-start text-center text-white">
          <div className="self-stretch flex flex-col items-center justify-center gap-[24px]">
            <div className="self-stretch bg-gray-2001" />
            <div className="self-stretch rounded-lg bg-gray-900 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] flex flex-row py-4 px-[18px] items-center justify-center">
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
