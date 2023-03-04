"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import Editor from "./components/Editor";
import style from "./page.module.css";
import React from "react";
import axios from "axios";
import Loader from "./components/Loader";
const inter = Inter({ subsets: ["latin"] });
import languages from "translate-json-file/assets/languages.json";

export default function Home() {
  const [inputText, setInputText] = React.useState("");
  const [translatedText, setTranslatedText] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [language, setLanguage] = React.useState();

  return (
    <main>
      {loading && <Loader />}
      <input
        type="file"
        accept="application/json"
        className="d-none"
        id="input-file"
        onChange={(e) => {
          const file = e.target.files[0];
          const reader = new FileReader();
          reader.onload = (e) => {
            const text = e.target.result;
            console.log(text);
            setInputText(text);
          };
          reader.readAsText(file);
        }}
      />

      <div className="flex  gap-5 z-40 sticky top-16 bg-base-100 p-6">
        <select
          value={language}
          onChange={(e) => {
            setLanguage(e.target.value);
          }}
          className="select w-full h-10 max-w-xs border border-red-50  bg-neutral text-base-100"
        >
          <option disabled selected>
            PICK LANGUAGE
          </option>
          {Object.keys(languages).map((key) => (
            <option key={key} value={languages[key] || key}>
              {key}
            </option>
          ))}
        </select>
        <button
          className="btn"
          onClick={() => {
            document.getElementById("input-file").click();
          }}
        >
          Upload
        </button>
        <button
          className="btn"
          onClick={async () => {
            setLoading(true);
            try {
              const a = await axios.post("/api/translate", {
                inputJson: JSON.parse(inputText),
                language: language,
              });
              setTranslatedText(JSON.stringify(await a.data, null, 2));
            } catch (err) {
              console.log(err);
            } finally {
              setLoading(false);
            }
          }}
        >
          Translate
        </button>
        <button
          className="btn"
          onClick={() => {
            setTranslatedText("");
            setInputText("");
          }}
        >
          Clear
        </button>
      </div>

      <div className="grid grid-cols-12 gap-4 mx-3 ">
        <div className="w-full col-span-6	h-full min-h-screen">
          <Editor
            value={inputText}
            width="100%"
            className="h-full"
            onChange={setInputText}
          />
        </div>

        <div className="w-full col-span-6	 h-full min-h-screen">
          <Editor
            value={translatedText}
            width="100%"
            className="h-full"
            onChange={setTranslatedText}
          />
        </div>
      </div>
    </main>
  );
}
