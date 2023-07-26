import { FunctionComponent } from "react";

const MobileServiceAjouterUnAppo1: FunctionComponent = () => {
  return (
    <div className="relative w-full h-[844px] flex flex-col items-start justify-start text-left text-base text-gray-700 font-text-base-leading-6-font-normal">
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
          <div className="rounded-2xl bg-mediumblue-100 shadow-[0px_0px_0px_2px_#012bdd,_0px_0px_0px_4px_#fff] overflow-hidden flex flex-row p-1 items-center justify-center border-[1px] border-solid border-mediumblue-100">
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/bell1.svg"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch bg-white flex flex-col py-5 px-4 items-start justify-start gap-[32px] text-dimgray">
        <div className="self-stretch flex flex-row items-center justify-between">
          <div className="w-[167px] flex flex-row items-center justify-start gap-[11px]">
            <div className="rounded-lg bg-gray-100 w-[38px] h-[38px] flex flex-row p-1.5 box-border items-center justify-center">
              <img className="relative w-1.5 h-2.5" alt="" src="/icon21.svg" />
            </div>
            <b className="flex-1 relative leading-[24px]">Créer un projet</b>
          </div>
          <div className="rounded-3xs flex flex-row py-0.5 px-2.5 items-center justify-center text-right text-xs">
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
      <div className="self-stretch flex-1 bg-whitesmoke-100 flex flex-col py-6 px-4 items-center justify-start gap-[20px] text-sm">
        <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
          <b className="relative leading-[20px]">Intitulé de l’apport</b>
          <div className="self-stretch rounded-lg bg-white overflow-hidden flex flex-row py-[9px] px-[13px] items-center justify-start text-base text-gray-900 border-[2px] border-solid border-gray-200">
            <div className="flex-1 relative leading-[24px]">{`Formule bio-synthétique humanoïde `}</div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
          <b className="relative leading-[20px]">Descriptif de l’apport</b>
          <div className="self-stretch rounded-lg bg-white overflow-hidden flex flex-row py-[9px] px-[13px] items-center justify-start text-base text-gray-900 border-[2px] border-solid border-gray-200">
            <div className="flex-1 relative leading-[24px]">
              Solution pour le développement de nutriments actifs agissant
              directement sur les cellules potentiellement cancérigènes.
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
          <b className="self-stretch relative leading-[20px]">
            Montant de l’apport
          </b>
          <div className="self-stretch rounded-lg bg-white overflow-hidden flex flex-row py-[9px] px-[13px] items-center justify-start gap-[8px] text-base text-gray-900 border-[2px] border-solid border-gray-200">
            <div className="flex-1 flex flex-row items-center justify-start gap-[8px]">
              <div className="relative leading-[24px]">€</div>
              <div className="flex-1 relative leading-[24px]">15 000,00</div>
            </div>
            <div className="relative leading-[24px] font-medium text-dimgray">
              EUR
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
          <b className="self-stretch relative leading-[20px]">Type d’apport</b>
          <div className="self-stretch rounded-lg bg-white overflow-hidden flex flex-row py-[9px] px-[13px] items-center justify-start gap-[8px] text-base text-gray-900 border-[2px] border-solid border-gray-200">
            <div className="flex-1 flex flex-row items-center justify-start">
              <div className="flex-1 relative leading-[24px]">Industrie</div>
            </div>
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0"
              alt=""
              src="/chevron-down1.svg"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
          <b className="self-stretch relative leading-[20px]">
            Devis ou pièce-jointe
          </b>
          <div className="self-stretch rounded-lg bg-white overflow-hidden flex flex-row py-[9px] px-[13px] items-center justify-start gap-[8px] text-base text-gray-900 border-[2px] border-solid border-gray-200">
            <div className="flex-1 flex flex-row items-start justify-start gap-[8px]">
              <img
                className="relative w-5 h-5 overflow-hidden shrink-0"
                alt=""
                src="/paper-clip.svg"
              />
              <div className="flex-1 relative leading-[20px]">
                SALCC.org_devis
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[8px] text-sm text-mediumblue-100">
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
        <div className="self-stretch flex flex-col items-center justify-start">
          <div className="self-stretch flex flex-col pt-0 px-0 pb-2.5 items-start justify-start">
            <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
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
          <div className="self-stretch rounded-3xs bg-white shadow-[0px_0px_0.5px_rgba(66,_71,_76,_0.32),_0px_4px_8px_rgba(66,_71,_76,_0.05),_0px_4px_40px_#eee] flex flex-col p-[15px] items-start justify-start gap-[10px] text-center text-mini text-black">
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
                <img className="relative w-6 h-6" alt="" src="/icon5.svg" />
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
              <div className="self-stretch h-[50px] flex flex-row py-2.5 px-0 box-border items-start justify-start">
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
              <div className="self-stretch h-[50px] flex flex-row py-2.5 px-0 box-border items-start justify-start">
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
              <div className="self-stretch h-[50px] flex flex-row py-2.5 px-0 box-border items-start justify-start">
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
              <div className="self-stretch h-[50px] flex flex-row py-2.5 px-0 box-border items-start justify-start">
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
            <div className="self-stretch h-11 hidden flex-row items-start justify-start gap-[15px] text-gray-600">
              <div className="self-stretch flex-1 rounded-lg flex flex-row py-2 px-[11px] items-center justify-start border-[1px] border-solid border-gray-200">
                <img
                  className="relative w-6 h-6 hidden"
                  alt=""
                  src="/iconly.svg"
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
        <div className="self-stretch flex flex-row py-0 px-4 items-center justify-start gap-[8px] text-base text-dimgray">
          <img
            className="relative w-5 h-5 overflow-hidden shrink-0"
            alt=""
            src="/exclamation.svg"
          />
          <b className="flex-1 relative leading-[24px]">
            Chaque apport valorise le projet. Les données financières doivent
            être validées par les partenaires.
          </b>
        </div>
        <div className="self-stretch flex flex-col pt-0 px-0 pb-6 items-center justify-start text-center text-base text-white">
          <div className="self-stretch flex flex-col items-center justify-center gap-[24px]">
            <div className="self-stretch bg-gray-200" />
            <div className="self-stretch rounded-lg bg-mediumblue-100 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] flex flex-row py-4 px-[18px] items-center justify-center">
              <div className="flex-1 relative leading-[20px] font-semibold">
                Créer un projet
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileServiceAjouterUnAppo1;
