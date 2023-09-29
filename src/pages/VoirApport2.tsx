import { FunctionComponent } from "react";

const VoirApport2: FunctionComponent = () => {
  return (
    <div className="relative w-full overflow-y-auto flex flex-col items-start justify-start text-center text-3xs text-gray-900 font-text-xs-leading-4-font-normal">
      <div className="self-stretch bg-gray-50 flex flex-row items-center justify-between py-[9px] px-3.5 z-[0] text-mini text-black">
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
      <div className="self-stretch bg-gray-50 overflow-y-auto shrink-0 flex flex-col items-start justify-start py-8 px-4 gap-[30px] z-[1] text-left text-[9.83px] text-darkgray-200">
        <div className="self-stretch flex flex-col items-center justify-center gap-[28px]">
          <div className="self-stretch flex flex-row items-center justify-start gap-[11px]">
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
        <div className="self-stretch flex flex-col items-start justify-start gap-[20px] text-lg text-gray-900">
          <div className="self-stretch rounded-lg bg-white flex flex-col items-start justify-start py-5 px-0 gap-[12px] border-[1px] border-solid border-whitesmoke-800">
            <div className="flex flex-row items-start justify-between py-0 px-3.5">
              <div className="relative leading-[24px] font-semibold">
                Détails de l’apport
              </div>
            </div>
            <div className="self-stretch h-[58.29px] flex flex-col items-start justify-between py-2 px-3.5 box-border text-xs text-gray-500">
              <div className="self-stretch flex-1 rounded-lg bg-gray-100 flex flex-row items-center justify-start">
                <div className="flex-1 rounded-lg bg-gray-100 flex flex-row items-center justify-start p-1 gap-[32px]">
                  <div className="flex-1 rounded-md flex flex-col items-center justify-center py-2 px-3">
                    <div className="relative leading-[20px] font-semibold">
                      Objet
                    </div>
                  </div>
                  <div className="flex-1 rounded-md bg-white flex flex-col items-center justify-center py-2 px-3 text-gray-900">
                    <div className="relative leading-[20px] font-semibold">
                      Détails
                    </div>
                  </div>
                  <div className="flex-1 rounded-md flex flex-col items-center justify-center py-2 px-3">
                    <div className="relative leading-[20px] font-semibold">
                      Membres
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start py-0 px-4 gap-[22px] text-sm">
              <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
                  <div className="relative leading-[20px] font-semibold">
                    Descriptif de l’apport
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-between text-base text-slategray">
                    <div className="flex-1 relative leading-[24px] font-medium">
                      Mise en œuvre dans le code : chaînes de caractères
                      traduites dans le code de l’application en utilisant des
                      mécanismes web.
                    </div>
                  </div>
                </div>
                <div className="self-stretch relative bg-gray-200 h-px" />
                <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
                  <div className="relative leading-[20px] font-semibold">
                    Prix et date de livraison
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-between text-base text-slategray">
                    <div className="flex-1 relative leading-[24px] font-medium">
                      400,00€ - 30/09/2023
                    </div>
                  </div>
                </div>
                <div className="self-stretch relative bg-gray-200 h-px" />
              </div>
              <div className="self-stretch rounded-lg bg-gray-900 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] h-[46px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-[9px] px-[17px] box-border text-center text-base text-white">
                <div className="flex-1 relative leading-[20px] font-semibold">
                  Modifier
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-lg bg-gray-100 flex flex-col items-center justify-start py-5 px-4 gap-[14px] text-base text-black border-[1px] border-solid border-gainsboro-100">
            <div className="self-stretch flex flex-col items-start justify-center gap-[8px]">
              <div className="self-stretch flex flex-row items-start justify-between">
                <div className="w-[268px] flex flex-col items-center justify-start gap-[10px]">
                  <div className="self-stretch relative leading-[20px] font-semibold">
                    Opération en cours
                  </div>
                  <div className="self-stretch relative text-sm leading-[24px] font-semibold text-dimgray">
                    Proposé le 01/08/2023
                  </div>
                </div>
                <div className="rounded-[6.91px] bg-lightgray w-[38.11px] h-[38px] flex flex-row items-center justify-center p-[4.75px] box-border">
                  <img
                    className="relative w-[9.5px] h-[5.7px]"
                    alt=""
                    src="/icon3.svg"
                  />
                </div>
              </div>
              <div className="self-stretch relative text-sm leading-[24px] font-semibold text-mediumblue-100">
                Montant : + 200,00€
              </div>
            </div>
            <div className="self-stretch relative bg-gray-200 h-px" />
            <div className="self-stretch flex flex-col items-start justify-start gap-[12px] text-sm text-slategray">
              <div className="relative leading-[20px] font-semibold text-gray-900">
                Détails
              </div>
              <div className="self-stretch flex flex-row items-start justify-between">
                <div className="relative leading-[20px] font-medium">
                  Volume échangé
                </div>
                <div className="relative leading-[20px] font-medium text-gray-900">
                  600,00€
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-between">
                <div className="relative leading-[20px] font-medium">
                  Solde final
                </div>
                <div className="relative leading-[20px] font-medium text-gray-900">
                  {" "}
                  + 200,00€
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-between">
                <div className="relative leading-[20px] font-medium">
                  Pourcentage du capital
                </div>
                <div className="relative leading-[20px] font-medium text-gray-900">
                  2%
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-between">
                <div className="relative leading-[20px] font-medium">{`Parties prenantes `}</div>
                <div className="relative leading-[20px] font-medium text-gray-900">
                  2
                </div>
              </div>
            </div>
            <div className="self-stretch relative bg-gray-200 h-px" />
            <div className="self-stretch flex flex-col items-center justify-start gap-[10px] text-gray-700">
              <div className="self-stretch rounded-lg bg-white flex flex-row items-center justify-between p-4">
                <div className="relative w-[175px] h-6">
                  <div className="absolute top-[2px] left-[39px] leading-[20px] font-semibold">
                    Clément Zablocki
                  </div>
                  <img
                    className="absolute top-[0px] left-[0px] rounded-[50%] w-6 h-6 object-cover"
                    alt=""
                    src="/ellipse-1432@2x.png"
                  />
                </div>
                <img className="relative w-4 h-4" alt="" src="/vector4.svg" />
              </div>
              <div className="self-stretch rounded-lg bg-white flex flex-row items-center justify-between p-4">
                <div className="relative w-[138px] h-6">
                  <div className="absolute top-[2px] left-[39px] leading-[20px] font-semibold">
                    Jean Marcus
                  </div>
                  <img
                    className="absolute top-[0px] left-[0px] rounded-[50%] w-6 h-6 object-cover"
                    alt=""
                    src="/ellipse-1433@2x.png"
                  />
                </div>
                <img className="relative w-4 h-4" alt="" src="/vector4.svg" />
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-lg bg-white flex flex-row items-start justify-start py-[22px] px-4">
            <div className="flex-1 flex flex-col items-start justify-start py-0 pr-0 pl-0.5 gap-[20px]">
              <div className="self-stretch relative leading-[20px] font-semibold">
                Historique de l’apport
              </div>
              <div className="self-stretch overflow-hidden flex flex-col items-center justify-start gap-[24px] text-base">
                <div className="self-stretch flex flex-row items-start justify-between">
                  <div className="flex flex-row items-start justify-between">
                    <div className="relative w-[201px] h-11">
                      <div className="absolute top-[0px] left-[0px] flex flex-row items-center justify-start gap-[10px]">
                        <img
                          className="relative w-[19px] h-[19px] overflow-hidden shrink-0"
                          alt=""
                          src="/check-circle7.svg"
                        />
                        <div className="flex-1 relative leading-[20px] font-semibold">
                          Démarrage de l’apport
                        </div>
                      </div>
                      <div className="absolute top-[24px] left-[29px] text-xs leading-[20px] font-medium text-dimgray">
                        01/04/2023 10h40 UTC+2
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-center gap-[5px] text-right text-3xs text-gray-500">
                    <div className="relative leading-[20px] font-medium">
                      #18127
                    </div>
                    <img
                      className="relative w-[10.56px] h-[11.11px]"
                      alt=""
                      src="/icon4.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-between">
                  <div className="w-[184px] flex flex-row items-start justify-start">
                    <div className="flex-1 relative h-11">
                      <div className="absolute top-[0px] left-[0px] flex flex-row items-center justify-start gap-[10px]">
                        <img
                          className="relative w-[19px] h-[19px] overflow-hidden shrink-0"
                          alt=""
                          src="/check-circle7.svg"
                        />
                        <div className="flex-1 relative leading-[20px] font-semibold">
                          Modification du prix
                        </div>
                      </div>
                      <div className="absolute top-[24px] left-[0px] w-[179px] h-5 overflow-hidden text-xs text-dimgray">
                        <div className="absolute top-[0px] left-[29px] leading-[20px] font-medium">
                          03/05/2023 21h19 UTC+2
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-center gap-[5px] text-right text-3xs text-gray-500">
                    <div className="relative leading-[20px] font-medium">
                      #19271
                    </div>
                    <img
                      className="relative w-[10.56px] h-[11.11px]"
                      alt=""
                      src="/icon4.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-between text-mediumblue-100">
                  <div className="w-[191px] flex flex-row items-start justify-start">
                    <div className="flex-1 relative h-11">
                      <div className="absolute top-[0px] left-[0px] flex flex-row items-center justify-start gap-[10px]">
                        <img
                          className="relative w-[19px] h-[19px] overflow-hidden shrink-0"
                          alt=""
                          src="/check-circle.svg"
                        />
                        <div className="flex-1 relative leading-[20px] font-semibold">
                          Modification du délai
                        </div>
                      </div>
                      <div className="absolute top-[24px] left-[0px] w-[182px] h-5 overflow-hidden text-xs text-dimgray">
                        <div className="absolute top-[0px] left-[29px] leading-[20px] font-medium">
                          04/05/2023 09h31 UTC+2
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-center gap-[5px] text-right text-3xs text-gray-500">
                    <div className="relative leading-[20px] font-medium">
                      #26182
                    </div>
                    <img
                      className="relative w-[10.56px] h-[11.11px]"
                      alt=""
                      src="/icon4.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch hidden flex-row items-start justify-between text-mediumseagreen">
                  <div className="w-[181px] flex flex-row items-start justify-start">
                    <div className="flex-1 relative h-11">
                      <div className="absolute top-[0px] left-[0px] flex flex-row items-center justify-start gap-[10px]">
                        <img
                          className="relative w-[19px] h-[19px] overflow-hidden shrink-0"
                          alt=""
                          src="/check-circle9.svg"
                        />
                        <div className="relative leading-[20px] font-semibold">
                          Executé
                        </div>
                      </div>
                      <div className="absolute top-[24px] left-[0px] w-[181px] h-5 overflow-hidden text-xs text-dimgray">
                        <div className="absolute top-[0px] left-[29px] leading-[20px] font-medium">
                          08/05/2023 09h31 UTC+2
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-center gap-[5px] text-right text-3xs text-gray-500">
                    <div className="relative leading-[20px] font-medium">
                      #26228
                    </div>
                    <img
                      className="relative w-2.5 h-2.5"
                      alt=""
                      src="/icon4.svg"
                    />
                  </div>
                </div>
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
                    src="/vector5.svg"
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
                    src="/vector5.svg"
                  />
                </div>
                <div className="self-stretch relative text-xs leading-[20px] font-medium text-dimgray">
                  cahier_charges_19_03_23.pdf
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-white flex flex-row items-center justify-between py-5 px-[30px] z-[2] border-t-[2px] border-solid border-whitesmoke-300">
        <div className="w-[46px] flex flex-col items-center justify-start gap-[4px]">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/component-22.svg"
          />
          <div className="relative leading-[16px] font-medium">Accueil</div>
        </div>
        <div className="w-[46px] flex flex-col items-center justify-start gap-[4px] text-mediumblue-100">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/component-51.svg"
          />
          <div className="relative leading-[16px] font-medium">Explorer</div>
        </div>
        <div className="w-[46px] flex flex-col items-center justify-start gap-[4px]">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/component-15.svg"
          />
          <div className="relative leading-[16px] font-medium">Messagerie</div>
        </div>
        <div className="w-[46px] h-[46px] flex flex-col items-center justify-start gap-[4px]">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/component-25.svg"
          />
          <div className="relative leading-[16px] font-medium">Compte</div>
        </div>
      </div>
      <div className="self-stretch my-0 mx-[!important] absolute top-[758.78px] left-[0px] bg-white hidden flex-row items-center justify-between py-5 px-[30px] z-[3] border-t-[2px] border-solid border-whitesmoke-300">
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
            src="/component-53.svg"
          />
          <div className="relative leading-[16px] font-medium">Explorer</div>
        </div>
        <div className="w-[46px] flex flex-col items-center justify-start gap-[4px]">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/component-16.svg"
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

export default VoirApport2;
