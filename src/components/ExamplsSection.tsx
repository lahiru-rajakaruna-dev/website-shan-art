import type { ParentProps } from "solid-js";

export default function ExamplesSection() {
  return (
    <section class="relative w-full h-screen overflow-hidden">
      <div id="examples_section_figure" class="bg-image" />
      <div class="relative w-full h-fit min-h-screen p-4">
        <h2 class="mb-4 text-3xl font-bold">
          <span>Work</span>
          <br />
          <span>That Proves</span>
        </h2>
        <input
          type="search"
          name="service_search_input"
          id="input_service-search"
          placeholder="Search for work"
          class="absolute top-24 left-4 right-4 mh:right-48 w-auto h-fit px-3 py-2 mb-2 text-xs text-yellow-600 rounded-md bg-white/30 backdrop-blur-xs border-2 border-yellow-400"
        />
        <ExampleList>
          <ExampleList.ExampleCard
            imageUrl=""
            serviceName="Road Sign"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel tenetur eos nihil possimus distinctio architecto saepe assumenda in explicabo error!"
            serviceArea="Anuradhapura"
          />
          <ExampleList.ExampleCard
            imageUrl=""
            serviceName="Road Sign"
            description="consectetur adipisicing elit. Vel tenetur eos nihil possimus distinctio architecto saepe assumenda in explicabo error!"
            serviceArea="Anuradhapura"
          />
          <ExampleList.ExampleCard
            imageUrl=""
            serviceName="Road Sign"
            description="elit. Vel tenetur eos nihil possimus distinctio architecto saepe assumenda in explicabo error!"
            serviceArea="Anuradhapura"
          />
          <ExampleList.ExampleCard
            imageUrl=""
            serviceName="Road Sign"
            description="tenetur eos nihil possimus distinctio architecto saepe assumenda in explicabo error!"
            serviceArea="Anuradhapura"
          />
          <ExampleList.ExampleCard
            imageUrl=""
            serviceName="Road Sign"
            description="architecto saepe assumenda in explicabo error!"
            serviceArea="Anuradhapura"
          />
        </ExampleList>
      </div>
    </section>
  );
}

function ExampleCard(props: {
  imageUrl: string;
  serviceName: string;
  description: string;
  serviceArea: string;
}) {
  return (
    <li class="mb-4 w-full h-fit mh:h-[180px] lg:h-fit">
      <article
        tabIndex={1}
        class="relative w-full h-50 mh:h-full lg:h-[400px] group/example-card focus:bg-red-500 p-1 flex flex-row items-stretch justify-start bg-white text-black rounded-md overflow-hidden shadow-sm border border-amber-400"
      >
        <img
          src={props.imageUrl}
          alt={`Shan art adverising work example for ${props.serviceName}`}
          class="flex-1 aspect-square w-full h-full bg-gray-0 rounded-md"
        />
        <div class="absolute left-0 right-0 bottom-0 group-focus/example-card:-translate-y-0 translate-y-full h-7/12 bg-linear-0 from-blue-950 to-transparent flex flex-col items-stretch justify-end p-4 text-white transform-gpu transition-transform duration-500">
          <h3 class="mb-1 text-lg font-bold">Light Board</h3>
          <p class="mb-1 line-clamp-2">{props.description}</p>
          <p class="text-right">{props.serviceArea}</p>
        </div>
      </article>
    </li>
  );
}

function ExampleList(props: ParentProps) {
  return (
    <ul class="absolute top-36 bottom-4 left-4 right-16 mh:right-64 w-auto h-auto pb-56 flex flex-col items-stretch justify-start gap-3 overflow-y-scroll">
      {props.children}
    </ul>
  );
}

ExampleList.ExampleCard = ExampleCard;
