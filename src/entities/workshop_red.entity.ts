import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class WorkshopRed {
    @PrimaryGeneratedColumn()
    workshopRedId: number;

    @Column()
    workshopRedName: string;

    @Column()
    isAvailable: boolean;
}
