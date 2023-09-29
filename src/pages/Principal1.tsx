import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Principal1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onMenuDeBaseClick = useCallback(() => {
    navigate("/-principal2");
  }, [navigate]);

  return (
    <div className="relative bg-whitesmoke-200 w-full h-[844px] overflow-y-auto flex flex-col items-center justify-start text-left text-mini text-black font-text-xs-leading-4-font-normal">
      <div className="self-stretch bg-whitesmoke-200 flex flex-row items-center justify-between py-[9px] px-3.5 text-center">
        <div className="w-[54px] h-[21px] flex flex-col items-center justify-end">
          <b className="relative tracking-[-0.3px] inline-block w-[54px]">
            21:41
          </b>
        </div>
        <img
          className="relative w-[66.66px] h-[11.34px]"
          alt=""
          src="/group-73.svg"
        />
      </div>
      <div
        className="self-stretch bg-whitesmoke-200 h-[131.96px] flex flex-col items-start justify-between pt-8 px-4 pb-2.5 box-border cursor-pointer text-9xl"
        onClick={onMenuDeBaseClick}
      >
        <div className="self-stretch flex flex-row items-center justify-center gap-[24px]">
          <div className="self-stretch flex-1 flex flex-col items-start justify-center">
            <div className="relative leading-[20px] font-semibold inline-block w-[105px]">
              Activité
            </div>
          </div>
          <img
            className="relative w-7 h-7 overflow-hidden shrink-0"
            alt=""
            src="/chart-bar1.svg"
          />
          <div className="rounded-sm bg-mediumblue-100 shadow-[0px_0px_0px_1.75px_#012bdd] overflow-hidden flex flex-row items-center justify-center p-[3.5px] border-[0.9px] border-solid border-mediumblue-100">
            <img
              className="relative w-[21px] h-[21px] overflow-hidden shrink-0"
              alt=""
              src="/bell2.svg"
            />
          </div>
        </div>
        <div className="w-[270px] flex flex-row items-start justify-between text-sm text-gray-500">
          <div className="flex-1 rounded-lg bg-white h-[39.96px] flex flex-col items-center justify-center py-3 px-4 box-border text-gray-900">
            <div className="h-[15.96px] flex flex-col items-center justify-center">
              <div className="flex flex-row items-center justify-center">
                <div className="relative leading-[20.03px] font-semibold">
                  Projets
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 rounded-lg flex flex-col items-center justify-center py-3 px-4">
            <div className="h-[15.96px] flex flex-col items-center justify-center">
              <div className="flex flex-col items-center justify-center">
                <div className="flex flex-row items-center justify-center">
                  <div className="relative leading-[20.03px] font-semibold">
                    Apports
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 rounded-lg flex flex-col items-center justify-center py-3 px-4">
            <div className="h-[15.96px] flex flex-col items-center justify-center">
              <div className="flex flex-col items-center justify-center">
                <div className="flex flex-row items-center justify-center">
                  <div className="relative leading-[20.03px] font-semibold">
                    Contrats
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch relative h-[1726px] overflow-y-auto shrink-0 text-base">
        <div className="absolute top-[0px] left-[0px] bg-whitesmoke-200 w-[390px] h-[844px] overflow-y-auto flex flex-col items-start justify-start pt-2.5 px-4 pb-12 box-border">
          <div className="w-[358px] h-[1656.56px] flex flex-col items-start justify-start pt-0 px-0 pb-[72px] box-border">
            <div className="self-stretch flex flex-col items-start justify-start gap-[30px]">
              <div className="self-stretch flex flex-col items-start justify-start text-7xl text-gray-900">
                <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                  <div className="self-stretch rounded-lg bg-white flex flex-col items-start justify-start py-5 px-4 gap-[24px] border-[1px] border-solid border-whitesmoke-400">
                    <div className="self-stretch flex flex-col items-center justify-start gap-[18px]">
                      <div className="self-stretch flex flex-row items-start justify-start gap-[10px]">
                        <div className="flex-1 h-[71px] flex flex-col items-start justify-start gap-[8px]">
                          <div className="self-stretch flex-1 flex flex-row items-center justify-start">
                            <div className="h-6 flex flex-row items-center justify-start">
                              <div className="relative leading-[20.03px] font-semibold">
                                <span>11 670,</span>
                                <span className="text-darkgray-300">00</span>
                                <span>€</span>
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch relative text-base leading-[20px] font-semibold">
                            <span>{`Développement de l’application web mobile `}</span>
                            <span className="text-mediumblue-100">
                              Federage
                            </span>
                          </div>
                        </div>
                        <img
                          className="relative rounded-[8.33px] w-12 h-12 object-cover"
                          alt=""
                          src="/rectangle-41551@2x.png"
                        />
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start gap-[8px] text-[11.21px] text-mediumblue-100">
                        <div className="flex-1 rounded-[6.41px] bg-lavender overflow-hidden flex flex-col items-center justify-center p-3">
                          <div className="h-[12.78px] flex flex-col items-center justify-center">
                            <div className="flex flex-row items-center justify-center gap-[4.8px]">
                              <img
                                className="relative w-[19.22px] h-[19.22px] overflow-hidden shrink-0"
                                alt=""
                                src="/sparkles2.svg"
                              />
                              <div className="relative leading-[16.04px] font-semibold">
                                Ajouter
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 rounded-[6.41px] bg-lavender overflow-hidden flex flex-row items-center justify-center p-3">
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
                        <div className="flex-1 rounded-[8.64px] bg-lavender h-9 flex flex-row items-center justify-center p-3 box-border">
                          <img
                            className="relative w-[21.6px] h-[21.6px] overflow-hidden shrink-0"
                            alt=""
                            src="/dots-vertical1.svg"
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
                            src="/avatar20@2x.png"
                          />
                          <div className="flex-1 flex flex-row items-center justify-start gap-[16px]">
                            <div className="flex-1 flex flex-col items-start justify-start">
                              <div className="self-stretch relative leading-[20px] font-medium">
                                CGU du service (partie financière)
                              </div>
                              <div className="self-stretch relative text-sm leading-[24px] font-medium text-silver mt-[-2px]">
                                Aujourd’hui
                              </div>
                            </div>
                            <div className="self-stretch flex flex-col items-end justify-center text-right text-crimson">
                              <div className="relative leading-[20px] font-semibold">
                                - 800,00€
                              </div>
                              <div className="self-stretch relative text-sm leading-[20px] font-medium text-silver">
                                Validée
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch rounded-lg flex flex-row items-center justify-start gap-[16px]">
                          <img
                            className="rounded-xl w-10 h-10 object-cover"
                            alt=""
                            src="/avatar21@2x.png"
                          />
                          <div className="flex-1 flex flex-row items-center justify-between">
                            <div className="flex-1 flex flex-col items-start justify-start">
                              <div className="self-stretch relative leading-[20px] font-medium">
                                Fonctionnalités iOS PWA
                              </div>
                              <div className="self-stretch relative text-sm leading-[24px] font-medium text-silver mt-[-2px]">
                                Hier, 19h23
                              </div>
                            </div>
                            <div className="self-stretch flex flex-col items-end justify-center text-right text-crimson">
                              <div className="relative leading-[20px] font-semibold">
                                - 1 000,00€
                              </div>
                              <div className="self-stretch relative text-sm leading-[20px] font-medium text-silver">
                                Validée
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch rounded-lg flex flex-row items-center justify-start gap-[16px]">
                          <img
                            className="rounded-xl w-10 h-10 object-cover"
                            alt=""
                            src="/avatar22@2x.png"
                          />
                          <div className="flex-1 flex flex-row items-center justify-start gap-[16px]">
                            <div className="flex-1 flex flex-col items-start justify-start">
                              <div className="self-stretch relative leading-[20px] font-medium">
                                Intégration des éléments graphiques
                              </div>
                              <div className="self-stretch relative text-sm leading-[24px] font-medium text-silver mt-[-2px]">
                                Avant-hier, 09h11
                              </div>
                            </div>
                            <div className="self-stretch flex flex-col items-end justify-center text-right text-crimson">
                              <div className="relative leading-[20px] font-semibold">
                                - 2 200,00€
                              </div>
                              <div className="self-stretch relative text-sm leading-[20px] font-medium text-silver">
                                Validée
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch rounded-lg flex flex-row items-center justify-start gap-[16px]">
                          <img
                            className="rounded-xl w-10 h-10 object-cover"
                            alt=""
                            src="/avatar23@2x.png"
                          />
                          <div className="flex-1 flex flex-row items-center justify-between">
                            <div className="flex-1 flex flex-col items-start justify-start">
                              <div className="self-stretch relative leading-[20px] font-medium">
                                Abonnements mensuels
                              </div>
                              <div className="self-stretch relative text-sm leading-[24px] font-medium text-silver mt-[-2px]">
                                Semaine dernière
                              </div>
                            </div>
                            <div className="self-stretch flex flex-col items-end justify-center text-right text-seagreen">
                              <div className="relative leading-[20px] font-semibold">
                                + 3 400,00€
                              </div>
                              <div className="self-stretch relative text-sm leading-[20px] font-medium text-silver">
                                Validée
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch rounded-lg bg-white flex flex-col items-start justify-start py-5 px-4 gap-[24px] border-[1px] border-solid border-whitesmoke-400">
                      <div className="self-stretch flex flex-col items-center justify-start gap-[18px]">
                        <div className="self-stretch flex flex-row items-start justify-start gap-[10px]">
                          <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
                            <div className="self-stretch flex flex-row items-center justify-start">
                              <div className="h-[23px] flex flex-row items-center justify-start">
                                <div className="relative leading-[20.03px] font-semibold">
                                  <span>6 263,</span>
                                  <span className="text-darkgray-300">23</span>
                                  <span>€</span>
                                </div>
                              </div>
                            </div>
                            <div className="self-stretch relative text-base leading-[20px] font-semibold text-black">
                              Création d'un site de voyage premium par
                              abonnement
                            </div>
                          </div>
                          <img
                            className="relative rounded-[8.33px] w-12 h-12 object-cover"
                            alt=""
                            src="/rectangle-41554@2x.png"
                          />
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-start gap-[8px] text-[11.21px] text-mediumblue-100">
                          <div className="flex-1 rounded-[6.41px] bg-lavender overflow-hidden flex flex-col items-center justify-center p-3">
                            <div className="h-[12.78px] flex flex-col items-center justify-center">
                              <div className="flex flex-row items-center justify-center gap-[4.8px]">
                                <img
                                  className="relative w-[19.22px] h-[19.22px] overflow-hidden shrink-0"
                                  alt=""
                                  src="/sparkles3.svg"
                                />
                                <div className="relative leading-[16.04px] font-semibold">
                                  Ajouter
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 rounded-[6.41px] bg-lavender overflow-hidden flex flex-row items-center justify-center p-3">
                            <div className="h-[12.78px] flex flex-col items-center justify-center">
                              <div className="flex flex-row items-center justify-center gap-[4.8px]">
                                <img
                                  className="relative w-[19.2px] h-[19.2px] overflow-hidden shrink-0"
                                  alt=""
                                  src="/user-add1.svg"
                                />
                                <div className="relative leading-[16.04px] font-semibold">
                                  Inviter
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 rounded-[8.64px] bg-lavender h-9 flex flex-row items-center justify-center p-3 box-border">
                            <img
                              className="relative w-[21.6px] h-[21.6px] overflow-hidden shrink-0"
                              alt=""
                              src="/dots-vertical2.svg"
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
                              src="/avatar24@2x.png"
                            />
                            <div className="flex-1 flex flex-row items-center justify-start gap-[20px]">
                              <div className="flex-1 flex flex-col items-start justify-start">
                                <div className="self-stretch relative leading-[20px] font-medium">
                                  Développement des interfaces utilisateurs
                                </div>
                                <div className="self-stretch relative text-sm leading-[24px] font-medium text-silver mt-[-2px]">
                                  Aujourd’hui
                                </div>
                              </div>
                              <div className="self-stretch flex flex-col items-end justify-center text-right text-crimson">
                                <div className="relative leading-[20px] font-semibold">
                                  - 800,00€
                                </div>
                                <div className="self-stretch relative text-sm leading-[20px] font-medium text-silver">
                                  Validée
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch rounded-lg flex flex-row items-center justify-start gap-[16px]">
                            <img
                              className="rounded-xl w-10 h-10 object-cover"
                              alt=""
                              src="/avatar25@2x.png"
                            />
                            <div className="flex-1 flex flex-row items-center justify-start gap-[16px]">
                              <div className="flex-1 flex flex-col items-start justify-start">
                                <div className="self-stretch relative leading-[20px] font-medium">
                                  Analyse des métriques d’usage
                                </div>
                                <div className="self-stretch relative text-sm leading-[24px] font-medium text-silver mt-[-2px]">
                                  Hier, 19h23
                                </div>
                              </div>
                              <div className="self-stretch flex flex-col items-end justify-center text-right text-seagreen">
                                <div className="relative leading-[20px] font-semibold">
                                  + 1 000,00€
                                </div>
                                <div className="self-stretch relative text-sm leading-[20px] font-medium text-silver">
                                  Validée
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch rounded-lg flex flex-row items-center justify-start gap-[16px]">
                            <img
                              className="rounded-xl w-10 h-10 object-cover"
                              alt=""
                              src="/avatar26@2x.png"
                            />
                            <div className="flex-1 flex flex-row items-center justify-start gap-[16px]">
                              <div className="flex-1 flex flex-col items-start justify-start">
                                <div className="self-stretch relative leading-[20px] font-medium">
                                  Design de l’identité de la marque
                                </div>
                                <div className="self-stretch relative text-sm leading-[24px] font-medium text-silver mt-[-2px]">
                                  Avant-hier, 09h11
                                </div>
                              </div>
                              <div className="self-stretch flex flex-col items-end justify-center text-right text-crimson">
                                <div className="relative leading-[20px] font-semibold">
                                  - 2 200,00€
                                </div>
                                <div className="self-stretch relative text-sm leading-[20px] font-medium text-silver">
                                  Validée
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch rounded-lg flex flex-row items-center justify-start gap-[16px]">
                            <img
                              className="rounded-xl w-10 h-10 object-cover"
                              alt=""
                              src="/avatar27@2x.png"
                            />
                            <div className="flex-1 flex flex-row items-center justify-between">
                              <div className="flex-1 flex flex-col items-start justify-start">
                                <div className="self-stretch relative leading-[20px] font-medium">
                                  Partenariats tour opérateurs
                                </div>
                                <div className="self-stretch relative text-sm leading-[24px] font-medium text-silver mt-[-2px]">
                                  Semaine dernière
                                </div>
                              </div>
                              <div className="self-stretch flex flex-col items-end justify-center text-right text-seagreen">
                                <div className="relative leading-[20px] font-semibold">
                                  + 12 980,00€
                                </div>
                                <div className="self-stretch relative text-sm leading-[20px] font-medium text-silver">
                                  Validée
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch rounded-lg bg-white flex flex-row items-center justify-between py-5 px-4 text-sm text-black border-[1px] border-solid border-whitesmoke-400">
                    <div className="flex flex-row items-center justify-start gap-[16px]">
                      <div className="rounded-lg bg-gray-100 w-[38px] h-[38px] flex flex-row items-center justify-center p-[4.736609935760498px] box-border">
                        <img
                          className="relative w-4 h-4 overflow-hidden shrink-0"
                          alt=""
                          src="/view-boards.svg"
                        />
                      </div>
                      <div className="h-[38px] flex flex-col items-start justify-between">
                        <div className="relative leading-[20.03px] font-semibold">
                          Créer un projet
                        </div>
                        <div className="relative text-xs leading-[18px] font-semibold text-dimgray">
                          Impliquer les parties prenantes
                        </div>
                      </div>
                    </div>
                    <div className="rounded-[21.59px] bg-gray-100 overflow-hidden flex flex-row items-center justify-center p-[10.363636016845703px]">
                      <img
                        className="relative w-[17.27px] h-[17.27px] overflow-hidden shrink-0"
                        alt=""
                        src="/plus5.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-end justify-start gap-[10px]">
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-0.5 gap-[6px]">
                  <div className="relative leading-[20.03px] font-semibold">
                    Invitations
                  </div>
                  <div className="rounded-3xs bg-gray-800 h-5 flex flex-col items-start justify-start py-0.5 px-3 box-border text-center text-xs text-white">
                    <div className="relative leading-[16px] font-semibold">
                      2
                    </div>
                  </div>
                </div>
                <div className="self-stretch rounded-lg bg-white flex flex-col items-start justify-start py-5 px-4 gap-[30px] border-[1px] border-solid border-whitesmoke-400">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[10px]">
                    <img
                      className="relative rounded-6xs w-[42px] h-[42px] object-cover"
                      alt=""
                      src="/rectangle-41555@2x.png"
                    />
                    <div className="flex-1 flex flex-col items-start justify-start">
                      <div className="self-stretch relative leading-[20.03px] font-semibold">
                        Solution nutritionnelle anti-cancérigène
                      </div>
                      <div className="relative text-sm leading-[20.03px] font-medium text-darkgray-200">
                        Reçue le 25 août 2023
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[9px]">
                    <img
                      className="relative rounded-6xs w-[42px] h-[42px] object-cover"
                      alt=""
                      src="/rectangle-4158@2x.png"
                    />
                    <div className="w-[264px] flex flex-col items-start justify-start">
                      <div className="self-stretch relative leading-[20.03px] font-semibold">{`Stablecoin euro sur protocole Arbitrum `}</div>
                      <div className="relative text-sm leading-[20.03px] font-medium text-darkgray-200 mt-[-1px]">
                        Reçue le 3 septembre 2023
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-end justify-start gap-[10px]">
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-0.5">
                  <div className="relative leading-[20.03px] font-semibold">
                    Recommandations
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start relative gap-[10px] text-sm">
                  <div className="self-stretch relative rounded-lg bg-lavender h-[138px] opacity-[0.9] z-[0]" />
                  <div className="absolute my-0 mx-[!important] top-[12px] left-[21px] w-[310px] h-[111px] z-[1]">
                    <div className="absolute top-[3px] left-[43px] flex flex-col items-start justify-start">
                      <div className="relative leading-[20.03px] font-semibold">
                        Veuillez confirmer vos informations
                      </div>
                      <div className="relative text-xs leading-[18px] font-semibold text-dimgray inline-block w-[267px]">
                        Confirmez que vos données professionnelles sont bien à
                        jour
                      </div>
                    </div>
                    <div className="absolute top-[75px] left-[3px] rounded-lg bg-gray-900 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] w-[306px] h-9 flex flex-row items-center justify-between py-2.5 px-[18px] box-border text-center text-white">
                      <div className="relative leading-[20px] font-semibold inline-block w-[294px] shrink-0">
                        Confirmer mes informations
                      </div>
                    </div>
                    <img
                      className="absolute top-[0px] left-[0px] w-[26px] h-[26px] overflow-hidden"
                      alt=""
                      src="/table1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[-0.04px] left-[calc(50%_-_195px)] bg-white box-border w-[390px] flex flex-row items-center justify-between py-5 px-[30px] text-center text-3xs text-gray-900 border-t-[2px] border-solid border-whitesmoke-300">
          <div className="w-[46px] flex flex-col items-center justify-start gap-[4px] text-mediumblue-100">
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/component-213.svg"
            />
            <div className="relative leading-[16px] font-medium">Accueil</div>
          </div>
          <div className="w-[46px] flex flex-col items-center justify-start gap-[4px]">
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/component-512.svg"
            />
            <div className="relative leading-[16px] font-medium">Explorer</div>
          </div>
          <div className="w-[46px] flex flex-col items-center justify-start gap-[4px]">
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/component-121.svg"
            />
            <div className="relative leading-[16px] font-medium">
              Messagerie
            </div>
          </div>
          <div className="w-[46px] flex flex-col items-center justify-start gap-[4px]">
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/component-131.svg"
            />
            <div className="relative leading-[16px] font-medium">Compte</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Principal1;
