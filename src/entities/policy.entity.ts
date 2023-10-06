import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { Group } from './group.entity';
import { Vehicle } from './vehicle.entity';

@Entity()
export class Policy {
    @PrimaryGeneratedColumn()
    policyId: number;

    @Column()
    policyName: string;

    @ManyToMany(() => Group)
    @JoinTable()
    groups: Group[];

    @ManyToOne(() => Vehicle, vehicle => vehicle.policy)
    vehicle: Vehicle;
}
