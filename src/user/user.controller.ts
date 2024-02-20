import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from "@nestjs/common";
import { CreateUserDTO } from "src/dto/create-user.dto";
import { UpdatePatchUser } from "src/dto/update-patch-user.dto";
import { UpdatePutUserDTO } from "src/dto/update-put-user.dto";
import { UserService } from "./user.service";

@Controller('users')
export class UserController {

    constructor(private readonly userService: UserService){}

    @Post()
    async createUser(@Body() {email,name,password, birthAt}: CreateUserDTO){
        return this.userService.create({email, name, password, birthAt})
    }

    @Get()
    async list() {
        return this.userService.list()
    }

    @Get(':id')
    async findUser(@Param('id', ParseIntPipe) id: number) {
        return this.userService.show(id);
    }


    @Put(':id')
    async updateUser(
        @Body() data: UpdatePutUserDTO, @Param('id', ParseIntPipe) id: number){
        return this.userService.update(id, data);
    }

    @Patch(':id')
    async updateUserPartial(
     @Body() data: UpdatePatchUser,
     @Param('id', ParseIntPipe) id: number){
        return this.userService.updatePartial(id, data)
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number){
        return this.userService.delete(id);
    }

}