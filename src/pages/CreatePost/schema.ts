import {z} from "zod";

export const formSchema = z.object({
    title: z.string().min(3, {
        message: 'Digite um título mais completo'
    }),
    description: z.string().min(5, {
        message: 'Digite uma descrição mais completa'
    }),
    imageUrl: z.string().min(1, {
        message: 'Necessaário o link da imagem'
    })
});