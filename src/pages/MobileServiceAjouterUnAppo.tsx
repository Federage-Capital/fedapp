import { FunctionComponent } from "react";

const MobileServiceAjouterUnAppo: FunctionComponent = () => {
  return (
    <div className="relative w-full flex flex-col items-start justify-start text-left text-base text-gray-700 font-text-xs-leading-4-font-medium">
      <div className="self-stretch bg-white flex flex-row items-start justify-start border-b-[2px] border-solid border-whitesmoke-400">
        <div className="flex flex-row p-4 items-center justify-start">
          <img
            className="rounded-xl w-10 h-10 object-cover"
            alt=""
            src="/avatar11@2x.png"
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
              <img className="relative w-1.5 h-2.5" alt="" src="/icon2.svg" />
            </div>

          </div>
          <div className="rounded-3xs flex flex-row py-0.5 px-2.5 items-center justify-center text-right text-xs">
            <div className="relative leading-[16px] font-medium">

            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-center gap-[10px] text-9xl text-black">
          <div className="self-stretch relative leading-[20px] font-semibold">
            Valider l’apport
          </div>
          <div className="self-stretch relative text-base leading-[20px] font-medium text-dimgray">
            Veuillez vérifier les informations saisies pour transmettre votre
            proposition.
          </div>
        </div>
      </div>
      <div className="self-stretch bg-whitesmoke-100 flex flex-col py-6 px-4 items-start justify-start gap-[20px] text-xl text-gray-900">
        <div className="self-stretch rounded-lg bg-white flex flex-col py-[22px] px-4 items-center justify-start gap-[24px] border-[2px] border-solid border-gray-100">
          <div className="self-stretch flex flex-row items-start justify-center gap-[42px]">
            <div className="flex-1 relative leading-[26px] font-semibold">
              Solution de développement de nutriments actifs
            </div>
            <div className="rounded-lg bg-gray-100 w-[44.09px] h-11 flex flex-row p-1.5 box-border items-center justify-center">
              <img className="relative w-3 h-3" alt="" src="/icon8.svg" />
            </div>

          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[21px] text-base">
            <div className="w-[130px] flex flex-col items-start justify-start gap-[19px]">
              <div className="self-stretch h-[47px] flex flex-col items-start justify-start gap-[7px]">
                <div className="self-stretch relative leading-[20px] font-medium">
                  Prix proposé
                </div>
                <div className="self-stretch relative leading-[20px] font-medium text-dimgray">
                  3 285,00€
                </div>
              </div>
              <div className="self-stretch h-[47px] flex flex-col items-start justify-start gap-[7px]">
                <div className="self-stretch relative leading-[20px] font-medium">
                  Délai de livraison
                </div>
                <div className="self-stretch relative leading-[20px] font-medium text-dimgray">
                  30 mai 2023
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-lg bg-white flex flex-col py-[15px] px-[17px] items-center justify-center text-mediumblue-100 border-[2px] border-solid border-mediumblue-100">
              <div className="relative w-[280px] h-5">
                <div className="absolute top-[0px] left-[0px] leading-[20px] font-semibold">
                  Mes informations sont exactes
                </div>
                <div className="absolute top-[2px] left-[264px] rounded bg-mediumblue-100 flex flex-col py-[5.333333492279053px] px-[4.266666889190674px] items-start justify-start border-[2px] border-solid border-mediumblue-100">
                  <img
                    className="relative w-[9.6px] h-[7.47px]"
                    alt=""
                    src="/icon11.svg"
                  />
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch rounded-lg bg-white flex flex-col p-4 items-start justify-center gap-[10px]">
          <div className="self-stretch flex flex-row items-start justify-between">
            <div className="flex-1 flex flex-col items-start justify-start gap-[10px]">
              <div className="self-stretch relative leading-[20px] font-semibold">
                Commentaire
              </div>
              <div className="self-stretch relative text-sm leading-[16px] font-medium text-gray-500">
                Apportez des précisions et améliorez la transparence du projet
                pour l’ensemble des membres.
              </div>

            </div>
          </div>
          <div className="self-stretch rounded-lg flex flex-col items-start justify-start text-base">
            <div className="self-stretch rounded-lg bg-gray-100 overflow-hidden flex flex-row p-2 items-center justify-start">
              <div className="flex-1 rounded-lg bg-white flex flex-col p-2 items-start justify-center gap-[2px]">
                <div className="relative leading-[24px] font-semibold">
                  Lisa Martel
                </div>
                <div className="self-stretch relative text-sm leading-[20px] font-medium text-gray-500">
                  Bonjour, je peux intégrer le projet dès que possible, à
                  hauteur de 2 jours par semaine et sur une durée de 2 mois.
                </div>

              </div>
            </div>
          </div>
          <div className="rounded-lg w-[168px] flex flex-row items-center justify-start gap-[6px] text-xs text-mediumseagreen">
            <img
              className="flex-1 relative max-w-full overflow-hidden h-[19px]"
              alt=""
              src="/check-circle11.svg"
            />
            <b className="relative leading-[20px]">Commentaire enregistré</b>
          </div>
        </div>
        <div className="self-stretch rounded-lg bg-white flex flex-col p-4 items-start justify-start gap-[26px]">
          <div className="relative leading-[20px] font-semibold">
            Ressources
          </div>
          <div className="w-[237px] flex flex-col items-start justify-start gap-[16px] text-base text-mediumblue-100">
            <div className="self-stretch flex flex-col items-start justify-center">
              <div className="flex flex-row items-start justify-start gap-[6px]">
                <div className="relative leading-[20px] font-semibold">
                  Devis de l’apport
                </div>
                <img
                  className="relative w-[18px] h-[18px]"
                  alt=""
                  src="/vector.svg"
                />
              </div>
              <div className="self-stretch relative text-xs leading-[20px] font-medium text-dimgray">
                polere_modele_conception_21_03_23.pdf
              </div>

            </div>
            <div className="w-[174px] flex flex-col items-start justify-center">
              <div className="self-stretch flex flex-row items-start justify-start gap-[6px]">
                <div className="relative leading-[20px] font-semibold">
                  Cahier des charges
                </div>

                <img

                  alt=""

                />

              </div>

            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row py-0 px-4 items-center justify-start gap-[8px] text-base text-dimgray">
          <img
            className="relative w-5 h-5 overflow-hidden shrink-0"
            alt=""
            src="/exclamation.svg"
          />
          <b className="flex-1 relative leading-[24px]">
            Chaque apport valorise le projet. Les données financières doivent
            être validées par les partenaires.
          </b>
        </div>
        <div className="self-stretch flex flex-col pt-0 px-0 pb-6 items-center justify-start text-center text-base text-white">
          <div className="self-stretch flex flex-col items-center justify-center gap-[24px]">
            <div className="self-stretch bg-gray-200" />
            <div className="self-stretch rounded-lg bg-mediumblue-100 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] flex flex-row py-4 px-[18px] items-center justify-center">
              <div className="flex-1 relative leading-[20px] font-semibold">

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


