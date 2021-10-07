import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	ManyToOne,
	JoinColumn,
} from "typeorm"

import { Service } from './Service.entity'

@Entity()
export class Version {
		@PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn({ type: 'timestamptz', nullable: true })
    created_at?: Date

    @UpdateDateColumn({ type: 'timestamptz', nullable: true })
    updated_at?: Date

		@JoinColumn({name: 'service_id'})
    @ManyToOne(
        () => Service,
        (s: Service) => s.versions
      )
    service: Service;

		@Column()
		name: string
}
