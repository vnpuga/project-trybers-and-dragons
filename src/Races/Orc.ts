import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints: number;
  private static _counterRaceInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc._counterRaceInstances += 1;
  }

  static createdRacesInstances(): number {
    return Orc._counterRaceInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}