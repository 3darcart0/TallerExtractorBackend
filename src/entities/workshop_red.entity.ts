import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class WorkshopRed {
    @PrimaryGeneratedColumn()
    workshopRedId: number;

    @Column()
    workshopRedName: string;

    @Column({ length: 6 })
    workshopRedCode: string;

    @Column()
    isAvailable: boolean;
}
