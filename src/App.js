import React, { Fragment } from 'react';
import styled from 'styled-components';

// import ReactHookForm from './sample/ReactHookForm'

//! styled-components
import {
	MainCardContainer,
	Nav,
	LeftFlex,
	RightFlex,
	CoverPageText,
	Text,
} from './AppCss';

// bgImg={navBgImg}

const App = () => {
	return (
		<Fragment>
			<>
				<MainCardContainer enCoverImage pad='minor' darker={true}>
					<Nav>
						<LeftFlex>MAIN-NAV</LeftFlex>
						<RightFlex>
							<div>SERVICE</div>
							<div>CONTACT</div>
							<div>MODE</div>
						</RightFlex>
					</Nav>
					<CoverPageText>
						<Text variant='one'>Arouse-Out Studio</Text>
						<Text variant='two'>Welcome</Text>
						<Text variant='three'>Novice React-Dev to be Hired</Text>
					</CoverPageText>
				</MainCardContainer>
				<MainCardContainer pad='major' darker={false}>
					reuseable-coms
				</MainCardContainer>
				<MainCardContainer pad='major' darker={true}>
					pj-github
				</MainCardContainer>
				<MainCardContainer pad='major' darker={false}>
					timepath
				</MainCardContainer>
				<MainCardContainer pad='minor' darker={true}>
					footer
				</MainCardContainer>
			</>
		</Fragment>
	);
};
export default App;
