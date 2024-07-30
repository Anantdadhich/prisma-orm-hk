"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();

async function insertdata(email:string,name:string){
const res= await   prisma.users.create({
    data:{
        email,
        name
    }
   })
   console.log(res)
}
insertdata('anan@gmail.com','raghva',) 