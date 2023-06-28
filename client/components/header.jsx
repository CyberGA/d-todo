
import { ConnectWallet } from "@thirdweb-dev/react";

export default function Header() {
  const router = useRouter();

  return (
    <>
        <nav className="w-full bg-secondary fixed top-0 z-[99]">
          <div className="flex flex-row w-full h-[120px] border-b items-center justify-between px-[6vw]">
            <p>DTODO</p>

            <div className="hidden sm:block">
              <ConnectWallet className="connect" />
            </div>
          </div>
        </nav>
    </>
  );
}