import { z, defineCollection } from "astro:content";

const servicesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string()
  })
});

export const collections = {
  services: servicesCollection
};