import {
    Mass,
    Measure,
    Time,
    Volume,
    kilograms,
    meters,
    seconds,
} from 'safe-units';
import { Material } from './Material';
import { InventoryItem } from './interfaces/InventoryItem';

export class Ore implements InventoryItem {
    name: string;
    volume: Volume;
    mass: Mass;
    baseRefineTime: Time;
    baseRefineRates: Material[];

    constructor(
        name: string,
        volume: number,
        baseRefineTime: number,
        baseRefineRates: Material[]
    ) {
        this.name = name;
        this.volume = Measure.of(volume, meters.cubed(), 'L');
        this.mass = Measure.of(1, kilograms);
        this.baseRefineTime = Measure.of(baseRefineTime, seconds);
        this.baseRefineRates = baseRefineRates;
    }
}
