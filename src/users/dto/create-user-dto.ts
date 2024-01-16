import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {

    @ApiProperty({example: 'user@mail.ru', description: 'Email пользователя'})
    readonly email: string;

    @ApiProperty({example: 'Password123', description: 'Пароль пользователя'})
    readonly password: string;
}