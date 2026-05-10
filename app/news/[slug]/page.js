import React from "react";
import { DUMMY_NEWS } from "@/dummy-news";
import Image from "next/image";
import { notFound } from "next/navigation";

export default function newsDetailPage({ params }) {
  const { slug } = params;
  const newsItem = DUMMY_NEWS.find((item) => item.slug === slug);

  if (!newsItem) {
    return notFound();
  }

  return (
    <>
      <article className="news-detail">
        <header>
          <Image src={`/images/news/${newsItem.image}`} alt={newsItem.title} width={400} height={400} />
          <h1>{newsItem.title}</h1>
        </header>
        <p>{newsItem.content}</p>
      </article>
    </>
  );
}
