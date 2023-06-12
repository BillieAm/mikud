import { z, defineCollection } from "astro:content";

const servicesCardsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    color: z.array(z.string()),
    icon: z.string()
  })
});

const teamCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      role: z.string(),
      image: image().optional(),
      imageAlt: z.string()
    })
});

export const collections = {
  servicesCards: servicesCardsCollection,
  team: teamCollection
};
