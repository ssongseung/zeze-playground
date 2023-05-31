import Content from "./board";
import {useState} from "react";
import Button2 from "./button2";
import '../Content.css';

function random(n) {
  return Math.ceil(Math.random() * n);
}

function Board() {
  const [myHistory, setMyHistory] = useState([]);
  const [otherHistory, setOtherHistory] = useState([]);

  const handleRollClick = () => {
    const nextNum = random(6);
    const nextOtherNum = random(6);
    setMyHistory([...myHistory, nextNum]);
    setOtherHistory([...otherHistory, nextOtherNum]);
  }
  const handleClearClick = () => {
    setMyHistory([]);
    setOtherHistory([]);
  }

  return (
    <div className="Content">
      <div>
        <Button2 className="Content-button" color='blue' onClick={handleRollClick}>던지기</Button2>
        <Button2 className="Content-button" color='red' onClick={handleClearClick}>처음부터</Button2>
      </div>
      <div>
        <Content name="나" color="blue"  gameHistory={myHistory} />
        <Content name="상대" color="red"  gameHistory={otherHistory} />
      </div>
    </div>
  )
}

export default Board;
