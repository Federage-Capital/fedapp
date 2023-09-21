import { FunctionComponent } from "react";

const Principal: FunctionComponent = () => {
  return (
    <div className="relative bg-white w-full overflow-y-auto flex flex-col items-start justify-start text-left text-base text-gray-700 font-text-2xl-leading-8-font-bold">
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
              className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
              alt=""
              src="/bell1.png"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch bg-whitesmoke-200 flex flex-col pt-8 px-4 pb-12 items-start justify-start text-9xl text-black2">
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
            <div className="self-stretch overflow-y-auto flex flex-col items-center justify-start gap-[24px]">
              <div className="self-stretch flex flex-row items-center justify-center gap-[24px]">
                <div className="self-stretch flex-1 flex flex-col items-start justify-center">
                  <div className="relative leading-[20px] font-semibold inline-block w-[143px]">
                    Bonjour 👋
                  </div>
                </div>
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/chart-bar3.png"
                />
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/star.png"
                />
              </div>
              <div className="self-stretch flex flex-row items-start justify-between text-sm text-dimgray">
                <div className="flex-1 rounded-lg bg-white h-[39.96px] flex flex-col py-3 px-4 box-border items-center justify-center text-mediumblue-100">
                  <div className="h-[15.96px] flex flex-col items-center justify-center">
                    <div className="flex flex-row items-center justify-center gap-[6px]">
                      <img
                        className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
                        alt=""
                        src="/document-add4.png"
                      />
                      <div className="relative leading-[20.03px] font-semibold">
                        Projets
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 rounded-lg flex flex-col py-3 px-4 items-center justify-center">
                  <div className="h-[15.96px] flex flex-col items-center justify-center">
                    <div className="flex flex-row items-center justify-center gap-[6px]">
                      <img
                        className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
                        alt=""
                        src="/document-text1.png"
                      />
                      <div className="relative leading-[20.03px] font-semibold">
                        Contrats
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 rounded-lg flex flex-col py-3 px-4 items-center justify-center">
                  <div className="h-[15.96px] flex flex-col items-center justify-center">
                    <div className="flex flex-row items-center justify-center gap-[6px]">
                      <img
                        className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
                        alt=""
                        src="/pencil-alt4.png"
                      />
                      <div className="relative leading-[20.03px] font-semibold">
                        Brouillon
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-lg bg-white flex flex-col py-[25px] px-[26px] items-center justify-start gap-[20px] text-center text-lg text-gray-900 border-[2px] border-solid border-gray-2001">
              <img
                className="relative w-[143.4px] h-40 object-cover"
                alt=""
                src="/freepikcharactersinject471.png"
              />
              <div className="self-stretch flex flex-col items-center justify-center gap-[10px]">
                <div className="self-stretch relative leading-[20px] font-semibold">
                  Créer un premier projet
                </div>
                <div className="self-stretch relative text-sm leading-[20px] font-medium text-dimgray">
                  <span>
                    Initiez un projet dans lequel vous impliquez vos partenaire.
                  </span>
                  <span className="text-gray-500">{` `}</span>
                  <span className="text-mediumblue-100">
                    Lisez notre guide.
                  </span>
                </div>
              </div>
              <div className="self-stretch rounded-lg bg-mediumblue-100 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] overflow-hidden flex flex-row py-[13px] px-[25px] items-center justify-center text-base text-white">
                <div className="flex-1 relative leading-[24px] font-semibold">
                  Créer un projet
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-white flex flex-row py-5 px-[30px] items-center justify-between text-center text-3xs text-gray-900 border-t-[2px] border-solid border-whitesmoke-300">
        <div className="w-[46px] flex flex-col items-center justify-start gap-[4px] text-mediumblue-100">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
            alt=""
            src="/component-21.png"
          />
          <div className="relative leading-[16px] font-medium">Accueil</div>
        </div>
        <div className="w-[46px] flex flex-col items-center justify-start gap-[4px]">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
            alt=""
            src="/component-1.png"
          />
          <div className="relative leading-[16px] font-medium">Messagerie</div>
        </div>
        <div className="w-[46px] flex flex-col items-center justify-start gap-[4px]">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
            alt=""
            src="/component-52.png"
          />
          <div className="relative leading-[16px] font-medium">Projets</div>
        </div>
        <div className="w-[46px] flex flex-col items-center justify-start gap-[4px]">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
            alt=""
            src="/component-11.png"
          />
          <div className="relative leading-[16px] font-medium">Compte</div>
        </div>
      </div>
    </div>
  );
};

export default Principal;
