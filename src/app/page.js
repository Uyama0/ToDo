export default function Home() {
  return (
    <div className="h-[calc(100vh-48px)] flex justify-center flex-col bg-cyan-50">
      <div className="flex-1 flex justify-center items-end p-3 text-3xl font-semibold">
        Hello Uyama
      </div>
      <div className="h-2/3 bg-blue-300 rounded-t-3xl p-3">
        <div>hi</div>
        <div className="flex justify-end items-end">
          <button className="rounded-[50%] h-20 w-20 bg-white text-2xl">
            +
          </button>
        </div>
      </div>
    </div>
  );
}
