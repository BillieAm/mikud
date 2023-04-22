import { z, defineCollection } from "astro:content";

const servicesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string()
  })
});

/* const teamCollection = defineCollection({
  schema: z.object({
    name: z.string(),
    role: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string()
    })
  })
}); */

/* const teamSchema: Schema = ({ image }) => z.object({
    name: z.string(),
    role: z.string(),
    image: z.object({
      alt: z.string(),
      src: image()
    })
  });

const teamCollection = defineCollection({
  schema: ({ image }) => z.object({
      name: z.string(),
      role: z.string(),
      image: z.object({
        alt: z.string(),
        src: image()
      })
    })
}); */

const teamCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      role: z.string(),
      image: image().refine(img => img.width >= 1080, {
        message: "Cover image must be at least 1080 pixels wide!"
      }),
      imageAlt: z.string()
    })
});

export const collections = {
  services: servicesCollection,
  team: teamCollection
};
