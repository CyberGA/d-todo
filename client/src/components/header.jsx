
import { useState } from "react"
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import NewTodo from "./new_todo"

export default function HeaderContainer() {
  const address = useAddress()
  const [ open, setOpen ] = useState(false)

  function toggle() {
    setOpen(prev => !open)
  }
  return (
    <>
      <nav className="w-full bg-secondary fixed top-0 z-[50] border-b shadow-md">
        <div className="flex flex-row w-full gap-4 items-center justify-between py-5 px-[6vw] max-w-3xl mx-auto">
          <div className="">
            <ConnectWallet className="connect" />
          </div>
            {address && <p className="font-medium font-exo underline cursor-pointer underline-offset-2" onClick={toggle} >Add New</p>}

        </div>
      </nav>
      {
        open && <NewTodo func={toggle} />
      }
    </>
  );
}