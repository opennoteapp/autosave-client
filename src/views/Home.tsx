import { Component } from 'solid-js';
import { onCleanup, createSignal, onMount } from "solid-js";
import { w3cwebsocket as W3CWebSocket } from "websocket";


const Home: Component = () => {
  const [val, setVal] = createSignal("");
  const handleInput = () => {

  }
  const client = new W3CWebSocket('ws://localhost:12312/ws');

  onMount( () => {
    client.onopen = () => {
      console.log('WebSocket Client Connected');
    };
    client.onmessage = (message) => {
      console.log(message);
    };
    client.send("asdasasdasd")

  });
  const handleNameChange = (event: any) => {
    client.send("asdasasdasd")
    setVal(event.target.value);
  };
  return (
    <>
      <main>
        <div className="h-full text-center p-20">
          Auto
          <br/>
          <input value={val()} onChange={handleNameChange} className="border-2 border-black w-96 text-left rounded-l p-2"/>
        </div>
      </main>
    </>
  );
};

export default Home;