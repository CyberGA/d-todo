
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";

export default function HeaderContainer() {
  const address = useAddress()

  return (
    <>
      <nav className="w-full bg-secondary fixed top-0 z-[99] border-b shadow-md">
        <div className="flex flex-col sm:flex-row w-full gap-4 md:items-center justify-between py-5 px-[6vw] max-w-3xl mx-auto">
            {address && <p className="font-medium font-exo underline cursor-pointer underline-offset-2">Add New</p>}

          <div className="">
            <ConnectWallet className="connect" />
          </div>
        </div>
      </nav>
    </>
  );
}