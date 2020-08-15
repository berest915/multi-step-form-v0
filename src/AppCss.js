import styled, { css } from 'styled-components';
import coverImage from './img/cover-image.jpg';

//? extract css constants
import { CARD_BG, CARD_PAD } from './const/css-constant';
const { BG_DARKER, BG_LIGHTER } = CARD_BG;
const { PAD_MINOR, PAD_MAJOR } = CARD_PAD;

//! css snipplets
const cssCoverImage = css`
	background-image: url(${coverImage});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	position: relative;
`;
//! main-container
export const MainCardContainer = styled.div`
	height: 100vh;
	max-height: 100vh;
	background-color: ${props => (props.darker ? BG_DARKER : BG_LIGHTER)};
	padding: ${props => (props.pad === 'minor' ? PAD_MINOR : PAD_MAJOR)};
	${props => props.enCoverImage && cssCoverImage}
`;
//! main-nav
export const Nav = styled.nav`
	height: 10vh;
	display: flex;
	& > * {
		font-weight: bold;
	}
`;
export const LeftFlex = styled.div`
	display: flex;
	justify-content: flex-start;
`;
export const RightFlex = styled.div`
	display: flex;
	flex: 1;
	justify-content: flex-end;
`;
export const CoverPageText = styled.div`
	text-align: right;
	/* position: absolute; */
	/* top: 15%; */
	/* right: 0; */
	/* transform: translate(-50%, -50%); */
	color: black;
`;
export const Text = styled.h1`
	position: absolute;
	${props => {
		switch (props.variant) {
			case 'one':
				return `
        font-size: 5rem;
        top: 15%;
        right: 5%;
        color: rgb(112,128,144);
        opacity: 0.8;
        `;
			case 'two':
				return `
        font-size: 3.5rem;
        top: 35%;
        right: 8%;color:white;  
        `;
			case 'three':
				return `
        font-size: 2.5rem;
        top: 50%;
        right: 5%;
        color: gray;
        `;
			default:
				return ``;
		}
	}}
`;
//! defaults
const AppCss = {};
export default AppCss;
