import React from "react";
import Navbar from "./Navbar";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function MessageSender({ wantedGroup }) {

    const messageTitle = "RE: " + wantedGroup.classes;

    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    const sendMsg = (event) => {
        const title = event.target.form.title.value;
        const description = event.target.form.description.value;
        const email = event.target.form.email.value;

        if (title === '' || description === '' || email === '') {
            alert("fields cannot be empty");
            return;
        }

        if (!validateEmail(email)) {
            alert("check your email");
            return;
        }

        alert("Msg sent, check your email for responses");

        event.target.form.title.value = "";
        event.target.form.description.value = "";
        event.target.form.email.value = "";
    }

    return (
        <div className="App">
            <Navbar />
            <form className="blocks">
                <TextField sx={{ marginBottom: "10px" }}
                    required
                    name="title"
                    id="outlined-required"
                    label="Title"
                    value={messageTitle}
                    inputProps={
                        { readOnly: true, }
                    }
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
                    name="email"
                    id="outlined-required"
                    label="Your email"
                />

                <Button sx={{ width: "100", padding: "10px", marginTop: "20px" }} variant="outlined" onClick={sendMsg}>send message</Button>
            </form>
        </div>
    );

}
export default MessageSender;