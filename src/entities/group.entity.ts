import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { WorkshopRed } from './workshop_red.entity';
import { Workshop } from './workshop.entity';
import { BranchOffice } from './branch_office.entity';
import { Policy } from './policy.entity';

@Entity()
export class Group{
    @PrimaryGeneratedColumn()
    groupId: number;

    @Column()
    groupName: string;

    @ManyToOne(() => WorkshopRed)
    @JoinColumn({ name: 'workshopRedId' })
    workshopRed: WorkshopRed;

    @ManyToOne(() => Workshop)
    @JoinColumn({ name: 'workshopId' })
    workshops: Workshop[];

    @ManyToOne(() => BranchOffice)
    @JoinColumn({ name: 'branchOfficeId' })
    branchOffice: BranchOffice[];
}
