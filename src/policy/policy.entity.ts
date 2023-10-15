import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import { Vehicle } from '../vehicles/vehicle.entity';

@Entity()
export class Policy {
    @PrimaryGeneratedColumn()
    policyId: number;

    @Column()
    policyName: string;

    @Column({ type: 'text' })
    deductible: string;

    @OneToOne(() => Vehicle, { cascade: true })
    @JoinColumn({ name: 'vehicleId', referencedColumnName: 'vehicleId'})
    vehicleId: Vehicle;
}
