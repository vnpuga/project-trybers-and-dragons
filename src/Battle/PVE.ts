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

  // grata pela ajuda do Ivan e Rafa da instrução
  fight(): number {
    this._monsters.forEach((monster) => {
      while (this.player1.lifePoints > 0 && monster.lifePoints > 0) {
        this.player1.attack(monster);
        monster.attack(this.player1);
      }
    });
    return super.fight();
  }
}