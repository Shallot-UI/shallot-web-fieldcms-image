// styled.d.ts
import { projectTheme } from './src/theme'
import 'styled-components'

type Theme = typeof projectTheme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
