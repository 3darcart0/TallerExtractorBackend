import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';
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

    @ManyToOne(() => WorkshopRed, workshopRed => workshopRed.workshopRedId)
    workshopRed: WorkshopRed;

    @ManyToOne(() => Workshop, workshop => workshop.workshopId)
    workshops: Workshop[];

    @ManyToOne(() => BranchOffice, branchOffice => branchOffice.branchOfficeId)
    branchOffice: BranchOffice[];
}
