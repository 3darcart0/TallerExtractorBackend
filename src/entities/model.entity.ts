import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm"
import { Brand } from "./brand.entity";

@Entity()
export class Model {
    @PrimaryGeneratedColumn()
    modelId: number;

    @Column()
    modelName: string;

    @Column({ default: true })
    isAvailable: boolean;

    @ManyToOne(() => Brand)
    @JoinColumn({ name: 'brandId' })
    branchType: Brand;
}
