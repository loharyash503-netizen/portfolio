"use client";

import { useEffect, useRef } from "react";

const INTERACTIVE = "a, button, [role=button], input, textarea, select, label";

// A soft ring that trails the mouse and grows over links and buttons.
// Mouse users only; the native pointer stays as it is.
export function CursorFollower() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)").matches) return;

    let x = 0;
    let y = 0;
    let tx = 0;
    let ty = 0;
    let frame = 0;

    // Ease toward the pointer; stop the loop once the ring has caught up
    const tick = () => {
      x += (tx - x) * 0.2;
      y += (ty - y) * 0.2;
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      frame = Math.abs(tx - x) + Math.abs(ty - y) > 0.1 ? requestAnimationFrame(tick) : 0;
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      tx = e.clientX;
      ty = e.clientY;
      // Appear at the pointer instead of flying in from where it was last seen
      if (el.dataset.state !== "idle" && el.dataset.state !== "hover") {
        x = tx;
        y = ty;
      }
      el.dataset.state = (e.target as Element).closest(INTERACTIVE) ? "hover" : "idle";
      if (!frame) frame = requestAnimationFrame(tick);
    };
    const onLeave = (e: PointerEvent) => {
      if (!e.relatedTarget) el.dataset.state = "hidden";
    };
    const onDown = () => (el.dataset.down = "true");
    const onUp = () => delete el.dataset.down;

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerout", onLeave);
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerout", onLeave);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={ref} aria-hidden className="cursor-follower pointer-events-none fixed left-0 top-0 z-[70]">
      <span className="cursor-ring" />
    </div>
  );
}
