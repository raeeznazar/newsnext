
import NewsList from "@/components/newslist";
import { getAllNews } from "@/lib/news";
export default async function newsPage() {
  const news = await getAllNews();

  return (
    <>
      <h1>News page</h1>
      <NewsList news={news} />
    </>
  );
}
