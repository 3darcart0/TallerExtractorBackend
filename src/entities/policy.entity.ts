import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable, JoinColumn } from 'typeorm';
import { Group } from './group.entity';
import { Vehicle } from '../vehicles/vehicle.entity';

@Entity()
export class Policy {
    @PrimaryGeneratedColumn()
    policyId: number;

    @Column()
    policyName: string;

    @ManyToOne(() => Group)
    @JoinColumn({ name: 'groupId' })
    groupId: Group[];

    @ManyToOne(() => Vehicle)
    @JoinColumn({ name: 'vehicleId' })
    vehicle: Vehicle;
}
