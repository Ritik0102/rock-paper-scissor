import React, { useEffect, useRef, useState } from "react";
import "../App.css";
import Paper from "../assets/Paper.jpg";
import Rock from "../assets/Rock.jpg";
import Scissor from "../assets/Scissor.jpg";
import Vs from "../assets/vs.png";
import Bot from "../assets/bot.jpg";
import Player from "../assets/player.jpg";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";

function Game(props) {
  const [num, setNum] = useState(0)
  const [img, setImg] = useState(Bot);
  const [player, setPlayer] = useState(Player);
  const [alert, setAlert] = useState("Result");
  const [pscore, setPscore] = useState(0);
  const [bscore, setBscore] = useState(0);
  const [loading, setLoading] = useState(false);

  const ref = useRef(null);
  const refClose = useRef(null);
  const navigate = useNavigate();

  const botChoice = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setNum(num+1)
      const arrr = ["Paper", "Rock", "Scissor"];
      const choice = arrr[Math.floor(Math.random() * arrr.length)];
      if (choice == "Paper") {
        setImg(Paper);
      } else if (choice == "Scissor") {
        setImg(Scissor);
      } else {
        setImg(Rock);
      }
    }, 500);
  };

  const play = () => {
    if (pscore == 9 || bscore == 9) {
      setBscore(bscore + 1);
      setPscore(pscore + 1);
      ref.current.click();
    } else {
      if (player == Rock && img == Paper) {
        setAlert("You Lose");
        setBscore(bscore + 1);
      } else if (player == Rock && img == Scissor) {
        setAlert("You Win");
        setPscore(pscore + 1);
      } else if (player == Rock && img == Rock) {
        setAlert("Draw");
      } else if (player == Paper && img == Scissor) {
        setAlert("You Lose");
        setBscore(bscore + 1);
      } else if (player == Paper && img == Rock) {
        setAlert("You Win");
        setPscore(pscore + 1);
      } else if (player == Paper && img == Paper) {
        setAlert("Draw");
      } else if (player == Scissor && img == Scissor) {
        setAlert("Draw");
      } else if (player == Scissor && img == Paper) {
        setAlert("You Win");
        setPscore(pscore + 1);
      } else if (player == Scissor && img == Rock) {
        setAlert("You Lose");
        setBscore(bscore + 1);
      }
    }
  };

  useEffect(() => {
    play();
  }, [num]);

  return (
    <div className="app">
      <div className="container">
        <h1> Rock-Paper-Scissor</h1>
      </div>
      <div className="play-zone">
        <h2>Score:-{pscore}</h2>
        <button className="btn">
          <img src={player} alt="Player"></img>
        </button>
        <img src={Vs} alt="v/s"></img>

        <div className="btn">
          {loading ? <Spinner />:
          <img src={img} alt="bot"></img>}
        </div>
        <h2>Score:-{bscore}</h2>
      </div>

      <div className="game">
        <p>{alert}</p>
      </div>

     
      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Launch static backdrop modal
      </button>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                {pscore == 10 ? "You Won" : "You Lose"}
              </h5>
            </div>
            <div className="modal-body">
              {`${pscore} : ${bscore}`}
            </div>
            <div className="modal-footer">
              <button
                ref={refClose}
                type="button"
                className="btn btn-secondary d-none"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button"
              onClick={() => {
                refClose.current.click();
                navigate("/");
              }}
               className="play-again btn btn-primary">
                Play Again
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <button
          onClick={() => {
            setPlayer(Paper);
            botChoice();
          }}
          className="btn"
        >
          <img src={Paper} alt="Paper"></img>
        </button>
        <button
          onClick={() => {
            setPlayer(Rock);
            botChoice();
          }}
          className="btn"
        >
          <img src={Rock} alt="Rock"></img>
        </button>
        <button
          onClick={() => {
            setPlayer(Scissor);
            botChoice();
          }}
          className="btn"
        >
          <img src={Scissor} alt="Scissor"></img>
        </button>
      </div>
    </div>
  );
}

export default Game;
