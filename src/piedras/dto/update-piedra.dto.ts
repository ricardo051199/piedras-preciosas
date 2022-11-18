import { PartialType } from '@nestjs/mapped-types';
import { CreatePiedraDto } from './create-piedra.dto';

export class UpdatePiedraDto extends PartialType(CreatePiedraDto) {}
