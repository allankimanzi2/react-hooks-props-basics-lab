import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Header from "./Header";
import ArticleList from "./ArticleList";


// pass this data down as props to the child component(s) that need it!
import user from "../data/user";


function App() {
  const blogName = "Your Blog Name";
  const aboutText = "About your blog...";
  const customImageSrc = "https://example.com/custom-image.jpg";
  const articles = [
    { id: 1, title: "Article 1", content: "Content for Article 1" },
    { id: 2, title: "Article 2", content: "Content for Article 2" },
    // Add more articles as needed
  ];
  return (
    <div>
      <NavBar />
      <Home name={user.name} city={user.city} color={user.color} />
      <About bio={user.bio} github={user.links.github} linkedin={user.links.linkedin} />
      <Header blogName="Your Blog Name" />
      <ArticleList articles={articles} />
    </div>
  );
}

export default App;
