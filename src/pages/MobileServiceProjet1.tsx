import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const MobileServiceProjet1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFooterContainer1Click = useCallback(() => {
    navigate("/-mobileserviceprojet2");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[873px] overflow-y-auto flex flex-col items-start justify-start text-left text-base text-gray-700 font-text-xs-leading-4-font-medium">
      <div className="w-[376px] flex flex-col items-center justify-start z-[0]">
        <div className="self-stretch bg-white flex flex-row items-start justify-start border-b-[2px] border-solid border-whitesmoke-400">
          <div className="flex flex-row p-4 items-center justify-start">
            <img
              className="rounded-xl w-10 h-10 object-cover"
              alt=""
              src="/avatar111@2x.png"
            />
          </div>
          <div className="w-[304px] h-[72px] flex flex-row py-0 pr-4 pl-0 box-border items-center justify-start gap-[16px]">
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
      </div>
      <div className="relative w-[376px] h-[201px] z-[1] text-[9.83px] text-darkgray-200">
        <div className="absolute top-[0px] left-[0px] bg-white h-[201px]" />
        <div className="absolute top-[18.62px] left-[16px] flex flex-col items-start justify-start gap-[32px]">
          <div className="flex flex-row items-center justify-start gap-[11px]">
            <div className="rounded-lg bg-gray-100 w-[38px] h-[38px] flex flex-row p-1.5 box-border items-center justify-center gap-[6px]">
              <img
                className="relative w-1.5 h-2.5"
                alt=""
                src="/icon2111.svg"
              />
              <div className="relative leading-[14.05px] font-semibold hidden">
                Site web
              </div>
            </div>
            <b className="flex-1 relative text-base leading-[24px] text-dimgray">
              Créer un projet
            </b>
          </div>
          <div className="self-stretch flex flex-col items-start justify-center gap-[10px] text-9xl text-black">
            <div className="relative leading-[20px] font-semibold">
              Démarrer un projet
            </div>
            <div className="self-stretch relative text-base leading-[20px] text-gray-500">
              <span className="font-medium">{`En tant qu’initiateur, vous fixez les objectifs à atteindre pour valoriser le projet. Pour plus de détails, vous pouvez `}</span>
              <span className="font-semibold text-mediumblue-200">
                accéder au guide
              </span>
              <span className="font-medium">.</span>
            </div>
          </div>
        </div>
        <div className="absolute top-[28px] left-[265px] rounded-3xs flex flex-row py-0.5 px-2.5 items-center justify-center text-right text-xs text-dimgray">
          <div className="relative leading-[16px] font-medium">
            Étape 1 sur 3
          </div>
        </div>
      </div>
      <div className="bg-whitesmoke-100 overflow-y-auto shrink-0 flex flex-col py-6 px-0 items-center justify-start gap-[24px] z-[2] text-sm">
        <div className="self-stretch flex flex-col py-0 px-4 items-start justify-start gap-[8px]">
          <b className="relative leading-[20px]">Nom du projet</b>
          <div className="self-stretch rounded-lg bg-white overflow-hidden flex flex-row py-[9px] px-[13px] items-center justify-start text-base text-gray-900 border-[2px] border-solid border-gray-200">
            <div className="flex-1 relative leading-[24px]">
              Développer un aliment anti-cancérigène
            </div>
          </div>
        </div>
        <div className="w-[376px] flex flex-col py-0 px-4 box-border items-start justify-start">
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
            <b className="relative leading-[20px]">Descriptif du projet</b>
            <div className="self-stretch rounded-lg bg-white flex flex-row py-2.5 px-3 items-start justify-start relative text-base text-gray-900 border-[2px] border-solid border-gray-200">
              <div className="flex-1 relative leading-[24px] z-[0]">
                Produire un aliment anti-cancérigène innovant, sûr et succulent.
                Répondre aux besoins des personnes souhaitant prévenir le cancer
                - simplement avec un produit riche en nutriments bénéfiques pour
                la santé.
              </div>
              <img
                className="absolute my-0 mx-[!important] top-[86.92px] left-[312.92px] w-[12.08px] h-[12.08px] z-[1]"
                alt=""
                src="/resize-indicator.svg"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col py-0 px-4 items-start justify-start gap-[12px]">
          <b className="self-stretch relative leading-[20px]">
            Montant estimé (somme des apports attendus)
          </b>
          <div className="rounded-lg bg-white box-border w-[344px] overflow-hidden flex flex-row py-[9px] px-[13px] items-center justify-start gap-[8px] text-base text-gray-900 border-[2px] border-solid border-gray-200">
            <div className="flex-1 flex flex-row items-center justify-start gap-[8px]">
              <div className="relative leading-[24px]">€</div>
              <div className="flex-1 relative leading-[24px]">35 000,00</div>
            </div>
            <div className="relative leading-[24px] font-medium text-dimgray">
              EUR
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start">
          <div className="self-stretch flex flex-col pt-0 px-0 pb-2.5 items-start justify-start">
            <div className="self-stretch flex flex-col py-0 px-4 items-start justify-start gap-[8px]">
              <b className="relative leading-[20px]">Durée du projet</b>
              <div className="self-stretch rounded-lg bg-white overflow-hidden flex flex-row py-[9px] px-3 items-center justify-start gap-[8px] text-base text-mediumblue-100 border-[2px] border-solid border-gray-200">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/calendar2.svg"
                />
                <div className="relative leading-[24px] font-medium">
                  Saisir une date
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-3xs bg-white shadow-[0px_0px_0.5px_rgba(66,_71,_76,_0.32),_0px_4px_8px_rgba(66,_71,_76,_0.05),_0px_4px_40px_#eee] w-[343px] flex flex-col p-[15px] box-border items-start justify-start gap-[10px] text-center text-mini text-black">
            <div className="self-stretch h-11 flex flex-row items-start justify-start gap-[15px] text-left text-base">
              <div className="self-stretch flex-1 rounded-lg flex flex-row py-2 px-[11px] items-center justify-start">
                <div className="flex-1 relative tracking-[0.38px] leading-[24px] font-semibold">
                  Novembre
                </div>
                <img className="relative w-6 h-6" alt="" src="/icon6.svg" />
              </div>
              <div className="self-stretch flex-1 rounded-lg flex flex-row py-2 px-[11px] items-center justify-start">
                <div className="flex-1 relative tracking-[0.38px] leading-[24px] font-semibold">
                  2022
                </div>
                <img className="relative w-6 h-6" alt="" src="/icon6.svg" />
              </div>
            </div>
            <div className="self-stretch flex flex-row py-[5px] px-0 items-start justify-start text-smi text-gray-400">
              <div className="flex-1 relative tracking-[-0.08px] leading-[18px] capitalize font-semibold">
                Lu
              </div>
              <div className="flex-1 relative tracking-[-0.08px] leading-[18px] capitalize font-semibold">
                ma
              </div>
              <div className="flex-1 relative tracking-[-0.08px] leading-[18px] capitalize font-semibold">
                Me
              </div>
              <div className="flex-1 relative tracking-[-0.08px] leading-[18px] capitalize font-semibold">
                Je
              </div>
              <div className="flex-1 relative tracking-[-0.08px] leading-[18px] capitalize font-semibold">
                Ve
              </div>
              <div className="flex-1 relative tracking-[-0.08px] leading-[18px] capitalize font-semibold">
                sa
              </div>
              <div className="flex-1 relative tracking-[-0.08px] leading-[18px] capitalize font-semibold">
                Di
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="self-stretch h-[50px] flex flex-row py-2.5 px-0 box-border items-start justify-start">
                <div className="flex-1 relative h-8 text-black1">
                  <div className="absolute w-[calc(100%_+_0.29px)] top-[calc(50%_-_12px)] left-[0px] tracking-[0.38px] leading-[24px] font-medium hidden items-center justify-center">
                    31
                  </div>
                </div>
                <div className="flex-1 relative h-8 text-black1">
                  <div className="absolute w-[calc(100%_+_0.29px)] top-[calc(50%_-_12px)] left-[0px] tracking-[0.38px] leading-[24px] font-medium hidden items-center justify-center">
                    31
                  </div>
                </div>
                <div className="flex-1 relative h-8">
                  <div className="absolute w-[calc(100%_+_0.29px)] top-[calc(50%_-_12px)] left-[0px] tracking-[0.38px] leading-[24px] flex items-center justify-center">
                    1
                  </div>
                </div>
                <div className="flex-1 relative h-8">
                  <div className="absolute w-[calc(100%_+_0.29px)] top-[calc(50%_-_12px)] left-[0px] tracking-[0.38px] leading-[24px] flex items-center justify-center">
                    2
                  </div>
                </div>
                <div className="flex-1 relative h-8">
                  <div className="absolute w-[calc(100%_+_0.29px)] top-[calc(50%_-_12px)] left-[0px] tracking-[0.38px] leading-[24px] flex items-center justify-center">
                    3
                  </div>
                </div>
                <div className="flex-1 relative h-8">
                  <div className="absolute w-[calc(100%_+_0.29px)] top-[calc(50%_-_12px)] left-[0px] tracking-[0.38px] leading-[24px] flex items-center justify-center">
                    4
                  </div>
                </div>
                <div className="flex-1 relative h-8">
                  <div className="absolute w-[calc(100%_+_0.29px)] top-[calc(50%_-_12px)] left-[0px] tracking-[0.38px] leading-[24px] flex items-center justify-center">
                    5
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[50px] flex flex-row py-2.5 px-0 box-border items-start justify-start">
                <div className="flex-1 relative h-8">
                  <div className="absolute w-[calc(100%_+_0.29px)] top-[calc(50%_-_12px)] left-[0px] tracking-[0.38px] leading-[24px] flex items-center justify-center">
                    6
                  </div>
                </div>
                <div className="flex-1 relative h-8">
                  <div className="absolute w-[calc(100%_+_0.29px)] top-[calc(50%_-_12px)] left-[0px] tracking-[0.38px] leading-[24px] flex items-center justify-center">
                    7
                  </div>
                </div>
                <div className="flex-1 relative h-8">
                  <div className="absolute w-[calc(100%_+_0.29px)] top-[calc(50%_-_12px)] left-[0px] tracking-[0.38px] leading-[24px] flex items-center justify-center">
                    8
                  </div>
                </div>
                <div className="flex-1 relative h-8">
                  <div className="absolute w-[calc(100%_+_0.29px)] top-[calc(50%_-_12px)] left-[0px] tracking-[0.38px] leading-[24px] flex items-center justify-center">
                    9
                  </div>
                </div>
                <div className="flex-1 relative h-8">
                  <div className="absolute w-[calc(100%_+_0.29px)] top-[calc(50%_-_12px)] left-[0px] tracking-[0.38px] leading-[24px] flex items-center justify-center">
                    10
                  </div>
                </div>
                <div className="flex-1 relative h-8">
                  <div className="absolute w-[calc(100%_+_0.29px)] top-[calc(50%_-_12px)] left-[0px] tracking-[0.38px] leading-[24px] flex items-center justify-center">
                    11
                  </div>
                </div>
                <div className="flex-1 relative h-8">
                  <div className="absolute w-[calc(100%_+_0.29px)] top-[calc(50%_-_12px)] left-[0px] tracking-[0.38px] leading-[24px] flex items-center justify-center">
                    12
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[50px] flex flex-row py-2.5 px-0 box-border items-start justify-start">
                <div className="flex-1 relative h-8">
                  <div className="absolute w-[calc(100%_+_0.29px)] top-[calc(50%_-_12px)] left-[0px] tracking-[0.38px] leading-[24px] flex items-center justify-center">
                    13
                  </div>
                </div>
                <div className="flex-1 relative h-8">
                  <div className="absolute w-[calc(100%_+_0.29px)] top-[calc(50%_-_12px)] left-[0px] tracking-[0.38px] leading-[24px] flex items-center justify-center">
                    14
                  </div>
                </div>
                <div className="flex-1 relative h-8">
                  <div className="absolute w-[calc(100%_+_0.29px)] top-[calc(50%_-_12px)] left-[0px] tracking-[0.38px] leading-[24px] flex items-center justify-center">
                    15
                  </div>
                </div>
                <div className="flex-1 relative h-8">
                  <div className="absolute w-[calc(100%_+_0.29px)] top-[calc(50%_-_12px)] left-[0px] tracking-[0.38px] leading-[24px] flex items-center justify-center">
                    16
                  </div>
                </div>
                <div className="flex-1 relative h-8">
                  <div className="absolute w-[calc(100%_+_0.29px)] top-[calc(50%_-_12px)] left-[0px] tracking-[0.38px] leading-[24px] flex items-center justify-center">
                    17
                  </div>
                </div>
                <div className="flex-1 relative h-8">
                  <div className="absolute w-[calc(100%_+_0.29px)] top-[calc(50%_-_12px)] left-[0px] tracking-[0.38px] leading-[24px] flex items-center justify-center">
                    18
                  </div>
                </div>
                <div className="flex-1 relative h-8">
                  <div className="absolute w-[calc(100%_+_0.29px)] top-[calc(50%_-_12px)] left-[0px] tracking-[0.38px] leading-[24px] flex items-center justify-center">
                    19
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[50px] flex flex-row py-2.5 px-0 box-border items-start justify-start">
                <div className="flex-1 relative h-8">
                  <div className="absolute w-[calc(100%_+_0.29px)] top-[calc(50%_-_12px)] left-[0px] tracking-[0.38px] leading-[24px] flex items-center justify-center">
                    20
                  </div>
                </div>
                <div className="flex-1 relative h-8">
                  <div className="absolute w-[calc(100%_+_0.29px)] top-[calc(50%_-_12px)] left-[0px] tracking-[0.38px] leading-[24px] flex items-center justify-center">
                    21
                  </div>
                </div>
                <div className="flex-1 relative h-8 text-white">
                  <div className="absolute top-[calc(50%_-_16px)] left-[calc(50%_-_16.36px)] rounded-2xl bg-mediumblue-100 w-8 h-8" />
                  <div className="absolute w-[calc(100%_+_0.29px)] top-[calc(50%_-_12px)] left-[0px] tracking-[0.38px] leading-[24px] font-semibold flex items-center justify-center">
                    22
                  </div>
                </div>
                <div className="flex-1 relative h-8">
                  <div className="absolute w-[calc(100%_+_0.29px)] top-[calc(50%_-_12px)] left-[0px] tracking-[0.38px] leading-[24px] flex items-center justify-center">
                    23
                  </div>
                </div>
                <div className="flex-1 relative h-8">
                  <div className="absolute w-[calc(100%_+_0.29px)] top-[calc(50%_-_12px)] left-[0px] tracking-[0.38px] leading-[24px] flex items-center justify-center">
                    24
                  </div>
                </div>
                <div className="flex-1 relative h-8">
                  <div className="absolute w-[calc(100%_+_0.29px)] top-[calc(50%_-_12px)] left-[0px] tracking-[0.38px] leading-[24px] flex items-center justify-center">
                    25
                  </div>
                </div>
                <div className="flex-1 relative h-8">
                  <div className="absolute w-[calc(100%_+_0.29px)] top-[calc(50%_-_12px)] left-[0px] tracking-[0.38px] leading-[24px] flex items-center justify-center">
                    26
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[50px] flex flex-row py-2.5 px-0 box-border items-start justify-start">
                <div className="flex-1 relative h-8">
                  <div className="absolute w-[calc(100%_+_0.29px)] top-[calc(50%_-_12px)] left-[0px] tracking-[0.38px] leading-[24px] flex items-center justify-center">
                    27
                  </div>
                </div>
                <div className="flex-1 relative h-8">
                  <div className="absolute w-[calc(100%_+_0.29px)] top-[calc(50%_-_12px)] left-[0px] tracking-[0.38px] leading-[24px] flex items-center justify-center">
                    28
                  </div>
                </div>
                <div className="flex-1 relative h-8">
                  <div className="absolute w-[calc(100%_+_0.29px)] top-[calc(50%_-_12px)] left-[0px] tracking-[0.38px] leading-[24px] flex items-center justify-center">
                    29
                  </div>
                </div>
                <div className="flex-1 relative h-8">
                  <div className="absolute w-[calc(100%_+_0.29px)] top-[calc(50%_-_12px)] left-[0px] tracking-[0.38px] leading-[24px] flex items-center justify-center">
                    30
                  </div>
                </div>
                <div className="flex-1 relative h-8 text-black1">
                  <div className="absolute w-[calc(100%_+_0.29px)] top-[calc(50%_-_12px)] left-[0px] tracking-[0.38px] leading-[24px] font-medium hidden items-center justify-center">
                    31
                  </div>
                </div>
                <div className="flex-1 relative h-8 text-black1">
                  <div className="absolute w-[calc(100%_+_0.29px)] top-[calc(50%_-_12px)] left-[0px] tracking-[0.38px] leading-[24px] font-medium hidden items-center justify-center">
                    30
                  </div>
                </div>
                <div className="flex-1 relative h-8 text-black1">
                  <div className="absolute w-[calc(100%_+_0.29px)] top-[calc(50%_-_12px)] left-[0px] tracking-[0.38px] leading-[24px] font-medium hidden items-center justify-center">
                    31
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch h-11 hidden flex-row items-start justify-start gap-[15px] text-gray-600">
              <div className="self-stretch flex-1 rounded-lg flex flex-row py-2 px-[11px] items-center justify-start border-[1px] border-solid border-gray-200">
                <img
                  className="relative w-6 h-6 hidden"
                  alt=""
                  src="/iconly1.svg"
                />
                <div className="flex-1 relative tracking-[0.38px] leading-[24px] font-medium">
                  Annuler
                </div>
              </div>
              <div className="self-stretch flex-1 rounded-lg bg-mediumblue-100 flex flex-row py-2 px-[11px] items-center justify-start text-white">
                <img
                  className="relative w-6 h-6 hidden"
                  alt=""
                  src="/iconly1.svg"
                />
                <div className="flex-1 relative tracking-[0.38px] leading-[24px] font-medium">
                  Valider
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="self-stretch flex flex-col pt-0 px-0 pb-6 items-center justify-start cursor-pointer text-base text-white"
          onClick={onFooterContainer1Click}
        >
          <div className="self-stretch flex flex-col items-center justify-center gap-[24px]">
            <div className="bg-gray-200 w-[376px]" />
            <div className="rounded-lg bg-mediumblue-100 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] w-[330px] h-[50px] flex flex-row py-2.5 px-[18px] box-border items-center justify-center">
              <div className="relative leading-[20px] font-semibold">
                Suivant
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[792px] left-[0px] bg-white box-border w-[376px] flex flex-row p-5 items-center justify-between z-[3] text-center text-3xs text-gray-900 border-t-[2px] border-solid border-whitesmoke-400">
        <div className="w-[46px] flex flex-col items-center justify-start gap-[4px] text-mediumblue-100">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/component-211.svg"
          />
          <div className="relative leading-[16px] font-medium">Activité</div>
        </div>
        <div className="w-[46px] flex flex-col items-center justify-start gap-[4px]">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/component-121.svg"
          />
          <div className="relative leading-[16px] font-medium">Messagerie</div>
        </div>
        <div className="w-[46px] flex flex-col items-center justify-start gap-[4px]">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/component-511.svg"
          />
          <div className="relative leading-[16px] font-medium">Projets</div>
        </div>
        <div className="w-[46px] flex flex-col items-center justify-start gap-[4px]">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/component-13.svg"
          />
          <div className="relative leading-[16px] font-medium">Compte</div>
        </div>
      </div>
    </div>
  );
};

export default MobileServiceProjet1;
