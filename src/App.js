import {ThemeProvider} from 'styled-components';
import GlobalStyle from './styles/globalStyle';
import theme from './styles/theme';
import {Header, Main} from './components';

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Header />
			<Main />
		</ThemeProvider>
	);
};

export default App;
