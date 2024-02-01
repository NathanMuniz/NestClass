import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from "@nestjs/common";
import { CreateUserDTO } from "src/dto/create-user.dto";
import { UpdatePatchUser } from "src/dto/update-patch-user.dto";
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
    async updateUserPartial(@Body() {email, name, password}: UpdatePatchUser, @Param() params){
        return {
            method : 'patch',
            email, name, password,
            params
        }
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id){
        return {
            id
        }
    }

}