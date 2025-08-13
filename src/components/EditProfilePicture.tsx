import React, { useRef, useState } from "react";
import { Trash } from "iconsax-react";
import SZOfficialLogo from "../assets/SZ_Official_Logo_circle.png";
import Button from "./Button";
import Avatar from "./Avatar";

type DocumentValue = {
    name: string;
    url: string;
    mimeType?: string;
    isLocal?: boolean;
};

interface EditProfilePictureProps {
    profileImg: string;
    onChange?: (file: DocumentValue | null) => void;
    inputId?: string;
}

const EditProfilePicture: React.FC<EditProfilePictureProps> = ({ profileImg: initialProfileImg, onChange, inputId }) => {
    const [profileImg, setProfileImg] = useState<string | undefined>(initialProfileImg);
    const [loading, setLoading] = useState(false);
    // const menuRef = useRef<HTMLDivElement | null>(null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            setLoading(true);
            setTimeout(() => {
                const blobUrl = URL.createObjectURL(selectedFile);
                const nextValue: DocumentValue = {
                    name: selectedFile.name,
                    url: blobUrl,
                    mimeType: selectedFile.type,
                    isLocal: true,
                };
                setProfileImg(blobUrl);
                onChange?.(nextValue);
                setLoading(false);
            }, 1000);
        }
    };

    return (
        <>
            <div className="flex flex-col justify-center items-center gap-6 lg:w-[600px]">
                <Avatar size="large" src={profileImg || SZOfficialLogo} />
                <div className="flex flex-col justify-center items-center gap-[20px] lg:w-[300px]">
                    <Button
                        variant="secondary"
                        disabled={!profileImg}
                        size="large"
                        leftIcon={<Trash />}
                        label={"Remove photo"}
                        className={`whitespace-nowrap ${!profileImg ? "opacity-50 cursor-not-allowed" : ""}`}
                        onClick={() => {
                            setProfileImg(undefined);
                            onChange?.(null);
                        }}
                        fullWidth={true}
                    />
                    <section className="w-full">
                        {/* <Document
                            label="Upload New Profile Picture"
                            onChange={(file) => {
                                if (file) {
                                    console.log("Selected file:", file);
                                    const fileURL = URL.createObjectURL(file as unknown as File);
                                    setProfileImg(fileURL);
                                } else {
                                    console.log("File removed.");
                                    setProfileImg(undefined);
                                }
                            }}
                            value={null}
                        /> */}
                        <div
                            className="w-full flex items-center rounded-[8px] p-[12px] min-h-[48px] min-w-[200px] dashed-border-style justify-center cursor-pointer hover:bg-szGrey150 active:bg-szGrey150 relative"
                            onClick={() => fileInputRef.current?.click()}
                        >
                            <input
                                ref={fileInputRef}
                                id={inputId}
                                type="file"
                                className="hidden"
                                onChange={handleFileUpload}
                                accept="image/*"
                            />

                            <div className="flex items-center gap-[8px] min-w-0">
                                <p className="body-small-reg truncate">{loading ? "Uploading..." : "Upload file..."}</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default EditProfilePicture;
