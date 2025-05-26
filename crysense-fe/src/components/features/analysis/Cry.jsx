import { InputVoice } from "./Input";


const Cry = () => {
  return (
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-full mb-8 lg:mb-16 text-center">
          <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-primary-dark font-poppins">
            Analisis Tangisan Bayi Anda
          </h2>
          <p className="mx-auto max-w-3xl text-primary-darkest sm:text-lg font-open-sans">
            Membantu Anda mengenali apakah bayi sedang lapar, lelah, tidak nyaman, atau merasa sakit semua melalui suara tangisannya.
          </p>
        </div>
        <InputVoice />      
      </div>
    </section>
  );
};

export default Cry;