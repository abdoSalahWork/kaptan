import React from 'react';
import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';

const ImageUploader = ({setImage, ...props}) => {
    return (
        <FilePond allowMultiple={false} {...props} onupdatefiles={fileItems => {
            setImage(fileItems[0].file)
        }}/>
    );
}

export default ImageUploader;
