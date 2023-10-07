import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class District {
    @PrimaryGeneratedColumn()
    districId: number;

    @Column()
    district: string;

    @Column()
    isAvailable: boolean;
}
