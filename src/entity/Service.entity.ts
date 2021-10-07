import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn
} from "typeorm"

@Entity()
export class Service {

    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn({ type: 'timestamptz', nullable: true })
    created_at?: Date

    @UpdateDateColumn({ type: 'timestamptz', nullable: true })
    updated_at?: Date

    @Column()
    name: string;

    @Column()
    description: string;
}
