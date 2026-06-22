import { createEffect } from "solid-js";

export default function HeroSection() {
  return (
    <section class="relative w-full h-screen select-none mh:overflow-hidden">
      <div class="relative w-full h-screen p-4 flex flex-col items-stretch justify-center text-white bg-transparent perspective-distant perspective-origin-center">
        <div id="monument" class="bg-image"></div>
        <div id="angle" class="bg-image"></div>
        <div id="devil" class="bg-image"></div>
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
    <h1 class="absolute z-[-3] mh:z-[8] top-1/2 mh:top-0 left-1/2 mh:left-4 -translate-x-1/2 mh:translate-x-0 -translate-y-[350%] mh:translate-y-0 translate-z-[-500px] mh:translate-z-[0px] transform-3d mb-12 text-6xl mh:text-4xl lg:text-7xl text-blue-950 font-bold text-center text-shadow-[0px_1px_5px_hsla(260,5%,1%,.8)] pointer-events-none">
      <span class="mh:hidden tracking-tighter">Shan Art</span>
      <br class="" />
      <span class="mh:hidden tracking-tighter">Advertising</span>
      <span class="hidden mh:block">Shan Art Advertising</span>
    </h1>
  );
}

function Text() {
  return (
    <div class="absolute z-[8] top-1/2 mh:top-5/12 lg:top-3/12 left-1/2 mh:left-4 -translate-x-1/2 mh:translate-x-0 translate-y-[-30%] w-full mh:w-1/2 lg:w-1/2 px-4 mh:p-0 text-black text-center mh:text-left lg:text-4xl lg:font-thin">
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
    <a
      href="tel:+94741288437"
      class="absolute z-[6] bottom-2/12 lg:bottom-4 left-1/2 mh:right-4 mh:left-auto lg:right-0 -translate-x-1/2 mh:translate-x-0 -translate-y-1/2 btn btn-primary w-11/12 mh:w-48 lg:w-78 bg-red-200 border-2 border-red-500 text-red-500"
    >
      Contact Us
    </a>
  );
}

function Photo() {
  return (
    <div class="aspect-[2/2.5] w-[200px] h-auto p-4 bg-white rounded-md shadow-lg hover:-translate-y-1/12 transition-transform duration-300">
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
      <div class="absolute z-[-1] top-1/2 left-1/2 translate-x-[-150%] translate-y-[-100%] translate-z-[100px] blur-[0.7px]">
        <Photo />
      </div>
      {/* <div class="absolute z-[-2] top-1/2 left-1/2 translate-x-[60%] translate-y-[100%] translate-z-[-500px] blur-[2px]">
        <Photo />
      </div> */}
      <div class="absolute z-[-6] top-1/2 left-1/2 translate-x-[-25%] translate-y-[-0%] translate-z-[-850px] blur-[.7px]">
        <Photo />
      </div>
      <div class="absolute z-[7] top-1/2 left-1/2 translate-x-[55%] translate-y-[-90%] translate-z-[100px] blur-[1px]">
        <Photo />
      </div>
      {/* <div class="absolute z-[-3] top-1/2 left-1/2 translate-x-[-80%] translate-y-[40%] translate-z-[-800px] blur-[5px]">
        <Photo />
      </div> */}
      {/* <div class="absolute z-[-3] top-1/2 left-1/2 translate-x-[-120%] translate-y-[100%] translate-z-[-100px] blur-[1px]">
        <Photo />
      </div> */}
    </>
  );
}
