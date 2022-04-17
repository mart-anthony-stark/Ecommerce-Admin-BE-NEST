import { AuthDto } from './auth.dto';
import { IsNotEmpty } from 'class-validator';

export class SignupDto extends AuthDto {
  @IsNotEmpty()
  username: string;
}
