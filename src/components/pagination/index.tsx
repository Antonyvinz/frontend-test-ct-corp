function Pagination(props: any) {
  const { prev, next } = props;
  return (
    <div className="flex justify-between mt-5">
      <div
      // className="flex justify-start"
      >
        <button
          onClick={prev}
          // disabled={prevDisable}
          // className={`h-12 border-2 border-r-0 px-4 rounded-l-lg ${prevDisable ? "bg-gray-400" : "bg-transparent"} ${prevDisable ? "hover:bg-gray-400" : "hover:bg-indigo-600"}  hover:text-white`}
          className="h-12 border-2 px-4 rounded hover:bg-indigo-600 hover:text-white"
        >
          Prev
        </button>
      </div>
      <div
      //   className="flex justify-end"
      >
        <button
          onClick={next}
          // disabled={nextDisable}
          className="h-12 border-2 px-4 rounded hover:bg-indigo-600 hover:text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagination;
