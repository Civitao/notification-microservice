import { IsNotEmpty, IsUUID } from 'class-validator';
import { Length } from '@nestjs/class-validator';
export class CreateNotificationBody {
  @IsNotEmpty()
  @IsUUID()
  recipientId: string;

  @IsNotEmpty()
  @Length(5, 240)
  content: string;

  @IsNotEmpty()
  category: string;
}
