import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm"
import { Brand } from "../entities/brand.entity";
import { Model } from "../entities/model.entity";
import { Customer } from "../entities/customer.entity";

@Entity()
export class Vehicle {
    @PrimaryGeneratedColumn()
    vehicleId: number;

    @Column({ length: 6 })
    registrationNumber: string;

    @Column()
    year: number;

    @ManyToOne(() => Customer)
    @JoinColumn({ name: 'customerId' })
    customer: Customer;

    @ManyToOne(() => Brand)
    @JoinColumn({ name: 'brandId' })
    brand: Brand;

    @ManyToOne(() => Model)
    @JoinColumn({ name: 'modelId' })
    model: Model;

    @Column({ default: true })
    isAvailable: boolean;
}
