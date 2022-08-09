import { useState } from "react";
import "./App.css";

function App() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const [title, setTitle] = useState("this is the title");
  const [description, setDescription] = useState("your description");
  const [author, setAuthor] = useState("other");

  async function formSubmit(e) {
    try{
    e.preventDefault();

    const comment = {
      title,
      description,
      author,
    };
    console.log(comment);
    const results = await fetch("https://sql.bocacode.com/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment),
    });
    const data = results.json();
    console.log(data);
    } catch (error) {
      console.error(error)
    }
  }


  return (
    <>
      <form onSubmit={formSubmit}>
        <h1>Comments</h1>
        <label>Title</label>
        <input
          type="type"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <h3>{title}</h3>
        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></textarea>
        <h3>{description}</h3>

        <label>Author</label>
        <select
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        >
          <option value="">Choose One</option>
          <option value="todd">Doctor Todd</option>
          <option value="ludwigson">Ludwigson</option>
          <option value="other">Other</option>
        </select>
        <h3>{author}</h3>

        <button>Submit Form</button>
      </form>
    </>
  );
}

export default App;
