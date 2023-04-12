import { menu, toggle } from "../store";

export const Hamburger = () => {
  return (
    <button
      id="menu-btn"
      aria-label="פתיחת תפריט"
      onClick={toggle}
      class={`flex flex-col justify-between items-center relative z-50 w-6 h-6 md:hidden ${
        menu.value === "open" && "open"
      }`}
    >
      <span class="line top"></span>
      <span class="line middle"></span>
      <span class="line bottom"></span>
    </button>
  );
};
