import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [animalInput, setAnimalInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ animal: animalInput }),
    });
    const data = await response.json();
    setResult(data.result);
    setAnimalInput("");
  }

  return (
    <div>
      <Head>
        <title>OpenAI Yoda Zen</title>
        <link rel="icon" href="/yoda.png" />
      </Head>

      <main className={styles.main}>
        <div className={styles.floating}>
          <img src="/yoda.png"/>
        </div>
        <form onSubmit={onSubmit}>
        <input
            type="text"
            name="animal"
            placeholder="Ask Yoda Anything..."
            value={animalInput}
            onChange={(e) => setAnimalInput(e.target.value)}
          />
        </form>
        <div className={styles.result}>
          {result}
          {result ? (
            <div className={styles.morphing}>
              {result.split(" ").map((word) => (
                <div className={styles.word}>{word}</div>
              ))}
            </div>
          ) : null}
        </div>
      </main>
    </div>
  );
}
