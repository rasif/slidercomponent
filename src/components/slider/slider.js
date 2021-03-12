import {useState} from 'react';
import {ThemeProvider} from 'styled-components';
import {
	SliderWrapper,
	SliderLeft,
	SliderRight,
	SliderHeader,
	SliderHeaderItem,
	SliderBody,
	SliderBodyItem,
	SliderRangeInput
} from './slider.items';

const Slider = () => {
	const [type, setType] = useState('text');
	const [color, setColor] = useState({red: 0, green: 0, blue: 0});
	const [backgroundColor, setBackgroundColor] = useState({red: 255, green: 255, blue: 255});

	const onHeaderClick = e => {
		setType(e.target.innerText.toLowerCase());
	};

	const handleChangeColor = e => {
		setColor({...color, [e.target.name]: e.target.value});
	};

	const handleChangeBackground = e => {
		setBackgroundColor({...backgroundColor, [e.target.name]: e.target.value});
	};

	let chosen = type === 'text' ? true : false;

	return (
		<SliderWrapper>
			<SliderLeft>
				<ThemeProvider theme={{chosen}}>
					<SliderHeader onClick={onHeaderClick}>
						<SliderHeaderItem>Text</SliderHeaderItem>
						<SliderHeaderItem>Background</SliderHeaderItem>
					</SliderHeader>
					<SliderBody>
						<SliderBodyItem>
							<SliderRangeInput
								type='range'
								min='0'
								max='255'
								step='1'
								name='red'
								value={color.red}
								onChange={handleChangeColor}
							/>
							<SliderRangeInput
								type='range'
								min='0'
								max='255'
								step='1'
								name='green'
								value={color.green}
								onChange={handleChangeColor}
							/>
							<SliderRangeInput
								type='range'
								min='0'
								max='255'
								step='1'
								name='blue'
								value={color.blue}
								onChange={handleChangeColor}
							/>
						</SliderBodyItem>
						<SliderBodyItem>
							<SliderRangeInput
								type='range'
								min='0'
								max='255'
								step='1'
								name='red'
								value={backgroundColor.red}
								onChange={handleChangeBackground}
							/>
							<SliderRangeInput
								type='range'
								min='0'
								max='255'
								step='1'
								name='green'
								value={backgroundColor.green}
								onChange={handleChangeBackground}
							/>
							<SliderRangeInput
								type='range'
								min='0'
								max='255'
								step='1'
								name='blue'
								value={backgroundColor.blue}
								onChange={handleChangeBackground}
							/>
						</SliderBodyItem>
					</SliderBody>
				</ThemeProvider>
			</SliderLeft>
			<SliderRight color={color} backgroundColor={backgroundColor}>
				<ul>
					<li>Опыт работы с Angular, React, Vue (у нас React);</li>
					<li>Опыт работы с Less или Sass (у нас Less);</li>
					<li>Умение работать с git на базовом уровне;</li>
					<li>Опыт разработки front-end приложений.</li>
				</ul>
			</SliderRight>
		</SliderWrapper>
	);
};

export default Slider;
