import React from "react";
import "./Note List.css";
function NoteList() {
  return (
    <div className="note-list">
      <div className="header">
        <div className="header-title">
          <h1>All notes</h1>
        </div>
        <div className="sub-header">
          <div className="note-count">2 notes</div>
        </div>

        <div className="note-body">
          <div className="note-card">
            <div className="note-card-head">
              <div className="note-title">Note One</div>
              <div className="note-card-desc">Some description</div>
            </div>
            <div className="note-card-date">12-SEPT 2000</div>
          </div>

          <div className="note-card">
            <div className="note-card-head">
              <div className="note-title">Note One</div>
              <div className="note-card-desc">Some description</div>
            </div>
            <div className="note-card-date">12-SEPT 2000</div>
          </div>

          
        </div>
      </div>
    </div>
  );
}

export default NoteList;
