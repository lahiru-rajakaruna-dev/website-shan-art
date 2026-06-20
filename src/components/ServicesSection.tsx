import type { ParentProps } from "solid-js";

export default function ServicesSection() {
  return (
    <section>
      <div class="w-full min-h-screen p-4 pt-20">
        <h2 class="text-3xl font-bold mb-16 text-shadow-2xs">
          Services <br /> We Can Provide for You
        </h2>
        <input
          type="search"
          name="service_search_input"
          id="input_service-search"
          placeholder="Search for services"
          class="w-full h-fit px-3 py-2 mb-8 rounded-md border border-gray-100"
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
    <li>
      <article class="relative w-full h-fit mb-2 p-2 bg-white text-black border-0 border-red-200 rounded-md shadow-sm hover:bg-red-200 overflow-hidden group/service-card overflow-y-visible transition-colors duration-500">
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
    <ul class="w-full h-fit grid grid-cols-2 mh:grid-cols-4 gap-2 gap-x-4">
      {props.children}
    </ul>
  );
}

ServiceList.ServiceCard = ServiceCard;
