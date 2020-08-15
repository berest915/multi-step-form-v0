import React from 'react';
import styled, { css } from 'styled-components';

const MainCardContainer = (props) => {
	// console.log(colorBool);
	return <Card>x</Card>;
};

export default MainCardContainer;

const bg1 = css`
	background-color: green;
`;
const bg2 = css`
	background-color: pink;
`;
const Card = styled.div`
	height: 100vh;
	max-height: 100vh;
	background-color: ${props => (props.colorBool === true ? 'pink' : 'green')};

	/* ${props => (props.colorBool ? bg1 : bg2)} */
`;
// `background-color: rgba(211,211,211, 0.6)`  :  `background-color: rgba(211,211,211, 0.3)`
