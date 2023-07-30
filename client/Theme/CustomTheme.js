import { extendTheme } from "native-base";

export const customTheme = extendTheme({
    colors: {
        black :{
            100: '#C4C4C4',
            200: '#7C7C7C',
            300: '#292929',
            800: '#181725'
        },
        primary: {
          50: '#E3F2F9',
          100: '#C5E4F3',
          200: '#A2D4EC',
          300: '#7AC1E4',
          400: '#47A9DA',
          500: '#0088CC',
          600: '#007AB8',
          700: '#006BA1',
          800: '#005885',
          900: '#003F5E',
        },
        amber: {
            400: '#d97706',
          },
        green:{

        }  
    },
    components: {
        // Button: {
        //   // Can simply pass default props to change default behaviour of components.
        //   baseStyle: {
        //     rounded: 'md',
        //   },
        //   defaultProps: {
        //     colorScheme: 'red',
        //   },
        // },
        Heading: {
          baseStyle: ({ colorMode }) => {
            return {
              color: colorMode === 'dark' ? 'black.100' : 'primary.500',
            //   fontWeight: 'normal',
            };
          },
        },
        Text: {
            baseStyle: ({ colorMode }) => {
              return {
                color: colorMode === 'dark' ? 'black.100' : 'black.300',
              //   fontWeight: 'normal', 
              };
            },
          },
      },
})