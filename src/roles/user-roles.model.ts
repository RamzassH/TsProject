import {BelongsToMany, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {INTEGER} from "sequelize";
import {ApiProperty} from "@nestjs/swagger";
import {User} from "../users/users.model";
import {Roles} from "./roles.model";


@Table({tableName: 'user_roles', createdAt: false, updatedAt: false})
export class UserRoles extends Model<UserRoles>{

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ForeignKey(() => Roles)
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    roleId: number;

    @ForeignKey(() => User)
    @Column({type: DataType.STRING, allowNull: false})
    userId: number;
}