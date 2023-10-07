import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm"
import { BranchType } from "./branch_type.entity";

@Entity()
export class BranchOffice {
    @PrimaryGeneratedColumn()
    branchOfficeId: number;

    @Column()
    branchOfficeName: string;

    @ManyToOne(() => BranchType)
    @JoinColumn({ name: 'branchTypelId' })
    branchType: BranchType;

    @Column()
    isAvailable: boolean;
}
