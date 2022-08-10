import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints: number;
  private static _counterRaceInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf._counterRaceInstances += 1;
  }

  static createdRacesInstances(): number {    
    return Dwarf._counterRaceInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

// através do super() eu já tenho acesso aos métodos get name e dexterity da class Race,
// e como não irei sobrescreve-los, não preciso implementa-los novamente aqui.