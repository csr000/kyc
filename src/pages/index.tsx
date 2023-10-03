import { Inter } from "next/font/google";
import React, { useState, Dispatch, SetStateAction, ChangeEvent } from "react";
import { FileInput } from "@/components/FileInput";
import { TextInput } from "@/components/TextInput";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [nationalIDFile, setNationalIDFile] = useState<File | null>(null);
  const [businessCertificateFile, setBusinessCertificateFile] = useState<File | null>(null);
  const [tinNumber, setTinNumber] = useState("");
  const [proofOfLocationFile, setProofOfLocationFile] = useState<File | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>, setter: Dispatch<SetStateAction<File | null>>) => {
    if (e.target.files && e.target.files.length > 0) {
      setter(e.target.files[0]);
    }
  };
  
  const handleUpload = () => {
    // Clear the state variables after successful upload
    setNationalIDFile(null);
    setBusinessCertificateFile(null);
    setTinNumber("");
    setProofOfLocationFile(null);
  };

  return (
    <main className={`flex min-h-screen flex-col items-center justify-center  ${inter.className}`}>
      <div>
        <h1 className="text-xl mb-3">Business KYC</h1>
        <div className="w-[350px] min-h-[400px] md:w-[750px] md:h-[450px] bg-stone-50 rounded-[13px] border border-stroke">
          <div className="h-4/5">
            <div className="container mx-auto p-4">
              <div className="flex justify-center items-center flex-wrap gap-5 my-2 md:my-5">
                <div className="w-full h-fit md:w-[45%] ">
                  <FileInput
                    title="National ID"
                    file={nationalIDFile}
                    handleFileChange={handleFileChange}
                    setFile={setNationalIDFile}
                  />
                </div>
                <div className="w-full h-fit md:w-[45%]">
                  <FileInput
                    title="Business Certificate"
                    file={businessCertificateFile}
                    handleFileChange={handleFileChange}
                    setFile={setBusinessCertificateFile}
                  />
                </div>
                <div className="w-full h-fit md:w-[45%]">
                  <TextInput
                    title="TIN Number"
                    text={tinNumber}
                    setText={setTinNumber}
                    placeholder="123413451435134513284769"
                  />
                </div>
                <div className="w-full h-fit md:w-[45%]">
                  <FileInput
                    title="Proof of Location"
                    file={proofOfLocationFile}
                    handleFileChange={handleFileChange}
                    setFile={setProofOfLocationFile}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="h-1/5 w-full flex flex-col md:flex-row py-5 items-center justify-end border-0 border-t border-stroke">
            <button
              className="w-[90%] h-[35px] md:w-[200px] text-sm md:text-md bg-accent-medium rounded-lg m-1"
              onClick={handleUpload}
            >
              Upload documents
            </button>
            <button className="w-[90%] h-[35px] md:w-[100px] text-sm md:text-md px-4 bg-button-secondary rounded-lg text-white m-1 md:mr-3">
              Skip
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
