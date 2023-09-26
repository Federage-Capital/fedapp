import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const ProjetOpratio3: FunctionComponent = () => {
  const navigate = useNavigate();

  const onProjetOpratio3ContainerClick = useCallback(() => {
    navigate("/-voirapportprive");
  }, [navigate]);

  return (
    <div
      className="relative bg-white w-full overflow-y-auto flex flex-col items-start justify-start cursor-pointer text-left text-mini text-gray-900 font-text-sm-leading-5-font-medium"
      onClick={onProjetOpratio3ContainerClick}
    >
      <div className="self-stretch bg-white flex flex-row items-center justify-between py-[9px] px-3.5 text-center text-black">
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
      <div className="self-stretch bg-white flex flex-row items-start justify-start text-base text-gray-700 border-b-[2px] border-solid border-whitesmoke-400">
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
      <div className="self-stretch bg-gray-50 flex flex-col items-center justify-start py-[22px] px-4 gap-[24px] text-5xl">
        <div className="self-stretch flex flex-row items-start justify-center gap-[42px]">
          <b className="flex-1 relative leading-[32px]">
            Développement de l’application web Federage
          </b>
          <div className="rounded-3xs bg-gray-100 w-[30px] h-[30px] overflow-hidden shrink-0 flex flex-row items-center justify-center">
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0"
              alt=""
              src="/dots-vertical11.svg"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[20px] text-base text-mediumblue-100">
          <div className="self-stretch flex flex-col items-start justify-start gap-[3px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[14px]">
              <div className="self-stretch flex flex-row items-center justify-between">
                <div className="relative leading-[20px] font-semibold">
                  app.federage.com/devappfederage
                </div>
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/link.svg"
                />
              </div>
              <div className="self-stretch relative leading-[20px] font-medium text-gray-500">
                Recherche un procédé agro-alimentaire pour expérimenter des
                solutions nutritionnelles médicales.
              </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-[8px] text-sm">
              <div className="relative leading-[20.03px] font-semibold">
                Lire plus
              </div>
              <img className="relative w-2.5 h-1.5" alt="" src="/icon311.svg" />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-between text-xs text-dimgray">
            <div className="flex-1 flex flex-row items-center justify-start py-0 px-0.5 gap-[6px]">
              <img
                className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                alt=""
                src="/calendar3.svg"
              />
              <div className="relative leading-[20px] font-medium">
                Sep. 2023
              </div>
            </div>
            <div className="flex-1 flex flex-row items-center justify-start py-0 px-0.5 gap-[6px]">
              <img
                className="relative w-5 h-5 overflow-hidden shrink-0"
                alt=""
                src="/cash2.svg"
              />
              <div className="relative leading-[20px] font-medium">
                Capital ouvert
              </div>
            </div>
            <div className="flex-1 flex flex-row items-center justify-start py-0 px-0.5 gap-[6px]">
              <img
                className="relative w-3 h-[12.86px]"
                alt=""
                src="/icon5.svg"
              />
              <div className="relative leading-[20px] font-medium">Admin</div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-gray-50 flex flex-row items-start justify-start pt-6 px-4 pb-12 text-sm text-white">
        <div className="flex-1 flex flex-col items-start justify-start gap-[20px]">
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch rounded-lg bg-white flex flex-col items-start justify-start py-4 pr-4 pl-[17px] gap-[20px] border-[2px] border-solid border-gray-200">
              <div className="self-stretch flex flex-row items-start justify-between">
                <div className="rounded-lg bg-gray-100 flex flex-row items-center justify-center p-2.5">
                  <img
                    className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                    alt=""
                    src="/sparkles.svg"
                  />
                </div>
                <div className="rounded-lg bg-gray-900 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] overflow-hidden flex flex-row items-center justify-between py-[9px] px-[17px]">
                  <div className="relative leading-[20px] font-semibold">
                    Ajouter un apport
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-center gap-[5px] text-5xl text-gray-900">
                <div className="relative leading-[20px] font-semibold">3</div>
                <div className="relative text-sm leading-[20px] font-semibold text-gray-500">
                  Apports enregistrés
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-lg bg-white flex flex-col items-start justify-start p-4 gap-[20px] text-3xs text-mediumblue-200">
            <div className="self-stretch flex flex-col items-center justify-start gap-[22px]">
              <div className="self-stretch flex flex-row items-center justify-between">
                <div className="flex flex-row items-center justify-start">
                  <img
                    className="rounded-xl w-7 h-7 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/avatar@2x.png"
                  />
                  <img
                    className="rounded-xl w-7 h-7 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/avatar1@2x.png"
                  />
                  <img
                    className="rounded-xl w-7 h-7 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/avatar2@2x.png"
                  />
                </div>
                <div className="rounded-10xs bg-lavender flex flex-row items-center justify-start py-0 px-1">
                  <b className="relative leading-[20px]">En cours</b>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[24px] text-xl text-gray-900">
                <div className="self-stretch h-10 flex flex-row items-center justify-start">
                  <div className="flex-1 relative leading-[26px] font-semibold">
                    Traduction du site et de l’application anglais
                  </div>
                </div>
                <div className="self-stretch relative text-base leading-[20px] font-semibold text-dimgray">{`690,00€ • 19 septembre 2023 `}</div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center text-sm text-dimgray">
              <div className="relative leading-[20.03px] font-semibold">
                <span>{`Par `}</span>
                <span className="text-mediumblue-100">Arnaud RAMPONNEAU</span>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch rounded-lg bg-white flex flex-col items-start justify-start py-4 pr-4 pl-[17px] gap-[20px] border-[2px] border-solid border-gray-200">
              <div className="self-stretch flex flex-row items-start justify-between">
                <div className="rounded-lg bg-gray-100 w-[38px] h-[38px] flex flex-row items-center justify-center p-2.5 box-border">
                  <img
                    className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                    alt=""
                    src="/user-group1.svg"
                  />
                </div>
                <div className="rounded-lg bg-gray-900 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] overflow-hidden flex flex-row items-center justify-between py-[9px] px-[17px]">
                  <div className="relative leading-[20px] font-semibold">
                    Inviter un membre
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-center gap-[5px] text-5xl text-gray-900">
                <div className="relative leading-[20px] font-semibold">7</div>
                <div className="relative text-sm leading-[20px] font-semibold text-gray-500">
                  Membres actifs
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-lg bg-white flex flex-col items-start justify-start py-0 px-4 text-dimgray">
            <div className="self-stretch flex flex-row items-center justify-start py-4 px-0 gap-[16px]">
              <img
                className="rounded-xl w-6 h-6 object-cover"
                alt=""
                src="/avatar91@2x.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start">
                <b className="self-stretch relative leading-[20px]">
                  Léonard RENARD
                </b>
              </div>
              <div className="flex flex-row items-center justify-start gap-[14px] text-right text-xs text-gray-500">
                <div className="relative leading-[20px] font-medium">
                  12 237€ (21,52%)
                </div>
                <img
                  className="relative w-1.5 h-2.5"
                  alt=""
                  src="/icon112.svg"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch rounded-lg bg-white flex flex-col items-start justify-start py-4 pr-4 pl-[17px] gap-[20px] border-[2px] border-solid border-gray-200">
              <div className="self-stretch flex flex-row items-start justify-between">
                <div className="rounded-lg bg-gray-100 w-[38px] h-[38px] flex flex-row items-center justify-center p-2.5 box-border">
                  <img
                    className="relative w-5 h-5 overflow-hidden shrink-0"
                    alt=""
                    src="/cash3.svg"
                  />
                </div>
                <div className="rounded-lg bg-gray-900 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] overflow-hidden flex flex-row items-center justify-between py-[9px] px-[17px]">
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
      <div className="self-stretch bg-white flex flex-row items-center justify-between py-5 px-[30px] text-center text-3xs border-t-[2px] border-solid border-whitesmoke-300">
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
            src="/component-18.svg"
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
    </div>
  );
};

export default ProjetOpratio3;
