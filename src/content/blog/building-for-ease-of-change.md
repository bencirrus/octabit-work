---
title: Building for Ease of Change
description: The most important quality in a digital tool right now is how
  easily it can be updated tomorrow.
pubDate: 2025-05-01
category: creative
---
**Optimize for changeability** Not performance. Not elegance. Not feature completeness. The ability to change the thing quickly, cheaply, and without breaking everything else.

## Why

The pace of change in tooling, in AI capabilities, and in what users expect is faster than most product cycles are designed for. If you build something that's hard to change, you've built something that will be wrong in a year and expensive to fix.

It's the basic idea behind modular design, separation of concerns, and other principles. But it matters more now because the *rate* of useful change available to builders has accelerated dramatically.

## What this looks like in practice

For this site, it meant choosing Astro and a file-based CMS. No database to manage, no complex deployment pipeline. Content lives in Markdown files. Styles live in one place. The structure is explicit and shallow.

When I want to change something — add a section, update the design, add a new type of content — I can do it without touching things that should stay the same.

## The tradeoff

This approach requires more thought upfront about structure. You have to decide where things live and why. You have to resist the temptation to just bolt on what you need without thinking about where it fits.

That's a cost worth paying. The alternative is a system that gradually becomes impossible to reason about — and impossible to change without fear.
