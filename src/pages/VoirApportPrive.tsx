import { FunctionComponent } from "react";

const VoirApportPrive: FunctionComponent = () => {
  return (
    <div className="relative w-full overflow-y-auto flex flex-col items-start justify-start text-center text-3xs text-gray-900 font-text-xs-leading-4-font-normal">
      <div className="self-stretch bg-white flex flex-row items-center justify-between py-[9px] px-3.5 z-[0] text-mini text-black">
        <div className="w-[54px] h-[21px] flex flex-col items-center justify-end">
          <b className="relative tracking-[-0.3px] inline-block w-[54px]">
            21:41
          </b>
        </div>
        <img
          className="relative w-[66.66px] h-[11.34px]"
          alt=""
          src="/group-721.svg"
        />
      </div>
      <div className="self-stretch bg-white flex flex-row items-start justify-start z-[1] text-left text-base text-gray-700 border-b-[2px] border-solid border-whitesmoke-400">
        <div className="flex flex-row items-center justify-start p-4">
          <img
            className="rounded-xl w-10 h-10 object-cover"
            alt=""
            src="/avatar7@2x.png"
          />
        </div>
        <div className="flex-1 h-[72px] flex flex-row items-center justify-start py-0 pr-4 pl-0 box-border gap-[16px]">
          <div className="self-stretch flex-1 flex flex-row items-center justify-start py-[9px] px-0">
            <b className="flex-1 relative leading-[24px]">Clément Zablocki</b>
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
      <div className="bg-gray-50 w-[390px] overflow-y-auto shrink-0 flex flex-col items-start justify-start pt-5 px-4 pb-7 box-border gap-[28px] z-[2] text-left text-lg">
        <div className="self-stretch flex flex-row items-center justify-start gap-[11px] text-[9.83px] text-darkgray-200">
          <div className="rounded-lg bg-white w-[38px] h-[38px] flex flex-row items-center justify-center p-1.5 box-border gap-[6px]">
            <img className="relative w-1.5 h-2.5" alt="" src="/icon211.svg" />
            <div className="relative leading-[14.05px] font-semibold hidden">
              Site web
            </div>
          </div>
          <div className="flex-1 relative text-base leading-[20px] font-semibold text-gray-500 overflow-hidden text-ellipsis whitespace-nowrap">
            Développement de l’application web Federage
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-[18px] text-5xl">
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
        <div className="self-stretch rounded-lg bg-white flex flex-col items-center justify-start py-[22px] px-4 gap-[24px] border-[2px] border-solid border-gray-200">
          <div className="self-stretch flex flex-row items-start justify-center">
            <div className="flex-1 flex flex-row items-center justify-center gap-[12px]">
              <img
                className="rounded-6xl w-[50px] h-[50px] object-cover"
                alt=""
                src="/avatar8@2x.png"
              />
              <div className="flex-1 relative leading-[26px] font-semibold">
                Arnaud RAMPONNEAU
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[21px] text-base">
            <div className="w-[130px] flex flex-col items-start justify-start gap-[19px]">
              <div className="self-stretch h-[47px] flex flex-col items-start justify-start gap-[7px]">
                <div className="self-stretch relative leading-[20px] font-medium">
                  Prix proposé
                </div>
                <div className="self-stretch relative leading-[20px] font-semibold text-dimgray">
                  200,00€
                </div>
              </div>
              <div className="self-stretch h-[47px] flex flex-col items-start justify-start gap-[7px]">
                <div className="relative leading-[20px] font-medium">
                  Délai de livraison
                </div>
                <div className="relative leading-[20px] font-semibold text-dimgray">{`23 septembre 2023 `}</div>
              </div>
            </div>
            <div className="w-[326px] h-[79px] flex flex-col items-center justify-start gap-[12px] text-white">
              <div className="rounded-lg bg-gray-900 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] w-[326px] h-[46px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-2.5 px-[18px] box-border gap-[8px]">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/plus3.svg"
                />
                <div className="relative leading-[20px] font-semibold">
                  Accepter
                </div>
              </div>
              <div className="w-[180.3px] flex flex-row items-center justify-center text-sm text-gray-500">
                <div className="relative leading-[20.03px] font-semibold">{`Refuser `}</div>
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
              <div className="w-[201px] h-11 flex flex-col items-center justify-center gap-[4px]">
                <div className="flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="relative w-[19px] h-[19px] overflow-hidden shrink-0"
                    alt=""
                    src="/check-circle2.svg"
                  />
                  <div className="relative leading-[20px] font-semibold">
                    Démarrage de l’apport
                  </div>
                </div>
                <div className="self-stretch relative text-xs leading-[20px] font-medium text-dimgray">
                  01/04/2023 10h40 UTC+2
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-[5px] text-right text-3xs text-gray-500">
              <div className="relative leading-[20px] font-medium">#18127</div>
              <img
                className="relative w-[11.11px] h-[11.11px]"
                alt=""
                src="/icon7.svg"
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
                  Icône à intégrer
                </div>
                <img
                  className="relative w-[18px] h-[18px]"
                  alt=""
                  src="/vector.svg"
                />
              </div>
              <div className="self-stretch relative text-xs leading-[20px] font-medium text-dimgray">
                icône_eng.svg
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
      </div>
      <div className="bg-white box-border w-[390px] flex flex-row items-center justify-between py-5 px-[30px] z-[3] border-t-[2px] border-solid border-whitesmoke-300">
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
            src="/component-56.svg"
          />
          <div className="relative leading-[16px] font-medium">Explorer</div>
        </div>
        <div className="w-[46px] flex flex-col items-center justify-start gap-[4px]">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/component-19.svg"
          />
          <div className="relative leading-[16px] font-medium">Messagerie</div>
        </div>
        <div className="w-[46px] h-[46px] flex flex-col items-center justify-start gap-[4px]">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/component-131.svg"
          />
          <div className="relative leading-[16px] font-medium">Compte</div>
        </div>
      </div>
      <div className="self-stretch my-0 mx-[!important] absolute top-[758.78px] left-[0px] bg-white hidden flex-row items-center justify-between py-5 px-[30px] z-[4] border-t-[2px] border-solid border-whitesmoke-300">
        <div className="w-[46px] flex flex-col items-center justify-start gap-[4px] text-mediumblue-100">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/component-26.svg"
          />
          <div className="relative leading-[16px] font-medium">Accueil</div>
        </div>
        <div className="w-[46px] flex flex-col items-center justify-start gap-[4px]">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/component-57.svg"
          />
          <div className="relative leading-[16px] font-medium">Explorer</div>
        </div>
        <div className="w-[46px] flex flex-col items-center justify-start gap-[4px]">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/component-110.svg"
          />
          <div className="relative leading-[16px] font-medium">Messagerie</div>
        </div>
        <div className="w-[46px] flex flex-col items-center justify-start gap-[4px]">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/component-17.svg"
          />
          <div className="relative leading-[16px] font-medium">Compte</div>
        </div>
      </div>
    </div>
  );
};

export default VoirApportPrive;
