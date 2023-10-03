import Image from "next/image";
import React, { Dispatch, SetStateAction, ChangeEvent } from "react";
import IsEmptyValidation from "@/components/IsEmptyValidation";

interface IFileInput {
  title: string;
  file: File | null;
  handleFileChange: (
    e: ChangeEvent<HTMLInputElement>,
    setter: Dispatch<SetStateAction<File | null>>
  ) => void;
  setFile: Dispatch<SetStateAction<File | null>>;
}

export function FileInput({ title, file, handleFileChange, setFile }: IFileInput) {
  return (
    <div>
      <IsEmptyValidation value={file} title={title} />
      <label className="flex justify-between bg-white text-sm rounded-lg mb-2 border-2 p-3 cursor-pointer">
        <div className="text-input-secondary text-xs truncate text-ellipsis">
          {file ? `Selected file: ${file?.name}` : "Select file"}
          <input
            type="file"
            className="hidden"
            onChange={(e) => handleFileChange(e, setFile)} />
        </div>
        <div className="flex justify-center items-center">
          <Image src={require("../../public/assets/caretdown.png")} alt={""} />
        </div>
      </label>
    </div>
  );
}
