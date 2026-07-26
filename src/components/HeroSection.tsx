import { createEffect, createRenderEffect, createSignal } from "solid-js";

export default function HeroSection() {
  let onPerspectiveElements: Array<HTMLElement> = [];
  let bg_image!: HTMLImageElement;
  let mg_image!: HTMLImageElement;
  let fg_image!: HTMLImageElement;
  let heading!: HTMLHeadingElement;
  let content: HTMLParagraphElement;
  let cta: HTMLDivElement;

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

  createEffect(() => {
    if (!document) {
      return;
    }

    document
      .querySelectorAll("#section-1 .on-perspective")
      .forEach((element) => {
        console.log(element.getAttribute("data-perspective-position"));
        onPerspectiveElements.push(element as HTMLElement);
      });
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

    // onPerspectiveElements.forEach((element) => {
    //   element.style = `transform:translateZ(var(--z)) transformX(${xDistanceToCenter}px) transformY(${yDistanceToCenter}px)`;
    // });

    element.style.perspectiveOrigin = `calc(50% + ${xDistanceToCenter}px) calc(50% + ${yDistanceToCenter}px)`;
  }

  return (
    <section
      id="section-1"
      class="relative w-full h-screen select-none mh:overflow-hidden"
    >
      <img
        loading="eager"
        src="/section_1/hero_bg__background.webp"
        alt=""
        class="bg-image on-perspective"
        id="bg-1"
        data-perspective-position="1"
      />
      <img
        loading="eager"
        src="/section_1/hero_bg__foreground.webp"
        alt=""
        class="bg-image on-perspective"
        id="bg-2"
        data-perspective-position="2"
      />
      <img
        loading="eager"
        src="/section_1/columns.webp"
        alt=""
        class="bg-image on-perspective"
        id="bg-3"
        data-perspective-position="3"
      />
      {/* <img
        loading="eager"
        src="/section_1/hero_bg__fog_2.webp"
        alt=""
        class="bg-image section-1"
        id="bg-4"
      />
      <img
        loading="eager"
        src="/section_1/hero_bg__fog_3_left.webp"
        alt=""
        class="section-1 bg-image"
        id="bg-5"
      />*/}
      <img
        loading="eager"
        src="/section_1/hero_bg__fog_4_right.webp"
        alt=""
        class="bg-image on-perspective"
        id="bg-6"
        data-perspective-position="4"
      />
      <div id="backdrop"></div>
      <div class="cover" id="left"></div>
      <div class="cover" id="right"></div>

      {/* <div
        id="container-1"
        class=" w-full h-screen p-4 flex flex-col items-stretch justify-center text-white bg-transparent"
      > */}
      {/* <Design /> */}
      <H1 />
      <Text />
      <CTA />
      {/* </div> */}
    </section>
  );
}

function H1() {
  return (
    <h1
      id="hero-heading"
      class="on-perspective absolute text-center lg:text-[13rem] whitespace-nowrap"
      data-perspective-position="5"
    >
      <span class="mh:hidden tracking-tight">Shan Art</span>
      <br />
      <span class="mh:hidden tracking-tight">Advertising</span>
    </h1>
  );
}

function Text() {
  return (
    <div id="hero-content" class="on-perspective" data-perspective-position="6">
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
    <div id="hero-cta" class="on-perspective btn" data-perspective-position="7">
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
        loading="eager"
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
