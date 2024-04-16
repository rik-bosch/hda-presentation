import { z } from "astro:content";

export interface BulletPoints {
  slug: string;
  rows: string[];
}

export const BulletPointsSchema = z.object({
  slug: z.string(),
  rows: z.array(z.string()),
});
