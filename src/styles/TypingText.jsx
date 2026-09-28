import { useEffect, useState } from "react";

export default function TypingText({ text }) {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;

    if (!isDeleting && displayText === text) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 1000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
    } else {
      timer = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? text.substring(0, displayText.length - 1)
            : text.substring(0, displayText.length + 1)
        );
      }, isDeleting ? 80 : 150);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, text]);

  return (
    <span>
      {displayText}
      <span className="text-white animate-pulse">|</span>
    </span>
  );
}