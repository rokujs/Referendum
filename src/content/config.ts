import { defineCollection, z } from "astro:content";

const points = defineCollection({
  schema: z.object({
    title: z.string(),
    icon: z.string(),
    order: z.number(),
  }),
})

const keys = defineCollection({
  schema: z.object({
    title: z.string(),
    image: z.string(),
    order: z.number(),
  })
})

export const collections = { points, keys };