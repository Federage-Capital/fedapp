import { FunctionComponent } from "react";

const MobileServiceProjet22: FunctionComponent = () => {
  return (
    <div className="relative w-full flex flex-col pt-0 px-0 pb-6 box-border items-start justify-start text-left text-base text-dimgray font-text-base-leading-6-font-normal">
      <div className="self-stretch bg-white flex flex-row items-start justify-start text-gray-700 border-b-[2px] border-solid border-whitesmoke-400">
        <div className="flex flex-row p-4 items-center justify-start">
          <img
            className="rounded-xl w-10 h-10 object-cover"
            alt=""
            src="/avatar1@2x.png"
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
      <div className="self-stretch bg-white flex flex-col py-5 px-4 items-start justify-start gap-[32px]">
        <div className="self-stretch flex flex-row items-center justify-between">
          <div className="w-[167px] flex flex-row items-center justify-start gap-[11px]">
            <div className="rounded-lg bg-whitesmoke-200 w-[38px] h-[38px] flex flex-row p-1.5 box-border items-center justify-center">
              <img className="relative w-1.5 h-2.5" alt="" src="/icon.svg" />
            </div>
            <b className="flex-1 relative leading-[24px]">Créer un projet</b>
          </div>
          <div className="rounded-3xs flex flex-row py-0.5 px-2.5 items-center justify-center text-right text-xs">
            <div className="relative leading-[16px] font-medium">
              Étape 3 sur 3
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-center gap-[10px] text-9xl text-black">
          <div className="self-stretch relative leading-[20px] font-semibold">
            Demander des apports
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
      <div className="self-stretch flex-1 bg-whitesmoke-100 flex flex-col py-6 px-4 items-center justify-start gap-[48px]">
        <div className="self-stretch flex flex-col items-center justify-start">
          <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
            <b className="self-stretch relative leading-[20px] text-gray-700">
              De quels apports avez-vous besoin ?
            </b>
            <div className="self-stretch rounded-lg bg-white flex flex-col py-[18px] px-0 items-center justify-center gap-[12px] text-xs border-[3px] border-solid border-mediumblue-100">
              <div className="self-stretch flex flex-row py-0 px-3.5 items-start justify-start text-lg text-gray-900">
                <div className="flex-1 relative leading-[24px] font-semibold">
                  Ajouter un apport
                </div>
              </div>
              <div className="self-stretch h-[58.29px] flex flex-col py-2 px-3.5 box-border items-start justify-between text-gray-500">
                <div className="self-stretch flex-1 rounded-lg bg-whitesmoke-200 flex flex-row items-center justify-start">
                  <div className="flex-1 rounded-lg bg-whitesmoke-200 flex flex-row p-1 items-center justify-start gap-[32px]">
                    <div className="flex-1 rounded-md bg-white flex flex-col py-2 px-3 items-center justify-center text-mediumblue-100">
                      <div className="relative leading-[20px] font-semibold">
                        Membres
                      </div>
                    </div>
                    <div className="flex-1 rounded-md flex flex-col py-2 px-3 items-center justify-center">
                      <div className="relative leading-[20px] font-semibold">
                        Objet
                      </div>
                    </div>
                    <div className="flex-1 rounded-md flex flex-col py-2 px-3 items-center justify-center">
                      <div className="relative leading-[20px] font-semibold">
                        Détails
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col pt-0 px-3.5 pb-2.5 items-start justify-start">
                <div className="self-stretch flex flex-col pt-0 px-0 pb-2 items-start justify-start gap-[4px]">
                  <div className="self-stretch relative leading-[20px] font-semibold">
                    Décrire l’apport
                  </div>
                  <div className="self-stretch rounded-lg bg-white flex flex-row py-2.5 px-3 items-center justify-center text-sm text-gray-900 border-[2px] border-solid border-gray-200">
                    <div className="flex-1 relative leading-[24px]">
                      Solution pour le développement de nutriments actifs
                      agissant directement sur les cellules potentiellement
                      cancérigènes.
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col py-0 px-3.5 items-center justify-start text-center text-sm">
                <div className="self-stretch rounded-lg bg-whitesmoke-200 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] overflow-hidden flex flex-row py-2.5 px-[18px] items-center justify-center">
                  <div className="flex-1 relative leading-[20px] font-semibold">
                    Ajouter l’apport
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-white w-[186px] flex flex-col items-start justify-start text-center text-sm">
              <div className="self-stretch rounded-md bg-white overflow-hidden flex flex-row py-2 px-3.5 items-center justify-center gap-[8px] sm:flex-row sm:gap-[8px] sm:items-center sm:justify-center">
                <div className="flex-1 relative leading-[20px] font-semibold">
                  Ajouter un apport
                </div>
                <div className="rounded-md bg-whitesmoke-200 flex flex-row p-1.5 items-center justify-center">
                  <img
                    className="relative w-3.5 h-3.5 overflow-hidden shrink-0"
                    alt=""
                    src="/plus11.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col pt-0 px-0 pb-6 items-center justify-start text-center text-white">
          <div className="self-stretch flex flex-col items-center justify-center gap-[24px]">
            <div className="self-stretch bg-gray-200" />
            <div className="self-stretch rounded-lg bg-mediumblue-100 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] flex flex-row py-4 px-[18px] items-center justify-center">
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

export default MobileServiceProjet22;
