import type { ParentProps } from "solid-js";

export default function ContactSection() {
  return (
    <section class="relative w-full min-h-screen">
      <div id="contact_section_figure" class="bg-image" />
      <div class="absolute inset-4">
        <h2 class="absolute top-4 left-4 right-4 mb-16 text-3xl font-bold">
          Contact Us, We Might Exceed Your Expectations
        </h2>
        <ContactList>
          <ContactList.MobileContactCard contact="0741288437" />
          <ContactList.WhatsAppContactCard contact="0741288437" />
          <ContactList.EmailContactCard contact="blaze.main.info@gmail.com" />
        </ContactList>
      </div>
    </section>
  );
}

function ContactList(props: ParentProps) {
  return (
    <ul class="absolute z-[2] left-4 right-4 mh:right-48 top-36 mh:top-24 bottom-8 mx-auto flex flex-col items-stretch justify-end gap-1 mh:grid grid-cols-2 text-amber-400 [&>li]:backdrop-blur-xs [&>li]:overflow-hidden [&>li>]:h-[150px] mh:[&>li]:h-[80px]">
      {props.children}
    </ul>
  );
}

function MobileContactCard(props: { contact: string }) {
  return (
    <li class="w-full">
      <a href={`tel:${props.contact}`}>
        <div class="p-2 rounded-md flex flex-row items-center justify-start gap-2 bg-white/60  border border-amber-400 shadow-sm">
          <img
            src="/icon_phone.webp"
            alt=""
            class="aspect-square w-auto h-[48px]"
          />
          <div>
            <p>Phone</p>
            <a class="font-bold">{props.contact}</a>
          </div>
        </div>
      </a>
    </li>
  );
}

function WhatsAppContactCard(props: { contact: string }) {
  return (
    <li>
      <a
        href={`https://wa.me/${props.contact}?text=Hey%2C%20I%20want%20to%20know%20the%20prices.`}
      >
        <div class="p-2 rounded-md flex flex-row items-center justify-start gap-2 bg-white/60 border border-amber-400  shadow-sm">
          <img
            src="/icon_phone.webp"
            alt=""
            class="aspect-square w-auto h-[48px]"
          />
          <div>
            <p>WhatsApp</p>
            <a class="font-bold">{props.contact}</a>
          </div>
        </div>
      </a>
    </li>
  );
}

function EmailContactCard(props: { contact: string }) {
  return (
    <li>
      <a href={`mailto:${props.contact}`} class="cursor-pointer">
        <div class="p-2 rounded-md flex flex-row items-center justify-start gap-2 bg-white/60 border border-amber-400 shadow-sm">
          <img
            src="/icon_phone.webp"
            alt=""
            class="aspect-square w-auto h-[48px]"
          />
          <div>
            <p>Email</p>
            <a class="font-bold">{props.contact}</a>
          </div>
        </div>
      </a>
    </li>
  );
}

ContactList.MobileContactCard = MobileContactCard;
ContactList.WhatsAppContactCard = WhatsAppContactCard;
ContactList.EmailContactCard = EmailContactCard;
