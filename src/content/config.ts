import { z, defineCollection } from "astro:content";

const servicesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    id: z.string(),
    color: z.string(),
    icon: z.string(),
    line1: z.string(),
    line2: z.string()
  })
});

const servicesIntroCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      image: image(),
      heading: z.string(),
      line1: z.string(),
      line2: z.string().optional()
    })
});

const teamCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      role: z.string(),
      image: image(),
      imageAlt: z.string()
    })
});

export const collections = {
  services: servicesCollection,
  servicesIntro: servicesIntroCollection,
  team: teamCollection
};
