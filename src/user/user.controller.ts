import { Body, Controller, Get, Param, Patch, Post, Put } from "@nestjs/common";

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
    async createUser(@Body() dadosUser){
        return {
            'Body' : dadosUser
        }
    }

    @Put(':id')
    async updateUser(@Body() dadosUser, @Param() param){
        return {
            'body' : dadosUser,
            'IdUser' : param
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