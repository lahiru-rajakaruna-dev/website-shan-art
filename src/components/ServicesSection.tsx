import type { ParentProps } from "solid-js";

export default function ServicesSection() {
  return (
    <section id="section-2" class="relative w-full h-screen overflow-hidden">
      <div id="services_section_figure" class="bg-image" />
      <div class="relative w-full h-screen p-4">
        <h2 class="mh:absolute top-8 mh:left-[215px] right-4 mh:right-auto text-3xl text-right mh:text-left text-shadow-2xs text-shadow-black font-bold mb-2">
          Services <br /> We Can Provide for You
        </h2>
        <input
          type="search"
          name="service_search_input"
          id="input_service-search"
          inputMode="search"
          placeholder="Search for services"
          class="mh:absolute top-26 left-5/12 right-4 mh:right-4 w-full mh:w-auto h-fit px-3 py-2 mb-2 ml-auto text-xs text-yellow-400 rounded-md border border-yellow-400 shadow-sm text-right bg-white/30 backdrop-blur-sm"
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
    <ul class="mh:absolute mh:top-36 mh:right-4 mh:bottom-0 mh:left-4/12 w-8/12 mh:w-auto h-fit mh:h-auto ml-auto mh:ml-auto py-20 mh:py-1 mh:px-30 grid grid-cols-1 mh:grid-cols-4 gap-2 gap-x-4 mh:flex flex-row items-center justify-start overflow-y-scroll mh:overflow-y-scroll">
      {props.children}
    </ul>
  );
}

ServiceList.ServiceCard = ServiceCard;
