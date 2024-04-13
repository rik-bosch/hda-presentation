import { z } from "astro:content";

export enum PageTypes {
  titlePage = "title-page",
  singleColumnPage = "single-column-page",
}

const PageTypeEnum = z.nativeEnum(PageTypes);
type PageTypeEnum = z.infer<typeof PageTypeEnum>;

export interface SlideData {
  title: string;
  pageType: PageTypes;
  prev?: string;
  next?: string;
}

export const SlideDataSchema = z.object({
  title: z.string(),
  pageType: PageTypeEnum,
  prev: z.string().optional(),
  next: z.string().optional(),
});
