import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const MobileAccueil: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/-mobileexplorer");
  }, [navigate]);

  return (
    <div className="relative bg-whitesmoke-100 w-full overflow-y-auto flex flex-col items-center justify-center mix-blend-normal text-left text-xs text-mediumblue-200 font-text-base-leading-6-font-normal">
      <div className="self-stretch overflow-y-auto shrink-0 flex flex-col items-center justify-start">
        <div className="self-stretch h-[98px] overflow-y-auto shrink-0 flex flex-col items-center justify-start z-[2]">
          <div className="self-stretch bg-black h-7 z-[1]" />
          <div className="self-stretch flex flex-row pt-[30px] px-4 pb-0 items-center justify-between z-[0]">
            <img
              className="relative w-[154.89px] h-8"
              alt=""
              src="/a304a9a1adfc477d9233fbc4749af052.svg"
            />
            <div className="rounded-3xs-5 overflow-hidden flex flex-row items-center justify-center">
              <img
                className="relative w-9 h-9 overflow-hidden shrink-0"
                alt=""
                src="/menu.svg"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch overflow-y-auto shrink-0 flex flex-col py-6 px-0 items-center justify-start z-[1]">
          <div className="self-stretch overflow-y-auto shrink-0 flex flex-col py-0 px-4 items-start justify-start gap-[32px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                <div className="self-stretch flex flex-row items-center justify-between">
                  <div className="rounded bg-indigo-50 overflow-hidden flex flex-row py-1 px-2.5 items-start justify-start">
                    <div className="relative tracking-[0.03em] leading-[16px] uppercase font-semibold">
                      Nouveauté
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-between text-right text-sm">
                    <div className="relative leading-[20px] font-medium">
                      La version 0.1.0 est déployée
                    </div>
                    <img
                      className="relative w-5 h-5 overflow-hidden shrink-0"
                      alt=""
                      src="/chevron-right.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch relative text-[34px] tracking-[-0.02em] leading-[40px] font-extrabold text-gray-900">
                  <span>{`Le meilleur moyen de `}</span>
                  <span className="text-mediumblue-100">mesurer sa valeur</span>
                </div>
              </div>
              <div className="self-stretch relative text-base leading-[24px] font-medium text-gray-500">{`Federage construit un réseau économique coopératif pour les entreprises et les organisations. Financez vos opérations, intégrez des partenaires, libérez de la valeur. `}</div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[12px] text-base text-gray-900">
              <div className="self-stretch relative leading-[24px] font-medium">
                Inscrivez-vous pour rejoindre la liste d'attente 🚀
              </div>
              <div className="self-stretch flex flex-col items-start justify-start text-gray-500">
                <div className="self-stretch rounded-lg bg-white overflow-hidden flex flex-row p-[13px] items-center justify-start border-[2px] border-solid border-gray-200">
                  <div className="flex-1 relative leading-[24px]">
                    mon@entreprise.com
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-lg bg-gray-900 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] overflow-hidden flex flex-row py-[13px] px-[25px] items-center justify-center text-white">
                <div className="relative leading-[24px] font-medium">
                  Inscription
                </div>
              </div>
            </div>
            <div className="self-stretch overflow-y-auto shrink-0 flex flex-col items-start justify-center gap-[16px] text-sm text-gray-500">
              <div className="self-stretch relative tracking-[0.03em] leading-[20px] uppercase font-semibold">
                Sections
              </div>
              <div className="self-stretch flex flex-col items-start justify-start text-base text-gray-900">
                <div className="self-stretch relative rounded-6xl bg-gray-200 h-0.5" />
                <div className="self-stretch flex flex-col items-start justify-center">
                  <div className="self-stretch flex flex-row py-6 px-0 items-center justify-start gap-[16px]">
                    <div className="rounded-lg bg-indigo-50 flex flex-row p-3 items-center justify-center">
                      <img
                        className="relative w-6 h-6 overflow-hidden shrink-0"
                        alt=""
                        src="/cash3.svg"
                      />
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start">
                      <div className="relative leading-[24px] font-medium">
                        Démarrer
                      </div>
                      <div className="self-stretch relative leading-[20px] font-medium text-gray-500">
                        Faciliter le partage de la valeur entre parties
                        prenantes
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-center">
                      <img
                        className="relative w-[8.99px] h-[16.26px]"
                        alt=""
                        src="/icon311.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch relative rounded-6xl bg-gray-200 h-0.5" />
                <div className="self-stretch flex flex-col items-start justify-center">
                  <div
                    className="self-stretch flex flex-row py-6 px-0 items-center justify-start gap-[16px] cursor-pointer"
                    onClick={onFrameContainerClick}
                  >
                    <div className="rounded-[9.14px] bg-indigo-50 flex flex-row p-[13.714284896850586px] items-center justify-center">
                      <img
                        className="relative w-[20.57px] h-[20.57px] overflow-hidden shrink-0"
                        alt=""
                        src="/users2.svg"
                      />
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start">
                      <div className="relative leading-[24px] font-medium">
                        Explorer
                      </div>
                      <div className="self-stretch relative leading-[20px] font-medium text-gray-500">
                        Parcourir des opportunités pour intégrer des projets
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-center">
                      <img
                        className="relative w-[8.99px] h-[16.26px]"
                        alt=""
                        src="/icon311.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch relative rounded-6xl bg-gray-200 h-0.5" />
                <div className="self-stretch flex flex-col items-start justify-center">
                  <div className="self-stretch flex flex-row py-6 px-0 items-center justify-start gap-[16px]">
                    <div className="rounded-lg bg-indigo-50 flex flex-row p-3 items-center justify-center">
                      <img
                        className="relative w-6 h-6 overflow-hidden shrink-0"
                        alt=""
                        src="/academic-cap.svg"
                      />
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start">
                      <div className="relative leading-[24px] font-medium">
                        Blog
                      </div>
                      <div className="self-stretch relative leading-[20px] font-medium text-gray-500">
                        En savoir plus sur les avantages du service
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-center">
                      <img
                        className="relative w-[8.99px] h-[16.26px]"
                        alt=""
                        src="/icon311.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch relative rounded-6xl bg-gray-200 h-0.5" />
                <div className="self-stretch flex flex-col items-start justify-center">
                  <div className="self-stretch flex flex-row py-6 px-0 items-center justify-start gap-[16px]">
                    <div className="rounded-lg bg-indigo-50 w-12 h-12 flex flex-row items-center justify-center">
                      <img
                        className="relative w-6 h-6 overflow-hidden shrink-0"
                        alt=""
                        src="/bookmark-alt.svg"
                      />
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start">
                      <div className="relative leading-[24px] font-medium">
                        Documentation
                      </div>
                      <div className="self-stretch relative leading-[20px] font-medium text-gray-500">
                        Support technique et code source de l’application
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-center">
                      <img
                        className="relative w-3 h-3"
                        alt=""
                        src="/icon411.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch relative bg-gray-200 h-px" />
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch bg-white overflow-y-auto shrink-0 flex flex-col items-center justify-start z-[0] text-center text-base text-white">
          <div className="self-stretch bg-white flex flex-col items-center justify-start">
            <div className="self-stretch flex flex-col items-center justify-start">
              <div className="self-stretch relative bg-gray-200 h-px" />
              <div className="self-stretch bg-black flex flex-col py-12 px-0 items-center justify-start gap-[24px]">
                <div className="relative leading-[24px] font-medium flex items-center justify-center w-[298px]">
                  FEDERAGE SAS • SIREN n°828743369 • Paris • 2023
                </div>
                <div className="self-stretch flex flex-row items-center justify-center gap-[32px]">
                  <div className="flex flex-row items-center justify-start">
                    <img
                      className="relative w-6 h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/footerssocial-icon1.svg"
                    />
                  </div>
                  <div className="flex flex-row items-center justify-start">
                    <img
                      className="relative w-6 h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/footerssocial-icon2.svg"
                    />
                  </div>
                  <div className="flex flex-row items-center justify-start">
                    <img
                      className="relative w-6 h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/mail1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileAccueil;
