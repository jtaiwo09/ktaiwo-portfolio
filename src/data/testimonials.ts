import type { Testimonial } from "@/types";

/**
 * Real recommendations only. This array is intentionally empty so the section
 * never ships fabricated quotes, the Testimonials component renders a tasteful
 * "recommendations on request" state plus verified recognition while it's empty.
 *
 * To add a real testimonial (e.g. a LinkedIn recommendation), paste it here:
 *
 *   {
 *     quote: "…",
 *     name: "Jane Doe",
 *     title: "Engineering Manager",
 *     company: "Spleet Africa",
 *   },
 */
export const testimonials: Testimonial[] = [];

/** Verified, third-party recognition, safe to show as social proof. */
export const recognition = {
  award: "Best Frontend Engineer",
  org: "Spleet Africa",
  date: "Feb 2023",
};

/** Themes references consistently speak to, framed as themes, not quotes. */
export const workingStyle = [
  "Owns outcomes end to end",
  "Raises the team's quality bar",
  "Calm under production pressure",
  "Translates business needs into clean UX",
];
