import { Mass, Measure, Volume, kilograms, meters } from 'safe-units';
import { InventoryItem } from './interfaces/InventoryItem';

export class Material implements InventoryItem {
    name: string;
    quantity: number;
    volume: Volume;
    mass: Mass;
    constructor(name: string, quantity: number, volume: number) {
        this.name = name;
        this.quantity = quantity;
        this.mass = Measure.of(1, kilograms);
        this.volume = Measure.of(volume, meters.cubed(), 'L');
    }
}
