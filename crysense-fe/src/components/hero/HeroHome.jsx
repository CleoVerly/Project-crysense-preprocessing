import Banner from "../../assets/banner.png";

const HeroHome = () => {
  return (
    <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
            <h1 className="mb-4 sm:text-2xl md:text-5xl font-black text-primary-dark leading-none font-poppins">Parenting Cerdas Bersama CrySense</h1>
              <p className="mb-8 text-base md:text-lg font-normal text-primary-darkest sm:px-16 xl:px-48 font-open-sans">Dengan CrySense, Anda bisa mengenali kebutuhan si
                  kecil saat menangis dan memantau tumbuh kembangnya langsung dari satu platform yang siap mendampingi Anda setiap hari.</p>
            <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 font-open-sans">
                <a href="#" className="inline-flex justify-center items-center py-3 px-12 text-base font-medium text-center text-white rounded-lg bg-secondary-light hover:bg-secondary">
                    Coba Sekarang
                </a>
                <a href="#" className="inline-flex justify-center items-center py-3 px-10 text-base font-medium text-center text-secondary-light rounded-lg border border-secondary-light hover:border-secondary">
                    Explore Fitur
                </a>  
            </div>
            <div className="px-4 mx-auto text-center lg:max-w-full lg:px-46">
               <img src={Banner} alt="image hero" />
            </div> 
        </div>
    </section>
  );
};

export default HeroHome;