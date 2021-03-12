import styled from 'styled-components';
import {Container} from '../../styles/elements';

export const HeaderWrapper = styled.header`
	background-color: ${({theme}) => theme.primaryColor};
`;

export const HeaderContainer = styled(Container)`
	height: 60px;
	display: flex;
	align-items: center;
	color: #f4f4f4;
	font-weight: 200;
`;

export const HeaderTitle = styled.p`
	font-size: 26px;
`;
