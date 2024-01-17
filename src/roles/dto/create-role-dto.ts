import {ApiProperty} from "@nestjs/swagger";

export class CreateRoleDto {

    @ApiProperty({example: "Admin", description: "Значение роли"})
    readonly value: string;

    @ApiProperty({example: "Админская роль", description: "Описание роли"})
    readonly description: string;
}