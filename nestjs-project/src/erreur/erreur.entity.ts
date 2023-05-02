import {BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn} from 'typeorm';

@Entity('erreur')
export class Erreur extends BaseEntity{
    @PrimaryGeneratedColumn()
    id : string;
    //@CreateDateColumn()
    @Column()
    created: string;
}