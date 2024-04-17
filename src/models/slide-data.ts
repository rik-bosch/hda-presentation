import { z } from "astro:content";

export enum PageType {
  titlePage = "title-page",
  singleColumnPage = "single-column-page",
  twoColumnPage = "two-column-page",
}

const PageTypeEnum = z.nativeEnum(PageType);
type PageTypeEnum = z.infer<typeof PageTypeEnum>;

export interface SlideData {
  title: string;
  pageType: PageType;
  prev?: string;
  next?: string;
}

export const SlideDataSchema = z.object({
  title: z.string(),
  pageType: PageTypeEnum,
  prev: z.string().optional(),
  next: z.string().optional(),
});
