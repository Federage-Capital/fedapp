import { FunctionComponent } from "react";

const MobileServiceProjet211: FunctionComponent = () => {
  return (
    <div className="relative w-full h-[844px] flex flex-col items-start justify-start text-left text-base text-gray-700 font-text-xs-leading-4-font-medium">
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
      <div className="self-stretch bg-white flex flex-col py-5 px-4 items-start justify-start gap-[32px] text-dimgray">
        <div className="self-stretch flex flex-row items-center justify-between">
          <div className="w-[167px] flex flex-row items-center justify-start gap-[11px]">
            <div className="rounded-lg bg-gray-100 w-[38px] h-[38px] flex flex-row p-1.5 box-border items-center justify-center">
              <img className="relative w-1.5 h-2.5" alt="" src="/icon21.svg" />
            </div>
            <b className="flex-1 relative leading-[24px]">Créer un projet</b>
          </div>
          <div className="rounded-3xs flex flex-row py-0.5 px-2.5 items-center justify-center text-right text-xs">
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
      <div className="self-stretch bg-whitesmoke-100 flex flex-col pt-6 px-4 pb-0 items-center justify-start gap-[48px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
            <b className="self-stretch relative leading-[20px]">
              Qui peut participer au projet ?
            </b>
            <div className="self-stretch relative h-[86px] text-gray-500">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-lg bg-white box-border border-[2px] border-solid border-gray-200" />
              <div className="absolute h-[23.26%] w-[4.62%] top-[19.77%] right-[5.2%] bottom-[56.98%] left-[90.17%] rounded-lg flex flex-row items-center justify-center">
                <div className="relative rounded-lg bg-white box-border w-4 h-4 overflow-hidden shrink-0 border-[2px] border-solid border-gray-500" />
              </div>
              <div className="absolute h-[65.12%] w-[81.5%] top-[17.44%] right-[13.58%] bottom-[17.44%] left-[4.91%]">
                <div className="absolute top-[0%] left-[0%] leading-[20px] font-semibold">
                  Seulement les invités participent
                </div>
                <div className="absolute w-full top-[42.86%] left-[0%] text-xs leading-[16px] font-medium flex items-center">
                  Le projet est fermé. Seuls les partenaires invités et
                  sélectionnés participent au projet.
                </div>
              </div>
            </div>
            <div className="self-stretch relative h-[86px] text-mediumblue-100">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-lg bg-white box-border border-[2px] border-solid border-mediumblue-100" />
              <div className="absolute h-[23.26%] w-[4.62%] top-[19.77%] right-[5.2%] bottom-[56.98%] left-[90.17%] rounded-lg flex flex-row items-center justify-center">
                <img
                  className="relative rounded-lg w-4 h-4 overflow-hidden shrink-0"
                  alt=""
                  src="/form-fieldsradio-input.svg"
                />
              </div>
              <div className="absolute h-[65.12%] w-[81.5%] top-[17.44%] right-[13.58%] bottom-[17.44%] left-[4.91%]">
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
            <div className="self-stretch rounded-lg bg-gainsboro flex flex-row py-[15px] px-4 items-start justify-between text-gray-500 border-[2px] border-solid border-darkgray-100 sm:shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]">
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
                <div className="relative rounded-lg bg-gainsboro box-border w-4 h-4 overflow-hidden shrink-0 border-[2px] border-solid border-gray-500" />
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col pt-0 px-0 pb-6 items-center justify-start text-center text-white">
          <div className="self-stretch flex flex-col items-center justify-center gap-[24px]">
            <div className="self-stretch bg-gray-200" />
            <div className="self-stretch rounded-lg bg-mediumblue-100 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] flex flex-row py-4 px-[18px] items-center justify-center">
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
