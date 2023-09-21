import { FunctionComponent } from "react";

const Profil: FunctionComponent = () => {
  return (
    <div className="relative bg-white w-full flex flex-col items-center justify-start text-left text-base text-gray-700 font-text-2xl-leading-8-font-bold">
      <div className="self-stretch bg-white flex flex-row py-[9px] px-3.5 items-center justify-between text-center text-mini text-black2">
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
      <div className="self-stretch bg-white overflow-y-auto flex flex-row items-start justify-start border-b-[2px] border-solid border-whitesmoke-400">
        <div className="flex flex-row p-4 items-center justify-start">
          <img
            className="rounded-xl w-10 h-10 object-cover"
            alt=""
            src="/avatar12@2x.png"
          />
        </div>
        <div className="flex-1 h-[72px] flex flex-row py-0 pr-4 pl-0 box-border items-center justify-start gap-[16px]">
          <div className="self-stretch flex-1 flex flex-row py-[9px] px-0 items-center justify-start">
            <b className="flex-1 relative leading-[24px]">
              lisa.martel@salcc.org
            </b>
          </div>
          <div className="rounded-2xl bg-mediumblue-100 shadow-[0px_0px_0px_2px_#012bdd,_0px_0px_0px_4px_#fff] overflow-hidden flex flex-row p-1 items-center justify-center border-[1px] border-solid border-mediumblue-100">
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/bell1.png"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch bg-white flex flex-col py-5 px-4 items-start justify-start gap-[32px] text-dimgray">
        <div className="self-stretch flex flex-row items-center justify-between">
          <div className="w-[167px] flex flex-row items-center justify-start gap-[11px]">
            <div className="rounded-lg bg-gray-100 w-[38px] h-[38px] flex flex-row p-1.5 box-border items-center justify-center">
              <img className="relative w-1.5 h-2.5" alt="" src="/icon211.png" />
            </div>
            <b className="flex-1 relative leading-[24px]">Démarrer</b>
          </div>
          <div className="rounded-3xs flex flex-row py-0.5 px-2.5 items-center justify-center text-right text-xs">
            <div className="relative leading-[16px] font-medium">
              Étape 2 sur 3
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-center gap-[10px] text-9xl text-black2">
          <div className="self-stretch relative leading-[20px] font-semibold">
            Remplir votre profil
          </div>
          <div className="self-stretch relative text-base leading-[20px] font-medium text-dimgray">
            Saisissez des informations à votre sujet. Ces données seront
            publiques.
          </div>
        </div>
      </div>
      <div className="self-stretch bg-gray-50 flex flex-col py-6 px-4 items-start justify-start gap-[24px] text-sm">
        <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
          <b className="relative leading-[20px]">Prénom et nom de famille</b>
          <div className="self-stretch rounded-lg bg-white overflow-hidden flex flex-row py-[9px] px-[13px] items-center justify-start text-base text-gray-900 border-[2px] border-solid border-gray-2001">
            <div className="flex-1 relative leading-[24px]">Lisa MARTEL</div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
          <b className="relative leading-[20px]">Photo de profil</b>
          <div className="flex flex-row items-center justify-start gap-[10px]">
            <img
              className="rounded-5xl w-12 h-12 object-cover"
              alt=""
              src="/avatar13@2x.png"
            />
            <div className="rounded-lg bg-white overflow-hidden flex flex-row py-[9px] px-[13px] items-center justify-center border-[1px] border-solid border-gray-300">
              <div className="relative leading-[16px] font-semibold">
                Modifier
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
          <b className="relative leading-[20px]">Descriptif de la structure</b>
          <div className="self-stretch rounded-lg bg-white overflow-hidden flex flex-row py-[9px] px-[13px] items-center justify-start text-base text-gray-900 border-[2px] border-solid border-gray-2001">
            <div className="flex-1 relative leading-[24px]">
              La Société Active de Lutte contre le Cancer est spécialisée dans
              recherche appliquée aux aliments anti-cancérigènes.
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
          <b className="relative leading-[20px]">Site internet</b>
          <div className="self-stretch rounded-lg overflow-hidden flex flex-row items-center justify-start text-base text-gray-500 border-[2px] border-solid border-gray-2001">
            <div className="rounded-tl-md rounded-tr-none rounded-br-none rounded-bl-md bg-gray-50 flex flex-row py-[9px] pr-1.5 pl-3 items-center justify-start">
              <div className="relative leading-[24px]">www.</div>
            </div>
            <div className="flex-1 rounded-tl-none rounded-tr-md rounded-br-md rounded-bl-none bg-white overflow-hidden flex flex-row py-2.5 pr-3 pl-1.5 items-center justify-start text-gray-700 border-l-[2px] border-solid border-gray-2001">
              <div className="flex-1 relative leading-[24px]">salcc.org</div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[12px] text-dimgray">
          <b className="relative leading-[20px]">Logo de la structure</b>
          <div className="self-stretch rounded-lg bg-white flex flex-col pt-[22px] px-[26px] pb-[26px] items-center justify-start gap-[4px] text-mediumblue-100 border-[2px] border-dashed border-gray-2001">
            <img
              className="relative w-12 h-12 overflow-hidden shrink-0"
              alt=""
              src="/form-layoutsiconadd-image.svg"
            />
            <div className="w-[254px] flex flex-row items-center justify-between">
              <div className="rounded-md overflow-hidden flex flex-row items-center justify-start">
                <div className="relative leading-[20px] font-semibold">
                  Charger un fichier
                </div>
              </div>
              <div className="relative leading-[20px] font-semibold text-gray-6001">
                ou glisser-déposer
              </div>
            </div>
            <div className="relative text-xs leading-[16px] text-gray-500 text-center">
              PNG, JPG, GIF jusqu’à 10MB
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-gray-50 flex flex-col pt-0 px-4 pb-6 items-center justify-start text-center text-white">
        <div className="self-stretch flex flex-col items-center justify-center gap-[24px]">
          <div className="self-stretch bg-gray-2001" />
          <div className="self-stretch rounded-lg bg-mediumblue-100 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] flex flex-row py-4 px-[18px] items-center justify-center">
            <div className="flex-1 relative leading-[20px] font-semibold">
              Valider
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profil;
