import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import {INTEGER} from "sequelize";
import {ApiProperty} from "@nestjs/swagger";
import {Roles} from "../roles/roles.model";
import {UserRoles} from "../roles/user-roles.model";

interface UserCreationAttrs {
    email: string,
    password: string
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs>{
    @ApiProperty({example: '1', description: 'Уникальный идентификатора'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'user@mail.ru', description: 'Email пользователя'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;

    @ApiProperty({example: 'Password123', description: 'Пароль пользователя'})
    @Column({type: DataType.STRING, allowNull: false})
    password: string;

    @ApiProperty({example: 'true', description: 'Забанен ли пользователь'})
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    isBanned: boolean;

    @ApiProperty({example: 'Спам и оскорбления', description: 'Причина бана'})
    @Column({type: DataType.STRING, allowNull: true})
    banReason: string;

    @BelongsToMany(() => Roles, ()=> UserRoles)
    roles: Roles[];
}