import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Model {
    @PrimaryGeneratedColumn()
    modelId: number;

    @Column()
    modelName: string;

    @Column()
    isAvailable: boolean;
}
