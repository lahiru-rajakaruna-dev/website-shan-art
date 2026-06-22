export default function Navigation() {
  return (
    <nav class="fixed z-[1000] bottom-4 mh:bottom-auto mh:top-4 left-1/2 mh:left-auto mh:right-4 -translate-x-1/2 mh:translate-0 w-fit h-fit min-h-12 p-0.5 text-gray-900/80 bg-linear-150 from-amber-500 via-amber-200 to-amber-600 rounded-full backdrop-blur-xs font-semibold">
      <div class="w-full h-fit px-5 bg-gray-100 rounded-full">
        <ul class="w-full h-fit flex flex-row items-center justify-center gap-4 leading-[3rem]">
          <li>
            <a href="" class="w-fit h-fit rounded-full bg-gray-100">
              Home
            </a>
          </li>
          <li>
            <a href="" class="w-full h-fit rounded-full bg-gray-100">
              Team
            </a>
          </li>
          <li>
            <a
              href=""
              class="w-full h-fit rounded-full bg-gray-100 whitespace-nowrap"
            >
              About Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
