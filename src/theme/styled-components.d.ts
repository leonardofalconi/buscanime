/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components'

import { Theme } from '.'

type TThemeInterface = typeof Theme

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export interface DefaultTheme extends TThemeInterface {}
}
