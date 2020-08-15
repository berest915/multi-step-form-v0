import React from 'react';

import MainCardContainer from './MainCardContainer';

const containers = [
	{ colorBool: true },
	{ colorBool: false },
	{ colorBool: true },
	{ colorBool: false },
];
const Containers = () => {
	return containers.map(({colorBool}, index) => (
    <MainCardContainer key={index} colorBool={colorBool} />
  ))
};

export default Containers;


