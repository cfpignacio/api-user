import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsPositive, IsString, Min, MinLength } from 'class-validator';

export class CreateUsuarioDto {
  @ApiProperty()
  @IsString()
  @MinLength(1)
  nombre: string;
  @ApiProperty()
  @IsString()
  @MinLength(1)
  apellido: string;
  @ApiProperty()
  @IsInt()
  @IsPositive()
  @Min(1)
  numeroTelefono: number;
  @ApiProperty()
  @IsString()
  @MinLength(1)
  pais: string;
  @ApiProperty()
  @IsString()
  @MinLength(1)
  localidad: string;
  @ApiProperty()
  @IsString()
  @MinLength(1)
  codPostal: string;
  @ApiProperty()
  @IsString()
  @MinLength(1)
  direccion: string;
}
