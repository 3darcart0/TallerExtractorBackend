import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm"
import { BranchType } from "./branch_type.entity";

@Entity()
export class BranchOffice {
    @PrimaryGeneratedColumn()
    branchOfficeId: number;

    @Column()
    branchOfficeName: string;

    @ManyToOne(() => BranchType, branchType => branchType.branchTypelId)
    branchType: BranchType;

    @Column()
    isAvailable: boolean;
}
