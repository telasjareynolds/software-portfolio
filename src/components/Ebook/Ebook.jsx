import "./Ebook.css";
import bookCover from "../../assets/book-cover.png";
import bookIntro from "../../assets/book-intro.png";

function Ebook() {
  return (
    <div className="ebook">
      <div className="ebook__img-container">
        <img src={bookCover} alt="E-book cover" className="ebook__cover" />
        <img src={bookIntro} alt="E-book cover" className="ebook__cover" />
        <p className="ebook__bio">
          As the author of The Golden Habits of Becoming Your Best Self, I’ve
          learned that habits can either make or break you—whether it’s sticking
          to a morning routine or debugging code without wanting to throw your
          laptop. Writing this book taught me the power of small, consistent
          actions, which translates surprisingly well to software engineering.
          Whether I’m building scalable solutions or building better habits, I
          believe progress is all about iteration. The book’s up for grabs if
          you’re curious, but I’m sharing it here to show how life’s quirks—and
          a knack for structure—fuel my passion for creating meaningful tech.
          <br></br>
          <a
            href="https://www.amazon.com/dp/B0DDYNYKWJ"
            className="ebook__link"
            target="blank"
          >
            Golden Habits for Becoming Your Best Self
          </a>
        </p>
      </div>
    </div>
  );
}

export default Ebook;
