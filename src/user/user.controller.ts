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
    async findUser(@Param('id', ParseIntPipe) id: number) {
        return {user:{}, id}
    }

    @Post()
    async createUser(@Body() body: CreateUserDTO){
        return {body}
    }

    @Put(':id')
    async updateUser(
        @Body() {email, name, password}: UpdatePutUserDTO,
        @Param('id', ParseIntPipe) id: number){
        return {
            method : 'put',
            email, name, password,
            id
        }
    }

    @Patch(':id')
    async updateUserPartial(
     @Body() {email, name, password}: UpdatePatchUser,
     @Param('id', ParseIntPipe) id: number){
        return {
            method : 'patch',
            email, name, password,
            id
        }
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number){
        return {
            id
        }
    }

}