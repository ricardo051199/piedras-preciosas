import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Piedra {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nombre: string;
  @Column()
  color: string;
  @Column()
  significado: string;
  @Column()
  unidad_masa: string;
  @Column()
  masa: number;
  @Column()
  moneda: string;
  @Column()
  precio: number;
}
