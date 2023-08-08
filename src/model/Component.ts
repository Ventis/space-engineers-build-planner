import { Mass, Measure, Time, Unit, kilograms, seconds } from 'safe-units';
import { Material } from './Material';
import { InventoryItem } from './interfaces/InventoryItem';

export class Component implements InventoryItem {
    name: string;
    cost: Material[];
    integrity: number;
    baseProductionTime: Time;
    constructor(
        name: string,
        cost: Material[],
        integrity: number,
        baseProductionTime: number
    ) {
        this.name = name;
        this.cost = cost;
        this.integrity = integrity;
        this.baseProductionTime = Measure.of(baseProductionTime, seconds);
    }

    public get mass(): Mass {
        return this.cost.reduce(
            (totalMass, material) => Measure.add(totalMass, material.mass),
            Measure.of(0, kilograms)
        );
    }
}
