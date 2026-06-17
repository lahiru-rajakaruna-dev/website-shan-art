export default function HeroSection() {
  return (
    <section class="relative w-full h-screen select-none">
      <div id="hero_section_bg_image"></div>
      <div class="relative w-full h-screen p-4 flex flex-col items-stretch justify-center text-white">
        <div class="absolute inset-0">
          <div class="absolute top-[calc(15%-125px)] left-[calc(70%-100px)] rotate-12">
            <Photo />
          </div>
          <div class="absolute top-[calc(20%-125px)] left-[calc(30%-100px)] -rotate-3">
            <Photo />
          </div>
          <div class="absolute top-[calc(40%-125px)] left-[calc(50%-100px)] rotate-45">
            <Photo />
          </div>
        </div>
        <div class="absolute bottom-2/12 px-4 flex flex-col items-center justify-center text-black text-center">
          <H1 />
          <Text />
          <CTA />
        </div>
      </div>
    </section>
  );
}

function H1() {
  return (
    <h1 class="mb-12 text-6xl font-bold text-center text-shadow-lg bg-blend-multiply pointer-events-none">
      <span class="tracking-tighter">Shan Art</span>
      <br />
      <span class="tracking-tighter">Advertising</span>
    </h1>
  );
}

function Text() {
  return (
    <>
      <p class="mb-4">
        Best and the most popular advertising agency in Anuradhapura
      </p>
      <p class="mb-4">
        Affordable prices, House for most type of graphics, desigins and
        advertisings
      </p>
    </>
  );
}

function CTA() {
  return (
    <a
      href="tel:+94741288437"
      class="btn btn-primary w-full bg-red-200 border-2 border-red-500 text-red-500"
    >
      Contact Us
    </a>
  );
}

function Photo() {
  return (
    <div class="aspect-[2/2.5] w-[200px] h-auto p-4 bg-white rounded-md shadow-sm hover:-translate-y-1/12 transition-transform duration-300">
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
