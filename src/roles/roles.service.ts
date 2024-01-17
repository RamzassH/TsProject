import { Injectable } from '@nestjs/common';
import {CreateRoleDto} from "./dto/create-role-dto";
import {InjectModel} from "@nestjs/sequelize";
import {Roles} from "./roles.model";
import {where} from "sequelize";

@Injectable()
export class RolesService {

    constructor(@InjectModel(Roles) private rolesRepository: typeof Roles) {
    }

    async createRole(roleDTO: CreateRoleDto) {
        return await this.rolesRepository.create(roleDTO)
    }

    async getRoleByValue(value: string) {
        return await this.rolesRepository.findOne({where: {value}})
    }
}
