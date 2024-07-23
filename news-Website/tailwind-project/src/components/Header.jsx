import Section from "../util/Section";

export default function Header() {
  return (
    <header className=" bg-gradient-to-l from-secondary to-primary ">
      <div className="container md:max-lg:px-4 px-12  mx-auto py-4 md:px-32 flex  items-center justify-between">
        <div>
          <img className="w-12 animate-wiggle" src="public/vite.svg" alt="logo" />
        </div>
        <i
          onClick={() => {
            document.querySelector("nav").classList.toggle("hidden");
          }}
          class="ri-menu-line text-3xl self-center md:hidden"
        ></i>

        <nav
          className="left-0 w-full md:w-fit flex absolute md:relative
           space-y-4 md:space-y-0 py-7 md:py-5 top-[81px] md:top-auto
             items-center bg-zinc-800 md:bg-transparent
          flex-col md:flex md:flex-row md:space-x-8"
        >
          <Section text="Home" />
          <Section text="Products" />
          <Section text="About" />
          <Section text="Contact" />
        </nav>
      </div>
    </header>
  );
}
