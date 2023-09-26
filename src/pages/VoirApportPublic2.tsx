import { FunctionComponent } from "react";

const VoirApportPublic2: FunctionComponent = () => {
  return (
    <div className="relative w-full overflow-y-auto flex flex-col items-start justify-start text-center text-3xs text-gray-900 font-text-sm-leading-5-font-medium">
      <div className="self-stretch bg-gray-50 flex flex-row items-center justify-between py-[9px] px-3.5 z-[0] text-mini text-black">
        <div className="w-[54px] h-[21px] flex flex-col items-center justify-end">
          <b className="relative tracking-[-0.3px] inline-block w-[54px]">
            21:41
          </b>
        </div>
        <img
          className="relative w-[66.66px] h-[11.34px]"
          alt=""
          src="/group-7.svg"
        />
      </div>
      <div className="self-stretch bg-gray-50 flex flex-col items-start justify-start pt-5 px-4 pb-7 gap-[28px] z-[1] text-left text-[9.83px] text-darkgray-200">
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
        <div className="self-stretch flex flex-col items-center justify-start gap-[18px] text-5xl text-gray-500">
          <div className="self-stretch flex flex-col items-start justify-center gap-[19px]">
            <b className="self-stretch relative leading-[32px] text-gray-900">
              Traduction du site et de l’application en anglais
            </b>
            <div className="self-stretch relative text-base leading-[24px]">
              <span className="font-medium">
                <span>Publiée par</span>
                <span className="text-black">{` `}</span>
              </span>
              <span className="font-semibold text-mediumblue-200">
                Arnaud RAMPONNEAU
              </span>
            </div>
            <div className="self-stretch relative text-lg leading-[24px] font-semibold">{`Repenser et modifier l'interface utilisateur, les fonctionnalités et les interactions de l'application pour la rendre plus intuitive, efficace et ergonomique auprès du grand public. `}</div>
          </div>
          <div className="self-stretch rounded-lg bg-white h-[46px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-3 px-5 box-border text-sm text-dimgray">
            <div className="flex flex-row items-center justify-center gap-[8px]">
              <div className="relative leading-[20.03px] font-semibold">
                Afficher plus
              </div>
              <img className="relative w-2.5 h-1.5" alt="" src="/icon10.svg" />
            </div>
          </div>
        </div>
        <div className="self-stretch rounded-lg bg-white overflow-hidden flex flex-col items-start justify-start p-4 text-lg text-gray-900">
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[13px]">
              <div className="self-stretch flex flex-row items-start justify-between">
                <div className="relative leading-[20px] font-semibold flex items-end w-[225px] shrink-0">
                  Statut de l’apport
                </div>
                <div className="rounded-10xs bg-gray-100 flex flex-row items-start justify-start py-0 px-1.5 text-3xs text-dimgray">
                  <b className="relative leading-[20px]">En attente</b>
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
                  <div className="relative leading-[20px] font-medium">
                    Délai de livraison
                  </div>
                  <div className="relative leading-[20px] font-semibold text-dimgray">{`23 septembre 2023 `}</div>
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-lg bg-gray-900 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] h-[46px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-[9px] px-[17px] box-border text-sm text-white">
              <div className="relative leading-[20px] font-semibold">
                Répondre
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-gray-50 flex flex-col items-start justify-start pt-0 px-4 pb-6 gap-[20px] z-[2] text-left text-base">
        <div className="self-stretch flex flex-col items-start justify-start">
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
        <div className="self-stretch rounded-lg bg-white flex flex-col items-start justify-start p-4 gap-[20px] text-lg">
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
                <div className="relative leading-[20px] font-semibold hidden">
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
        <div className="self-stretch rounded-lg bg-white flex flex-row items-center justify-start p-4 gap-[8px] text-dimgray">
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
      <div className="self-stretch bg-white flex flex-row items-center justify-between py-5 px-[30px] z-[3] border-t-[2px] border-solid border-whitesmoke-300">
        <div className="w-[46px] flex flex-col items-center justify-start gap-[4px]">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/component-24.svg"
          />
          <div className="relative leading-[16px] font-medium">Accueil</div>
        </div>
        <div className="w-[46px] flex flex-col items-center justify-start gap-[4px] text-mediumblue-100">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/component-54.svg"
          />
          <div className="relative leading-[16px] font-medium">Explorer</div>
        </div>
        <div className="w-[46px] flex flex-col items-center justify-start gap-[4px]">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/component-118.svg"
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
      <div className="self-stretch my-0 mx-[!important] absolute top-[758.78px] left-[0px] bg-white hidden flex-row items-center justify-between py-5 px-[30px] z-[4] border-t-[2px] border-solid border-whitesmoke-300">
        <div className="w-[46px] flex flex-col items-center justify-start gap-[4px] text-mediumblue-100">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/component-210.svg"
          />
          <div className="relative leading-[16px] font-medium">Accueil</div>
        </div>
        <div className="w-[46px] flex flex-col items-center justify-start gap-[4px]">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/component-59.svg"
          />
          <div className="relative leading-[16px] font-medium">Explorer</div>
        </div>
        <div className="w-[46px] flex flex-col items-center justify-start gap-[4px]">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/component-115.svg"
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

export default VoirApportPublic2;
