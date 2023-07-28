import React from 'react'
import useSWR from 'swr';
import Link from 'next/link';


const fetcher = (url) => fetch(url).then((r) => r.json());


export default function SlideApport({ showMenu, node, ...props }: SlideApportAllUserListProps) {

	const { data: userApport, error: userApportError } = useSWR(() => `https://fed.septembre.io/jsonapi/group_content/federage-group_node-financement`, fetcher)


	return (
		<>
			{showMenu && (
				<div className="self-stretch flex flex-col items-center justify-start text-black1 pb-5 ">
					<div className="self-stretch rounded-t-lg rounded-b-none flex flex-row p-4 items-center justify-between border-[2px] border-solid border-gray-100">
						<div className="flex-1 flex flex-col py-0 pr-2.5 pl-0 items-start justify-start gap-[2px]">
							<div className="self-stretch relative leading-[20px] font-semibold">
								Formule bio-synthétique humanoïde
							</div>
							<div className="self-stretch relative text-xs leading-[24px] font-semibold text-mediumblue-100">
								Prix recherché : 40 000,00€
							</div>
						</div>
						<Link href={`/group/federage/${node.label.replace(/è/g, 'e').replaceAll(' ', '-')}`} passHref>
							<button>
								<svg width="39" height="38" viewBox="0 0 39 38" fill="none" xmlns="http://www.w3.org/2000/svg">
									<rect x="0.797363" width="38.2027" height="38" rx="8.10667" fill="#F3F4F6" />
									<path fill-rule="evenodd" clip-rule="evenodd" d="M17.2927 23.5314C16.9168 23.1555 16.9168 22.5459 17.2927 22.17L20.4627 19L17.2927 15.8301C16.9168 15.4541 16.9168 14.8446 17.2927 14.4687C17.6686 14.0927 18.2782 14.0927 18.6541 14.4687L22.5048 18.3193C22.8807 18.6953 22.8807 19.3048 22.5048 19.6807L18.6541 23.5314C18.2782 23.9073 17.6686 23.9073 17.2927 23.5314Z" fill="#52606D" />
								</svg>
							</button>
						</Link>
					</div>

					<div className="self-stretch rounded-t-none rounded-b-lg flex flex-row p-4 items-center justify-between border-r-[2px] border-solid border-gray-100 border-b-[2px] border-l-[2px]">
						<div className="flex-1 flex flex-col py-0 pr-2.5 pl-0 items-start justify-start gap-[2px]">
							<div className="self-stretch relative leading-[20px] font-semibold">
								Laboratoire de type Cancéropôle
							</div>
							<div className="self-stretch relative text-xs leading-[24px] font-semibold text-mediumblue-100">
								Prix recherché : 110 000,00€
							</div>
						</div>
						<svg width="39" height="38" viewBox="0 0 39 38" fill="none" xmlns="http://www.w3.org/2000/svg">
							<rect x="0.797363" width="38.2027" height="38" rx="8.10667" fill="#F3F4F6" />
							<path fill-rule="evenodd" clip-rule="evenodd" d="M17.2927 23.5314C16.9168 23.1555 16.9168 22.5459 17.2927 22.17L20.4627 19L17.2927 15.8301C16.9168 15.4541 16.9168 14.8446 17.2927 14.4687C17.6686 14.0927 18.2782 14.0927 18.6541 14.4687L22.5048 18.3193C22.8807 18.6953 22.8807 19.3048 22.5048 19.6807L18.6541 23.5314C18.2782 23.9073 17.6686 23.9073 17.2927 23.5314Z" fill="#52606D" />
						</svg>
					</div>
				</div>
			)
			}
		</>
	)
}

// import { FunctionComponent, useMemo } from "react";
// import CSS, { Property } from "csstype";

// type ApportTatVideType = {
// 	freepikCharacterInject245?: string;
// 	ajoutezVotreParticipation?: string;

