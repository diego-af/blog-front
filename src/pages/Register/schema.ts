import {z} from "zod";

export const formSchema = z.object({
    email: z.string().email({message: 'Email inválido'}).min(3, {
        message: 'Email deve conter mais de 3 caracteres'
    }),
    password: z.string().min(6, {
        message: 'Senha deve conter mais de 6 caracteres'
    }),
    name: z.string().min(3, {
        message: 'Nome deve conter mais de 3 caracteres'
    })
});