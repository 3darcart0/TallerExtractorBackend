import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class District {
    @PrimaryGeneratedColumn()
    districtId: number;

    @Column()
    district: string;

    @Column({ default: true })
    isAvailable: boolean;
}
