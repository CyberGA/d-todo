import { useState } from "react"
import { useSigner, useAddress } from "@thirdweb-dev/react";
import { Contract } from "ethers"
import { CONTRACT_ADDRESS, CONTRACT_ABI} from "../../constants"
import { Polybase } from "@polybase/client";


const db = new Polybase({
  defaultNamespace: "pk/0xfc352a9e70863ae7cc1b69407347090bb9ec658ffad1db08e0cf9d61cbc655848e3e717fc6bf81122b4ee04e26ddda27a557b90e9d5aab902b600bd0e90bd590/DTODO",
});



export default function NewTodo({func}) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    // const signer = useSigner();
    const address = useAddress();




    async function addTodo() {
        if(title.length === 0) {
            alert("Title is required")
            return
        }
        if(description.length === 0 ) {
            alert("Description of the todo is required")
            return
        }

         const collectionReference = db.collection("App");


       try {
         setIsLoading(true)
         // call smart contract function
         console.log("Calling smart contract function");
         console.log(address);
         const date = Date.now()
          const recordData = await collectionReference.record(address.toString()).call("addTodo", [date.toString(), title, description, false.toString()]);
          console.log(recordData)
          // const recordExists = recordData;
          // console.log(recordExists)
          // if(recordExists) {
          //   recordData.create([address.toString()])

          // }
        //  setIsLoading(true)
        // //  serves as the uid passed to addTodo
        //  console.log(date.toString())
        //  const todoContract = new Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer)
        //  const tx = await todoContract.addTodo(title, description)
        //  await tx.wait()
        //  setIsLoading(false)
        //  setTitle("")
        //  setDescription("")
         func()
       } catch (error) {
        console.error(error)
        if(error.statusCode == 404) {
          await collectionReference.create([address.toString()]);
          const date = Date.now();
          const recordData = await collectionReference.record(address.toString()).call("addTodo", [date.toString(), title, description, false.toString()]);
          console.log(recordData)
          // call smart contract
          
        func()
         alert("Todo added successfully")
        }
       } finally {
        setIsLoading(false)
       }
    }

    return (
        <div className="flex items-center justify-center bg-black/40 absolute z-[99] top-0 bottom-0 left-0 right-0 p-5">
            <div className="w-full bg-white py-4 px-5 rounded-md shadow-lg max-w-sm">
          <p className="font-exo text-black font-medium mb-1 text-right cursor-pointer" onClick={func} >Close</p>
        <div className="w-full flex flex-col gap-4 items-center mt-5">
          {/* <p className="font-exo text-black font-medium mb-1 ">New Todo</p> */}
          <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full bg-white border p-3 rounded-md outline-none text-black" />
          <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} className="w-full bg-white border p-3 rounded-md outline-none text-black" />

          <button className="text-white font-bold font-exo bg-secondary h-10 w-full rounded-md outline-none mb-5" onClick={isLoading ? null : addTodo} >{ isLoading ? "Loading..." : "Add"}</button>
          
        </div>
      </div>
        </div>
    )
}