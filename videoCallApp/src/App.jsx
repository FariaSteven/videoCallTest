import AgoraUIKit from "agora-react-uikit";
import { useState } from "react";

const App = () => {
  const [videoCall, setVideoCall] = useState(true);
  const rtcProps = {
    appId: "a7a4b22163d24f7bbe2071486d881e36",
    channel: "Test",
    token: "007eJxTYDjMK2F0cMG5reyvzpeuvB1pMc3Le3FNGsecKbuaCy4Vf3JUYEg0TzRJMjIyNDNOMTJJM09KSjUyMDc0sTBLsbAwTDU2MyzYldoQyMiwqaySiZEBAkF8FoaQ1OISBgYAbkIfoQ=="
  };
  const callbacks = {
    EndCall: () => setVideoCall(false),
  };
  return videoCall ? (
    <div style={{display: 'flex', width: '100vw', height: '100vh'}}>
      <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
    </div>
  ) : (
    <h3 onClick={() => setVideoCall(true)}>Start Call</h3>
  );
};

export default App;
