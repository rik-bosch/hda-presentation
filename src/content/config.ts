import { defineCollection } from "astro:content";
import { SlideDataSchema } from "@models/slide-data";
import { BulletPointsSchema } from "@models/bullet-points";

export const collections = {
  slides: defineCollection({ schema: SlideDataSchema }),
  "bullet-points": defineCollection({
    type: "data",
    schema: BulletPointsSchema,
  }),
};
