
import '../App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React from 'react';
import Navbar from './Navbar';

function NoticeAdder({ onNoticeAdd }) {

  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  const handleSubmit = (event) => {
    const name = event.target.form.name.value;
    const description = event.target.form.description.value;
    const email = event.target.form.email.value;
    const tags = event.target.form.tags.value;
    const classes = event.target.form.classes.value;

    if (name === '' || tags === '' || classes === '') {
      alert("fields cannot be empty");
      return;
    }

    if (!validateEmail(email)) {
      alert("check your email");
      return;
    }

    const wantedGroup = {
      name: name,
      description: description,
      email: email,
      tags: tags,
      classes: classes
    }

    onNoticeAdd(wantedGroup);
    alert("notice " + name + " successfully created, check home page");

    event.target.form.name.value = "";
    event.target.form.description.value = "";
    event.target.form.email.value = "";
    event.target.form.tags.value = "";
    event.target.form.classes.value = "";
  }

  return (
    <div className="App">
      <Navbar />
      <form className="blocks">
        <TextField sx={{ marginBottom: "10px", whiteSpace: 'nowrap' }}
          required
          name="classes"
          id="outlined-required"
          label="Classes/Title"
        />
        <TextField sx={{ marginBottom: "10px" }}
          required
          multiline
          name="description"
          id="outlined-required"
          label="Description"
        />
        <TextField sx={{ marginBottom: "10px" }}
          required
          name="tags"
          id="outlined-required"
          label="Tags"
        />
        <TextField sx={{ marginBottom: "10px" }}
          required
          name="name"
          id="outlined-required"
          label="Your name"
        />
        <TextField sx={{ marginBottom: "10px" }}
          required
          name="email"
          id="outlined-required"
          label="Your email"
        />


        <Button sx={{ width: "100", padding: "10px", marginTop: "20px" }} variant="outlined" onClick={handleSubmit}>submit notice</Button>
      </form>
    </div>
  );
}

export default NoticeAdder;
