export default function Navigation() {
  return (
    <nav class="fixed bottom-4 left-4 right-4 w-auto h-fit min-h-12 p-2 bg-linear-150 from-teal-500/30 to-teal-500/40 border border-white/80 rounded-full backdrop-blur-xs">
      <div class="w-full h-fit p-4">
        <ul class="w-full h-fit flex flex-row items-center justify-between gap-4">
          <li>
            <a href="" class="w-full h-fit px-4 py-3 rounded-full bg-white">
              Home
            </a>
          </li>
          <li>
            <a href="" class="w-full h-fit px-4 py-3 rounded-full bg-white">
              Team
            </a>
          </li>
          <li>
            <a href="" class="w-full h-fit px-4 py-3 rounded-full bg-white">
              About Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
