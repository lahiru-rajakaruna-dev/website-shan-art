export default function Navigation() {
  return (
    <nav class="fixed z-[1000] bottom-4 left-4 right-4 w-auto h-fit min-h-12 p-2 text-black bg-linear-150 from-teal-500/30 to-teal-500/40 border border-white/80 rounded-full backdrop-blur-xs">
      <div class="w-full h-fit p-2">
        <ul class="w-full h-fit flex flex-row items-center justify-between gap-4">
          <li>
            <a href="" class="w-full h-fit px-3 py-2 rounded-full bg-white">
              Home
            </a>
          </li>
          <li>
            <a href="" class="w-full h-fit px-3 py-2 rounded-full bg-white">
              Team
            </a>
          </li>
          <li>
            <a href="" class="w-full h-fit px-3 py-2 rounded-full bg-white">
              About Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
