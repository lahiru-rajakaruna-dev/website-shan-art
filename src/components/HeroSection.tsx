export default function HeroSection() {
  return (
    <section class="relative w-full h-screen select-none">
      <div id="hero_section_bg"></div>
      <div class="relative w-full h-screen p-4 flex flex-col items-stretch justify-center text-white bg-transparent perspective-distant perspective-origin-center">
        <Design />
        {/* <div class="absolute inset-0 px-4 flex flex-col items-center justify-center text-black text-center"> */}
        <H1 />
        <Text />
        <CTA />
        {/* </div> */}
      </div>
    </section>
  );
}

function H1() {
  return (
    <h1 class="absolute z-[0] top-1/2 left-1/2 -translate-x-1/2 -translate-y-[150%] transform-3d mb-12 text-6xl text-black font-bold text-center drop-shadow-sm pointer-events-none">
      <span class="tracking-tighter">Shan Art</span>
      <br />
      <span class="tracking-tighter">Advertising</span>
    </h1>
  );
}

function Text() {
  return (
    <div class="absolute top-1/2 lg:top-6/12 left-1/2 -translate-x-1/2 translate-y-[-30%] w-full lg:w-1/2 px-4 text-black text-center lg:text-2xl">
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
      class="absolute z-[6] bottom-2/12 lg:bottom-3/12 left-1/2 -translate-x-1/2 -translate-y-1/2 btn btn-primary w-11/12 lg:w-48 bg-red-200 border-2 border-red-500 text-red-500"
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
      <div class="absolute z-[2] top-1/2 left-1/2 translate-x-[-150%] translate-y-[-100%] translate-z-[400px] blur-[0.7px]">
        <Photo />
      </div>
      <div class="absolute z-[1] top-1/2 left-1/2 translate-x-[60%] translate-y-[100%] translate-z-[-500px] blur-[2px]">
        <Photo />
      </div>
      <div class="absolute z-[-2] top-1/2 left-1/2 translate-x-[-45%] translate-y-[-100%] translate-z-[-250px] blur-[2.4px]">
        <Photo />
      </div>
      <div class="absolute z-[7] top-1/2 left-1/2 translate-x-[55%] translate-y-[-90%] translate-z-[300px] blur-[1px]">
        <Photo />
      </div>
      <div class="absolute z-[-3] top-1/2 left-1/2 translate-x-[-80%] translate-y-[40%] translate-z-[-800px] blur-[5px]">
        <Photo />
      </div>
      <div class="absolute z-[-3] top-1/2 left-1/2 translate-x-[-120%] translate-y-[100%] translate-z-[-100px] blur-[1px]">
        <Photo />
      </div>
    </>
  );
}
