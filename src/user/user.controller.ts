import { Body, Controller, Get, Param, Patch, Post, Put } from "@nestjs/common";
import { CreateUserDTO } from "src/dto/create-user.dto";
import { UpdatePutUserDTO } from "src/dto/update-put-user.dto";

@Controller('users')
export class UserController {

    @Get()
    async list() {
        return {users:[]};
    }

    @Get(':id')
    async findUser(@Param() params) {
        return {user:{}, params}
    }

    @Post()
    async createUser(@Body() body: CreateUserDTO){
        return {body}
    }

    @Put(':id')
    async updateUser(@Body() {email, name, password}: UpdatePutUserDTO, @Param() params){
        return {
            method : 'put',
            email, name, password,
            params
        }
    }

    @Patch(':id')
    async updateUserPartial(@Body() dadosUser, @Param() param){
        return {
            'body' : dadosUser,
            'IdUser' : param
        }
    }

}