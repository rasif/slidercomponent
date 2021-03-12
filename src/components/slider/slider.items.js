import styled from 'styled-components';

export const SliderWrapper = styled.div`
	display: flex;

	@media all and (max-width: 768px) {
		flex-direction: column;
	}
`;

export const SliderBlock = styled.div`
	width: 50%;
	min-height: 300px;
	background-color: white;

	@media all and (max-width: 768px) {
		width: 100%;
	}
`;

export const SliderLeft = styled(SliderBlock)`
	border-right: 10px solid #eaeaea;

	@media all and (max-width: 768px) {
		border-right: none;
		margin-bottom: 20px;
	}
`;

export const SliderRight = styled(SliderBlock)`
	background-color: rgb(
		${({backgroundColor}) => `${backgroundColor.red}, ${backgroundColor.green}, ${backgroundColor.blue}`}
	);
	color: rgb(${({color}) => `${color.red}, ${color.green}, ${color.blue}`});
	padding: 10px;

	li {
		list-style: none;
	}
`;

export const SliderHeader = styled.div`
	box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.3);
	display: flex;
	background-color: #d8d8d8;
`;

export const SliderHeaderItem = styled.p`
	height: 50px;
	line-height: 50px;
	width: 50%;
	text-align: center;
	font-weight: 200;
	cursor: pointer;
	transition: 0.5s;
	&:nth-child(1) {
		background-color: ${({theme}) => (theme.chosen ? '#d8d8d8' : '#dfdfdf')};
	}

	&:nth-child(2) {
		background-color: ${({theme}) => (theme.chosen ? '#dfdfdf' : '#d8d8d8')};
	}
`;

export const SliderBody = styled.div`
	padding: 10px;
`;

export const SliderBodyItem = styled.div`
	padding-top: 20px;

	&:nth-child(1) {
		display: ${({theme}) => (theme.chosen ? 'block' : 'none')};
	}

	&:nth-child(2) {
		display: ${({theme}) => (theme.chosen ? 'none' : 'block')};
	}
`;

export const SliderRangeInput = styled.input`
	width: 90%;
	margin-bottom: 20px;
	-webkit-appearance: none;
	background: transparent;

	&:nth-child(1) {
		&::-webkit-slider-thumb {
			border: 1px solid #d33724;
		}
	}

	&:nth-child(2) {
		&::-webkit-slider-thumb {
			border: 1px solid #00a65a;
		}
	}

	&:nth-child(3) {
		&::-webkit-slider-thumb {
			border: 1px solid #00a7d0;
		}
	}

	&::-webkit-slider-thumb {
		-webkit-appearance: none;
		height: 20px;
		width: 15px;
		border-radius: 3px;
		background: #ffffff;
		cursor: pointer;
		margin-top: -4px;
	}

	&::-moz-range-thumb {
		height: 20px;
		width: 15px;
		border-radius: 3px;
		background: #ffffff;
		cursor: pointer;
	}

	&::-ms-thumb {
		height: 20px;
		width: 15px;
		border-radius: 3px;
		background: #ffffff;
		cursor: pointer;
	}

	&:nth-child(1) {
		&::-webkit-slider-runnable-track {
			background: #d33724;
		}
	}

	&:nth-child(2) {
		&::-webkit-slider-runnable-track {
			background: #00a65a;
		}
	}

	&:nth-child(3) {
		&::-webkit-slider-runnable-track {
			background: #00a7d0;
		}
	}

	&:nth-child(1) {
		&::-webkit-slider-runnable-track {
			background: #d33724;
		}
	}

	&:nth-child(2) {
		&::-webkit-slider-runnable-track {
			background: #00a65a;
		}
	}

	&:nth-child(3) {
		&::-webkit-slider-runnable-track {
			background: #00a7d0;
		}
	}

	&::-webkit-slider-runnable-track {
		width: 100%;
		height: 12px;
		cursor: pointer;
		border-radius: 1.3px;
	}

	&::-ms-track {
		width: 100%;
		height: 12px;
		cursor: pointer;
		background: transparent;
		border-color: transparent;
		border-width: 16px 0;
		color: transparent;
	}

	&:nth-child(1) {
		&::-moz-range-track {
			background: #d33724;
		}
	}

	&:nth-child(2) {
		&::-moz-range-track {
			background: #00a65a;
		}
	}

	&:nth-child(3) {
		&::-moz-range-track {
			background: #00a7d0;
		}
	}

	&::-moz-range-track {
		width: 100%;
		height: 8.4px;
		cursor: pointer;
		border-radius: 1.3px;
		border: 0.2px solid #010101;
	}

	&::-ms-fill-lower {
		background: #2a6495;
		border: 0.2px solid #010101;
		border-radius: 2.6px;
	}

	&:focus::-ms-fill-lower {
		background: #3071a9;
	}

	&::-ms-fill-upper {
		background: yellow;
		border: 0.2px solid #010101;
		border-radius: 2.6px;
		box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
	}

	&:focus::-ms-fill-upper {
		background: yellow;
	}

	&:nth-child(1) {
		&:focus::-webkit-slider-runnable-track {
			background: #d33724;
		}
	}

	&:nth-child(2) {
		&:focus::-webkit-slider-runnable-track {
			background: #00a65a;
		}
	}

	&:nth-child(3) {
		&:focus::-webkit-slider-runnable-track {
			background: #00a7d0;
		}
	}

	&:focus {
		outline: none;
	}

	&::-ms-track {
		width: 100%;
		cursor: pointer;
		background: transparent;
		border-color: transparent;
		color: transparent;
	}
`;
