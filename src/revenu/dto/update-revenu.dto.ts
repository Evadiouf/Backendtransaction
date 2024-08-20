
import { PartialType } from '@nestjs/swagger';

import { CreateRevenuDto } from './create-revenu.dto';

export class UpdateRevenuDto extends PartialType(CreateRevenuDto) {}
