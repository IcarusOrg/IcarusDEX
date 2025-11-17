"use client";

import { FeaturesSectionWithBentoGrid } from "@/components/BentoGrid";
import { Hero } from "@/components/HeroSection";
import { TestimonialsColumn } from "@/components/ui/testimony-column";

const testimonials = [
  {
    text: "This ERP revolutionized our operations, streamlining finance and inventory.",
    image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe",
    name: "Briana Patton",
    role: "Operations Manager",
  },
  {
    text: "Implementation was smooth and quick. Training the team was effortless.",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    name: "Bilal Ahmed",
    role: "IT Manager",
  },
  {
    text: "Exceptional support team. Onboarding was seamless.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    name: "Saman Malik",
    role: "Customer Support Lead",
  },
  {
    text: "Improved our efficiency and workflow tremendously.",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    name: "Omar Raza",
    role: "CEO",
  },
  {
    text: "Quick support, robust features — our workflow transformed.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    name: "Zainab Hussain",
    role: "Project Manager",
  },
  {
    text: "Exceeded expectations and streamlined our processes.",
    image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7",
    name: "Aliza Khan",
    role: "Business Analyst",
  },
  {
    text: "The UI improved productivity across the board.",
    image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39",
    name: "Farhan Siddiqui",
    role: "Marketing Director",
  },
  {
    text: "A solution that truly understands business needs.",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce",
    name: "Sana Sheikh",
    role: "Sales Manager",
  },
  {
    text: "Boosted online presence and conversions significantly.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    name: "Hassan Ali",
    role: "E-commerce Manager",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export default function Home() {
  return (
    <>
      {/* ---------- HERO SECTION ---------- */}
      <section className="relative pb-20 bg-black">
        <Hero />
      </section>

      {/* ---------- BENTO SECTION ---------- */}
      <section className="relative py-28">
        <div className="container mx-auto px-4">
          <FeaturesSectionWithBentoGrid />
        </div>
      </section>

      {/* ---------- TESTIMONIALS ---------- */}
      <section className="bg-background py-28 bg-black">
        <div className="container z-10 mx-auto">
          <div className="flex flex-col items-center justify-center max-w-[540px] mx-auto">
            <div className="flex justify-center">
              <div className="border py-1 px-4 rounded-lg">Testimonials</div>
            </div>

            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5">
              What our users say
            </h2>

            <p className="text-center mt-5 opacity-75">
              See what our customers have to say about us.
            </p>
          </div>

          <div
            className="flex justify-center gap-6 mt-10 
            mask-[linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]
            max-h-[740px] overflow-hidden"
          >
            <TestimonialsColumn testimonials={firstColumn} duration={15} />
            <TestimonialsColumn
              testimonials={secondColumn}
              duration={18}
              className="hidden md:block"
            />
            <TestimonialsColumn
              testimonials={thirdColumn}
              duration={16}
              className="hidden lg:block"
            />
          </div>
        </div>
      </section>
    </>
  );
}
