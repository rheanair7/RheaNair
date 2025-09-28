import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

export const collections = {
	work: defineCollection({
		// Load Markdown files in the src/content/work directory.
		loader: glob({ base: './src/content/work', pattern: '**/*.md' }),
		schema: z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()),
			img: z.string(),
			img_alt: z.string().optional(),
		}),
	}),

	// NEWS: accomplishments and news collection
	news: defineCollection({
		loader: glob({ base: './src/content/news', pattern: '**/*.md' }),
		schema: z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z.coerce.date(),
			category: z.string(), // "Award", "Publication", "Speaking", "News"
		}),
	}),

 // NEW: education data collection
  education: defineCollection({
    loader: glob({
      base: './src/content/education',
      pattern: '**/*.{json,yaml,yml}', // data files
    }),
    schema: z.object({
      school: z.string(),
      degree: z.string(),
      start: z.string(),  // "2025"
      end: z.string(),    // "2027" or "Present"
      details: z.string().optional(),
      order: z.number().optional(), // optional manual ordering
    }),
  }),
};