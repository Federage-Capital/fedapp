import { FunctionComponent } from "react";

const VoirApportPublic: FunctionComponent = () => {
  return (
    <div className="relative w-full overflow-y-auto flex flex-col items-start justify-start text-center text-3xs text-gray-900 font-text-sm-leading-5-font-medium">
      <div className="self-stretch bg-white flex flex-row items-center justify-between py-[9px] px-3.5 z-[0] text-mini text-black">
        <div className="w-[54px] h-[21px] flex flex-col items-center justify-end">
          <b className="relative tracking-[-0.3px] inline-block w-[54px]">
            21:41
          </b>
        </div>
        <img
          className="relative w-[66.66px] h-[11.34px]"
          alt=""
          src="/group-72.svg"
        />
      </div>
      <div className="self-stretch bg-white overflow-y-auto shrink-0 flex flex-row items-start justify-start z-[1] text-left text-base text-gray-700 border-b-[2px] border-solid border-whitesmoke-400">
        <div className="flex flex-row items-center justify-start p-4">
          <img
            className="rounded-xl w-10 h-10 object-cover"
            alt=""
            src="/avatar12@2x.png"
          />
        </div>
        <div className="flex-1 h-[72px] flex flex-row items-center justify-start py-0 pr-4 pl-0 box-border gap-[16px]">
          <div className="self-stretch flex-1 flex flex-row items-center justify-start py-[9px] px-0">
            <b className="flex-1 relative leading-[24px]">
              lisa.martel@salcc.org
            </b>
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
      <div className="self-stretch bg-gray-50 flex flex-col items-start justify-start pt-5 px-4 pb-6 gap-[28px] z-[2] text-left text-[9.83px] text-darkgray-200">
        <div className="flex flex-row items-center justify-start gap-[11px]">
          <div className="rounded-lg bg-white w-[38px] h-[38px] flex flex-row items-center justify-center p-1.5 box-border gap-[6px]">
            <img className="relative w-1.5 h-2.5" alt="" src="/icon211.svg" />
            <div className="relative leading-[14.05px] font-semibold hidden">
              Site web
            </div>
          </div>
          <div className="relative text-base leading-[24px] font-semibold text-dimgray">
            Détail de l’apport
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-[18px] text-5xl text-gray-900">
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
          <div className="self-stretch rounded-lg bg-white h-[46px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-3 px-5 box-border text-sm text-gray-700">
            <div className="flex flex-row items-center justify-center gap-[8px]">
              <div className="relative leading-[20.03px] font-semibold">
                Afficher plus
              </div>
              <img className="relative w-2.5 h-1.5" alt="" src="/icon6.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-gray-50 flex flex-col items-start justify-start pt-0 px-4 pb-6 gap-[20px] z-[3] text-left text-lg">
        <div className="self-stretch rounded-lg bg-white overflow-hidden flex flex-col items-start justify-start p-4">
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[13px]">
              <div className="self-stretch flex flex-row items-start justify-between">
                <div className="relative leading-[20px] font-semibold flex items-end w-[225px] shrink-0">
                  Statut de l’apport
                </div>
                <div className="rounded-10xs bg-indigo-50 flex flex-row items-start justify-start py-0 px-1.5 text-3xs text-mediumblue-200">
                  <b className="relative leading-[20px]">Répondu</b>
                </div>
              </div>
              <div className="w-[130px] flex flex-col items-start justify-start gap-[19px] text-base">
                <div className="self-stretch h-[47px] flex flex-col items-start justify-start gap-[7px]">
                  <div className="self-stretch relative leading-[20px] font-medium">
                    Prix proposé
                  </div>
                  <div className="self-stretch relative leading-[20px] font-semibold text-dimgray">
                    7 000,00€
                  </div>
                </div>
                <div className="self-stretch h-[47px] flex flex-col items-start justify-start gap-[7px]">
                  <div className="self-stretch relative leading-[20px] font-medium">
                    Délai de livraison
                  </div>
                  <div className="relative leading-[20px] font-semibold text-dimgray">{`23 septembre 2023 `}</div>
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-lg bg-gray-900 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] h-[46px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-[9px] px-[17px] box-border text-sm text-white">
              <div className="relative leading-[20px] font-semibold">
                Voir ma réponse
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start text-base">
          <div className="rounded-t-lg rounded-b-none bg-gray-100 box-border w-[358px] flex flex-col items-end justify-center py-5 px-0 border-[1px] border-solid border-gainsboro-100">
            <div className="self-stretch flex flex-row items-start justify-between py-0 px-3">
              <div className="relative leading-[20px] font-medium">
                Parties prenantes
              </div>
              <div className="relative leading-[20px] font-medium text-right inline-block w-[117px] shrink-0">
                Participations
              </div>
            </div>
          </div>
          <div className="rounded-t-none rounded-b-lg bg-white box-border w-[358px] flex flex-col items-start justify-start py-5 px-3 gap-[20px] text-sm text-dimgray border-r-[1px] border-solid border-gainsboro-100 border-b-[1px] border-l-[1px]">
            <div className="self-stretch flex flex-row items-center justify-start">
              <div className="flex-1 h-[334px] flex flex-col items-center justify-between [transform:_rotate(-90deg)] [transform-origin:0_0]">
                <div className="flex flex-row items-center justify-start gap-[6px] [transform:_rotate(90deg)] [transform-origin:0_0]">
                  <img
                    className="rounded-[13.75px] w-[30px] h-[30px] object-cover"
                    alt=""
                    src="/avatar4@2x.png"
                  />
                  <div className="relative leading-[20px] font-semibold">
                    Pierre FONTENAY
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start [transform:_rotate(90deg)] [transform-origin:0_0] text-right text-gray-500">
                  <div className="relative leading-[20px] font-semibold">
                    27 645€ (40,29%)
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-gainsboro-100" />
            <div className="self-stretch h-[334px] flex flex-col items-center justify-between [transform:_rotate(-90deg)] [transform-origin:0_0]">
              <div className="flex flex-row items-center justify-start gap-[6px] [transform:_rotate(90deg)] [transform-origin:0_0]">
                <img
                  className="rounded-mini w-[30px] h-[30px] object-cover"
                  alt=""
                  src="/avatar5@2x.png"
                />
                <div className="relative leading-[20px] font-semibold">
                  Léonard ANTOINE
                </div>
              </div>
              <div className="flex flex-row items-center justify-start [transform:_rotate(90deg)] [transform-origin:0_0] text-right text-gray-500">
                <div className="relative leading-[20px] font-semibold">
                  28 734€ (38,19%)
                </div>
              </div>
            </div>
            <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-gainsboro-100" />
            <div className="self-stretch h-[334px] flex flex-col items-center justify-between [transform:_rotate(-90deg)] [transform-origin:0_0]">
              <div className="flex flex-row items-center justify-start gap-[6px] [transform:_rotate(90deg)] [transform-origin:0_0]">
                <img
                  className="rounded-mini w-[30px] h-[30px] object-cover"
                  alt=""
                  src="/avatar6@2x.png"
                />
                <div className="relative leading-[20px] font-semibold">
                  Pauline ROBERT
                </div>
              </div>
              <div className="flex flex-row items-center justify-start [transform:_rotate(90deg)] [transform-origin:0_0] text-right text-gray-500">
                <div className="relative leading-[20px] font-semibold">
                  12 237€ (21,52%)
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-lg bg-white flex flex-col items-start justify-start py-5 px-4 gap-[20px]">
          <div className="relative leading-[20px] font-semibold flex items-center w-[215.21px]">
            Historique de l’apport
          </div>
          <div className="w-[329.03px] flex flex-row items-start justify-between text-base text-mediumblue-200">
            <div className="flex flex-row items-start justify-start">
              <div className="relative w-[201px] h-11">
                <div className="absolute top-[0px] left-[0px] flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="relative w-[19px] h-[19px] overflow-hidden shrink-0"
                    alt=""
                    src="/check-circle10.svg"
                  />
                  <div className="relative leading-[20px] font-semibold">
                    Démarrage de l’apport
                  </div>
                </div>
                <div className="absolute top-[24px] left-[29px] text-xs leading-[20px] font-medium text-dimgray">
                  01/04/2023 10h40 UTC+2
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-[5px] text-right text-3xs text-gray-500">
              <div className="relative leading-[20px] font-medium">#18127</div>
              <img
                className="relative w-[11.11px] h-[11.11px]"
                alt=""
                src="/icon8.svg"
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
                  Illustrations à intégrer
                </div>
                <img
                  className="relative w-[18px] h-[18px]"
                  alt=""
                  src="/vector.svg"
                />
              </div>
              <div className="self-stretch relative text-xs leading-[20px] font-medium text-dimgray">
                illustrations_charte_graphique.svg
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
                  src="/vector.svg"
                />
              </div>
              <div className="self-stretch relative text-xs leading-[20px] font-medium text-dimgray">
                cahier_charges_19_03_23.pdf
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch rounded-lg bg-white flex flex-row items-center justify-start p-4 gap-[8px] text-base text-dimgray">
          <img
            className="relative w-5 h-5 overflow-hidden shrink-0"
            alt=""
            src="/exclamation.svg"
          />
          <div className="flex-1 relative leading-[20px] font-medium">
            Chaque apport valorise le projet. Les données financières doivent
            être validées entre partenaires.
          </div>
        </div>
      </div>
      <div className="self-stretch bg-white flex flex-row items-center justify-between py-5 px-[30px] z-[4] border-t-[2px] border-solid border-whitesmoke-300">
        <div className="w-[46px] flex flex-col items-center justify-start gap-[4px]">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/component-28.svg"
          />
          <div className="relative leading-[16px] font-medium">Accueil</div>
        </div>
        <div className="w-[46px] flex flex-col items-center justify-start gap-[4px] text-mediumblue-100">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/component-55.svg"
          />
          <div className="relative leading-[16px] font-medium">Explorer</div>
        </div>
        <div className="w-[46px] flex flex-col items-center justify-start gap-[4px]">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/component-111.svg"
          />
          <div className="relative leading-[16px] font-medium">Messagerie</div>
        </div>
        <div className="w-[46px] h-[46px] flex flex-col items-center justify-start gap-[4px]">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/component-1.svg"
          />
          <div className="relative leading-[16px] font-medium">Compte</div>
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[758.78px] left-[0px] bg-white box-border w-[390px] hidden flex-row items-center justify-between py-5 px-[30px] z-[5] border-t-[2px] border-solid border-whitesmoke-300">
        <div className="w-[46px] flex flex-col items-center justify-start gap-[4px] text-mediumblue-100">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/component-29.svg"
          />
          <div className="relative leading-[16px] font-medium">Accueil</div>
        </div>
        <div className="w-[46px] flex flex-col items-center justify-start gap-[4px]">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/component-58.svg"
          />
          <div className="relative leading-[16px] font-medium">Explorer</div>
        </div>
        <div className="w-[46px] flex flex-col items-center justify-start gap-[4px]">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/component-112.svg"
          />
          <div className="relative leading-[16px] font-medium">Messagerie</div>
        </div>
        <div className="w-[46px] flex flex-col items-center justify-start gap-[4px]">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/component-113.svg"
          />
          <div className="relative leading-[16px] font-medium">Compte</div>
        </div>
      </div>
    </div>
  );
};

export default VoirApportPublic;
