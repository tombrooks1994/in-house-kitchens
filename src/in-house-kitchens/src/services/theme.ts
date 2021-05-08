import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

export const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#5D5C5C',
        },
        secondary: {
            main: '#D1D1D1',
        },
        background : {
          default : "#131314"
        }
    },
    overrides: {
        MuiAppBar: {
            colorPrimary: {
                backgroundColor: "#404040",
                color: "#ffffff"
            }
        }
    }
});