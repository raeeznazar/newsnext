import React from "react";
import { DUMMY_NEWS } from "@/dummy-news";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getNewsItem } from "@/lib/news";

export default async function newsDetailPage({ params }) {
  const { slug } = params;
  const newsItem = await getNewsItem(slug);

  if (!newsItem) {
    return notFound();
  }

  return (
    <>
      <article className="news-detail">
        <header>
          <Link href={`/news/${slug}/image`}>
            <Image src={`/images/news/${newsItem.image}`} alt={newsItem.title} width={400} height={400} />
          </Link>
          <h1>{newsItem.title}</h1>
        </header>
        <p>{newsItem.content}</p>
      </article>
    </>
  );
}
