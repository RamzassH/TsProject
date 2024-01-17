import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import {INTEGER} from "sequelize";
import {ApiProperty} from "@nestjs/swagger";
import {User} from "../users/users.model";
import {UserRoles} from "./user-roles.model";

interface RolesCreationAttrs {
    value: string,
    description: string
}

@Table({tableName: 'roles'})
export class Roles extends Model<Roles, RolesCreationAttrs>{
    @ApiProperty({example: '1', description: 'Уникальный идентификатора'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'ADMIN', description: 'Значение роли пользователя'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    value: number;

    @ApiProperty({example: 'Обладает всеми правами для пользования сервисом',
        description: 'описание роли пользователя'})
    @Column({type: DataType.STRING, allowNull: false})
    description: string;

    @BelongsToMany(() => User, ()=> UserRoles)
    users: User[];
}