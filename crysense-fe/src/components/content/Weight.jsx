import { Link } from "react-router-dom";

const FeatureWeight = ({
  title,
  description,
  features,
  image,
  checkIcon,
  reverse = false,
  buttonUrl,
  buttonText = "Mulai Hitung",
  showButton = true,
}) => {
  return (
    <section className="bg-white">
      <div className={`flex ${reverse ? "flex-col-reverse md:flex-row" : "flex-col md:flex-row-reverse"} items-center gap-8 py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6`}>
        
        <div className="w-full md:w-1/2 mt-4 md:mt-0">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-primary-dark font-poppins">
            {title}
          </h2>
          <p className="mb-6 font-light text-primary-darkest font-open-sans md:text-md">
            {description}
          </p>

          <div className="space-y-4">
            {features.map((item, index) => (
              <div key={index} className="flex items-start gap-2">
                <img src={checkIcon} alt="check" className="w-5 h-5 mt-1" />
                <p className="text-primary-darkest font-open-sans">{item}</p>
              </div>
            ))}
          </div>

          {showButton && (
            <div className="mt-8">
              <Link
                to={buttonUrl}
                className="inline-flex justify-center items-center py-3 px-12 text-base font-semibold text-white rounded-lg bg-secondary-light hover:bg-secondary"
              >
                {buttonText}
              </Link>
            </div>
          )}
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <img src={image} alt={title} className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default FeatureWeight;