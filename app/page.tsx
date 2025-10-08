// Removed unused imports related to projects section
import InlineImageWithLoading from '@/components/inline-image-with-loading';
import BottomNav from '@/components/bottom-nav';
import TopBlur from '@/components/top-blur';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col max-w-[480px] mx-auto pb-28 pt-16">
      {/* Top blur effect */}
      <TopBlur />

      {/* Hero Section */}
      <section className="py-12 px-6 flex justify-center">
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-[auto_1fr] gap-x-4 font-['Instrument_Serif'] text-4xl sm:text-5xl md:text-6xl text-foreground mb-3 leading-snug">
            {/* Row 1 */}
            <div className="text-right font-normal text-muted-foreground flex items-center justify-end whitespace-nowrap">
              Hello I'm
              <InlineImageWithLoading
                src="/person-image.png"
                alt="Person"
                width={50}
                height={50}
                className="inline-block align-middle ml-2 rounded-2xl shadow-md w-10 h-10 sm:w-[50px] sm:h-[50px]"
                priority
              />
            </div>
            <div className="font-bold flex items-center">Ben,</div>

            {/* Row 2 */}
            <div className="text-right font-normal text-muted-foreground flex items-center justify-end whitespace-nowrap">
              a product
              <InlineImageWithLoading
                src="/laptop.png"
                alt="Laptop"
                width={50}
                height={50}
                className="inline-block align-middle ml-2 rounded-2xl shadow-md w-10 h-10 sm:w-[50px] sm:h-[50px]"
                priority
              />
            </div>
            <div className="font-bold flex items-center">designer</div>

            {/* Row 3 */}
            <div className="text-right font-normal text-muted-foreground flex items-center justify-end whitespace-nowrap">
              working at
              <InlineImageWithLoading
                src="/cq-logo.png"
                alt="Cequence Security Logo"
                width={50}
                height={50}
                className="inline-block align-middle ml-2 rounded-2xl shadow-md w-10 h-10 sm:w-[50px] sm:h-[50px]"
                priority
              />
            </div>
            <div className="font-bold flex items-center">Cequence</div>

            {/* Row 4 */}
            <div className="text-right font-normal text-muted-foreground flex items-center justify-end whitespace-nowrap">
              based in
              <InlineImageWithLoading
                src="/texas-image.png"
                alt="Texas"
                width={50}
                height={50}
                className="inline-block align-middle ml-2 rounded-2xl shadow-md w-10 h-10 sm:w-[50px] sm:h-[50px]"
                priority
              />
            </div>
            <div className="font-bold flex items-center">Texas</div>
          </div>
          {/* <p className="text-sm text-muted-foreground">
            Crafting thoughtful digital experiences through design and code
          </p> */}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6">
        {/* <h2 className="font-['Instrument_Serif'] text-2xl font-bold mb-4 text-center">About</h2> */}
        <p className="text-sm mb-4 text-muted-foreground">
          I'm a design engineer who lives in that sweet spot between design and code.
          <br />
          <br />
          I believe the codebase is the source of truth for design.
          <br />
          <br />
          Great interfaces come down to hundreds of small decisions. The kind that most people won't
          consciously notice, but will definitely feel.
          <br />
          <br />
          The best design work happens when you're close to the code and close to the customer.
        </p>
      </section>

      {/* Work Section */}
      {/* Work Section removed */}

      {/* Process Section removed */}

      {/* Footer */}
      <footer className="py-6 px-6 text-center">
        <p className="text-xs text-muted-foreground">© 2025 Ben Vogt. All rights reserved.</p>
      </footer>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
}
