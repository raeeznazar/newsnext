import React from "react";
import NewsList from "@/components/newslist";
import { getLatestNews } from "@/lib/news";

export default async function LatestNewsPage() {
  const news = await getLatestNews();
  return (
    <>
      <h2>Latest News</h2>
      <NewsList news={news} />
    </>
  );
}
