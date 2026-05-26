import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const blog = defineCollection({
        loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
        schema: z.object({
                title: z.string(),
                description: z.string(),
                pubDate: z.coerce.date(),
                updatedDate: z.coerce.date().optional(),
                heroImage: z.string().optional(),
                category: z.enum(["advisory", "creative"]).optional(),
        }),
});

const services = defineCollection({
        loader: glob({ base: "./src/content/services", pattern: "**/*.md" }),
        schema: z.object({
                title: z.string(),
                description: z.string(),
                category: z.enum(["advisory", "creative"]),
                type: z.string().optional(),
                order: z.number().default(99),
                featured: z.boolean().default(false),
                link: z.string().url().optional(),
        }),
});

export const collections = { blog, services };
