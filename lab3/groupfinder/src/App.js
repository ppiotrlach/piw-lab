import './App.css';
import React, { useState } from 'react';
import Home from './Components/Home';
import NoticeAdder from './Components/NoticeAdder';
import MessageSender from './Components/MessageSender';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [wantedGroup, setWantedGroup] = useState(null);
  const [wantedGroups, setWantedGroups] = useState([
    {
      name: "Piotrek IGM",
      description: "Grupa zajęciowa z wtorku 9.15 tydzień parzysty. Temat do dogadania, jestem otwarty na propozycje.",
      email: "p@gmail.com",
      tags: "ucisw2 projekt wtorek zdanko",
      classes: "UCISW 2 PROJEKT"
    },
    {
      name: "Mientus PDW",
      description: "Środa TP 15.15. PILNE!!!",
      email: "p@gmail.com",
      tags: "ripo projekt środa asap szybko na teraz",
      classes: "Rozpoznawanie i przetwarzanie obrazów - PROJEKT [ASAP!1!1!!]"
    }
  ]);

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
