export default function Modal({ child }) {
  return (
    <main className="fixed top-0 px-4 md:px-0 left-0 h-full w-full bg-[#00000033] backdrop-blur-[3px] flex items-center  justify-center z-[999999999]">
      <main className="max-h-[75vh] md:max-h-[80vh] md:max-w-[60%] md:min-h-[60vh] w-full md:w-[60%] h-fit z-50 flex justify-center items-center">
        <div className="w-full h-full bg-white z-50 flex flex-col items-center rounded-[20px]">
          {child}
        </div>
      </main>
    </main>
  );
}
