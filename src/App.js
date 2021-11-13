import React, { useState, useEffect } from "react";
import "./App.css";
import Figure from "./components/Figure";
import Header from "./components/Header";
import Word from "./components/Word";
import WrongLetters from "./components/WrongLetters";
import { showNotification as show } from "./help/help";
import Popup from "./components/Popup";
import Notify from "./components/Notify";

const words = [
  "about",
  "search",
  "other",
  "which",
  "their",
  "there",
  "contact",
  "business",
  "online",
  "first",
  "would",
  "services",
  "these",
  "click",
  "service",
  "price",
  "people",
  "state",
  "email",
  "health",
  "world",
  "products",
  "music",
  "should",
  "product",
  "system",
  "policy",
  "number",
  "please",
  "support",
  "message",
  "after",
  "software",
  "video",
  "where",
  "rights",
  "public",
  "books",
  "school",
  "through",
  "links",
  "review",
  "years",
  "order",
  "privacy",
  "items",
  "company",
  "group",
  "under",
  "general",
  "research",
  "january",
  "reviews",
  "program",
  "games",
  "could",
  "great",
  "united",
  "hotel",
  "center",
  "store",
  "travel",
  "comments",
  "report",
  "member",
  "details",
  "terms",
  "before",
  "hotels",
  "right",
  "because",
  "local",
  "those",
  "using",
  "results",
  "office",
  "national",
  "design",
  "posted",
  "internet",
  "address",
  "within",
  "states",
  "phone",
  "shipping",
  "reserved",
  "subject",
  "between",
  "forum",
  "family",
  "based",
  "black",
  "check",
  "special",
  "prices",
  "website",
  "index",
  "being",
  "women",
  "today",
  "south",
  "project",
  "pages",
  "version",
  "section",
  "found",
  "sports",
  "house",
  "related",
  "security",
  "county",
];
let selectedWord = words[Math.floor(Math.random() * words.length)];
console.log(selectedWord);

function App() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongletters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const { key, keyCode } = e;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();

        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongletters((wrongletterss) => [...wrongletterss, letter]);
          } else {
            show(setShowNotification);
          }
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [correctLetters, wrongLetters, playable]);

  function playAgain() {
    setPlayable(true);

    setCorrectLetters([]);
    setWrongletters([]);

    let random = Math.floor(Math.random() * words.length);
    selectedWord = words[random];
    console.log(selectedWord);
  }

  return (
    <>
      <Header wrongLetters={wrongLetters} />
      <div className="game-container">
        <Figure wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
      <Popup
        correctLetters={correctLetters}
        wrongLetters={wrongLetters}
        selectedWord={selectedWord}
        setPlayable={setPlayable}
        playAgain={playAgain}
      />
      <Notify showNotification={showNotification} />
    </>
  );
}

export default App;
