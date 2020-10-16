import React from 'react';
import PropTypes from 'prop-types';
import { StylesProvider } from '@material-ui/styles';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { MuiThemeProvider as V0MuiThemeProvider } from 'material-ui';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';


export const AppStyleProviders = ({ children }) => {
  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider
        theme={createMuiTheme({
          palette: {
            primary: {
              light: '#757ce8',
              main: '#3f50b5',
              dark: '#002884',
              contrastText: '#fff',
            },
            secondary: {
              light: '#ff7961',
              main: '#f44336',
              dark: '#ba000d',
              contrastText: '#000',
            },
          },
        })}
      >
        <V0MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>{children}</V0MuiThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  );
};

AppStyleProviders.propTypes = {
  children: PropTypes.any,
};

AppStyleProviders.defaultProps = {
  children: null,
};
