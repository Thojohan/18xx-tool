import { MdOutlineReportGmailerrorred } from "react-icons/md";

function Error({ errorMsg = "Oops, something went wrong fetching data" }) {
  return (
    <div className="flex items-center justify-center flex-col font-secondary ml-4 mr-4">
      <MdOutlineReportGmailerrorred className=" text-6xl text-red-500" />
      <span>{errorMsg}</span>
    </div>
  );
}

export default Error;
