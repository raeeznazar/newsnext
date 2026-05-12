import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getNewsItem } from "@/lib/news";


export default async function IntersecptedPage({ params }) {
    const newsItemsSlug = params.slug;
    const newsItem = await getNewsItem(newsItemsSlug);

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
            </article>
        </>
    );
}
