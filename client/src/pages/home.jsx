import { useState, useEffect } from "react"
import TodoCard from "../components/card";
import Header from "../components/header";
import { useAddress } from "@thirdweb-dev/react";
import { Polybase } from "@polybase/client";
import Loader from "../components/loader"

const db = new Polybase({
  defaultNamespace: "pk/0xfc352a9e70863ae7cc1b69407347090bb9ec658ffad1db08e0cf9d61cbc655848e3e717fc6bf81122b4ee04e26ddda27a557b90e9d5aab902b600bd0e90bd590/DTODO",
});

const collectionReference = db.collection("App");

export default function Home() {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(false)
  const address = useAddress();


  async function getTodos() {
    if(address) {
      try {
        setLoading(true)
      const recordData = await collectionReference.record(address.toString()).call("getuserTodos", [])
      recordData.onSnapshot((newTodo) => {
        if (newTodo.data != null) {
          let allTodos = [];

          for (let todoId in newTodo.data["todos"]) {
            allTodos.push({ id: todoId, ...newTodo.data["todos"][todoId] });
          }
          // sort the list of todo from the latest todo
          allTodos.sort((a, b) => b.id - a.id);
          setTodos(allTodos);
        }
      }, (err) => {
        console.log(err)
      })
      } catch(err) {
        console.log(err)
      } finally {
        setLoading(false)
      }
    }
  }
  
  useEffect(() => {
    getTodos()
  }, [address])

  
  return (
    <>
    {
      loading && <Loader />
    }
      <Header />
      {address && (
        <div className="flex flex-col w-full gap-4 text-black items-center justify-center mb-10 mt-[160px] sm:mt-[140px] px-5 max-w-2xl mx-auto">
         {
          todos.length == 0 ? (
            <p>Your todo list is empty</p>
          ) : todos.map((todo) => (
            <TodoCard key={todo.id} todoId={todo.id} title={todo.title} description={todo.desc} done={todo.done} />
          ))
         }
        </div>
      )}
      {
        !address && (
          <div className="flex flex-col w-full gap-4 text-black items-center justify-center mt-[160px] sm:mt-[140px] px-5 max-w-2xl mx-auto">
            <p>Please connect your wallet</p>
            </div>
        )
      }
    </>
  );
}
