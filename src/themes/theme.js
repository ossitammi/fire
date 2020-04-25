/**
 * MUI theme
 * @see https://material-ui.com/customization/theming/
 */

import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

export const theme = () => createMuiTheme({
  palette: {
    primary: {
      main: blue[200]
    },
    contextColor: '#FFFFFF',
    fontColor: '#000000'
  },
  typography: {
    useNextVariants: true
  }
});
