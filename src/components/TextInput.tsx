import React, { Dispatch, SetStateAction } from "react";
import IsEmptyValidation from "@/components/IsEmptyValidation";

interface ITextInput {
  title: string;
  text: string | null;
  setText: Dispatch<SetStateAction<string>>;
  placeholder: string;
}

export function TextInput({ title, text, setText, placeholder }: ITextInput) {
  return (
    <div>
      <IsEmptyValidation value={text} title={title} />
      <label className="flex bg-white text-sm rounded-lg mb-2 border-2">
        <div className="w-[100%] text-input-secondary text-xs truncate text-ellipsis">
          <input
            type="text"
            className="p-2 h-10 w-full focus:outline-none"
            // value={tinNumber}
            onChange={(e) => setText(e.target.value)}
            placeholder={placeholder} />
        </div>
      </label>
    </div>
  );
}
