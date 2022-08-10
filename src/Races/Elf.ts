import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints: number;
  private static _counterRaceInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf._counterRaceInstances += 1;
  }

  static createdRacesInstances(): number {
    return Elf._counterRaceInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}