// 	/** Style props */
// 	apportTatVidePosition?: Property.Position;
// 	apportTatVideWidth?: Property.Width;
// 	apportTatVideAlignSelf?: Property.AlignSelf;
// 	frameDivAlignSelf?: Property.AlignSelf;
// 	enregistrerUnPremierWidth?: Property.Width;
// 	enregistrerUnPremierAlignSelf?: Property.AlignSelf;
// 	ajoutezVotreParticipationWidth?: Property.Width;
// 	ajoutezVotreParticipationAlignSelf?: Property.AlignSelf;
// 	buttonWidth?: Property.Width;
// 	buttonAlignSelf?: Property.AlignSelf;
// 	textWidth?: Property.Width;
// 	textFlexShrink?: Property.FlexShrink;
// 	textFlex?: Property.Flex;
// };

// const SlideApport: FunctionComponent<ApportTatVideType> = ({
// 	apportTatVidePosition,
// 	apportTatVideWidth,
// 	apportTatVideAlignSelf,
// 	freepikCharacterInject245,
// 	frameDivAlignSelf,
// 	enregistrerUnPremierWidth,
// 	enregistrerUnPremierAlignSelf,
// 	ajoutezVotreParticipationWidth,
// 	ajoutezVotreParticipationAlignSelf,
// 	ajoutezVotreParticipation,
// 	buttonWidth,
// 	buttonAlignSelf,
// 	textWidth,
// 	textFlexShrink,
// 	textFlex,
// }) => {
// 	const apportTatVideStyle: CSS.Properties = useMemo(() => {
// 		return {
// 			position: apportTatVidePosition,
// 			width: apportTatVideWidth,
// 			alignSelf: apportTatVideAlignSelf,
// 		};
// 	}, [apportTatVidePosition, apportTatVideWidth, apportTatVideAlignSelf]);

// 	const frameDivStyle: CSS.Properties = useMemo(() => {
// 		return {
// 			alignSelf: frameDivAlignSelf,
// 		};
// 	}, [frameDivAlignSelf]);

// 	const enregistrerUnPremierStyle: CSS.Properties = useMemo(() => {
// 		return {
// 			width: enregistrerUnPremierWidth,
// 			alignSelf: enregistrerUnPremierAlignSelf,
// 		};
// 	}, [enregistrerUnPremierWidth, enregistrerUnPremierAlignSelf]);

// 	const ajoutezVotreParticipationContainerStyle: CSS.Properties =
// 		useMemo(() => {
// 			return {
// 				width: ajoutezVotreParticipationWidth,
// 				alignSelf: ajoutezVotreParticipationAlignSelf,
// 			};
// 		}, [ajoutezVotreParticipationWidth, ajoutezVotreParticipationAlignSelf]);

// 	const buttonStyle: CSS.Properties = useMemo(() => {
// 		return {
// 			width: buttonWidth,
// 			alignSelf: buttonAlignSelf,
// 		};
// 	}, [buttonWidth, buttonAlignSelf]);

// 	const textStyle: CSS.Properties = useMemo(() => {
// 		return {
// 			width: textWidth,
// 			flexShrink: textFlexShrink,
// 			flex: textFlex,
// 		};
// 	}, [textWidth, textFlexShrink, textFlex]);

