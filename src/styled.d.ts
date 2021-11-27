import 'styled-components'
declare module "*.ttf"

declare module 'styled-components' {
    export interface DefaultTheme {
        borderRadius: string;

        colors: {
            almond: string;
            paleSilver: string;
            lightAlmond: string;
            darkBlue: string;
            lightBlue: string;
        }
    }
}