import { NewsData } from "../data/fakeData";

const News = () => {
  const newsData = NewsData;

  const news = {
    author: "D. Parvaz",
    title:
      "War in Gaza and settler violence is taking its toll on mental health in the West Bank",
    description:
      "A mobile medical clinic offering mental health care has sought to help Palestinians dealing with war-related anxiety, especially vulnerable communities, such as Bedouin tribes.",
    url: "https://www.npr.org/2024/03/04/1234557460/israel-hamas-gaza-west-bank-mental-health",
    urlToImage:
      "https://media.npr.org/assets/img/2024/02/29/mental_health_d._npr_ayman-oghanna009_wide-5344996f4edc767ead27a17f21719656b1d8102f-s1400-c100.jpg",
    publishedAt: "2024-03-04T10:01:12Z",
  };
  const dateString = "2024-03-04T10:01:12Z";
  const date = new Date(dateString);

  console.log(date.toLocaleString()); // Output will depend on your local time zone

  return (
    <div className=" text-black my-16">
      <h1 className=" text-3xl tracking-wider border-b  border-black pb-4">
        Today&apos;s Essential Reads
      </h1>

      <ul className="w-[70%]">
        {newsData.map((news, i) => {
          const dateString = news.publishedAt;
          const date = new Date(dateString);

          console.log(date.toLocaleString());
          if (news.source.id !== null)
            return (
              <li
                className="py-8 border-b flex items-center gap-8 hover:shadow-lg px-8"
                key={i}
              >
                <div>
                  <img
                    className=" min-w-32 min-h-32 max-w-32 max-h-32 object-cover"
                    src={news.urlToImage ? news.urlToImage : ""}
                    alt={news.title}
                  />
                </div>
                <div className=" flex flex-col gap-2">
                  <p className=" uppercase text-blue-700">{news.source.name}</p>
                  <a className=" text-2xl" href={news.url}>
                    {news.title}
                  </a>
                  <p className=" tracking-wide">{news.description}</p>
                  <p className=" text-gray-500">{date.toLocaleString()}</p>
                </div>
              </li>
            );
        })}
      </ul>
    </div>
  );
};

export default News;
