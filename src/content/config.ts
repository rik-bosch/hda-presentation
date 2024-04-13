import { defineCollection } from "astro:content";
import { SlideDataSchema } from "@models/slide-data";

export const collections = {
  slides: defineCollection({ schema: SlideDataSchema }),
};
