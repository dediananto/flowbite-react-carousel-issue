import React, { useState, useEffect } from "react";
import axios from "axios";

export default function AlertQuote() {
  const [showAlert, setShowAlert] = useState(1);
  const [quote, setQuote] = useState("Quote of the day : ");
  const randomquotes = async () => {
    try {
      let response = await axios.get(
        "https://api.quotable.io/random?&maxLength=100"
      );
      localStorage.setItem("randomquotes", JSON.stringify(response.data));
      setQuote(response.data.content);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    randomquotes();
    const quotes = JSON.parse(localStorage.getItem("randomquotes"));
    if (quotes != undefined) {
      setQuote(quotes.content);
    }
  }, []);
  return (
    <>
      {showAlert && (
        <div className="text-white px-6 py-4 border-0 rounded relative mb-4 bg-yellow-500 transition ease-in duration-200 opacity-100 transform -translate-x-0">
          <span className="text-xl inline-block mr-5 align-middle">
            <i className="fas fa-bell"></i>
          </span>
          <span className="inline-block align-middle mr-8">
            <strong>Quote of the day :</strong> {quote}
          </span>
          <button
            onClick={() => {
              setShowAlert(false);
              console.log(showAlert);
            }}
            className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
          >
            <span>×</span>
          </button>
        </div>
      )}
    </>
  );
}
