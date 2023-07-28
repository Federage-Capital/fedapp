import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ApportTatVide from "../components/ApportTatVide";

const MobileServiceProjetOpratio1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onProjetOpratioContainerClick = useCallback(() => {
    navigate("/-ajouterunappo");
  }, [navigate]);

  return (
    <div
      className="relative bg-white w-full h-[844px] overflow-y-auto flex flex-col items-start justify-start cursor-pointer text-left text-base text-gray-900 font-text-2xl-leading-8-font-bold"
      onClick={onProjetOpratioContainerClick}
    >
      <div className="self-stretch bg-white flex flex-row items-start justify-start text-gray-700 border-b-[2px] border-solid border-whitesmoke-400">
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
          <div className="rounded-2xl bg-mediumblue-100 shadow-[0px_0px_0px_2px_#012bdd,_0px_0px_0px_4px_#fff] overflow-hidden flex flex-row p-1 items-center justify-center border-[1px] border-solid border-mediumblue-100">
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/bell1.svg"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch bg-white flex flex-col py-[22px] px-4 items-center justify-start gap-[24px] text-5xl">
        <div className="self-stretch flex-1 flex flex-row items-start justify-center gap-[42px]">
          <b className="flex-1 relative leading-[32px]">{`Développer un aliment anti-cancérigène `}</b>
          <div className="rounded-3xs bg-gray-100 w-[30px] h-[30px] overflow-hidden shrink-0 flex flex-row items-center justify-center">
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0"
              alt=""
              src="/dots-vertical1.svg"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[21px] text-base text-mediumblue-100">
          <div className="self-stretch flex flex-col items-start justify-start gap-[3px]">
            <div className="self-stretch flex flex-col py-0 pr-0 pl-[0.720428466796875px] items-start justify-start gap-[14px]">
              <div className="self-stretch flex flex-row items-center justify-between">
                <div className="relative leading-[20px] font-semibold">
                  app.federage.com/aliment-anti-cancère
                </div>
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/link1.svg"
                />
              </div>
              <div className="self-stretch relative text-sm leading-[20px] text-gray-500">
                <span className="font-medium">
                  Développez un aliment anti-cancérigène innovant, sûr et
                  délicieux. Répondre aux...
                </span>
                <span>{` `}</span>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-[8px] text-sm">
              <div className="relative leading-[20.03px] font-semibold">
                Lire plus
              </div>
              <img className="relative w-2.5 h-1.5" alt="" src="/icon31.svg" />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-between text-xs text-gray-900">
            <div className="flex-1 flex flex-row py-0 px-0.5 items-center justify-start gap-[6px]">
              <img
                className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                alt=""
                src="/calendar11.svg"
              />
              <div className="relative leading-[20px] font-medium">
                Sep. 2023
              </div>
            </div>
            <div className="flex-1 flex flex-row py-0 px-0.5 items-center justify-start gap-[6px]">
              <img
                className="relative w-5 h-5 overflow-hidden shrink-0"
                alt=""
                src="/cash1.svg"
              />
              <div className="relative leading-[20px] font-medium">
                Capital ouvert
              </div>
            </div>
            <div className="flex-1 flex flex-row py-0 px-0.5 items-center justify-start gap-[6px]">
              <img
                className="relative w-3 h-[12.86px]"
                alt=""
                src="/icon.svg"
              />
              <div className="relative leading-[20px] font-medium">Admin</div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-gray-50 flex flex-row pt-6 px-4 pb-12 items-start justify-start text-sm text-white">
        <div className="flex-1 flex flex-col items-start justify-start gap-[20px]">
          <ApportTatVide
            apportTatVidePosition="unset"
            apportTatVideWidth="unset"
            apportTatVideAlignSelf="stretch"
            freepikCharacterInject245="/freepikcharacterinject2451.svg"
            frameDivAlignSelf="stretch"
            enregistrerUnPremierWidth="unset"
            enregistrerUnPremierAlignSelf="stretch"
            ajoutezVotreParticipationWidth="unset"
            ajoutezVotreParticipationAlignSelf="stretch"
            ajoutezVotreParticipation="Décrivez votre participation dans l'avancement du projet."
            buttonWidth="unset"
            buttonAlignSelf="stretch"
            textWidth="unset"
            textFlexShrink="unset"
            textFlex="1"
          />
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch rounded-lg bg-white flex flex-col py-4 pr-4 pl-[17px] items-start justify-start gap-[20px] border-[2px] border-solid border-gray-200">
              <div className="self-stretch flex flex-row items-start justify-between">
                <div className="rounded-lg bg-indigo-50 w-[38px] h-[38px] flex flex-row p-2.5 box-border items-center justify-center">
                  <img
                    className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                    alt=""
                    src="/user-group1.svg"
                  />
                </div>
                <div className="rounded-lg bg-mediumblue-100 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] overflow-hidden flex flex-row py-[9px] px-[17px] items-center justify-between">
                  <div className="relative leading-[20px] font-semibold">
                    Inviter un membre
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-center gap-[5px] text-5xl text-gray-900">
                <div className="relative leading-[20px] font-semibold">0</div>
                <div className="relative text-sm leading-[20px] font-semibold text-gray-500">
                  Membres actifs
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch rounded-lg bg-white flex flex-col py-4 pr-4 pl-[17px] items-start justify-start gap-[20px] border-[2px] border-solid border-gray-200">
              <div className="self-stretch flex flex-row items-start justify-between">
                <div className="rounded-lg bg-indigo-50 w-[38px] h-[38px] flex flex-row p-2.5 box-border items-center justify-center">
                  <img
                    className="relative w-5 h-5 overflow-hidden shrink-0"
                    alt=""
                    src="/cash2.svg"
                  />
                </div>
                <div className="rounded-lg bg-mediumblue-100 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] overflow-hidden flex flex-row py-[9px] px-[17px] items-center justify-between">
                  <div className="relative leading-[20px] font-semibold">
                    Visualiser le capital
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-center gap-[5px] text-5xl text-gray-900">
                <div className="relative leading-[20px] font-semibold">
                  0,00€
                </div>
                <div className="relative text-sm leading-[20px] font-semibold text-gray-500">
                  Total du capital
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-white flex flex-row py-5 px-[30px] items-center justify-between text-center text-3xs border-t-[2px] border-solid border-whitesmoke-300">
        <div className="w-[46px] flex flex-col items-center justify-start gap-[4px]">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/component-21.svg"
          />
          <div className="relative leading-[16px] font-medium">Accueil</div>
        </div>
        <div className="w-[46px] flex flex-col items-center justify-start gap-[4px]">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/component-1.svg"
          />
          <div className="relative leading-[16px] font-medium">Messagerie</div>
        </div>
        <div className="w-[46px] flex flex-col items-center justify-start gap-[4px] text-mediumblue-100">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/component-5.svg"
          />
          <div className="relative leading-[16px] font-medium">Projets</div>
        </div>
        <div className="w-[46px] h-[46px] flex flex-col items-center justify-start gap-[4px]">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/component-22.svg"
          />
          <div className="relative leading-[16px] font-medium">Compte</div>
        </div>
      </div>
    </div>
  );
};

export default MobileServiceProjetOpratio1;
