export default function Navigation() {
  return (
    <nav id="top-navigation" class="fixed z-[1000] top-0 left-0 right-0">
      <div class="w-full h-fit px-2 py-2">
        <ul class="w-full h-fit flex flex-row items-center justify-center gap-8 leading-[3rem] text-xl">
          <li class="nav-link" data-index="1">
            <a href="" class="w-fit h-fit">
              Home
            </a>
          </li>
          <li class="nav-link" data-index="2">
            <a href="" class="w-full h-fit">
              Team
            </a>
          </li>
          <li class="nav-link" data-index="3">
            <a href="" class="w-full h-fit">
              About Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
