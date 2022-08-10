import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints: number;
  private static _counterRaceInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling._counterRaceInstances += 1;
  }

  static createdRacesInstances(): number {
    return Halfling._counterRaceInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}