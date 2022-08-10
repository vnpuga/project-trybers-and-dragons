import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private _energyType: EnergyType;
  private static _counterArchetypeInstances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage._counterArchetypeInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage._counterArchetypeInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}