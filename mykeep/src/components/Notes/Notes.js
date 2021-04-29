import React from 'react'
import "./Notes.css";
function Notes() {
    return (
        <div className="notes">
           <div className="notes-header">
                <div className="notes-header-date"> Last edited on 12SEPT 2000</div>
                <div className="notes-button">
                    <div className="note-btn">
                        <button>Archive</button>
                    </div>
                </div>
           </div>
        <div className="notes_body">
            <div className="note-content-head">
            <input type="text" placeholder="title"/>
            
            </div>
            <div className="note-content">
             <textarea placeholder="start writing"/>
            </div>
        </div>


        </div>
    )
}

export default Notes
