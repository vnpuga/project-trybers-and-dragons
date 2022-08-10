import Fighter, { SimpleFighter } from '../Fighter';
// import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    protected player1: Fighter,
    private _monsters: SimpleFighter[],
  ) {
    super(player1);
  }

  fight(): number {
    let winner = 0;
    this._monsters.forEach((monster) => {
      this.player1.attack(monster);
      if (monster.lifePoints <= 0) {
        winner = 1;
      }
      monster.attack(this.player1);
      if (this.player1.lifePoints <= 0) {
        winner = -1;
      }
    });
    return winner;
  }
}