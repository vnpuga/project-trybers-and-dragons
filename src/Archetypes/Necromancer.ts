import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private _energyType: EnergyType;
  private static _counterArchetypeInstances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer._counterArchetypeInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer._counterArchetypeInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}