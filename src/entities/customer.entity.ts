import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, Index, OneToMany } from "typeorm"
import { User } from "./user.entity";

@Entity()
export class Customer {
    @PrimaryGeneratedColumn()
    customerId: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({ length: 8 })
    @Index('ci_document', { unique: true })
    document: string;

    @OneToOne(() => User, { cascade: true })
    @JoinColumn({ name: 'userId', referencedColumnName: 'userId'})
    user: User;

    @Column()
    isAvailable: boolean;
}
