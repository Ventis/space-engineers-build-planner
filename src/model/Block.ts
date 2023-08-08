import { Component } from './Component';
import {
    Length,
    Mass,
    Measure,
    Time,
    kilograms,
    meters,
    seconds,
} from 'safe-units';
import { AirTightnessEnum, GridSizeEnum } from './enums';
import { InventoryItem } from './interfaces/InventoryItem';

export class Block implements InventoryItem {
    name: string;
    cost: Component[];
    isAirtight: AirTightnessEnum;
    pcuCost: number;
    baseBuildTime: Time;
    dimensions: [Length, Length, Length];
    gridSize: GridSizeEnum;

    constructor(
        name: string,
        cost: Component[],
        isAirtight: AirTightnessEnum,
        pcuCost: number,
        baseBuildTime: number,
        dimensions: [number, number, number],
        gridSize: GridSizeEnum
    ) {
        this.name = name;
        this.cost = cost;
        this.isAirtight = isAirtight;
        this.pcuCost = pcuCost;
        this.baseBuildTime = Measure.of(baseBuildTime, seconds);
        this.gridSize = gridSize;
        if (gridSize == GridSizeEnum.SMALL)
            this.dimensions = [
                Measure.of(dimensions[0] * 0.5, meters),
                Measure.of(dimensions[1] * 0.5, meters),
                Measure.of(dimensions[2] * 0.5, meters),
            ];
        else
            this.dimensions = [
                Measure.of(dimensions[0] * 2.5, meters),
                Measure.of(dimensions[1] * 2.5, meters),
                Measure.of(dimensions[2] * 2.5, meters),
            ];
    }

    public get mass(): Mass {
        return this.cost.reduce(
            (totalMass, component) => Measure.add(totalMass, component.mass),
            Measure.of(0, kilograms)
        );
    }

    public get integrity(): number {
        return this.cost.reduce(
            (totalIntegrity, component) => totalIntegrity + component.integrity,
            0
        );
    }
}
