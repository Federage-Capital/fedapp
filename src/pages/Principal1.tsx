import { FunctionComponent } from "react";

const Principal1: FunctionComponent = () => {
  return (
    <div className="relative bg-white w-full overflow-y-auto flex flex-col items-center justify-start text-left text-mini text-black font-text-sm-leading-5-font-normal">
      <div className="self-stretch bg-white flex flex-row py-[9px] px-3.5 items-center justify-between text-center">
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
      <div className="self-stretch bg-white flex flex-row items-start justify-start text-base text-gray-700 border-b-[2px] border-solid border-whitesmoke-400">
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
          <div className="rounded-2xl bg-white overflow-hidden flex flex-row p-1 items-center justify-center">
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/bell.svg"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch overflow-y-auto shrink-0 flex flex-col items-center justify-start text-9xl">
        <div className="self-stretch bg-whitesmoke-200 overflow-y-auto shrink-0 flex flex-col pt-8 px-4 pb-12 items-start justify-start">
          <div className="self-stretch flex flex-col pt-0 px-0 pb-[72px] items-start justify-start">
            <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
              <div className="self-stretch overflow-y-auto flex flex-col items-center justify-start gap-[24px]">
                <div className="self-stretch flex flex-row items-center justify-center gap-[24px]">
                  <div className="self-stretch flex-1 flex flex-col items-start justify-center">
                    <div className="relative leading-[20px] font-semibold">
                      Bonjour 👋
                    </div>
                  </div>
                  <img
                    className="relative w-6 h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/chart-bar2.svg"
                  />
                  <div className="rounded-xl bg-mediumblue-100 overflow-hidden flex flex-row p-[3px] items-center justify-center">
                    <img
                      className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/plus-sm.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-between text-sm text-mediumblue-100">
                  <div className="flex-1 rounded-lg bg-white h-[39.96px] flex flex-col py-3 px-4 box-border items-center justify-center">
                    <div className="h-[15.96px] flex flex-col items-center justify-center">
                      <div className="flex flex-row items-center justify-center gap-[6px]">
                        <img
                          className="relative w-6 h-6 overflow-hidden shrink-0"
                          alt=""
                          src="/document-add1.svg"
                        />
                        <div className="relative leading-[20.03px] font-semibold">
                          Projets
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 rounded-lg flex flex-col py-3 px-4 items-center justify-center text-dimgray">
                    <div className="h-[15.96px] flex flex-col items-center justify-center">
                      <div className="flex flex-col items-center justify-center">
                        <div className="flex flex-row items-center justify-center gap-[6px]">
                          <img
                            className="relative w-6 h-6 overflow-hidden shrink-0"
                            alt=""
                            src="/pencil-alt1.svg"
                          />
                          <div className="relative leading-[20.03px] font-semibold">
                            Apports
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-center text-xs text-white">
                <div className="self-stretch rounded-lg bg-whitesmoke-700 overflow-hidden flex flex-row py-3 px-4 items-center justify-between">
                  <div className="w-[184px] flex flex-row items-center justify-start gap-[6px]">
                    <div className="rounded-3xs bg-gray-800 flex flex-col py-0.5 px-3 items-center justify-center">
                      <div className="relative leading-[16px] font-semibold">
                        2
                      </div>
                    </div>
                    <div className="h-[15.96px] flex flex-col items-center justify-center text-left text-sm text-dimgray">
                      <div className="flex flex-row items-center justify-center">
                        <div className="relative leading-[20.03px] font-semibold">
                          Projets en attente
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg bg-gainsboro-300 flex flex-row py-1.5 px-3 items-center justify-end text-sm text-dimgray">
                    <div className="relative leading-[14.05px] font-semibold">
                      Afficher
                    </div>
                  </div>
                </div>
                <div className="rounded-lg bg-white box-border w-[358px] flex flex-col py-5 px-4 items-start justify-start gap-[24px] text-left text-9xl text-gray-900 border-[2px] border-solid border-whitesmoke-400">
                  <div className="self-stretch flex flex-col items-center justify-start gap-[18px]">
                    <div className="self-stretch flex flex-row items-start justify-start gap-[10px]">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
                        <div className="self-stretch flex flex-row items-center justify-start">
                          <div className="flex flex-row items-center justify-start gap-[12px]">
                            <div className="relative leading-[20.03px] font-semibold">
                              <span>11 000,</span>
                              <span className="text-darkgray-300">00</span>
                              <span>€</span>
                            </div>
                            <div className="rounded-45xl bg-gray-100 flex flex-row py-[8.960001945495605px] px-[10.240002632141113px] items-start justify-start [transform:_rotate(90deg)] [transform-origin:0_0]">
                              <img
                                className="relative w-[6.08px] h-[3.65px]"
                                alt=""
                                src="/icon1.svg"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch relative text-base leading-[20px] font-semibold">
                          <span>{`Développement de l’application web mobile pour `}</span>
                          <span className="text-mediumblue-100">Federage</span>
                          <span className="text-black">.</span>
                        </div>
                      </div>
                      <img
                        className="relative rounded-6xs w-[42px] h-[42px] object-cover"
                        alt=""
                        src="/rectangle-41554@2x.png"
                      />
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-start gap-[8px] text-[11.21px] text-mediumblue-100">
                      <div className="flex-1 rounded-[6.41px] bg-lavender overflow-hidden flex flex-col p-3 items-center justify-center">
                        <div className="h-[12.78px] flex flex-col items-center justify-center">
                          <div className="flex flex-row items-center justify-center gap-[4.8px]">
                            <img
                              className="relative w-[19.22px] h-[19.22px] overflow-hidden shrink-0"
                              alt=""
                              src="/sparkles1.svg"
                            />
                            <div className="relative leading-[16.04px] font-semibold">
                              Apport
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 rounded-[6.41px] bg-lavender overflow-hidden flex flex-row p-3 items-center justify-center">
                        <div className="h-[12.78px] flex flex-col items-center justify-center">
                          <div className="flex flex-row items-center justify-center gap-[4.8px]">
                            <img
                              className="relative w-[19.2px] h-[19.2px] overflow-hidden shrink-0"
                              alt=""
                              src="/user-add.svg"
                            />
                            <div className="relative leading-[16.04px] font-semibold">
                              Inviter
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 rounded-[8.64px] bg-lavender h-9 flex flex-row p-3 box-border items-center justify-center">
                        <img
                          className="relative w-[21.6px] h-[21.6px] overflow-hidden shrink-0"
                          alt=""
                          src="/dots-vertical.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[20px] text-sm text-black">
                    <div className="self-stretch flex flex-row items-start justify-between">
                      <div className="relative leading-[20.03px] font-semibold">
                        Transactions
                      </div>
                      <div className="relative leading-[20.03px] font-semibold text-mediumblue-100">
                        Tout voir
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[12px] text-base">
                      <div className="self-stretch rounded-lg flex flex-row items-center justify-start gap-[16px]">
                        <img
                          className="rounded-xl w-10 h-10 object-cover"
                          alt=""
                          src="/avatar2@2x.png"
                        />
                        <div className="flex-1 flex flex-row items-center justify-between">
                          <div className="w-[134px] flex flex-col items-start justify-start">
                            <div className="self-stretch relative leading-[20px] font-semibold">
                              CGU service
                            </div>
                            <div className="self-stretch relative text-sm leading-[24px] font-semibold text-darkgray-200 mt-[-2px]">
                              Aujourd’hui
                            </div>
                          </div>
                          <div className="self-stretch flex-1 flex flex-col items-end justify-center text-right text-crimson">
                            <div className="relative leading-[20px] font-semibold">
                              - 800,00€
                            </div>
                            <div className="self-stretch relative text-sm leading-[20px] font-semibold text-darkgray-200">
                              Validée
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch rounded-lg flex flex-row items-center justify-start gap-[16px]">
                        <img
                          className="rounded-xl w-10 h-10 object-cover"
                          alt=""
                          src="/avatar3@2x.png"
                        />
                        <div className="flex-1 flex flex-row items-center justify-between">
                          <div className="w-[134px] flex flex-col items-start justify-start">
                            <div className="self-stretch relative leading-[20px] font-semibold">
                              iOS PWA
                            </div>
                            <div className="self-stretch relative text-sm leading-[24px] font-semibold text-darkgray-200 mt-[-2px]">
                              Hier, 19h23
                            </div>
                          </div>
                          <div className="self-stretch flex-1 flex flex-col items-end justify-center text-right text-crimson">
                            <div className="relative leading-[20px] font-semibold">
                              - 1 000,00€
                            </div>
                            <div className="self-stretch relative text-sm leading-[20px] font-semibold text-darkgray-200">
                              Validée
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch rounded-lg flex flex-row items-center justify-start gap-[16px]">
                        <img
                          className="rounded-xl w-10 h-10 object-cover"
                          alt=""
                          src="/avatar4@2x.png"
                        />
                        <div className="flex-1 flex flex-row items-center justify-between">
                          <div className="w-[134px] flex flex-col items-start justify-start">
                            <div className="self-stretch relative leading-[20px] font-semibold">
                              Inté. éléments graphiques
                            </div>
                            <div className="self-stretch relative text-sm leading-[24px] font-semibold text-darkgray-200 mt-[-2px]">
                              Avant-hier, 09h11
                            </div>
                          </div>
                          <div className="self-stretch flex-1 flex flex-col items-end justify-center text-right text-crimson">
                            <div className="relative leading-[20px] font-semibold">
                              - 2 200,00€
                            </div>
                            <div className="self-stretch relative text-sm leading-[20px] font-semibold text-darkgray-200">
                              Validée
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch rounded-lg flex flex-row items-center justify-start gap-[16px]">
                        <img
                          className="rounded-xl w-10 h-10 object-cover"
                          alt=""
                          src="/avatar5@2x.png"
                        />
                        <div className="flex-1 flex flex-row items-center justify-between">
                          <div className="w-[134px] flex flex-col items-start justify-start">
                            <div className="self-stretch relative leading-[20px] font-semibold">
                              Abonnements mensuels
                            </div>
                            <div className="self-stretch relative text-sm leading-[24px] font-semibold text-darkgray-200 mt-[-2px]">
                              Semaine dernière
                            </div>
                          </div>
                          <div className="self-stretch flex-1 flex flex-col items-end justify-center text-right text-seagreen">
                            <div className="relative leading-[20px] font-semibold">
                              + 3 400,00€
                            </div>
                            <div className="self-stretch relative text-sm leading-[20px] font-semibold text-darkgray-200">
                              Validée
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch bg-white flex flex-row py-5 px-[30px] items-center justify-between mt-[-86px] text-center text-3xs text-gray-900 border-t-[2px] border-solid border-whitesmoke-300">
          <div className="w-[46px] flex flex-col items-center justify-start gap-[4px] text-mediumblue-100">
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/component-21.svg"
            />
            <div className="relative leading-[16px] font-medium">Accueil</div>
          </div>
          <div className="w-[46px] flex flex-col items-center justify-start gap-[4px]">
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/component-52.svg"
            />
            <div className="relative leading-[16px] font-medium">Projets</div>
          </div>
          <div className="w-[46px] flex flex-col items-center justify-start gap-[4px]">
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/component-13.svg"
            />
            <div className="relative leading-[16px] font-medium">
              Messagerie
            </div>
          </div>
          <div className="w-[46px] flex flex-col items-center justify-start gap-[4px]">
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/component-14.svg"
            />
            <div className="relative leading-[16px] font-medium">Compte</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Principal1;
