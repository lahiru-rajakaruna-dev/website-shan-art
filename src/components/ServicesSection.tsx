import { createEffect, type JSX, type ParentProps } from "solid-js";

export default function ServicesSection() {
  return (
    <section id="section-2" class="relative w-full h-screen overflow-hidden">
      <img src="/section_2/bg.png" alt="" id="bg" class="bg-image" />
      <img src="/section_2/fg.png" alt="" id="fg" class="bg-image" />
      <h2 id="heading" class="">
        Services <br /> We Can Provide
        <br /> for You
      </h2>
      <input
        type="search"
        name="service_search_input"
        id="input_service-search"
        inputMode="search"
        placeholder="Search for services"
        class="section-2 absolute top-32 lg:w-96 lg:px-4 lg:py-2 bg-white/60 backdrop-blur-xs border-2 border-amber-300 rounded-sm text-amber-600"
      />
      <ServiceList style={"--total-cards-count:6"}>
        <ServiceList.ServiceCard
          serviceName="Mug Printing"
          style={"--index:6"}
          cardIndex={1}
        />
        <ServiceList.ServiceCard style={"--index:1"} cardIndex={2} />
        <ServiceList.ServiceCard style={"--index:2"} cardIndex={3} />
        <ServiceList.ServiceCard style={"--index:3"} cardIndex={4} />
        <ServiceList.ServiceCard style={"--index:4"} cardIndex={5} />
        <ServiceList.ServiceCard style={"--index:5"} cardIndex={6} />
      </ServiceList>
      <p id="section-2-content">
        We provide the most amount of advertising services in all anuradhapura
        including, large scale banners, boards, light boards, acrylic letters,
        laser engravings and many more.
      </p>
      <a href="tel:+" id="section-2-cta">
        Find Out If We Have What You Want
      </a>
    </section>
  );
}

function ServiceCard(props: {
  cardIndex: number;
  serviceName: string;
  style?: JSX.CSSProperties | string;
}) {
  let card!: HTMLElement;

  createEffect(() => {
    if (!card) {
      return;
    }

    card.addEventListener("mousedown", (e) => {
      const element = e.currentTarget as HTMLElement;
      element.setAttribute("data-animate", "1");
    });
  });

  return (
    <li class="service-card" style={props.style}>
      <article
        ref={card}
        class="relative w-full h-full p-2 bg-white rounded-md overflow-hidden"
      >
        <img
          class="service-card-bg-image"
          src="/section_2/marble_background.svg"
          alt=""
        />
        <img src="/section_2/frame.svg" alt="" class="service-card-frame" />
        <img
          src={`/section_2/emblem_${props.cardIndex}.webp`}
          alt=""
          class="service-card-emblem"
        />
        <div class="service-card-content">
          <p class="font-bold text-orange-400">Banner Design</p>
        </div>
      </article>
    </li>
  );
}

function ServiceList(
  props: ParentProps<{ style: JSX.CSSProperties | string }>,
) {
  let list!: HTMLUListElement;
  // let isInteracting: boolean = false;

  createEffect(() => {
    if (!list) {
      return;
    }

    list.addEventListener("mouseenter", (e) => {
      console.log(e);
      (e.currentTarget as HTMLUListElement).setAttribute(
        "data-animation-state",
        "paused",
      );
    });

    list.addEventListener("mouseleave", (e) => {
      (e.currentTarget as HTMLUListElement).setAttribute(
        "data-animation-state",
        "",
      );
    });

    // list.addEventListener("mousedown", (e) => {
    //   isInteracting = true;
    // });

    // list.addEventListener("mouseup", (e) => {
    //   isInteracting = false;
    // });

    // list.addEventListener("mousemove", (e) => {
    //   if (!isInteracting) {
    //     return;
    //   }

    //   const mouseX = e.clientX;
    //   const element = e.currentTarget as HTMLUListElement;
    //   console.log(element.style.rotate);
    //   // const currentRotation = element.style.
    //   // element.style.transform = "rotateY(${})";
    // });
  });

  return (
    <ul id="services-list" class="" style={props.style} ref={list}>
      {props.children}
    </ul>
  );
}

ServiceList.ServiceCard = ServiceCard;
