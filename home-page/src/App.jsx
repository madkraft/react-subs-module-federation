import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import Chat from "chat/Chat";

const App = () => (
  <div>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis numquam aliquid corrupti eos, deserunt laudantium ea sapiente
      ratione exercitationem, minima voluptatibus commodi. Libero maiores ducimus culpa itaque reprehenderit velit repellat?
    </p>
    <h1>Chat!</h1>
    <Chat />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
