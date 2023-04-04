/**
 * Material UI theme
 * See for details: https://material-ui.com/customization/default-theme/?expand-path=$.palette
 * Martial Color tool: https://material.io/resources/color
 */

import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import React from 'react';

const AppThemeProvider = (props) => {
	const theme = createTheme({
		palette: {
			primary: {
				main: '#5036CE',
			},
			secondary: {
				main: '#00ff00',
			},
		},
	});
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline /* Material UI Styles */ />
			{props.children}
		</ThemeProvider>
	);
};

export default AppThemeProvider;
