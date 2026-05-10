import React from "react";

export default function ArchiveLayout({ archive, latest }) {
  return (
    <>
      <h1>Archive Layout</h1>
      {/* <nav>
      <ul>
        <li><a href="/archive/@latest">Latest News</a></li>
        <li><a href="/archive/@archive">Archive</a></li>
      </ul>
    </nav> */}
      {/* <div id="content">
      {archive}
      {latest}
    </div> */}
      <section id="archive-filter">{archive}</section>
      <section id="latest-section">{latest}</section>
    </>
  );
}
