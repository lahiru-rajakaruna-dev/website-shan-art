import { createEffect, createRenderEffect, createSignal } from "solid-js";

export default function HeroSection() {
  createEffect(() => {
    if (!document) {
      return;
    }
    const section_1 = document.getElementById("section-1");

    section_1?.addEventListener("mousemove", updatePerspectiveOrigin);

    return () => {
      section_1?.removeEventListener("mousemove", updatePerspectiveOrigin);
    };
  });

  function updatePerspectiveOrigin(e: MouseEvent) {
    e.stopPropagation();
    const element = e.currentTarget as HTMLElement;
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const elementWidth = element.clientWidth;
    const elementHeight = element.clientHeight;

    const FACTOR = 0.2;

    const xDistanceToCenter = (mouseX - elementWidth / 2) * FACTOR;
    const yDistanceToCenter = (mouseY - elementHeight / 2) * FACTOR;

    element.style.perspectiveOrigin = `calc(50% + ${xDistanceToCenter}px) calc(50% + ${yDistanceToCenter}px)`;
  }

  return (
    <section
      id="section-1"
      class="relative w-full h-screen select-none mh:overflow-hidden"
    >
      <img
        src="/section_1/hero_bg__background.png"
        alt=""
        class="bg-image section-1"
        id="bg-1"
      />
      <img
        src="/section_1/hero_bg__foreground.png"
        alt=""
        class="bg-image section-1"
        id="bg-2"
      />
      <img
        src="/section_1/hero_bg__fog_1.png"
        alt=""
        class="bg-image section-1"
        id="bg-3"
      />
      <img
        src="/section_1/hero_bg__fog_2.png"
        alt=""
        class="bg-image section-1"
        id="bg-4"
      />
      <img
        src="/section_1/hero_bg__fog_3_left.png"
        alt=""
        class="section-1 bg-image"
        id="bg-5"
      />
      <img
        src="/section_1/hero_bg__fog_4_right.png"
        alt=""
        class="section-1 bg-image"
        id="bg-6"
      />
      <div id="backdrop"></div>
      <div
        id="container-1"
        class=" w-full h-screen p-4 flex flex-col items-stretch justify-center text-white bg-transparent"
      >
        {/* <Design /> */}
        <H1 />
        <Text />
        <CTA />
      </div>
    </section>
  );
}

function H1() {
  return (
    <h1
      id="hero-heading"
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center lg:text-9xl whitespace-nowrap"
    >
      <span class="mh:hidden tracking-tight">Shan Art</span>
      &nbsp;
      <span class="mh:hidden tracking-tight">Advertising</span>
    </h1>
  );
}

function Text() {
  return (
    <div id="hero-content">
      <p class="mb-4">
        Best and the most popular advertising agency in Anuradhapura
      </p>
      <p class="mb-4">
        Affordable prices, House for most type of graphics, desigins and
        advertisings
      </p>
    </div>
  );
}

function CTA() {
  return (
    <div id="hero-cta" class="rounded-md">
      <a href="tel:+94741288437" class="cursor-pointer">
        <p class="w-full h-full flex flex-col items-center justify-center text-2xl">
          Contact Us
        </p>
      </a>
    </div>
  );
}

function Photo() {
  return (
    <div
      class="aspect-[2/2.5] w-[200px] h-auto p-4 bg-white rounded-md shadow-lg hover:-translate-y-1/12 transition-transform duration-300"
      style={"--width:200px;"}
    >
      <img
        src=""
        alt=""
        class="aspect-square w-full h-auto bg-gray-100 rounded-md"
      />
      <div>
        <p class="font-bold text-black">Team</p>
        <p class="text-black font-thin text-sm">
          Not a workplace, a family gathering
        </p>
      </div>
    </div>
  );
}

function Design() {
  return (
    <>
      <div class="hero-decor-image" data-index="1">
        <Photo />
      </div>
      <div class="hero-decor-image" data-index="2">
        <Photo />
      </div>
      <div class="hero-decor-image" data-index="3">
        <Photo />
      </div>
      <div class="hero-decor-image" data-index="4">
        <Photo />
      </div>
      <div class="hero-decor-image" data-index="5">
        <Photo />
      </div>
      <div class="hero-decor-image" data-index="6">
        <Photo />
      </div>
    </>
  );
}
