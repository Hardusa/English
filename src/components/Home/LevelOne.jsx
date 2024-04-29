import { useEffect, useState } from "react";
import "../../styles/Home/Home.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

export const LevelOne = () => {
  const [message, setMessage] = useState("");
  const [count, setCount] = useState(0);

  const pronounce = [
    {
      pro: "May i have some water",
      spanish: "Me puedes dar un poco de agua?",
    },
    {
      pro: "I may see you tomorrow",
      spanish: "Puede que te vea mañana",
    },
    {
      pro: "I can see you",
      spanish: "Puedo verte",
    },
    {
      pro: "I can't see you",
      spanish: "No puedo verte",
    },
    {
      pro: "We find a new life in the island",
      spanish: "Encontramos una nueva vida en la isla",
    },
    {
      pro: "You have to take it",
      spanish: "Tienes que tomarlo",
    },
    {
      pro: "I want to live adventures",
      spanish: "Quiero vivir aventuras",
    },
    {
      pro: "Let's go into the garden",
      spanish: "Vamos al jardin",
    },
    {
      pro: "Will you be my friend",
      spanish: "¿Quieres ser mi amigo/a?",
    },
    {
      pro: "The best experience of your life",
      spanish: "La mejor experiencia de tu vida",
    },
    {
      pro: "You look nice",
      spanish: "Estas guapa/o",
    },
    {
      pro: "Travel with us",
      spanish: "Viaja con nosotros/as",
    },
    {
      pro: "Best offers for you",
      spanish: "Las mejores ofertas para ti",
    },
    {
      pro: "We help you because you're important for us",
      spanish: "Te ayudamos porque eres importante para nosotros/as",
    },
    {
      pro: "if you contact us you won't regret it",
      spanish: "Si contactas con nosotros no te arrepentirás",
    },
    {
      pro: "Is it Tuesday or Wednesday today",
      spanish: "¿Hoy es martes o miércoles?",
    },
    {
      pro: "Hello",
      spanish: "Hola",
    },
    {
      pro: "How are you",
      spanish: "Como estas?",
    },
    {
      pro: "Hi",
      spanish: "Hola",
    },
    {
      pro: "Name",
      spanish: "Nombre",
    },
    {
      pro: "House",
      spanish: "Casa",
    },
    {
      pro: "Bag",
      spanish: "Bolsa",
    },
    {
      pro: "Bad",
      spanish: "Malo/la",
    },
    {
      pro: "Back",
      spanish: "Atras",
    },
    {
      pro: "But",
      spanish: "Pero",
    },
    {
      pro: "By",
      spanish: "Por",
    },
  ];

  const correctAnwser = () => {
    let randomInt = Math.floor(Math.random() * pronounce.length);
    setMessage("Your anwser is correct dude!!");
    setTimeout(() => {
      setMessage("");
      // setCount((prevValue) => prevValue + 1);
      setCount(randomInt);
      resetTranscript();
    }, 1300);
  };
  const stopListening = () => {
    setMessage("");
    SpeechRecognition.stopListening();
    resetTranscript();
  };

  const hereWeGoAgain = () => {
    resetTranscript();
    setCount(0);
  };

  const commands = [
    {
      command: "Reset",
      callback: () => resetTranscript(),
    },
    {
      command: "Clean",
      callback: () => resetTranscript(),
    },
    {
      command: "Again",
      callback: () => resetTranscript(),
    },
    {
      command: "I need to try again",
      callback: () => resetTranscript(),
    },
    {
      command: "Okay again",
      callback: () => resetTranscript(),
    },
    {
      command: "Stop",
      callback: () => stopListening(),
    },
    {
      command: "Stop listening to me",
      callback: () => stopListening(),
    },
    {
      command: "Here we go again",
      callback: () => hereWeGoAgain(),
    },
    {
      command: `${pronounce[count].pro}`,
      callback: () => correctAnwser(),
    },
  ];

  const {
    transcript,
    interimTranscript,
    finalTranscript,
    resetTranscript,
    listening,
  } = useSpeechRecognition({ commands });

  useEffect(() => {
    if (finalTranscript !== "") {
      console.log("Got final result:", finalTranscript);
    }
  }, [interimTranscript, finalTranscript]);

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    console.log(
      "Your browser does not support speech recognition software! Try Chrome desktop, maybe?"
    );
  }
  const listenContinuously = () => {
    SpeechRecognition.startListening({
      continuous: true,
      language: "en-US",
    });
  };

  const handleKeyPressT = (event) => {
    if (event.onKeyDown === "t" || event.key === "T") {
      alert("hi");
      listenContinuously();
    }
  };

  let firstLetter = transcript.charAt(0).toUpperCase() + transcript.slice(1);

  return (
    <>
      <div>
        <div className="margin">
          <span className="correct_anwser">{message}</span>
          <div className="martec_text_reply" style={{ marginTop: 10 }}>
            Spanish:{" "}
            <span className="white_text">
              "{`${pronounce[count].spanish}`}"
            </span>
            <th />
            Pronounce:{" "}
            <span className="white_text">"{`${pronounce[count].pro}`}"</span>
            <th />
            Pronunciation:{" "}
            <span className="white_text">"{`No Available`}"</span>
          </div>
          <div style={{ marginTop: 15, marginBottom: 15 }}>
            <span className="you_text_speak">
              You: <span className="white_text">{firstLetter}</span>
            </span>
          </div>

          <div>
            <button type="button" className="button" onClick={resetTranscript}>
              Reset
            </button>
            <button
              type="button"
              className="button"
              onClick={listenContinuously}
              onKeyDown={handleKeyPressT}
            >
              Listen
            </button>
            <button
              type="button"
              className="button"
              onClick={SpeechRecognition.stopListening}
            >
              Stop
            </button>
          </div>
        </div>
        {/* <div style={{ marginTop: 20 }}> */}
        <span className="white_text">
          Microphone:{" "}
          {listening ? (
            <span className="listening_on">On</span>
          ) : (
            <span className="listening_off">Off</span>
          )}
        </span>
        {/* </div> */}
      </div>
    </>
  );
};
