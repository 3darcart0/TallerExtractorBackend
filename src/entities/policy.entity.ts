import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Group } from '../group/group.entity';
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
