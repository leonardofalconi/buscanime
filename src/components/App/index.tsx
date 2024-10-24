import { AppProviders } from '../../components/AppProviders'
import { Home } from '../../pages/Home'
import { AppContainer } from '../AppContainer'

export const App = () => {
  return (
    <AppProviders>
      <AppContainer>
        <Home />
      </AppContainer>
    </AppProviders>
  )
}
