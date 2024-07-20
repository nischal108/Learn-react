 import React from "react";
 import ReactDOM from "react-dom";
 
 
 const heading = React.createElement("div",{ id:"parent"},
    [React.createElement("div",{ id:"child"},
        [React.createElement("h3",{},"hello world from react"),
        React.createElement("h1",{},"hello world from react h1")
        ]
    ),
    React.createElement("div",{ id:"child"},
        [React.createElement("h3",{},"hello world from react"),
        React.createElement("h1",{},"hello world from react h1")
        ]
    )]);


    
 const root = ReactDOM.createRoot(document.getElementById("root"));

 root.render(heading);