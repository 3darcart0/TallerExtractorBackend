import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm"

@Entity()
export class BranchType {
    @PrimaryGeneratedColumn()
    branchTypelId: number;

    @Column()
    branchTypeName: string;

    @Column()
    isAvailable: boolean;
}
