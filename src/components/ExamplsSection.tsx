import type { ParentProps } from "solid-js";

export default function ExamplesSection() {
  return (
    <section>
      <div class="w-full h-fit min-h-screen p-4">
        <h2 class="mb-16 text-3xl">Some of our work</h2>
        <input
          type="search"
          name="service_search_input"
          id="input_service-search"
          placeholder="Search for work"
          class="w-full h-fit px-3 py-2 mb-4 rounded-md border border-gray-100"
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
    <li class="mb-4 break-inside-avoid">
      <article class="w-full h-fit p-1 flex flex-col items-stretch justify-start border border-red-200 rounded-md overflow-hidden shadow-sm">
        <img
          src={props.imageUrl}
          alt={`Shan art adverising work example for ${props.serviceName}`}
          class="aspect-square w-full h-auto bg-gray-500"
        />
        <div class="p-2">
          <h3 class="mb-1 text-xl font-bold">Light Board</h3>
          <p class="mb-1 line-clamp-6">{props.description}</p>
          <p class="text-right">{props.serviceArea}</p>
        </div>
        <button class="btn btn-outline">View Images</button>
      </article>
    </li>
  );
}

function ExampleList(props: ParentProps) {
  return <ul class="w-full h-fit columns-2">{props.children}</ul>;
}

ExampleList.ExampleCard = ExampleCard;
