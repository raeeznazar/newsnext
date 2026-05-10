import React from "react";
import NewsList from "@/components/newslist";
import { DUMMY_NEWS } from "@/dummy-news";

export default function newsPage() {
  return (
    <>
      <h1>News page</h1>
      <NewsList news={DUMMY_NEWS} />
    </>
  );
}
