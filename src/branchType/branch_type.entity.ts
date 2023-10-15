import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm"

@Entity()
export class BranchType {
    @PrimaryGeneratedColumn()
    branchTypeId: number;

    @Column()
    branchTypeName: string;

    @Column({ default: true })
    isAvailable: boolean;
}
