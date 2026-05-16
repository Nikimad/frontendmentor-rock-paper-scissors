import { makeAutoObservable } from 'mobx'

class GameStore {
  score = 0

  constructor() {
    makeAutoObservable(this)
  }

  increaseScore() {
    this.score += 1
  }
}

export const gameStore = new GameStore()