// 	return (
// 		<div
// 			className="relative rounded-lg bg-white box-border w-[358px] flex flex-col py-[25px] px-[26px] items-center justify-start gap-[20px] text-center text-lg text-gray-900 font-text-2xl-leading-8-font-bold border-[2px] border-solid border-gray-200"
// 			style={apportTatVideStyle}
// 		>
// 			<svg width="58" height="161" viewBox="0 0 58 161" fill="none" xmlns="http://www.w3.org/2000/svg">
// 				<path d="M13.0491 154.204L9.06714 153.266L11.2707 143.705L15.2474 144.643L13.0491 154.204Z" fill="#B55B52" />
// 				<path d="M43.5988 156.676H39.4406L38.948 147.038H43.1114L43.5988 156.676Z" fill="#B55B52" />
// 				<path d="M38.7555 156.195H43.8315C43.9139 156.196 43.9937 156.224 44.0578 156.276C44.1218 156.328 44.1664 156.4 44.184 156.48L45.0136 160.182C45.0323 160.272 45.0305 160.365 45.0083 160.455C44.986 160.544 44.9439 160.627 44.8851 160.698C44.8263 160.769 44.7524 160.825 44.6687 160.863C44.585 160.902 44.4938 160.92 44.4018 160.918C42.7738 160.893 41.5812 160.794 39.5229 160.794C38.2578 160.794 35.4787 160.929 33.7314 160.929C31.9842 160.929 31.756 159.202 32.4715 159.042C35.6757 158.342 37.0601 157.377 38.0867 156.449C38.2724 156.288 38.5095 156.198 38.7555 156.195Z" fill="#263238" />
// 				<path d="M8.88171 152.778L13.3095 153.815C13.3895 153.835 13.4605 153.881 13.5113 153.945C13.5621 154.01 13.5896 154.09 13.5895 154.173L13.548 157.963C13.5476 158.055 13.5263 158.145 13.4858 158.227C13.4453 158.31 13.3867 158.382 13.3143 158.438C13.2419 158.495 13.1577 158.534 13.068 158.553C12.9782 158.572 12.8853 158.571 12.7962 158.549C11.2045 158.149 8.91801 157.512 6.91149 157.045C4.56796 156.501 4.52129 156.589 1.76815 155.946C0.103826 155.557 0.0364277 153.768 0.767486 153.779C4.10132 153.825 4.69758 153.919 7.83439 152.871C8.1678 152.742 8.53077 152.71 8.88171 152.778Z" fill="#263238" />
// 				<path d="M30.3129 28.4469C28.4256 30.9926 26.6472 33.5539 24.9259 36.193C24.0652 37.5151 23.2149 38.8425 22.4009 40.1957C21.5868 41.5489 20.7676 42.9177 20.0003 44.3435L19.7099 44.862L19.5648 45.1264L19.3418 45.5723C19.1535 45.9768 19.0176 46.4037 18.9374 46.8426C18.8129 47.5208 18.8683 48.2198 19.0981 48.8699C19.356 49.5633 19.8145 50.1643 20.4151 50.5964C20.8056 50.8797 21.24 51.0968 21.7009 51.2393L25.6051 46.2878C27.0568 44.0895 28.576 41.8963 30.1158 39.7083L35.4199 32.154L30.3129 28.4469Z" fill="#B65B52" />
// 				<path opacity="0.2" d="M11.2746 143.705L10.1392 148.636L14.1211 149.574L15.2566 144.648L11.2746 143.705Z" fill="black" />
// 				<path d="M38.1305 29.3496C39.2608 33.1657 32.5776 40.4814 32.5776 40.4814L24.4893 35.3329C25.9459 32.925 27.5457 30.6067 29.28 28.3904C32.6968 23.9522 36.7617 24.73 38.1305 29.3496Z" fill="#012BDD" />
// 				<path opacity="0.2" d="M43.1114 147.044H38.948L39.2021 152.011H43.3655L43.1114 147.044Z" fill="black" />
// 				<path d="M55.1298 30.8013C50.2509 45.6351 49.8309 61.0599 49.3384 64.2848C46.0927 63.9426 33.8721 62.6257 27.2096 61.905C25.4467 42.2546 30.3931 30.231 32.1611 26.6483C32.3324 26.2988 32.5917 25.9998 32.9135 25.7807C33.2353 25.5617 33.6085 25.43 33.9965 25.3988C34.572 25.3521 35.3186 25.3054 36.1586 25.2795C36.7704 25.2795 37.4288 25.2484 38.1132 25.2795C38.4917 25.2795 38.8754 25.2795 39.2643 25.321C42.4157 25.5874 45.5491 26.0358 48.6488 26.6639C49.2347 26.7779 49.8309 26.9075 50.4012 27.0423C50.9716 27.1772 51.4382 27.3068 51.9567 27.4416C52.5737 27.6127 53.1596 27.7838 53.6729 27.9601C53.9557 28.0501 54.2179 28.1952 54.4444 28.387C54.6709 28.5787 54.8572 28.8134 54.9926 29.0775C55.128 29.3416 55.2099 29.6299 55.2334 29.9257C55.257 30.2216 55.2217 30.5191 55.1298 30.8013Z" fill="#012BDD" />
// 				<path d="M37.9484 25.2694H38.1091C38.4876 25.2694 38.8713 25.2694 39.2601 25.3057C42.4116 25.5798 45.5448 26.0334 48.6447 26.6641C49.0957 26.7523 49.5468 26.8508 49.9927 26.9545L49.2617 27.473C47.1048 29.0751 44.5953 30.5216 41.1008 30.2779L40.6497 30.2416C38.8609 30.0446 37.7514 29.381 37.3469 28.2559C37.2052 27.7459 37.1858 27.2096 37.2904 26.6907C37.3949 26.1718 37.6203 25.6848 37.9484 25.2694Z" fill="#407BFF" />
// 				<path d="M49.2251 15.9825C48.1881 18.912 46.8037 24.3456 48.6236 26.6633C46.7467 28.0528 44.3358 29.6238 40.7375 29.2297C37.1393 28.8357 38.1451 26.4662 39.2598 25.3048C42.7337 24.9886 43.0085 22.4843 42.7648 20.0578L49.2251 15.9825Z" fill="#B55B52" />
// 				<path opacity="0.2" d="M46.5681 17.6473L42.7417 20.053C42.8087 20.6191 42.8243 21.19 42.7884 21.7588C44.1001 21.7588 46.0703 20.6078 46.4177 19.2805C46.5639 18.7492 46.6148 18.1963 46.5681 17.6473Z" fill="black" />
// 				<path d="M42.5954 11.5397L44.1249 11.7471C46.0848 11.7004 49.6986 7.75477 48.4024 4.34316C44.0212 3.58618 39.4327 5.74825 42.5954 11.5397Z" fill="#263238" />
// 				<path d="M52.1526 13.6744C50.0113 17.2001 48.9329 19.3777 46.1071 20.2799C41.8504 21.6331 38.2262 17.5941 39.2736 13.493C40.2172 9.80656 43.5666 4.67878 47.9011 5.08319C48.8577 5.17242 49.7756 5.50494 50.5674 6.04913C51.3592 6.59331 51.9986 7.33106 52.4247 8.19217C52.8509 9.05327 53.0496 10.0091 53.002 10.9687C52.9543 11.9283 52.6619 12.8597 52.1526 13.6744Z" fill="#B55B52" />
// 				<path d="M54.6402 8.48645L53.0847 8.52274C51.1612 8.88568 48.2214 13.355 50.0516 16.5177C54.4379 17.2695 59.7939 13.1839 54.6402 8.48645Z" fill="#263238" />
// 				<path d="M51.9716 9.96303C48 9.12309 44.1425 4.56046 44.3395 1.73473C44.5469 -1.25172 48.7414 0.324467 49.5243 1.2681C49.3999 -0.380667 50.5613 0.00819194 51.3546 1.01923C52.1478 2.03027 53.1381 5.68556 56.1298 8.32981C58.1311 10.0978 56.5186 10.9274 51.9716 9.96303Z" fill="#263238" />
// 				<path d="M55.5852 9.92761C55.5852 9.92761 57.2391 10.5913 57.628 10.0572C57.9339 11.2031 56.7362 11.0631 55.5852 9.92761Z" fill="#263238" />
// 				<path d="M51.6839 18.5593C51.2382 18.8179 50.7459 18.9858 50.2352 19.0534C49.7244 19.1211 49.2054 19.0871 48.7078 18.9534C47.3805 18.5905 47.4272 17.232 48.3863 16.361C49.247 15.5625 50.9787 14.8055 52.0157 15.6351C53.0527 16.4647 52.7934 17.9164 51.6839 18.5593Z" fill="#B55B52" />
// 				<path d="M27.6917 106.364C30.3308 97.4982 41.7529 63.4806 41.7529 63.4806L27.2043 61.9252C27.2043 61.9252 18.9086 92.3082 16.8347 104.835C14.6415 117.859 8.74121 146.469 8.74121 146.469L15.8548 148.429C15.8548 148.429 25.0474 115.22 27.6917 106.364Z" fill="#407BFF" />
// 				<path opacity="0.2" d="M36.3312 71.89C32.7381 77.4792 30.8871 89.7568 30.7627 96.6474C33.1218 89.3887 36.186 80.1545 38.4725 73.2795C37.7931 72.7653 37.0775 72.3009 36.3312 71.89Z" fill="black" />
// 				<path d="M35.0538 62.7501C35.0538 62.7501 33.8665 96.9232 34.3435 109.108C34.862 122.453 37.2884 151.053 37.2884 151.053H44.9101C44.9101 151.053 44.1998 122.562 44.8168 109.574C45.5219 94.7612 49.3328 64.3056 49.3328 64.3056L35.0538 62.7501Z" fill="#407BFF" />
// 				<path d="M36.6628 151.213H45.6377V148.533L36.2065 148.102L36.6628 151.213Z" fill="#407BFF" />
// 				<path opacity="0.5" d="M36.6628 151.213H45.6377V148.533L36.2065 148.102L36.6628 151.213Z" fill="white" />
// 				<path d="M7.91626 147.299L16.0927 149.212L16.7097 146.568L8.40363 144.178L7.91626 147.299Z" fill="#407BFF" />
// 				<path opacity="0.5" d="M7.91626 147.299L16.0927 149.212L16.7097 146.568L8.40363 144.178L7.91626 147.299Z" fill="white" />
// 				<path d="M46.0867 11.7778C45.9312 12.0785 45.646 12.234 45.449 12.1303C45.252 12.0266 45.226 11.7052 45.3816 11.4096C45.5371 11.1141 45.8223 10.9534 46.0193 11.0571C46.2163 11.1608 46.2423 11.4822 46.0867 11.7778Z" fill="#263238" />
// 				<path d="M42.7232 10.0093C42.5676 10.31 42.2825 10.4655 42.0906 10.3618C41.8988 10.2581 41.8625 9.93667 42.0232 9.64114C42.184 9.34561 42.4639 9.18488 42.6558 9.28857C42.8476 9.39227 42.8787 9.71373 42.7232 10.0093Z" fill="#263238" />
// 				<path d="M43.7119 10.7205C42.8795 11.4426 41.9513 12.0463 40.9536 12.5144C41.0805 12.7661 41.2609 12.9869 41.4821 13.1616C41.7033 13.3362 41.96 13.4604 42.2343 13.5254L43.7119 10.7205Z" fill="#A02724" />
// 				<path d="M43.0729 14.9829C43.4247 15.1166 43.7999 15.1777 44.1759 15.1625C44.5519 15.1474 44.921 15.0563 45.2609 14.8948C45.2725 14.8886 45.2827 14.8803 45.2911 14.8702C45.2994 14.8601 45.3057 14.8485 45.3096 14.836C45.3134 14.8234 45.3148 14.8103 45.3135 14.7973C45.3123 14.7842 45.3085 14.7715 45.3024 14.76C45.2963 14.7484 45.2879 14.7381 45.2778 14.7298C45.2677 14.7214 45.2561 14.7152 45.2436 14.7113C45.2311 14.7075 45.2179 14.7061 45.2049 14.7073C45.1918 14.7086 45.1792 14.7124 45.1676 14.7185C44.7877 14.8932 44.3721 14.9762 43.9542 14.9609C43.5364 14.9456 43.1279 14.8324 42.7618 14.6304C42.739 14.6193 42.7129 14.6174 42.6887 14.6251C42.6646 14.6328 42.6443 14.6496 42.6322 14.6718C42.6252 14.6828 42.6206 14.6951 42.6189 14.708C42.6172 14.7209 42.6184 14.734 42.6224 14.7464C42.6263 14.7588 42.633 14.7702 42.6419 14.7797C42.6507 14.7892 42.6616 14.7966 42.6737 14.8014C42.8022 14.8716 42.9356 14.9323 43.0729 14.9829Z" fill="#263238" />
// 				<path d="M48.4175 10.3684C48.4516 10.3763 48.4871 10.3763 48.5212 10.3684C48.5722 10.3583 48.6173 10.329 48.6472 10.2865C48.6772 10.244 48.6896 10.1917 48.6819 10.1403C48.6386 9.83072 48.5219 9.53602 48.3415 9.28077C48.1611 9.02552 47.9223 8.81712 47.645 8.67295C47.6212 8.66268 47.5955 8.65722 47.5696 8.65688C47.5437 8.65653 47.5179 8.66132 47.4938 8.67095C47.4697 8.68059 47.4478 8.69488 47.4292 8.71302C47.4107 8.73116 47.3959 8.75278 47.3857 8.77665C47.366 8.82427 47.3652 8.87763 47.3836 8.92582C47.4019 8.974 47.4379 9.01337 47.4842 9.03589C47.7036 9.15209 47.8919 9.31908 48.0335 9.52293C48.1751 9.72678 48.2659 9.96156 48.2983 10.2077C48.3008 10.243 48.3134 10.2769 48.3345 10.3054C48.3556 10.3338 48.3844 10.3557 48.4175 10.3684Z" fill="#263238" />
// 				<path d="M43.8244 7.92564C43.8 7.90433 43.7703 7.88978 43.7385 7.88342C43.7067 7.87705 43.6738 7.8791 43.643 7.88934C43.4071 7.96516 43.1566 7.98355 42.9122 7.94296C42.6678 7.90238 42.4366 7.80401 42.2379 7.65603C42.2002 7.61991 42.1501 7.59973 42.0979 7.59973C42.0457 7.59973 41.9956 7.61991 41.9579 7.65603C41.9221 7.69281 41.9021 7.74211 41.9021 7.79343C41.9021 7.84475 41.9221 7.89404 41.9579 7.93082C42.2071 8.1206 42.4982 8.24789 42.8067 8.30202C43.1152 8.35614 43.4322 8.33553 43.7311 8.24191C43.7813 8.22745 43.8237 8.19366 43.849 8.14797C43.8742 8.10227 43.8803 8.04842 43.8659 7.99822C43.8579 7.97113 43.8437 7.94628 43.8244 7.92564Z" fill="#263238" />
// 				<path d="M37.3834 156.927C37.7508 156.916 38.1159 156.866 38.4723 156.776C38.4912 156.771 38.5083 156.761 38.5212 156.746C38.5342 156.731 38.5424 156.713 38.5448 156.693C38.5488 156.675 38.547 156.655 38.5396 156.638C38.5322 156.62 38.5195 156.605 38.5034 156.595C38.3478 156.502 37.005 155.677 36.5487 155.91C36.4977 155.937 36.4548 155.978 36.4247 156.027C36.3946 156.076 36.3783 156.133 36.3776 156.19C36.3675 156.287 36.3806 156.384 36.4157 156.474C36.4509 156.564 36.5072 156.645 36.5798 156.709C36.8163 156.868 37.0989 156.945 37.3834 156.927ZM38.1871 156.636C37.4819 156.776 36.9376 156.75 36.7094 156.559C36.6592 156.516 36.6206 156.461 36.597 156.399C36.5735 156.338 36.5658 156.271 36.5746 156.206C36.5731 156.182 36.5781 156.159 36.589 156.138C36.6 156.117 36.6165 156.099 36.6368 156.087C36.8753 155.962 37.6427 156.32 38.1871 156.657V156.636Z" fill="#407BFF" />
// 				<path d="M38.4491 156.776C38.4661 156.781 38.484 156.781 38.501 156.776C38.5155 156.767 38.5274 156.754 38.5356 156.738C38.5437 156.723 38.5479 156.706 38.5476 156.688C38.5476 156.636 38.4439 155.434 37.9566 155.04C37.8999 154.989 37.8329 154.952 37.7604 154.931C37.6878 154.909 37.6114 154.904 37.5366 154.915C37.4633 154.915 37.3923 154.94 37.3355 154.986C37.2788 155.033 37.2399 155.097 37.2255 155.169C37.1374 155.636 37.9669 156.548 38.4024 156.782L38.4491 156.776ZM37.6092 155.102C37.6921 155.101 37.7719 155.133 37.8321 155.19C38.1345 155.56 38.3155 156.015 38.3506 156.491C37.9203 156.165 37.3914 155.454 37.4432 155.205C37.4432 155.18 37.4432 155.117 37.5884 155.102H37.6351H37.6092Z" fill="#407BFF" />
// 				<path d="M8.35429 153.246C8.37236 153.244 8.38954 153.237 8.4041 153.226C8.41866 153.215 8.4301 153.2 8.43725 153.184C8.44389 153.164 8.44446 153.144 8.4389 153.124C8.43333 153.105 8.4219 153.087 8.40614 153.075C8.24541 152.935 6.80921 151.727 6.25443 151.887C6.20212 151.901 6.15441 151.929 6.11616 151.967C6.0779 152.005 6.05048 152.053 6.03668 152.105C6.0035 152.19 5.99227 152.282 6.00405 152.373C6.01583 152.464 6.05024 152.55 6.10408 152.624C6.45665 153.142 7.65953 153.235 8.33874 153.256L8.35429 153.246ZM6.34777 152.069C6.67441 152.038 7.48323 152.587 8.05356 153.033C7.1203 152.976 6.46702 152.779 6.26481 152.515C6.23097 152.467 6.20946 152.412 6.20222 152.354C6.19498 152.296 6.20223 152.237 6.22332 152.183C6.22749 152.162 6.23748 152.143 6.25215 152.127C6.26682 152.111 6.28558 152.1 6.30628 152.095L6.34777 152.069Z" fill="#407BFF" />
// 				<path d="M8.35298 153.245C8.36856 153.237 8.38225 153.226 8.39303 153.213C8.40381 153.199 8.41138 153.184 8.4152 153.167C8.4152 153.12 8.56555 152 8.15077 151.456C8.08922 151.375 8.01124 151.307 7.92191 151.258C7.83257 151.209 7.73389 151.179 7.63229 151.171C7.36268 151.134 7.25898 151.248 7.21232 151.352C7.03085 151.793 7.7982 152.908 8.24928 153.229C8.26302 153.242 8.28025 153.25 8.29874 153.253C8.31723 153.256 8.33613 153.253 8.35298 153.245ZM7.55452 151.357H7.65822C7.73021 151.365 7.79969 151.389 7.86221 151.425C7.92472 151.462 7.97886 151.511 8.02115 151.57C8.24023 151.994 8.32349 152.476 8.25964 152.949C7.83449 152.529 7.33676 151.689 7.44564 151.425C7.45082 151.404 7.46637 151.363 7.55452 151.357Z" fill="#407BFF" />
// 				<path d="M56.3024 34.3323C55.8928 35.11 55.5039 35.7633 55.0788 36.4529C54.6536 37.1425 54.2492 37.8061 53.7981 38.4594C52.9167 39.7763 51.9782 41.0518 51.0035 42.3117C50.0288 43.5716 49.0022 44.7797 47.8926 45.9411L47.4726 46.4025C47.1743 46.7379 46.8346 47.0341 46.4616 47.2839C46.1889 47.4592 45.8965 47.6019 45.5906 47.7091C45.2095 47.8453 44.8079 47.9154 44.4032 47.9165C43.6442 47.9182 42.9026 47.6885 42.2775 47.258C41.8921 46.9935 41.5509 46.6697 41.2664 46.2988C41.0631 46.0428 40.881 45.7705 40.722 45.4848C40.4735 45.0329 40.2586 44.5632 40.0791 44.0797C39.5196 42.4878 39.1083 40.8476 38.8503 39.1801C38.5755 37.6246 38.3837 36.0433 38.2333 34.4826C37.9274 31.3718 37.7822 28.2868 37.7822 25.15L40.8931 24.8804C41.4531 27.8461 42.0442 30.8429 42.6871 33.7671C43.0137 35.2344 43.3559 36.6862 43.724 38.0965C44.0664 39.4287 44.5119 40.7323 45.0565 41.9954C45.1603 42.2233 45.2835 42.4419 45.4246 42.6487C45.4765 42.7213 45.5232 42.7732 45.5387 42.7732C45.5543 42.7732 45.5387 42.7265 45.3572 42.5969C45.0489 42.3952 44.6887 42.2872 44.3203 42.2858C43.9733 42.2831 43.6324 42.3764 43.3352 42.5554C43.1848 42.6487 43.1641 42.685 43.1641 42.6643L43.4803 42.2495C44.3514 41.0725 45.2173 39.88 46.0365 38.6564C46.8557 37.4328 47.6749 36.2092 48.4681 34.97L49.6451 33.1035L50.7598 31.2681L56.3024 34.3323Z" fill="#B65B52" />
// 				<path d="M21.6885 51.2395C22.2796 51.4171 22.8914 51.5165 23.5084 51.535C24.4344 51.5655 25.3613 51.51 26.277 51.3691C27.1325 51.2447 27.9465 51.0839 28.7502 50.9077C31.8783 50.1734 34.9407 49.1832 37.9066 47.9471L37.2325 44.9607C35.729 45.1888 33.992 45.4273 32.4833 45.6295C30.9745 45.8317 29.4709 46.0391 27.9984 46.148C27.2622 46.2154 26.5363 46.2673 25.8363 46.2776H25.5926" fill="#B65B52" />
// 				<path d="M36.3419 45.0903L39.6758 44.3852L40.3965 49.3315C40.3965 49.3315 36.6945 49.9018 35.5642 47.0917L36.3419 45.0903Z" fill="#B55B52" />
// 				<path d="M43.4382 45.9199L42.8005 48.953L40.3999 49.3211L39.6792 44.3852L43.4382 45.9199Z" fill="#B55B52" />
// 				<path d="M56.9938 31.0758C58.7877 34.6274 53.5251 43.0008 53.5251 43.0008L44.6436 39.3715C45.6495 36.7484 46.8113 34.1877 48.1226 31.7031C50.6787 26.7413 54.8161 26.7776 56.9938 31.0758Z" fill="#012BDD" />
// 				<path d="M41.3243 25.8959L41.6354 21.6806L36.7202 22.5672C36.7202 22.5672 36.9017 26.4351 38.9393 26.741L41.3243 25.8959Z" fill="#B55B52" />
// 				<path d="M40.1978 17.7189L36.0188 19.2485L36.7239 22.5667L41.634 21.6801L40.1978 17.7189Z" fill="#B55B52" />
// 			</svg>

