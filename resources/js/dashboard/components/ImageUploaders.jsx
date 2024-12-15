import React from 'react';
import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';

const ImageUploaders = ({setImages, maxFiles, ...props}) => {
    return (
        <FilePond allowMultiple={true} maxFiles={maxFiles} {...props} onupdatefiles={fileItems => {
            setImages(fileItems.map(file => file.file))
        }}/>
    );
}

export default ImageUploaders;
