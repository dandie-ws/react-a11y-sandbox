import React, { Component } from "react";

function LiveAnnouncer({ liveText }) {
  return <div aria-live="assertive">{liveText}</div>;
}

export default LiveAnnouncer;
