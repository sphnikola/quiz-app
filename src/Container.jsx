export default function Container({ children }) {
  return (
    <>
      <section className=" min-h-screen font-rubik text-color-text">
        <div className="max-w-xl md:max-w-2xl lg:max-w-7xl mx-auto px-[24px] lg:px-[64px]">
          <main className="grid lg:grid-cols-[repeat(2,1fr)] items-start">
            {children}
          </main>
        </div>
      </section>
    </>
  );
}
