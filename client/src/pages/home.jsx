import TodoCard from "../components/card";
import Header from "../components/header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col w-full gap-4 text-black items-center justify-center mt-[160px] sm:mt-[140px] px-5 max-w-2xl mx-auto">
       <TodoCard />
       <TodoCard />
       <TodoCard />
      </div>
    </>
  );
}
