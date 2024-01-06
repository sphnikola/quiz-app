import ToggleSwitch from "./toggleSwitch/ToggleSwitch";

export default function Container({ children }) {
  return (
    <>
      <section
        className="min-h-screen font-rubik text-color-text flex items-center justify-center
      bg-[url('./assets/images/pattern-background-mobile-light.svg')]  bg-no-repeat bg-fixed bg-cover bg-[#f4f6fa] 
      dark:bg-[url('./assets/images/pattern-background-mobile-dark.svg')]
      md:bg-[url('./assets/images/pattern-background-tablet-light.svg')]
      md:dark:bg-[url('./assets/images/pattern-background-tablet-dark.svg')]
      lg:bg-[url('./assets/images/pattern-background-desktop-light.svg')]
      lg:dark:bg-[url('./assets/images/pattern-background-desktop-dark.svg')]
       dark:bg-[#303d50]"
      >
        <div className="max-w-xl md:max-w-2xl lg:max-w-7xl mx-auto px-[24px] lg:px-[64px] ">
          <ToggleSwitch label="what" />
          <main className="grid lg:grid-cols-[repeat(2,1fr)] items-start gap-x-11">
            {children}
          </main>
        </div>
      </section>
    </>
  );
}
