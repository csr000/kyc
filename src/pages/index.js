import Image from "next/image";
import { useState } from "react";
import IsEmptyValidation from "@/components/IsEmptyValidation";

export default function Home() {
  const [nationalIDFile, setNationalIDFile] = useState(null);
  const [businessCertificateFile, setBusinessCertificateFile] = useState(null);
  const [tinNumber, setTinNumber] = useState("");
  const [proofOfLocationFile, setProofOfLocationFile] = useState(null);

  const handleFileChange = (e, setter) => {
    setter(e.target.files[0]);
  };

  const handleUpload = () => {
    // Clear the state variables after successful upload
    setNationalIDFile(null);
    setBusinessCertificateFile(null);
    setTinNumber("");
    setProofOfLocationFile(null);
  };

  return (
    <div className="app">
      <div className="app-components-wrapper w-[50%]">
        <div className="m-auto">
          <h2 className="font-sans font-semibold text-2xl mb-3">
            Business KYC
          </h2>
        </div>
        <div className="form-wrapper rounded-lg m-auto">
          <div>
            <form className="flex flex-wrap justify-center items-center">
              <div className="flex flex-wrap">
                <div className="m-5">
                  <IsEmptyValidation
                    file={nationalIDFile}
                    title={"National ID"}
                  />
                  <label className="flex text-gray-400 bg-white text-sm font-semibold w-60 rounded-lg mb-2 border-2 p-3 cursor-pointer">
                    <div className="w-[90%] truncate text-ellipsis">
                      {nationalIDFile
                        ? `Selected file: ${nationalIDFile.name}`
                        : "Select a file"}
                      <input
                        type="file"
                        className="hidden"
                        onChange={(e) => handleFileChange(e, setNationalIDFile)}
                      />
                    </div>
                    <div className="flex justify-center items-center">
                      <Image
                        src={require("../../public/assets/caretdown.png")}
                      />
                    </div>
                  </label>
                </div>
                <div className="m-5">
                  <IsEmptyValidation
                    file={businessCertificateFile}
                    title={"Business Certificate"}
                  />
                  <label className="flex text-gray-400 bg-white text-sm font-semibold w-60 rounded-lg mb-2 border-2 p-3 cursor-pointer">
                    <div className="w-[90%] truncate text-ellipsis">
                      {businessCertificateFile
                        ? `Selected file: ${businessCertificateFile.name}`
                        : "Select a file"}
                      <input
                        type="file"
                        className="hidden"
                        onChange={(e) =>
                          handleFileChange(e, setBusinessCertificateFile)
                        }
                      />
                    </div>
                    <div className="flex justify-center items-center">
                      <Image
                        src={require("../../public/assets/caretdown.png")}
                      />
                    </div>
                  </label>
                </div>
              </div>
              <div className="flex flex-wrap">
                <div className="m-5">
                  <IsEmptyValidation file={tinNumber} title={"TIN Number"} />
                  <label className="flex text-gray-400 bg-white text-sm font-semibold w-60 rounded-lg mb-2 border-2  ">
                    <div className="w-[100%] truncate text-ellipsis">
                      <input
                        type="text"
                        className="p-2 h-12"
                        // value={tinNumber}
                        onChange={(e) => setTinNumber(e.target.value)}
                        placeholder="123413451435134513284769"
                      />
                    </div>
                  </label>
                </div>
                <div className="m-5">
                  <IsEmptyValidation
                    file={proofOfLocationFile}
                    title={"Proof of Location"}
                  />
                  <label className="flex text-gray-400 bg-white text-sm font-semibold w-60 rounded-lg mb-2 border-2 p-3 cursor-pointer">
                    <div className="w-[90%] truncate text-ellipsis">
                      {proofOfLocationFile
                        ? `Selected file: ${proofOfLocationFile.name}`
                        : "Select a file"}
                      <input
                        type="file"
                        className="hidden"
                        onChange={(e) =>
                          handleFileChange(e, setProofOfLocationFile)
                        }
                      />
                    </div>
                    <div className="flex justify-center items-center">
                      <Image
                        src={require("../../public/assets/caretdown.png")}
                      />
                    </div>
                  </label>
                </div>
              </div>
            </form>
            <div className="btns-wrapper flex justify-end">
              <button
                className="upload-btn font-semibold"
                onClick={handleUpload}
              >
                Upload document
              </button>
              <button className="skip font-semibold">Skip</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
