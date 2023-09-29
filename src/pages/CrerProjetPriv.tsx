import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const MobileServiceProjetPriv1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onCrerProjetPrivContainerClick = useCallback(() => {
    navigate("/ajoutapport");
  }, [navigate]);

  return (
    <div
      className="relative w-full h-[888px] overflow-y-auto flex flex-col items-start justify-start cursor-pointer text-left text-base text-dimgray font-text-xs-leading-4-font-normal"
      onClick={onCrerProjetPrivContainerClick}
    >
      <div className="self-stretch bg-white flex flex-row items-start justify-start text-gray-700 border-b-[2px] border-solid border-whitesmoke-400">
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
          <div className="rounded-2xl bg-mediumblue-100 shadow-[0px_0px_0px_2px_#012bdd,_0px_0px_0px_4px_#fff] overflow-hidden flex flex-row items-center justify-center p-1 border-[1px] border-solid border-mediumblue-100">
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/bell11.svg"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch bg-white flex flex-col items-start justify-start py-5 px-4 gap-[32px]">
        <div className="self-stretch flex flex-row items-center justify-between">
          <div className="w-[167px] flex flex-row items-center justify-start gap-[11px]">
            <div className="rounded-lg bg-gray-100 w-[38px] h-[38px] flex flex-row items-center justify-center p-1.5 box-border">
              <img className="relative w-1.5 h-2.5" alt="" src="/icon211.svg" />
            </div>
            <b className="flex-1 relative leading-[24px]">Créer un projet</b>
          </div>
          <div className="rounded-3xs flex flex-row items-center justify-center py-0.5 px-2.5 text-right text-xs">
            <div className="relative leading-[16px] font-medium">
              Étape 3 sur 3
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-center gap-[10px] text-9xl text-black">
          <div className="self-stretch relative leading-[20px] font-semibold">
            Ajouter les membres
          </div>
          <div className="self-stretch relative text-base leading-[20px] text-gray-500">
            <span className="font-medium">{`Sélectionnez les partenaires qui contribueront activement au projet. Vous pouvez également `}</span>
            <b className="text-mediumblue-100">passer cette étape</b>
            <span className="font-medium">.</span>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-gray-50 flex flex-col items-center justify-start py-6 px-4 gap-[48px]">
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="self-stretch flex flex-col items-start justify-start gap-[22px]">
            <div className="self-stretch rounded-lg bg-white overflow-hidden flex flex-row items-center justify-start text-darkgray-200 border-[2px] border-solid border-gray-200">
              <div className="flex-1 flex flex-row items-center justify-start py-[9px] px-[13px] gap-[8px]">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/search.svg"
                />
                <div className="flex-1 relative leading-[24px] font-medium">
                  Rechercher un membre
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-lg bg-white flex flex-col items-start justify-start py-0 px-4">
              <div className="self-stretch flex flex-row items-center justify-start py-4 px-0 gap-[16px]">
                <img
                  className="rounded-4xl w-[46px] h-[46px] object-cover"
                  alt=""
                  src="/avatar2111@2x.png"
                />
                <div className="flex-1 flex flex-col items-start justify-start">
                  <b className="self-stretch relative leading-[20px]">
                    Sylvie DEPARDIEU
                  </b>
                  <div className="self-stretch relative text-xs leading-[20px] font-medium">
                    Invitation envoyée
                  </div>
                </div>
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/check-circle111.svg"
                />
              </div>
            </div>
            <div className="self-stretch rounded-lg bg-white flex flex-col items-start justify-start py-0 px-4">
              <div className="self-stretch flex flex-row items-center justify-start py-4 px-0 gap-[16px]">
                <img
                  className="rounded-4xl w-[46px] h-[46px] object-cover"
                  alt=""
                  src="/avatar311@2x.png"
                />
                <div className="flex-1 flex flex-col items-start justify-start">
                  <b className="self-stretch relative leading-[20px]">
                    Victoire FONTENAY
                  </b>
                  <div className="self-stretch relative text-xs leading-[20px] font-medium">
                    Invitation envoyée
                  </div>
                </div>
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/check-circle111.svg"
                />
              </div>
            </div>
            <div className="self-stretch rounded-lg bg-white flex flex-col items-start justify-start py-0 px-4">
              <div className="self-stretch flex flex-row items-center justify-start py-4 px-0 gap-[16px]">
                <img
                  className="rounded-4xl w-[46px] h-[46px] object-cover"
                  alt=""
                  src="/avatar411@2x.png"
                />
                <div className="flex-1 flex flex-col items-start justify-start">
                  <b className="self-stretch relative leading-[20px]">
                    Lisa MARTEL
                  </b>
                  <div className="self-stretch relative text-xs leading-[20px] font-medium">
                    Invitation envoyée
                  </div>
                </div>
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/check-circle111.svg"
                />
              </div>
            </div>
            <div className="self-stretch rounded-lg bg-white flex flex-col items-start justify-start py-0 px-4">
              <div className="self-stretch flex flex-row items-center justify-start py-4 px-0 gap-[16px]">
                <img
                  className="rounded-4xl w-[46px] h-[46px] object-cover"
                  alt=""
                  src="/avatar211@2x.png"
                />
                <div className="flex-1 flex flex-col items-start justify-start">
                  <b className="self-stretch relative leading-[20px]">
                    Léonard RENARD
                  </b>
                  <div className="self-stretch relative text-xs leading-[20px] font-medium">
                    Invitation envoyée
                  </div>
                </div>
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/check-circle111.svg"
                />
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

export default MobileServiceProjetPriv1;
