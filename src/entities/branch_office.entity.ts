import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm"
import { BranchType } from "../branchType/branch_type.entity";
import { District } from "./district.entity";

@Entity()
export class BranchOffice {
    @PrimaryGeneratedColumn()
    branchOfficeId: number;

    @Column()
    branchOfficeAddress: string;

    @Column()
    phoneNumber: string;

    @Column({
        type: 'point',
        spatialFeatureType: 'Point',
        nullable: true,
      })
      coordinates: string;

    @Column()
    isAvailable: boolean;

    @ManyToOne(() => BranchType)
    @JoinColumn({ name: 'branchTypeId' })
    branchType: BranchType;

    @ManyToOne(() => District)
    @JoinColumn({ name: 'districtId' })
    district: District;
}
