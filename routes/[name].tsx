import { useEffect, useState } from "preact/hooks";
import { PageProps } from "$fresh/server.ts";

export default function Greet(props: PageProps) {
  const [joke, setJoke] = useState(null);
  useEffect(() => {
    fetch("/api/joke").then((response) => response.json()).then((data) => {
      setJoke(data);
    });
  }, []);

  return (
    <div>
      <p>Hello {props.params.name}</p>
      <p>{joke ? joke : "loading..."}</p>
    </div>
  );
}
