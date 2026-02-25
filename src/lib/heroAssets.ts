export type HeroAsset = {
  src: string;
  alt: string;
  tone: "soft" | "contrast" | "dark";
};

// Curated hero options that clearly signal wedding context while keeping an editorial tone.
export const heroAssets: HeroAsset[] = [
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2400&q=80",
    alt: "Bride and groom in an intimate wedding portrait",
    tone: "dark"
  },
  {
    src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=2200&q=80",
    alt: "Luxury wedding tablescape",
    tone: "contrast"
  },
  {
    src: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?auto=format&fit=crop&w=2200&q=80",
    alt: "Evening wedding celebration",
    tone: "soft"
  }
];

export const primaryHeroAsset = heroAssets[0];
