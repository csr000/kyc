import Image from "next/image";

export default function IsEmptyValidation({ file, title }) {
  return (
    <div className="flex justify-between px-2">
      <label className="font-semibold">{title}</label>
      <div className="flex justify-center items-center">
        {file ? (
          <Image src={require("../public/assets/correct.png")} />
        ) : (
          <Image src={require("../public/assets/cancel.png")} />
        )}
      </div>
    </div>
  );
}
