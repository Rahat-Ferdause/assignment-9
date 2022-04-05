import React from "react";

const Questions = () => {
  return (
    <div>
      <h1 className="text-xl">Question Section</h1>
      <div className="m-10">
        <h1 className="text-xl">What Is Context API?</h1>
        <p>
          Answer: The React Context API is a way for a React app to effectively
          produce global variables that can be passed around. This is the
          alternative to "prop drilling" or moving props from grandparent to
          child to parent, and so on. Context is also touted as an easier,
          lighter approach to state management using Redux. Context API is a
          (kind of) new feature added in version 16.3 of React that allows one
          to share state across the entire app (or part of it) lightly and with
          ease.
        </p>
      </div>
      <div className="m-10">
        <h1 className="text-xl">What Is Semantic Tag?</h1>
        <p>
          Answer: HTML was originally created as a markup language to describe
          documents on the early internet. As the internet grew and was adopted
          by more people, its needs changed. Where the internet was originally
          intended for sharing scientific documents, now people wanted to share
          other things as well. Very quickly, people started wanting to make the
          web look nicer.
        </p>
      </div>
    </div>
  );
};

export default Questions;
