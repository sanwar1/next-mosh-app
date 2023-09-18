import React from "react";

interface Props {
    params: {
        id: number;
        photoid: number;
    };
}

const PhotoPage = ({ params }: Props) => {
    return (
        <div>
            PhotoPage {params.id} {params.photoid}
        </div>
    );
};

export default PhotoPage;
