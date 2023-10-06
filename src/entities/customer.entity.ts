import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, Index, OneToMany } from "typeorm"
import { User } from "./user.entity";
import { Vehicle } from "./vehicle.entity";

@Entity()
@Index('ci_document', { unique: true })
export class Customer {
    @PrimaryGeneratedColumn()
    customerId: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({ length: 8 })
    document: string;

    @OneToOne(() => User, user => user.userId, { cascade: true })
    @JoinColumn()
    user: User;

    @Column()
    isAvailable: boolean;
}
