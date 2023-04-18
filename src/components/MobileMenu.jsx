// state imports
import { menu, toggle } from "../store";

export const MobileMenu = ({ children }) => {
  if (menu.value === "closed") return null;
  return (
    <aside onClick={toggle} class="fixed z-40 inset-0">
      <div class="fixed inset-0 bg-black/30 backdrop-blur-sm"></div>
      <nav
        onClick={e => e.stopPropagation()}
        class="flex flex-col gap-7 fixed inset-y-0 right-0 left-1/4 bg-white px-11 py-32 font-bold"
      >
        {children}
      </nav>
    </aside>
  );
};
