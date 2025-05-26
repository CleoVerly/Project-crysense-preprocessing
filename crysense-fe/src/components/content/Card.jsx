import { Card } from "flowbite-react";
import articles from "../data/ArticleData.jsx";

const ArticleCard = () => {
    return (
    <section className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {articles.map((item) => (
            <Card
            key={item.id}
            imgSrc={item.image}
            className="!bg-white border !border-gray-200 rounded-lg shadow"
            >
            <h5 className="text-xl font-bold text-primary-dark font-poppins">{item.title}</h5>
            <p className="text-md text-primary-darkest font-open-sans">{item.description}</p>
            <a
                href={item.link}
                className="mt-2 inline-flex items-center text-secondary-light font-semibold hover:text-secondary font-open-sans"
            >
                Baca <span className="ml-1">→</span>
            </a>
            </Card>
        ))}
        </div>  
    </section>
  );
};

export default ArticleCard;
