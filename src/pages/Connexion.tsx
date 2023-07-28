import { FunctionComponent } from "react";

const Connexion: FunctionComponent = () => {
  return (
    <div className="relative bg-gray-50 w-full h-[790px] flex flex-col py-16 px-4 box-border items-center justify-center text-center text-9xl text-black1 font-text-2xl-leading-8-font-bold">
      <div className="self-stretch overflow-y-auto flex flex-col pt-0 pb-16 pr-4 pl-0 items-start justify-start gap-[32px]">
        <div className="self-stretch flex flex-col items-center justify-start">
          <div className="self-stretch flex flex-col items-center justify-start gap-[12px]">
            <div className="self-stretch relative leading-[20px] font-semibold">
              Accéder à Federage
            </div>
            <div className="self-stretch flex flex-row items-start justify-center text-base text-gray-500">
              <div className="flex-1 relative leading-[24px]">
                <span className="font-medium">{`Connectez-vous à Federage. Jamais inscrit ? `}</span>
                <span className="font-semibold text-mediumblue-100">
                  Cliquez ici
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-[24px] text-left text-base text-darkgray-200">
          <div className="self-stretch rounded-lg bg-white overflow-hidden flex flex-col items-start justify-start border-[2px] border-solid border-gray-200">
            <div className="self-stretch rounded-t-md rounded-b-none bg-white overflow-hidden flex flex-row py-[9px] px-[13px] items-center justify-start border-b-[2px] border-solid border-gray-200">
              <div className="relative leading-[24px]">Nom d’utilisateur</div>
            </div>
            <div className="self-stretch rounded-t-none rounded-b-md bg-white overflow-hidden flex flex-row py-[9px] px-[13px] items-center justify-start">
              <div className="relative leading-[24px]">Mot de passe</div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-between text-sm text-gray-900">
            <div className="flex flex-row items-center justify-start gap-[8px]">
              <img
                className="relative rounded w-4 h-4 overflow-hidden shrink-0"
                alt=""
                src="/intrant-coche1.svg"
              />
              <div className="flex-1 relative leading-[20px] font-medium">
                Resté connecté
              </div>
            </div>
            <div className="w-[146px] flex flex-row items-center justify-start text-right text-mediumblue-100">
              <div className="flex-1 relative leading-[20px] font-medium">
                Mot de passe oublié ?
              </div>
            </div>
          </div>
          <div className="self-stretch relative rounded-lg bg-mediumblue-100 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] h-[50px] overflow-hidden shrink-0 text-white">
            <div className="absolute top-[calc(50%_-_10px)] left-[calc(50%_-_36px)] leading-[20px] font-medium">
              Connexion
            </div>
            <img
              className="absolute top-[calc(50%_-_10px)] left-[12px] w-5 h-5 overflow-hidden"
              alt=""
              src="/lock-closed.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connexion;
