import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

const create = async (data) => {
    const newUser = prisma.users.create({
        data: {
            name: data.name,
            email: data.email,
            password: data.password,
        },
        select:{
            id:true,
            name:true,
            password:false,
            email:true
        }
    });

    return newUser;
}
const login = async (email) => {
    const user = await prisma.users.findFirst({
        where: {
            email,
        },
        select:{
            id:true,
            name:true,
            email:true,
            password:true
        }
    })
    return user;
}

export {create, login};