import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints: number;
  private static _counterRaceInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
  }

  static createdRacesInstances(): number {
    Orc._counterRaceInstances += 1;
    return Orc._counterRaceInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}