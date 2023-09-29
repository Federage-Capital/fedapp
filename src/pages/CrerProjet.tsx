import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const MobileServiceCrerProjet: FunctionComponent = () => {
  const navigate = useNavigate();

  const onCrerProjetContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div
      className="relative w-full overflow-y-auto flex flex-col items-start justify-start cursor-pointer text-left text-base text-gray-700 font-text-xs-leading-4-font-normal"
      onClick={onCrerProjetContainerClick}
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
              Étape 1 sur 3
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-center gap-[10px] text-9xl text-black">
          <div className="self-stretch relative leading-[20px] font-semibold">
            Démarrer un projet
          </div>
          <div className="self-stretch relative text-base leading-[20px] text-gray-500">
            <span className="font-medium">{`En tant qu’initiateur, vous fixez les objectifs à atteindre pour valoriser le projet. Pour plus de détails, vous pouvez `}</span>
            <span className="font-semibold text-mediumblue-200">
              lire notre guide
            </span>
            <span className="font-medium">.</span>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-gray-50 flex flex-col items-center justify-start py-6 px-4 gap-[20px] text-sm">
        <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
          <b className="relative leading-[20px]">Intitulé du projet</b>
          <div className="self-stretch rounded-lg bg-white overflow-hidden flex flex-row items-center justify-start py-[9px] px-[13px] text-base text-gray-900 border-[2px] border-solid border-gray-200">
            <div className="flex-1 relative leading-[24px]">
              Solution de nutriments actifs anti-cancérigènes.
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
          <b className="relative leading-[20px]">Descriptif du projet</b>
          <div className="self-stretch rounded-lg bg-white overflow-hidden flex flex-row items-center justify-start py-[9px] px-[13px] text-base text-gray-900 border-[2px] border-solid border-gray-200">
            <div className="flex-1 relative leading-[24px]">
              Recherche un procédé agro-alimentaire pour expérimenter des
              solutions nutritionnelles médicales.
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
          <b className="self-stretch relative leading-[20px]">
            Budget indicatif
          </b>
          <div className="self-stretch rounded-lg bg-white overflow-hidden flex flex-row items-center justify-start py-[9px] px-[13px] gap-[8px] text-base text-gray-900 border-[2px] border-solid border-gray-200">
            <div className="flex-1 flex flex-row items-center justify-start gap-[8px]">
              <div className="relative leading-[24px]">€</div>
              <div className="flex-1 relative leading-[24px]">15 000,00</div>
            </div>
            <div className="relative leading-[24px] font-medium text-dimgray">
              EUR
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start">
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-2.5">
            <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
              <b className="relative leading-[20px]">Début du projet</b>
              <div className="self-stretch rounded-lg bg-white overflow-hidden flex flex-row items-center justify-start py-[9px] px-3 gap-[8px] text-base text-mediumblue-100 border-[2px] border-solid border-gray-200">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/calendar21.svg"
                />
                <div className="relative leading-[24px] font-medium">
                  Saisir une date
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-3xs bg-white shadow-[0px_0px_0.5px_rgba(66,_71,_76,_0.32),_0px_4px_8px_rgba(66,_71,_76,_0.05),_0px_4px_40px_#eee] flex flex-col items-start justify-start p-[15px] gap-[10px] text-center text-mini text-black">
            <div className="self-stretch h-11 flex flex-row items-start justify-start gap-[15px] text-left text-base">
              <div className="self-stretch flex-1 rounded-lg flex flex-row items-center justify-start py-2 px-[11px]">
                <div className="flex-1 relative tracking-[0.38px] leading-[24px] font-semibold">
                  Novembre
                </div>
                <img className="relative w-6 h-6" alt="" src="/icon61.svg" />
              </div>
              <div className="self-stretch flex-1 rounded-lg flex flex-row items-center justify-start py-2 px-[11px]">
                <div className="flex-1 relative tracking-[0.38px] leading-[24px] font-semibold">
                  2023
                </div>
                <img className="relative w-6 h-6" alt="" src="/icon51.svg" />
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-[5px] px-0 text-smi text-gray-400">
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
              <div className="self-stretch h-[50px] flex flex-row items-start justify-start py-2.5 px-0 box-border">
                <div className="flex-1 relative h-8 text-black1">
                  <div className="absolute w-[calc(100%_+_0.14px)] top-[calc(50%_-_12px)] left-[0px] tracking-[0.38px] leading-[24px] font-medium hidden items-center justify-center">
                    31
                  </div>
                </div>
                <div className="flex-1 relative h-8 text-black1">
                  <div className="absolute w-[calc(100%_+_0.14px)] top-[calc(50%_-_12px)] left-[0px] tracking-[0.38px] leading-[24px] font-medium hidden items-center justify-center">
                    31
                  </div>
                </div>
                <div className="flex-1 relative h-8">
                  <div className="absolute w-[calc(100%_+_0.14px)] top-[calc(50%_-_12px)] left-[0px] tracking-[0.38px] leading-[24px] flex items-center justify-center">
                    1
                  </div>
                </div>
                <div className="flex-1 relative h-8">
                  <div className="absolute w-[calc(100%_+_0.14px)] top-[calc(50%_-_12px)] left-[0px] tracking-[0.38px] leading-[24px] flex items-center justify-center">
                    2
                  </div>
                </div>
                <div className="flex-1 relative h-8">
                  <div className="absolute w-[calc(100%_+_0.14px)] top-[calc(50%_-_12px)] left-[0px] tracking-[0.38px] leading-[24px] flex items-center justify-center">
                    3
                  </div>
                </div>
                <div className="flex-1 relative h-8">
                  <div className="absolute w-[calc(100%_+_0.14px)] top-[calc(50%_-_12px)] left-[0px] tracking-[0.38px] leading-[24px] flex items-center justify-center">
                    4
                  </div>
                </div>
                <div className="flex-1 relative h-8">
                  <div className="absolute w-[calc(100%_+_0.14px)] top-[calc(50%_-_12px)] left-[0px] tracking-[0.38px] leading-[24px] flex items-center justify-center">
                    5
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[50px] flex flex-row items-start justify-start py-2.5 px-0 box-border">
                <div className="flex-1 relative h-8">
                  <div className="absolute w-[calc(100%_+_0.14px)] top-[calc(50%_-_12px)] left-[0px] tracking-[0.38px] leading-[24px] flex items-center justify-center">
                    6
                  </div>
                </div>
                <div className="flex-1 relative h-8">
                  <div className="absolute w-[calc(100%_+_0.14px)] top-[calc(50%_-_12px)] left-[0px] tracking-[0.38px] leading-[24px] flex items-center justify-center">
                    7
                  </div>
                </div>
                <div className="flex-1 relative h-8">
                  <div className="absolute w-[calc(100%_+_0.14px)] top-[calc(50%_-_12px)] left-[0px] tracking-[0.38px] leading-[24px] flex items-center justify-center">
                    8
                  </div>
                </div>
                <div className="flex-1 relative h-8">
                  <div className="absolute w-[calc(100%_+_0.14px)] top-[calc(50%_-_12px)] left-[0px] tracking-[0.38px] leading-[24px] flex items-center justify-center">
                    9
                  </div>
                </div>
                <div className="flex-1 relative h-8">
                  <div className="absolute w-[calc(100%_+_0.14px)] top-[calc(50%_-_12px)] left-[0px] tracking-[0.38px] leading-[24px] flex items-center justify-center">
                    10
                  </div>
                </div>
                <div className="flex-1 relative h-8">
                  <div className="absolute w-[calc(100%_+_0.14px)] top-[calc(50%_-_12px)] left-[0px] tracking-[0.38px] leading-[24px] flex items-center justify-center">
                    11
                  </div>
                </div>
                <div className="flex-1 relative h-8">
                  <div className="absolute w-[calc(100%_+_0.14px)] top-[calc(50%_-_12px)] left-[0px] tracking-[0.38px] leading-[24px] flex items-center justify-center">
                    12
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[50px] flex flex-row items-start justify-start py-2.5 px-0 box-border">
                <div className="flex-1 relative h-8">
                  <div className="absolute w-[calc(100%_+_0.14px)] top-[calc(50%_-_12px)] left-[0px] tracking-[0.38px] leading-[24px] flex items-center justify-center">
                    13
                  </div>
                </div>
                <div className="flex-1 relative h-8">
                  <div className="absolute w-[calc(100%_+_0.14px)] top-[calc(50%_-_12px)] left-[0px] tracking-[0.38px] leading-[24px] flex items-center justify-center">
                    14
                  </div>
                </div>
                <div className="flex-1 relative h-8">
                  <div className="absolute w-[calc(100%_+_0.14px)] top-[calc(50%_-_12px)] left-[0px] tracking-[0.38px] leading-[24px] flex items-center justify-center">
                    15
                  </div>
                </div>
                <div className="flex-1 relative h-8">
                  <div className="absolute w-[calc(100%_+_0.14px)] top-[calc(50%_-_12px)] left-[0px] tracking-[0.38px] leading-[24px] flex items-center justify-center">
                    16
                  </div>
                </div>
                <div className="flex-1 relative h-8">
                  <div className="absolute w-[calc(100%_+_0.14px)] top-[calc(50%_-_12px)] left-[0px] tracking-[0.38px] leading-[24px] flex items-center justify-center">
                    17
                  </div>
                </div>
                <div className="flex-1 relative h-8">
                  <div className="absolute w-[calc(100%_+_0.14px)] top-[calc(50%_-_12px)] left-[0px] tracking-[0.38px] leading-[24px] flex items-center justify-center">
                    18
                  </div>
                </div>
                <div className="flex-1 relative h-8">
                  <div className="absolute w-[calc(100%_+_0.14px)] top-[calc(50%_-_12px)] left-[0px] tracking-[0.38px] leading-[24px] flex items-center justify-center">
                    19
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[50px] flex flex-row items-start justify-start py-2.5 px-0 box-border">
                <div className="flex-1 relative h-8">
                  <div className="absolute w-[calc(100%_+_0.14px)] top-[calc(50%_-_12px)] left-[0px] tracking-[0.38px] leading-[24px] flex items-center justify-center">
                    20
                  </div>
                </div>
                <div className="flex-1 relative h-8">
                  <div className="absolute w-[calc(100%_+_0.14px)] top-[calc(50%_-_12px)] left-[0px] tracking-[0.38px] leading-[24px] flex items-center justify-center">
                    21
                  </div>
                </div>
                <div className="flex-1 relative h-8 text-white">
                  <div className="absolute top-[calc(50%_-_16px)] left-[calc(50%_-_16.43px)] rounded-2xl bg-mediumblue-100 w-8 h-8" />
                  <div className="absolute w-[calc(100%_+_0.14px)] top-[calc(50%_-_12px)] left-[0px] tracking-[0.38px] leading-[24px] font-semibold flex items-center justify-center">
                    22
                  </div>
                </div>
                <div className="flex-1 relative h-8">
                  <div className="absolute w-[calc(100%_+_0.14px)] top-[calc(50%_-_12px)] left-[0px] tracking-[0.38px] leading-[24px] flex items-center justify-center">
                    23
                  </div>
                </div>
                <div className="flex-1 relative h-8">
                  <div className="absolute w-[calc(100%_+_0.14px)] top-[calc(50%_-_12px)] left-[0px] tracking-[0.38px] leading-[24px] flex items-center justify-center">
                    24
                  </div>
                </div>
                <div className="flex-1 relative h-8">
                  <div className="absolute w-[calc(100%_+_0.14px)] top-[calc(50%_-_12px)] left-[0px] tracking-[0.38px] leading-[24px] flex items-center justify-center">
                    25
                  </div>
                </div>
                <div className="flex-1 relative h-8">
                  <div className="absolute w-[calc(100%_+_0.14px)] top-[calc(50%_-_12px)] left-[0px] tracking-[0.38px] leading-[24px] flex items-center justify-center">
                    26
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[50px] flex flex-row items-start justify-start py-2.5 px-0 box-border">
                <div className="flex-1 relative h-8">
                  <div className="absolute w-[calc(100%_+_0.14px)] top-[calc(50%_-_12px)] left-[0px] tracking-[0.38px] leading-[24px] flex items-center justify-center">
                    27
                  </div>
                </div>
                <div className="flex-1 relative h-8">
                  <div className="absolute w-[calc(100%_+_0.14px)] top-[calc(50%_-_12px)] left-[0px] tracking-[0.38px] leading-[24px] flex items-center justify-center">
                    28
                  </div>
                </div>
                <div className="flex-1 relative h-8">
                  <div className="absolute w-[calc(100%_+_0.14px)] top-[calc(50%_-_12px)] left-[0px] tracking-[0.38px] leading-[24px] flex items-center justify-center">
                    29
                  </div>
                </div>
                <div className="flex-1 relative h-8">
                  <div className="absolute w-[calc(100%_+_0.14px)] top-[calc(50%_-_12px)] left-[0px] tracking-[0.38px] leading-[24px] flex items-center justify-center">
                    30
                  </div>
                </div>
                <div className="flex-1 relative h-8 text-black1">
                  <div className="absolute w-[calc(100%_+_0.14px)] top-[calc(50%_-_12px)] left-[0px] tracking-[0.38px] leading-[24px] font-medium hidden items-center justify-center">
                    31
                  </div>
                </div>
                <div className="flex-1 relative h-8 text-black1">
                  <div className="absolute w-[calc(100%_+_0.14px)] top-[calc(50%_-_12px)] left-[0px] tracking-[0.38px] leading-[24px] font-medium hidden items-center justify-center">
                    30
                  </div>
                </div>
                <div className="flex-1 relative h-8 text-black1">
                  <div className="absolute w-[calc(100%_+_0.14px)] top-[calc(50%_-_12px)] left-[0px] tracking-[0.38px] leading-[24px] font-medium hidden items-center justify-center">
                    31
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch h-11 hidden flex-row items-start justify-start gap-[15px] text-gray-6001">
              <div className="self-stretch flex-1 rounded-lg flex flex-row items-center justify-start py-2 px-[11px] border-[1px] border-solid border-gray-2001">
                <img
                  className="relative w-6 h-6 hidden"
                  alt=""
                  src="/iconly.svg"
                />
                <div className="flex-1 relative tracking-[0.38px] leading-[24px] font-medium">
                  Annuler
                </div>
              </div>
              <div className="self-stretch flex-1 rounded-lg bg-mediumblue-100 flex flex-row items-center justify-start py-2 px-[11px] text-white">
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
        <div className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-6 text-center text-base text-white">
          <div className="self-stretch flex flex-col items-center justify-center gap-[24px]">
            <div className="self-stretch bg-gray-200" />
            <div className="self-stretch rounded-lg bg-gray-900 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] flex flex-row items-center justify-center py-4 px-[18px]">
              <div className="flex-1 relative leading-[20px] font-semibold">
                Suivant
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileServiceCrerProjet;
