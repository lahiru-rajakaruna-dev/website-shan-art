import { createEffect } from "solid-js";

export default function usePerspective(elementId: string) {
  createEffect(() => {
    if (!document) {
      return;
    }

    document
      .getElementById(elementId)
      ?.addEventListener("mousemove", updatePerspectiveOrigin);

    return () => {
      document.removeEventListener("mousemove", updatePerspectiveOrigin);
    };
  });

  function updatePerspectiveOrigin(e: MouseEvent) {
    e.stopPropagation();
    const element = e.currentTarget as HTMLElement;
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const elementWidth = element.clientWidth;
    const elementHeight = element.clientHeight;

    const FACTOR = 0.2;

    const xDistanceToCenter = (mouseX - elementWidth / 2) * FACTOR;
    const yDistanceToCenter = (mouseY - elementHeight / 2) * FACTOR;

    element.style.perspectiveOrigin = `calc(50% + ${xDistanceToCenter}px) calc(50% + ${yDistanceToCenter}px)`;
  }
}
