import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";

type ApportTatVideType = {
  freepikCharacterInject245?: string;
  ajoutezVotreParticipation?: string;

  /** Style props */
  apportTatVidePosition?: Property.Position;
  apportTatVideWidth?: Property.Width;
  apportTatVideAlignSelf?: Property.AlignSelf;
  frameDivAlignSelf?: Property.AlignSelf;
  enregistrerUnPremierWidth?: Property.Width;
  enregistrerUnPremierAlignSelf?: Property.AlignSelf;
  ajoutezVotreParticipationWidth?: Property.Width;
  ajoutezVotreParticipationAlignSelf?: Property.AlignSelf;
  buttonWidth?: Property.Width;
  buttonAlignSelf?: Property.AlignSelf;
  textWidth?: Property.Width;
  textFlexShrink?: Property.FlexShrink;
  textFlex?: Property.Flex;
};

const ApportTatVide: FunctionComponent<ApportTatVideType> = ({
  apportTatVidePosition,
  apportTatVideWidth,
  apportTatVideAlignSelf,
  freepikCharacterInject245,
  frameDivAlignSelf,
  enregistrerUnPremierWidth,
  enregistrerUnPremierAlignSelf,
  ajoutezVotreParticipationWidth,
  ajoutezVotreParticipationAlignSelf,
  ajoutezVotreParticipation,
  buttonWidth,
  buttonAlignSelf,
  textWidth,
  textFlexShrink,
  textFlex,
}) => {
  const apportTatVideStyle: CSS.Properties = useMemo(() => {
    return {
      position: apportTatVidePosition,
      width: apportTatVideWidth,
      alignSelf: apportTatVideAlignSelf,
    };
  }, [apportTatVidePosition, apportTatVideWidth, apportTatVideAlignSelf]);

  const frameDivStyle: CSS.Properties = useMemo(() => {
    return {
      alignSelf: frameDivAlignSelf,
    };
  }, [frameDivAlignSelf]);

  const enregistrerUnPremierStyle: CSS.Properties = useMemo(() => {
    return {
      width: enregistrerUnPremierWidth,
      alignSelf: enregistrerUnPremierAlignSelf,
    };
  }, [enregistrerUnPremierWidth, enregistrerUnPremierAlignSelf]);

  const ajoutezVotreParticipationContainerStyle: CSS.Properties =
    useMemo(() => {
      return {
        width: ajoutezVotreParticipationWidth,
        alignSelf: ajoutezVotreParticipationAlignSelf,
      };
    }, [ajoutezVotreParticipationWidth, ajoutezVotreParticipationAlignSelf]);

  const buttonStyle: CSS.Properties = useMemo(() => {
    return {
      width: buttonWidth,
      alignSelf: buttonAlignSelf,
    };
  }, [buttonWidth, buttonAlignSelf]);

  const textStyle: CSS.Properties = useMemo(() => {
    return {
      width: textWidth,
      flexShrink: textFlexShrink,
      flex: textFlex,
    };
  }, [textWidth, textFlexShrink, textFlex]);

  return (
    <div
      className="relative rounded-lg bg-white box-border w-[358px] flex flex-col py-[25px] px-[26px] items-center justify-start gap-[20px] text-center text-lg text-gray-900 font-text-2xl-leading-8-font-bold border-[2px] border-solid border-gray-200"
      style={apportTatVideStyle}
    >
      <img
        className="relative w-[57.35px] h-[160.93px]"
        alt=""
        src={freepikCharacterInject245}
      />
      <div
        className="flex flex-col items-center justify-center gap-[10px]"
        style={frameDivStyle}
      >
        <div
          className="relative leading-[20px] font-semibold inline-block w-[258px]"
          style={enregistrerUnPremierStyle}
        >
          Enregistrer un premier apport
        </div>
        <div
          className="relative text-sm leading-[20px] font-medium inline-block w-[306px] text-dimgray"
          style={ajoutezVotreParticipationContainerStyle}
        >
          <span>{ajoutezVotreParticipation}</span>
          <span className="text-gray-500">{` `}</span>
          <span className="text-mediumblue-100">Lisez notre guide.</span>
        </div>
      </div>
      <div
        className="rounded-lg bg-mediumblue-100 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] w-[296px] overflow-hidden flex flex-row py-[13px] px-[25px] box-border items-center justify-center text-base text-white"
        style={buttonStyle}
      >
        <div
          className="relative leading-[24px] font-semibold inline-block w-[137px] shrink-0"
          style={textStyle}
        >
          Ajouter un apport
        </div>
      </div>
    </div>
  );
};

export default ApportTatVide;
