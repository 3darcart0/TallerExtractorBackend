import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Workshop {
    @PrimaryGeneratedColumn()
    workshopId: number;

    @Column()
    workshopName: string;

    @Column({ nullable: true })
    webPage: string;

    @Column({ default: true })
    isAvailable: boolean;
}
