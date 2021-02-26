import '../styles/global.css';

import { ChallengesProvider } from '../contexts/ChallengeContext'
import { CountdownContext, CountdownProvider } from '../contexts/CountdownContext';

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  )
}

export default MyApp
