import Image from "next/image";

interface IIsEmptyValidation {
  value: string | File | null;
  title: string;
}

export default function IsEmptyValidation({ value, title }: IIsEmptyValidation) {
  return (
    <div className="flex justify-between">
      <label className="text-black text-xs mb-2">{title}</label>
      <div className="flex justify-center items-center mb-2">
        {value ? (
          <Image src={require("../../public/assets/correct.png")} alt={""} />
        ) : (
          <Image src={require("../../public/assets/cancel.png")} alt={""} />
        )}
      </div>
    </div>
  );
}
