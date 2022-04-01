
import '../App.css';
import TextField from '@mui/material/TextField';
import React, { useState } from "react";
import Navbar from './Navbar';
import Notice from './Notice';

function Home({ wantedGroups, onSendMsg }) {

    const [searchFor, setSearchFor] = useState("");

    const findGroups = (event) => {
        setSearchFor(event.target.form.searchfor.value);
    }


    return (
        <>

            <div className="App">
                <Navbar />

                <form onSubmit={(event) => { event.preventDefault() }}>
                    <TextField sx={{ marginBottom: "10px", width: "10%", marginRight: "30%" }}
                        name="searchfor"
                        id="outlined-required"
                        label="Search"
                        onChange={findGroups}
                        placeholder=""
                    />
                </form>

                {(wantedGroups.map((grp, idx) => {
                    if (searchFor === "") {
                        return (
                            <Notice key={idx} notice={grp} onSendMsg={onSendMsg} />);
                    }
                    else {
                        if (grp.description.includes(searchFor) || grp.tags.includes(searchFor) || grp.classes.includes(searchFor)) {
                            return (
                                <Notice key={idx} notice={grp} onSendMsg={onSendMsg} />);
                        }
                    }
                }))}

            </div>
        </>
    );
}
export default Home;
