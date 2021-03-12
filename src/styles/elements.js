import styled from 'styled-components';

export const Container = styled.div`
	max-width: 992px;
	margin-left: auto;
	margin-right: auto;
	padding-left: 15px;
	padding-right: 15px;

	@media all and (max-width: 992px) {
		padding-left: 10px;
		padding-right: 10px;
	}

	@media all and (max-width: 576px) {
		padding-left: 6px;
		padding-right: 6px;
	}
`;
