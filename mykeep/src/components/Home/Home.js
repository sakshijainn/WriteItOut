import React from 'react'
import SideNavBar from "../SideNavBar/SideNavBar";
import NoteList from '../NoteList/NoteList';
import Notes from '../Notes/Notes';
import "./Home.css";
function Home() {
    return (
        <div className="home-container">
            <SideNavBar/>
            <NoteList/>
            <Notes/>
        </div>
    )
}

export default Home
