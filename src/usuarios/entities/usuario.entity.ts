import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column()
  numeroTelefono: number;

  @Column()
  pais: string;

  @Column()
  localidad: string;
  @Column()
  codPostal: string;
  @Column()
  direccion: string;
}
