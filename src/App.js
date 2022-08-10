import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [validForm, setValidForm] = useState(false)
  const [errorMessage, setErrorMessage] = useState('');
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("your description");
  const [author, setAuthor] = useState("other");

  useEffect(() => {
    if (title.length > 3 && description.length > 10) {
    setValidForm(true)
    }
  },[title,description,author])

  async function formSubmit(e) {
    e.preventDefault();

    if (!validForm) {
      setErrorMessage('Not a valid form')
      return;
    }
    try{

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
    setFormSubmitted(true)
    setValidForm(true)
    setErrorMessage('')
    console.log(data);
    } catch (error) {
      console.error(error)
      setErrorMessage("there was an error submitting your comment" + error.toString())
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
        {!formSubmitted && <button>Submit Form</button>}
      {errorMessage &&<h1>There was an error: <br/>{errorMessage}</h1>}
      </form>
      
    </>
  );
}

export default App;
