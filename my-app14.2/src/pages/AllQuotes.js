import { useEffect } from "react";
import QuoteList from "../components/quotes/QuoteList";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";
import NotFound from "../components/quotes/NoQuotesFound";

// const DUMMY_QUOTES = [
//   { id: "q1", author: "Deokumar", text: "Learning React is fun!" },
//   { id: "q2", author: "Akanksha", text: "Learning React is Great!" },
// ];

const AllQuotes = () => {
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (status === "error") {
    return <div className="centered focused">{error}</div>;
  }

  if (status === "completed" && (!loadedQuotes || loadedQuotes.length === 0)) {
    return <NotFound />;
  }

  return <QuoteList quotes={loadedQuotes} />;
};

export default AllQuotes;
