// ✅ Always import at the top
import { useEffect, useState } from "react";

export const Loadingscreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "Perfect Recipee";

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete(); // callback after animation ends
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []); // 👈 only run once

  return (
    <div className="fixed inset-0 z-50 bg-white text-black-100 flex flex-col items-center justify-center">
      <div className="mb-4 text-4xl font-mono font-bold">
        {text}
      </div>

      <div className="w-[200px] h-[2px] bg-black rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar">
          {/* loading bar */}
        </div>
      </div>
    </div>
  );
};
