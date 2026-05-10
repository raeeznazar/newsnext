import React from "react";
import NewsList from "@/components/newslist";
import { getNewsForYear, getAvailableNewsYears, getAvailableNewsMonths, getNewsForYearAndMonth } from "@/lib/news";
import Link from "next/link";

export default function page({ params }) {
  const filter = params.filter;

  const selectedYear = filter ? filter[0] : null;
  const selectedMonth = filter ? filter[1] : null;

  let news;
  let links = getAvailableNewsYears();
  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(selectedYear);
    links = getAvailableNewsMonths(selectedYear);
  } else if (selectedYear && selectedMonth) {
    news = getNewsForYearAndMonth(selectedYear, selectedMonth);
    links = []; // No further links when both year and month are selected]
  }

  let newsContent = <p>No news found for the selected year.</p>;
  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  if (
    (selectedYear && !getAvailableNewsYears().includes(+selectedYear)) ||
    (selectedMonth && !getAvailableNewsMonths(selectedYear).includes(+selectedMonth))
  ) {
    throw new Error("Invalid filters.");
  }

  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((link) => {
              const href = selectedYear ? `/archive/${selectedYear}/${link}` : `/archive/${link}`;
              return (
                <li key={link}>
                  <Link href={href}>{link}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  );
}
