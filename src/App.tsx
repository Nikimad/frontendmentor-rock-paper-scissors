import { observer } from 'mobx-react-lite'
import { gameStore } from './stores/gameStore'
import './index.css';

export const App = observer(() => {
  return (
    <main>
      <h1>Rock, Paper, Scissors</h1>
      <p>Score: {gameStore.score}</p>
      <button onClick={() => gameStore.increaseScore()}>
        Increase score
      </button>
    </main>
  )
})
