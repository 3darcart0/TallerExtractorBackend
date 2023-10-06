import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Brand {
    @PrimaryGeneratedColumn()
    brandId: number;

    @Column()
    brandName: string;

    @Column()
    isAvailable: boolean;
}
