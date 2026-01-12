import {createZodDto} from 'nestjs-zod'
import {z} from 'zod'

export const createUserRequestSchema = z.object({
    email: z.string().email(),
    password: z.string()
})

export class CreateUserRequestDto extends createZodDto(createUserRequestSchema) {
}
