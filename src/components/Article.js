import React from "react";

function Article({ title, date, preview }) {
  // Use a default value for the date if not provided
  const formattedDate = date ? new Date(date).toDateString() : "January 1, 1970";

  return (
    <article>
      <h3>{title}</h3>
      <small>{formattedDate}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
