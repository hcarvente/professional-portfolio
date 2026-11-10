import { createSocialCard } from "./social-card";

export const alt = "Hernán Carvente Martinez — technology, leadership, and social impact";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
  return createSocialCard();
}
