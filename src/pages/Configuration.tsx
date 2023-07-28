import { FunctionComponent } from "react";

const Configuration: FunctionComponent = () => {
  return (
    <div className="relative bg-white w-full h-[844px] overflow-y-auto flex flex-col items-center justify-start text-left text-base text-gray-700 font-text-2xl-leading-8-font-bold">
      <div className="self-stretch bg-white flex flex-row items-start justify-start border-b-[2px] border-solid border-whitesmoke-400">
        <div className="flex flex-row p-4 items-center justify-start">
          <img
            className="rounded-xl w-10 h-10 object-cover"
            alt=""
            src="/avatar12@2x.png"
          />
        </div>
        <div className="flex-1 h-[72px] flex flex-row py-0 pr-4 pl-0 box-border items-center justify-start gap-[16px]">
          <div className="self-stretch flex-1 flex flex-row py-[9px] px-0 items-center justify-start">
            <b className="flex-1 relative leading-[24px]">Lisa MARTEL</b>
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
      <div className="self-stretch bg-mediumblue-100 flex flex-col pt-[52px] px-4 pb-6 items-start justify-start text-9xl text-white">
        <div className="self-stretch flex flex-col items-start justify-center gap-[10px]">
          <div className="self-stretch relative leading-[28px] font-semibold">
            Informations légales
          </div>
          <div className="self-stretch relative text-base leading-[20px] font-medium">
            Saisir les informations fournies par l'administration.
          </div>
        </div>
      </div>
      <div className="self-stretch bg-white flex flex-col pt-6 px-4 pb-0 items-start justify-start gap-[24px] text-sm">
        <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
          <b className="relative leading-[20px]">Dénomination sociale</b>
          <div className="self-stretch rounded-md bg-gray-50 overflow-hidden flex flex-row py-[9px] px-[13px] items-center justify-start text-base text-lightslategray border-[2px] border-solid border-whitesmoke-600">
            <div className="relative leading-[24px] font-medium">{`ASSOCIATION SALCC `}</div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
          <b className="relative leading-[20px]">Nom commercial (optionnel)</b>
          <div className="self-stretch rounded-lg bg-white overflow-hidden flex flex-row py-[9px] px-[13px] items-center justify-start text-base text-gray-900 border-[2px] border-solid border-gray-200">
            <div className="flex-1 relative leading-[24px]">
              Société Active de Lutte Contre le Cancer
            </div>
          </div>
          <div className="self-stretch relative leading-[20px] text-gray-500">
            Ce nom apparaîtra sur votre profil et vos opérations
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
          <b className="relative leading-[20px]">Numéro SIREN</b>
          <div className="self-stretch rounded-md bg-gray-50 overflow-hidden flex flex-row py-[9px] px-[13px] items-center justify-start text-base text-lightslategray border-[2px] border-solid border-whitesmoke-600">
            <div className="relative leading-[24px] font-medium">
              315 000 943 00021
            </div>
          </div>
          <div className="self-stretch relative leading-[20px] text-gray-500">
            Le numéro d’immatriculation de votre entreprise compte 14 chiffres.
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
          <b className="relative leading-[20px]">CODE NAF /APE</b>
          <div className="self-stretch rounded-md bg-gray-50 overflow-hidden flex flex-row py-[9px] px-[13px] items-center justify-start text-base text-lightslategray border-[2px] border-solid border-whitesmoke-600">
            <div className="relative leading-[24px] font-medium">4771Z</div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
          <b className="relative leading-[20px]">Date d’immatriculation</b>
          <div className="self-stretch rounded-md bg-gray-50 overflow-hidden flex flex-row py-[9px] px-[13px] items-center justify-start text-base text-lightslategray border-[2px] border-solid border-whitesmoke-600">
            <div className="relative leading-[24px] font-medium">
              12 mars 2020
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
          <b className="relative leading-[20px]">Numéro de TVA</b>
          <div className="self-stretch rounded-lg bg-white overflow-hidden flex flex-row py-[9px] px-[13px] items-center justify-start text-base text-gray-900 border-[2px] border-solid border-gray-200">
            <div className="flex-1 relative leading-[24px]">FR36273263541</div>
          </div>
          <div className="self-stretch relative leading-[20px] text-gray-500">
            Le numéro de TVA intracommunuataire est uniquement pour les sociétés
            assujetties à la TVA.
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
          <b className="self-stretch relative leading-[20px]">
            Statuts juridiques
          </b>
          <div className="self-stretch rounded-lg bg-white overflow-hidden flex flex-row py-[9px] px-[13px] items-center justify-start gap-[8px] text-gray-900 border-[2px] border-solid border-gray-200">
            <div className="flex-1 flex flex-row items-start justify-start gap-[8px]">
              <img
                className="relative w-5 h-5 overflow-hidden shrink-0"
                alt=""
                src="/paper-clip.svg"
              />
              <div className="relative leading-[20px] font-medium">
                SALCC_statuts-co...
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[8px] text-mediumblue-100">
              <div className="rounded-md bg-white overflow-hidden flex flex-row items-center justify-start">
                <div className="relative leading-[20px] font-medium">
                  Modifier
                </div>
              </div>
              <div className="relative leading-[20px] font-medium text-gray-300">
                |
              </div>
              <div className="rounded-md bg-white overflow-hidden flex flex-row items-center justify-start">
                <div className="relative leading-[20px] font-medium">
                  Supprimer
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-white flex flex-col py-6 px-4 items-center justify-start text-center text-white">
        <div className="self-stretch flex flex-col items-center justify-center gap-[24px]">
          <div className="self-stretch bg-gray-200" />
          <div className="self-stretch rounded-lg bg-mediumblue-100 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] flex flex-row py-4 px-[18px] items-center justify-center">
            <div className="flex-1 relative leading-[20px] font-semibold">
              Valider
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-white flex flex-row py-5 px-[30px] items-center justify-between text-center text-3xs text-gray-900 border-t-[2px] border-solid border-whitesmoke-300">
        <div className="w-[46px] flex flex-col items-center justify-start gap-[4px]">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/component-2.svg"
          />
          <div className="relative leading-[16px] font-medium">Accueil</div>
        </div>
        <div className="w-[46px] flex flex-col items-center justify-start gap-[4px]">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/component-111.svg"
          />
          <div className="relative leading-[16px] font-medium">Messagerie</div>
        </div>
        <div className="w-[46px] flex flex-col items-center justify-start gap-[4px]">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/component-511.svg"
          />
          <div className="relative leading-[16px] font-medium">Projets</div>
        </div>
        <div className="w-[46px] h-[46px] flex flex-col items-center justify-start gap-[4px] text-mediumblue-100">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/component-211.svg"
          />
          <div className="relative leading-[16px] font-medium">Compte</div>
        </div>
      </div>
    </div>
  );
};

export default Configuration;
