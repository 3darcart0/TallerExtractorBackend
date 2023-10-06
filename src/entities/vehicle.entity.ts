import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm"
import { Brand } from "./brand.entity";
import { Model } from "./model.entity";
import { Customer } from "./customer.entity";

@Entity()
export class Vehicle {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 6 })
    registrationNumber: string;

    @ManyToOne(() => Customer, customer => customer.customerId)
    customer: Customer;

    @ManyToOne(() => Brand, brand => brand.brandId)
    brand: Brand;

    @ManyToOne(() => Model, model => model.modelId)
    model: Model;

    @Column()
    isAvailable: boolean;
}
