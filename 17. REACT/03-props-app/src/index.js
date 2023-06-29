import React from "react";
import {createRoot} from "react-dom/client";
import Card from "./components/Card";

createRoot(document.getElementById("root")).render(
  <div>
    <h1>My Contacts</h1>  
    <Card  
      name="Beyonce" 
      src="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg" 
      alt="avatar_img"
      number="+123 456 789"
      email="b@beyonce.com"
    />

    <Card  
      name="Jack Bauer" 
      src="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
      alt="avatar_img"
      number="+987 654 321"
      email="jack@nowhere.com"
    />
    
    <Card  
      name="Chuck Norris" 
      src="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png" 
      alt="avatar_img"
      number="+918 372 574"
      email="gmail@chucknorris.com"
    />
  </div> 
);
