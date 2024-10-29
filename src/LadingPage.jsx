

export default function LadingPage() {
  return (
    <>
      <div className="wrapper absolute top-0 left-0 w-screen bg-black h-screen flex items-center justify-center">
        <div className="container w-14 bg-slate-300 grid grid-cols-3 gap-2">
          {new Array(9).fill().map((arr) => {
            return (
              <>
                <div className="box w-7 h-7 bg-[#65cdef]"></div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
