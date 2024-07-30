import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function insertdata(email:string,name:string){
const res= await   prisma.users.create({
    data:{
        email,
        name
    }
   })
   console.log(res)
}
insertdata('an5t5','ragtg3tg',) 

  