// 			<div
// 				className="flex flex-col items-center justify-center gap-[10px]"
// 				style={frameDivStyle}
// 			>
// 				<div
// 					className="relative leading-[20px] font-semibold inline-block w-[258px]"
// 					style={enregistrerUnPremierStyle}
// 				>
// 					Enregistrer un premier apport
// 				</div>
// 				<div
// 					className="relative text-sm leading-[20px] font-medium inline-block w-[306px] text-dimgray"
// 					style={ajoutezVotreParticipationContainerStyle}
// 				>
// 					<span>{ajoutezVotreParticipation}</span>
// 					<span className="text-gray-500">{` `}</span>
// 					<span className="text-mediumblue-100">Lisez notre guide.</span>
// 				</div>
// 			</div>
// 			<div
// 				className="rounded-lg bg-mediumblue-100 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] w-[296px] overflow-hidden flex flex-row py-[13px] px-[25px] box-border items-center justify-center text-base text-white"
// 				style={buttonStyle}
// 			>
// 				<div
// 					className="relative leading-[24px] font-semibold inline-block w-[137px] shrink-0"
// 					style={textStyle}
// 				>
// 					Ajouter un apport
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default SlideApport;

// import { FunctionComponent } from "react";

// const SlideApport: FunctionComponent = () => {
// 	return (
// 		<svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
// 			<rect width="37.7" height="37.5" rx="8" fill="#F3F4F6" />
// 			<path fill-rule="evenodd" clip-rule="evenodd" d="M16.2782 23.2218C15.9073 22.8508 15.9073 22.2492 16.2782 21.8783L19.4065 18.75L16.2782 15.6218C15.9073 15.2508 15.9073 14.6493 16.2782 14.2783C16.6492 13.9073 17.2508 13.9073 17.6218 14.2783L21.4218 18.0783C21.7927 18.4493 21.7927 19.0508 21.4218 19.4218L17.6218 23.2218C17.2508 23.5927 16.6492 23.5927 16.2782 23.2218Z" fill="#52606D" />
// 		</svg>
// 	);
// };

// export default SlideApport;