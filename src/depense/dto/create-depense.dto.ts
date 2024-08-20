import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateDepenseDto {
  @IsString()
  @IsNotEmpty()
  titre: string;

  @IsNumber()
  montant: number;
}
