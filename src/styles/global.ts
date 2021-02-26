import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body{
		background: ${props => props.theme.colors.background};
		font-size: 1rem;
		color: ${props => props.theme.colors.text};
		font-family: 'Inter', sans-serif;
	}

	button {
		cursor: pointer;
	}
`;