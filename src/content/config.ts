import { defineCollection, z } from "astro:content";

const points = defineCollection({
  schema: z.object({
    title: z.string(),
    icon: z.string(),
    order: z.number(),
  }),
})

export const collections = { points }