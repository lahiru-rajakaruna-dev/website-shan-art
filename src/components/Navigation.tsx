export default function Navigation() {
  return (
    <nav class="fixed z-[1000] bottom-4 left-1/2 -translate-x-1/2 w-fit h-fit min-h-12 p-1 text-black bg-linear-150 from-teal-500/30 to-teal-500/40 border border-white/80 rounded-full backdrop-blur-xs text-sky-700/90 text-shadow-2xs font-semibold">
      <div class="w-full h-fit p-1 py-2">
        <ul class="w-full h-fit flex flex-row items-center justify-center gap-2">
          <li>
            <a href="" class="w-fit h-fit px-3 py-2 rounded-full bg-linear-180 from-white/50 to-white/30 shadow-sm border-t border-white">
              Home
            </a>
          </li>
          <li>
            <a href="" class="w-full h-fit px-3 py-2 rounded-full bg-linear-180 from-white/50 to-white/30 shadow-sm border-t border-white">
              Team
            </a>
          </li>
          <li>
            <a href="" class="w-full h-fit px-3 py-2 rounded-full bg-linear-180 from-white/50 to-white/30 shadow-sm border-t border-white whitespace-nowrap">
              About Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
