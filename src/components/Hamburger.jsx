import { menu, toggle } from "../store";

export const Hamburger = () => {
  return (
    <button
      aria-label={menu.value === "closed" ? "פתיחת תפריט" : "סגירת תפריט"}
      onClick={toggle}
      class={`flex flex-col justify-between items-center relative z-50 w-6 h-6 justify-self-start lg:hidden ${
        menu.value === "open" && "open"
      }`}
    >
      <span class="line top"></span>
      <span class="line middle"></span>
      <span class="line bottom"></span>
    </button>
  );
};
