import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Workshop {
    @PrimaryGeneratedColumn()
    workshopId: number;

    @Column()
    workshopName: string;

    @Column()
    isAvailable: boolean;
}
