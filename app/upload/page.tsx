"use client";
import React, { useState } from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";

interface CloudinaryResult {
    public_id: string;
}

const UploadPage = () => {
    const [public_id, setPublic_id] = useState("");

    return (
        <>
            {public_id && (
                <CldImage
                    src={public_id}
                    width={270}
                    height={180}
                    alt="some image"
                ></CldImage>
            )}
            <CldUploadWidget
                uploadPreset="awmde6km"
                onUpload={(result, widget) => {
                    if (result.event !== "success") return;
                    const info = result.info as CloudinaryResult;
                    setPublic_id(info.public_id);
                }}
            >
                {({ open }) => (
                    <button className="btn btn-primary" onClick={() => open()}>
                        Upload
                    </button>
                )}
            </CldUploadWidget>
        </>
    );
};

export default UploadPage;
