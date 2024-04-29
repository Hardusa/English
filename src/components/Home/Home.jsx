import { useEffect } from "react";
import "../../styles/Home/Home.css";
import { LevelOne } from "./LevelOne";

export const Home = () => {
  useEffect(() => {
    document.title = "English Game";
  });

  return (
    <>
      <div>
        <LevelOne />
      </div>
    </>
  );
};
