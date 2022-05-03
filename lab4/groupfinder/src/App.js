import './App.css';
import React, { useState, useEffect } from 'react';
import Home from './Components/Home';
import NoticeAdder from './Components/NoticeAdder';
import MessageSender from './Components/MessageSender';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import axios from "axios";

function App() {
  const [wantedGroup, setWantedGroup] = useState(null);
  const [wantedGroups, setWantedGroups] = useState([]);
  //   {
  //     name: "Piotrek IGM",
  //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //     email: "p@gmail.com",
  //     tags: "ucisw2 project tuesday",
  //     classes: "UCISW 2 PROJECT tuesday"
  //   },
  //   {
  //     name: "Mientus2000",
  //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  //     email: "m@gmail.com",
  //     tags: "ripo project wednesday asap",
  //     classes: "RIPO - project"
  //   }
  // ]);


  useEffect(() => {
    axios
      .get("/api/groups.json")
      .then((res) => {
        // console.log(res.data);
        setWantedGroups(res.data);
      })
  })

  const onNoticeAdd = (Notice) => {
    setWantedGroups(wantedGroups => [...wantedGroups, Notice]);
  }

  const onSendMsg = (Notice) => {
    setWantedGroup(Notice);
  }


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home wantedGroups={wantedGroups} onSendMsg={onSendMsg} />} />
          <Route path="/add" element={<NoticeAdder wantedGroups={wantedGroups} onNoticeAdd={onNoticeAdd} />} />
          <Route path="/message" element={<MessageSender wantedGroup={wantedGroup} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
