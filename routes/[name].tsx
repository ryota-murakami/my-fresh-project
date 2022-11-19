import { useEffect, useState } from "preact/hooks";
import { PageProps } from "$fresh/server.ts";
import Joke from "../islands/Joke.tsx";

export default function Greet(props: PageProps) {
  return (
    <div>
      <p>Hello {props.params.name}</p>
      <Joke />
    </div>
  );
}
