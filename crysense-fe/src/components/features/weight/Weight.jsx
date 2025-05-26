import BabyFormInput from "./Form";

const Weight = () => {
  return (
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-full mb-8 lg:mb-16 text-center">
          <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-primary-dark font-poppins">
            Periksa Tumbuh Kembang Bayi
          </h2>
          <p className="mx-auto max-w-3xl text-primary-darkest sm:text-lg font-open-sans">
            Masukkan usia dan berat badan bayi, lalu CrySense akan memberitahu apakah berat badannya ideal, kurang, atau berlebih
            berdasarkan standar WHO.
          </p>
        </div>
        <BabyFormInput />
      </div>
    </section>
  );
};

export default Weight;