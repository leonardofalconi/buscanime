import 'styled-components'

import { Theme } from '.'

type TThemeInterface = typeof Theme

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/naming-convention, @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends TThemeInterface {}
}
