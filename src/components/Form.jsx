import { useState, useEffect } from "react";


export default function Form({setShow}) {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [validForm, setValidForm] = useState(false)
    const [errorMessage, setErrorMessage] = useState('');
    const [form, setForm] = useState("");
    useEffect(() => {
      if (form?.title?.length > 3 && form?.description?.length > 10) {
      setValidForm(true)
      }
    },[form])
  
    async function formSubmit(e) {
      e.preventDefault();
  
      if (!validForm) {
        setErrorMessage('Not a valid form')
        return;
      }
      try{
      const results = await fetch("https://sql.bocacode.com/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      const data = results.json();
      setFormSubmitted(true)
      setValidForm(true)
      setErrorMessage('')
      console.log(data);
      setShow(false)
      } catch (error) {
        console.error(error)
        setErrorMessage("there was an error submitting your comment" + error.toString())
      }
    }
    const updateForm = (event) => {
      setForm({...form, [event.target.name]: event.target.value})
    }
  
    return (
      <>
        <form onSubmit={formSubmit}>
          <h1>Comments</h1>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={updateForm}
          />
          <h3>{form.title}</h3>
          <label>Description</label>
          <textarea
            name='description'
            value={form.description}
            onChange={updateForm}
          ></textarea>
          <h3>{form.description}</h3>
          <label>Author</label>
          <select
            name='author'
            value={form.author}
            onChange={updateForm}
          >
            <option value="">Choose One</option>
            <option value="todd">Doctor Todd</option>
            <option value="ludwigson">Ludwigson</option>
            <option value="other">Other</option>
          </select>
          <h3>{form.author}</h3>
          {!formSubmitted && <button>Submit Form</button>}
        {errorMessage &&<h1>There was an error: <br/>{errorMessage}</h1>}
        </form>
        
      </>
    );
  }