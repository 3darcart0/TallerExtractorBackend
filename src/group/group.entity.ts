import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { WorkshopRed } from '../entities/workshop_red.entity';
import { Workshop } from '../entities/workshop.entity';
import { BranchOffice } from '../entities/branch_office.entity';

@Entity()
export class Group{
    @PrimaryGeneratedColumn()
    groupId: number;

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
