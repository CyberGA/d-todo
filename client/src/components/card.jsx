import { useState } from "react"

export default function TodoCard() {
    const [isDone, setIsDone] = useState(false)
    
    return (
      <div className="w-full bg-white py-4 px-5 rounded-md shadow-md shadow-black/5">
        <div className="flex justify-between">
          <p className={`font-exo text-black font-medium mb-1 ${isDone ? "line-through" : "no-underline"}`}>Client Review & Feedback</p>
          <input type="checkbox" className="w-[20px] h-[20px] outline-none" checked={isDone} onChange={(e) => setIsDone(e.target.checked)} />
        </div>
        <p className={`font-exo text-black/75 mb-3 ${isDone ? "line-through" : "no-underline"}`}>Crypto wallet redesign Crypto wallet redesign Crypto wallet redesign Crypto wallet redesign Crypto wallet redesign Crypto wallet redesign Crypto wallet redesign </p>
      </div>
    );
}