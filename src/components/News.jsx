import { NewsData } from "../data/fakeData";

const News = () => {
  const newsData = NewsData;

  return (
    <div className=" text-black mb-60 mt-16">
      <h1 className=" text-3xl tracking-wider border-b  border-black pb-4">
        Today's Essential Reads
      </h1>

      <ul className="w-[70%]">
        {newsData.map((news) => {
          return (
            <li
              className="py-8 border-b flex flex-col gap-2 hover:shadow-lg px-8"
              key={news.id}
            >
              <p className=" uppercase text-blue-700">{news.category}</p>
              <a className=" text-2xl" href={news.url}>
                {news.name}
              </a>
              <p className=" tracking-wide">{news.description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default News;
