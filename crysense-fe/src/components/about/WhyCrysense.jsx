import React from "react";

import Crybaby from "../../assets/crybaby.png";
import practical from "../../assets/practical.png";
import Ai from "../../assets/ai.png";
import Parenting from "../../assets/parenting.png";


const WhyCrysense = () => {
    return (
        <section className="bg-white">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="max-w-screen-md mb-8 lg:mb-16">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-primary-dark font-poppins">Mengapa CrySense?</h2>
                    <p className="text-primary-darkest sm:text-xl font-open-sans">CrySense hadir sebagai sahabat digital Anda untuk memahami tangisan bayi dengan kasih dan ketenangan.</p>
                </div>
                <div className="container mx-auto px-4 py-12">
                    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                        <div className="flex flex-col items-center text-center">
                            <img src={Crybaby} alt="Pahami Tangisan" className="h-24 mb-4" />
                            <h3 className="text-lg font-bold text-primary-darkest font-poppins">Pahami Tangisan</h3>
                            <p className="mt-2 text-primary-darkestfont-open-sans">
                                CrySense bantu kamu tahu apakah ia lapar, lelah, atau butuh perhatian.
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <img src={practical} alt="Cepat dan Praktis" className="h-24 mb-4" />
                            <h3 className="text-lg font-bold text-primary-darkest font-poppins">Cepat dan Praktis</h3>
                            <p className="mt-2 text-primary-darkest font-open-sans">
                                Unggah suara tangisan bayi, sistem kami akan menganalisisnya dalam hitungan detik.
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <img src={Ai} alt="Teknologi AI" className="h-24 mb-4" />
                            <h3 className="text-lg font-bold text-primary-darkest font-poppins">Teknologi AI</h3>
                            <p className="mt-2 text-primary-darkest font-open-sans">
                                Kenali jenis tangisan bayi secara cerdas dan responsif dengan teknologi machine learning.
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <img src={Parenting} alt="Teman Parenting" className="h-24 mb-4" />
                            <h3 className="text-lg font-bold text-primary-darkest font-poppins">Teman Parenting</h3>
                            <p className="mt-2 text-primary-darkest font-open-sans">
                                Support system kecil yang siap membantu kamu di masa-masa sibuk jadi orang tua.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyCrysense;