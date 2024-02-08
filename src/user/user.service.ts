import { Injectable } from "@nestjs/common";
import { CreateUserDTO } from "src/dto/create-user.dto";
import { UpdatePatchUser } from "src/dto/update-patch-user.dto";
import { UpdatePutUserDTO } from "src/dto/update-put-user.dto";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class UserService {

    constructor(private readonly prisma: PrismaService) {}


    async create({email, name, password}: CreateUserDTO){

        return this.prisma.user.create({
            data: {
                email,
                name,
                password
            },
            select: {
                id: true,
                name: true,
            }
        })

    }

    async list() {

        return this.prisma.user.findMany()

    }

    async show(id: number){
        return this.prisma.user.findUnique({
            where: {
                id
            }
        })
    }

    async update(id: number, {email, name, password, birthAt}: UpdatePutUserDTO){
        console.log({email, name, password});

        if (!birthAt){
            birthAt = null;
        }

        return this.prisma.user.update({
            data: {email, name, password, birthAt: birthAt ? new Date(birthAt) : null},
            where: {
                id
            }
        })
    }

    async updatePartial(id: number, {email, name, password, birthAt}: UpdatePatchUser){

        const data: any = {}

        if(birthAt) {
            data.birthAt = new Date(birthAt)
        }


        if (name) {
            data.name = name;
        } 

        if (email) {
            data.email = email;
        } 

        if (password) {
            data.password = password;
        }



        return this.prisma.user.update({
            data,
            where: {
                id
            }
        })
    }


}
