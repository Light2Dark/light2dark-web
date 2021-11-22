import 'styled-components'
declare module "*.ttf"

declare module 'styled-components' {
    export interface DefaultTheme {
        borderRadius: string;

        colors: {
            main: string;
            secondary: string
        }
    }
}