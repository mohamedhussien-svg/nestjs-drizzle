import {createZodDto} from 'nestjs-zod'
import {z} from 'zod'

export const createPostRequestSchema = z.object({
    content: z.string(),
    userId: z.number()
})

export class CreatePostRequestDto extends createZodDto(createPostRequestSchema) {
}
