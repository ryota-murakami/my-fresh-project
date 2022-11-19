import { useEffect, useState } from "preact/hooks";

const Joke = () => {
  const [joke, setJoke] = useState();
  useEffect(() => {
    console.log("useEffect");
    fetch("/api/joke").then((response) => response.json()).then((data) => {
      setJoke(data);
    });
  }, []);

  return <p>{joke ? joke : "loading..."}</p>;
};

export default Joke;
