import { createEffect, type ParentProps } from "solid-js";

export default function ServicesSection() {
  createEffect(() => {
    if (!document) {
      return;
    }

    document
      .getElementById("section-2")
      ?.addEventListener("mousemove", updatePerspectiveOrigin);

    return () => {
      document.removeEventListener("mousemove", updatePerspectiveOrigin);
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
    <section id="section-2" class="relative w-full h-screen overflow-hidden">
      <img src="/section_2/bg.png" alt="" class="section-2 bg-image" id="bg" />
      <img
        src="/section_2/subject.png"
        alt=""
        class="section-2 bg-image"
        id="subject"
      />
      <img src="/section_2/fg.png" alt="" class="section-2 bg-image" id="fg" />
      <div class="relative w-full h-screen p-4">
        <h2 class="text-5xl text-shadow-[2px_2px_3px] text-shadow-black">
          Services <br /> We Can Provide for You
        </h2>
        <input
          type="search"
          name="service_search_input"
          id="input_service-search"
          inputMode="search"
          placeholder="Search for services"
          class="section-2 absolute top-32 lg:w-96 lg:px-4 lg:py-2 bg-white/60 backdrop-blur-xs border-2 border-amber-300 rounded-sm text-amber-600"
        />
        <ServiceList>
          <ServiceList.ServiceCard imageUrl="" serviceName="Mug Printing" />
          <ServiceList.ServiceCard />
          <ServiceList.ServiceCard />
          <ServiceList.ServiceCard />
          <ServiceList.ServiceCard />
          <ServiceList.ServiceCard />
        </ServiceList>
      </div>
    </section>
  );
}

function ServiceCard(props: { imageUrl: string; serviceName: string }) {
  return (
    <li class="mh:h-full ">
      <article class="relative aspect-[2/2.5] w-full mh:w-auto h-fit mh:h-full mb-2 p-2 bg-white text-black border-0 border-red-200 rounded-md shadow-sm hover:bg-red-200 overflow-hidden group/service-card overflow-y-visible transition-colors duration-500">
        <img
          src={props.imageUrl}
          alt={`shan art advertising service ${props.serviceName}`}
          class="aspect-square w-full h-auto mb-2 bg-gray-100 rounded-sm group-hover/service-card:-translate-y-6 group-hover/service-card:shadow-lg transform-gpu transition-all duration-500"
        />
        <div class="absolute left-0 right-0 bottom-0 w-full h-11/12 p-2 flex flex-col items-start justify-end text-white bg-linear-0 from-blue-950 via-blue-900 via-20% to-transparent to-90%">
          <p class="font-bold">Banner Design</p>
        </div>
      </article>
    </li>
  );
}

function ServiceList(props: ParentProps) {
  return (
    <ul
      id="list"
      class="section-2 w-4/12 h-fit mh:h-auto py-20 mh:py-1 mh:px-30 grid grid-cols-1 mh:grid-cols-4 lg:grid-cols-4 gap-2 gap-x-4 mh:flex flex-row items-center justify-start overflow-y-scroll mh:overflow-y-scroll"
    >
      {props.children}
    </ul>
  );
}

ServiceList.ServiceCard = ServiceCard;
