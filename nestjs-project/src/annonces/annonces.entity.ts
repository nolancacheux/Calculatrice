import { BaseEntity, Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('annonce')
export class Annonce extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: string;
    @Column()
    calcul: string;
    @Column()
    temps: number;
}