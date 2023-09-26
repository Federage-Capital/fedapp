import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const MobileServiceProjet211: FunctionComponent = () => {
  const navigate = useNavigate();

  const onCrerProjet2ContainerClick = useCallback(() => {
    navigate("/-crerprojetpriv");
  }, [navigate]);

  return (
    <div
      className="relative w-full overflow-y-auto flex flex-col items-start justify-start cursor-pointer text-left text-base text-gray-700 font-text-sm-leading-5-font-medium"
      onClick={onCrerProjet2ContainerClick}
    >
      <div className="self-stretch bg-white flex flex-row items-center justify-between py-[9px] px-3.5 text-center text-mini text-black">
        <div className="w-[54px] h-[21px] flex flex-col items-center justify-end">
          <b className="relative tracking-[-0.3px] inline-block w-[54px]">
            21:41
          </b>
        </div>
        <img
          className="relative w-[66.66px] h-[11.34px]"
          alt=""
          src="/group-71.svg"
        />
      </div>
      <div className="self-stretch bg-white flex flex-row items-start justify-start border-b-[2px] border-solid border-whitesmoke-400">
        <div className="flex flex-row items-center justify-start p-4">
          <img
            className="rounded-xl w-10 h-10 object-cover"
            alt=""
            src="/avatar111@2x.png"
          />
        </div>
        <div className="flex-1 h-[72px] flex flex-row items-center justify-start py-0 pr-4 pl-0 box-border gap-[16px]">
          <div className="self-stretch flex-1 flex flex-row items-center justify-start py-[9px] px-0">
            <b className="flex-1 relative leading-[24px]">William BALDIÈRE</b>
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
      <div className="self-stretch bg-white flex flex-col items-start justify-start py-5 px-4 gap-[32px] text-dimgray">
        <div className="self-stretch flex flex-row items-center justify-between">
          <div className="w-[167px] flex flex-row items-center justify-start gap-[11px]">
            <div className="rounded-lg bg-gray-100 w-[38px] h-[38px] flex flex-row items-center justify-center p-1.5 box-border">
              <img className="relative w-1.5 h-2.5" alt="" src="/icon211.svg" />
            </div>
            <div className="flex-1 relative leading-[24px] font-semibold">
              Créer un projet
            </div>
          </div>
          <div className="rounded-3xs flex flex-row items-center justify-center py-0.5 px-2.5 text-right text-xs">
            <div className="relative leading-[16px] font-medium">
              Étape 2 sur 3
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-center gap-[10px] text-9xl text-black">
          <div className="self-stretch relative leading-[20px] font-semibold">
            Choisir le financement
          </div>
          <div className="self-stretch relative text-base leading-[20px] text-gray-500">
            <span className="font-medium">{`Optez pour un projet entièrement participatif ou limité aux partenaires. Pour plus d’information, vous pouvez `}</span>
            <span className="font-semibold text-mediumblue-100">
              lire notre guide
            </span>
            <span className="font-medium">.</span>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-gray-50 flex flex-col items-center justify-start pt-6 px-4 pb-0 gap-[48px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
            <b className="self-stretch relative leading-[20px]">
              Qui peut participer au projet ?
            </b>
            <div className="self-stretch flex flex-col items-start justify-start relative gap-[10px] text-gray-500">
              <div className="self-stretch relative rounded-lg bg-white box-border h-[86px] z-[0] border-[2px] border-solid border-gray-200" />
              <div className="my-0 mx-[!important] absolute h-[23.26%] w-[4.62%] top-[19.77%] right-[5.2%] bottom-[56.98%] left-[90.17%] rounded-lg flex flex-row items-center justify-center z-[1]">
                <div className="relative rounded-lg bg-white box-border w-4 h-4 overflow-hidden shrink-0 border-[2px] border-solid border-gray-500" />
              </div>
              <div className="absolute my-0 mx-[!important] h-[65.12%] w-[78.77%] top-[17.44%] right-[16.32%] bottom-[17.44%] left-[4.91%] z-[2]">
                <div className="absolute top-[0%] left-[0%] leading-[20px] font-semibold">
                  Seulement les invités participent
                </div>
                <div className="absolute w-full top-[42.86%] left-[0%] text-xs leading-[16px] font-medium flex items-center">
                  Le projet est fermé. Seuls les partenaires invités et
                  sélectionnés participent au projet.
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start relative gap-[10px] text-mediumblue-100">
              <div className="self-stretch relative rounded-lg bg-white box-border h-[86px] z-[0] border-[2px] border-solid border-mediumblue-100" />
              <div className="my-0 mx-[!important] absolute h-[23.26%] w-[4.62%] top-[19.77%] right-[5.2%] bottom-[56.98%] left-[90.17%] rounded-lg flex flex-row items-center justify-center z-[1]">
                <img
                  className="relative rounded-lg w-4 h-4 overflow-hidden shrink-0"
                  alt=""
                  src="/form-fieldsradio-input.svg"
                />
              </div>
              <div className="absolute my-0 mx-[!important] h-[65.12%] w-[78.77%] top-[17.44%] right-[16.32%] bottom-[17.44%] left-[4.91%] z-[2]">
                <div className="absolute top-[0%] left-[0%] leading-[20px] font-semibold">
                  Tout le monde peut participer
                </div>
                <div className="absolute w-full top-[42.86%] left-[0%] text-xs leading-[16px] font-medium text-gray-500 flex items-center">
                  Le projet est ouvert. Quiconque fait une proposition pourra
                  participer au projet.
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-center gap-[12px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
              <b className="self-stretch relative leading-[20px]">
                Vous êtes investisseur professionnel ?
              </b>
              <div className="self-stretch relative text-xs leading-[18px] font-medium text-gray-500">
                <span>{`Réservé aux fonds d'investissement et aux financeurs publics. Vous pouvez en faire la demande `}</span>
                <span className="text-mediumblue-100">depuis ce lien</span>
                <span>.</span>
              </div>
            </div>
            <div className="self-stretch rounded-lg bg-gainsboro-100 flex flex-row items-start justify-between py-[15px] px-4 text-gray-500 border-[2px] border-solid border-darkgray-100 sm:shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]">
              <div className="w-[282px] flex flex-col items-start justify-start gap-[4px]">
                <div className="relative leading-[20px] font-semibold">
                  Mode investisseur
                </div>
                <div className="self-stretch relative text-xs leading-[16px] font-medium">
                  Le projet est entièrement configurable. Ce paramètre est
                  désactivé par défaut.
                </div>
              </div>
              <div className="rounded-lg w-4 h-5 flex flex-row items-center justify-center">
                <div className="relative rounded-lg bg-gainsboro-100 box-border w-4 h-4 overflow-hidden shrink-0 border-[2px] border-solid border-gray-500" />
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-6 text-center text-white">
          <div className="self-stretch flex flex-col items-center justify-center gap-[24px]">
            <div className="self-stretch bg-gray-200" />
            <div className="self-stretch rounded-lg bg-gray-900 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] flex flex-row items-center justify-center py-4 px-[18px]">
              <div className="flex-1 relative leading-[20px] font-semibold">
                Suivant
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileServiceProjet211;
