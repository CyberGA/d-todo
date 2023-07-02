import { useState } from "react"
import { useAddress } from "@thirdweb-dev/react";
import Loader from "./loader"
import { Polybase } from "@polybase/client";

const db = new Polybase({
  defaultNamespace: "pk/0xfc352a9e70863ae7cc1b69407347090bb9ec658ffad1db08e0cf9d61cbc655848e3e717fc6bf81122b4ee04e26ddda27a557b90e9d5aab902b600bd0e90bd590/DTODO",
});

const collectionReference = db.collection("App");

export default function TodoCard({todoId,title, description, done}) {
    const [isDone, setIsDone] = useState(JSON.parse(done))
    const [toggling, setToggling] = useState(false)
  const address = useAddress();


  async function toggleDone() {
    setToggling(true)
    try {
      await collectionReference.record(address.toString()).call("toggleProgress", [todoId.toString(), JSON.stringify(!isDone)]);
      setIsDone(prev => !isDone)
    } catch(err) {
      console.error(err)
    } finally {
      setToggling(false)
    }
  }
    
    return (
      <>
      { toggling && <Loader />}
        <div className="w-full bg-white py-4 px-5 rounded-md shadow-md shadow-black/5">
          <div className="flex justify-between">
            <p className={`font-exo text-black font-medium mb-1 ${isDone ? "line-through" : "no-underline"}`}>{title}</p>
            <input type="checkbox" className="w-[20px] h-[20px] outline-none cursor-pointer" checked={isDone} onChange={toggleDone} />
          </div>
          <p className={`font-exo text-black/75 mb-3 ${isDone ? "line-through" : "no-underline"}`}>{description}</p>
        </div>
      </>
    );
}