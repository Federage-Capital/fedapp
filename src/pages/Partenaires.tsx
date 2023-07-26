import { FunctionComponent } from "react";

const Partenaires: FunctionComponent = () => {
  return (
    <div className="relative bg-whitesmoke-200 w-full overflow-y-auto flex flex-col items-start justify-start text-left text-base text-gray-700 font-text-sm-leading-5-font-medium">
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
      <div className="self-stretch bg-white flex flex-col py-5 px-4 items-start justify-start gap-[30px] text-mediumblue-100">
        <div className="w-52 flex flex-row items-start justify-start gap-[6px]">
          <img
            className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
            alt=""
            src="/users1.svg"
          />
          <div className="relative leading-[20px] font-semibold">
            Partenaires
          </div>
        </div>
        <div className="relative text-11xl leading-[24px] font-semibold text-gray-900 inline-block w-52">
          18 partenaires
        </div>
        <div className="self-stretch rounded-lg bg-mediumblue-100 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] h-[46px] overflow-hidden shrink-0 flex flex-row py-2.5 px-[18px] box-border items-center justify-center gap-[8px] text-white">
          <img
            className="relative w-5 h-5 overflow-hidden shrink-0"
            alt=""
            src="/plus.svg"
          />
          <div className="relative leading-[20px] font-semibold">
            Inviter un membre
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col py-9 px-4 items-start justify-start text-darkgray-200">
        <div className="self-stretch rounded-lg bg-white overflow-hidden flex flex-row items-center justify-start border-[2px] border-solid border-gray-200">
          <div className="flex-1 flex flex-row py-[9px] px-[13px] items-center justify-start gap-[8px]">
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0"
              alt=""
              src="/search.svg"
            />
            <div className="flex-1 relative leading-[24px] font-medium">
              Recherche
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col py-5 px-0 items-start justify-start gap-[12px] text-dimgray">
          <div className="self-stretch rounded-lg bg-white flex flex-col py-0 px-4 items-start justify-start">
            <div className="self-stretch flex flex-row py-4 px-0 items-center justify-start gap-[16px]">
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
                  Dernière activité : il y a 2 heures
                </div>
              </div>
              <div className="rounded-3xs w-[30px] h-[30px] overflow-hidden shrink-0 flex flex-row items-center justify-center">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/dots-vertical.svg"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-lg bg-white flex flex-col py-0 px-4 items-start justify-start">
            <div className="self-stretch flex flex-row py-4 px-0 items-center justify-start gap-[16px]">
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
                  Dernière activité : il y a 2 heures
                </div>
              </div>
              <div className="rounded-3xs w-[30px] h-[30px] overflow-hidden shrink-0 flex flex-row items-center justify-center">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/dots-vertical.svg"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-lg bg-white flex flex-col py-0 px-4 items-start justify-start">
            <div className="self-stretch flex flex-row py-4 px-0 items-center justify-start gap-[16px]">
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
                  Dernière activité : il y a 2 heures
                </div>
              </div>
              <div className="rounded-3xs w-[30px] h-[30px] overflow-hidden shrink-0 flex flex-row items-center justify-center">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/dots-vertical.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-white flex flex-row py-5 px-[30px] items-center justify-between text-center text-3xs text-gray-900 border-t-[2px] border-solid border-whitesmoke-300">
        <div className="w-[46px] flex flex-col items-center justify-start gap-[4px]">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/component-22.svg"
          />
          <div className="relative leading-[16px] font-medium">Accueil</div>
        </div>
        <div className="w-[46px] flex flex-col items-center justify-start gap-[4px]">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/component-11.svg"
          />
          <div className="relative leading-[16px] font-medium">Messagerie</div>
        </div>
        <div className="w-[46px] flex flex-col items-center justify-start gap-[4px] text-mediumblue-100">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/component-51.svg"
          />
          <div className="relative leading-[16px] font-medium">Projets</div>
        </div>
        <div className="w-[46px] h-[46px] flex flex-col items-center justify-start gap-[4px]">
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

export default Partenaires;
