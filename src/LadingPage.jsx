

export default function LadingPage() {
  return (
    <>
      <div className="wrapper absolute top-0 left-0 w-screen bg-black h-screen flex items-center justify-center">
        <div className="container rotate-45 w-14 grid grid-cols-3 gap-x-3 gap-y-3">
          {new Array(9).fill().map((arr) => {
            return (
              <>
                <div className="box w-12 h-12 bg-[#65cdef]"></div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
