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
      <article class="w-full h-fit mb-2 p-2 bg-white border-0 border-red-200 rounded-md shadow-sm hover:bg-red-200 group/service-card overflow-y-visible transition-colors duration-500">
        <img
          src={props.imageUrl}
          alt={`shan art advertising service ${props.serviceName}`}
          class="aspect-square w-full h-auto mb-2 bg-gray-100 rounded-sm group-hover/service-card:-translate-y-6 group-hover/service-card:shadow-lg transform-gpu transition-all duration-500"
        />
        <p>Banner Design</p>
      </article>
    </li>
  );
}

function ServiceList(props: ParentProps) {
  return (
    <ul class="w-full h-fit grid grid-cols-2 gap-2 gap-x-4">
      {props.children}
    </ul>
  );
}

ServiceList.ServiceCard = ServiceCard;
