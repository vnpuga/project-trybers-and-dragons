import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(
    protected player1: Fighter,
    private _player2: Fighter,
  ) {
    super(player1);
  }

  // grata pela ajuda do Ivan e Rafa da instrução
  fight(): number {
    while (this.player1.lifePoints > 0 && this._player2.lifePoints > 0) {
      this.player1.attack(this._player2);
      this._player2.attack(this.player1);
    }
    return super.fight();
  }
}