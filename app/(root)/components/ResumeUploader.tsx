'use client'

import { useState } from "react";
import { uploadResume, updateResume, removeResume } from "../services/resumeServices";

const ResumeUploader = () => {
    const [file, setFile] = useState<File | null> (null);
    const  [message, setMessage] = useState<string>('');

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(event.target.files && event.target.files.length > 0){
            setFile(event.target.files[0]);
        }
    };


    const handleUpload = async () =>{

        if(!file){
            setMessage('Please select a file');
            return;
        }
        try{
            await uploadResume(file);
            setMessage("file uploaded successfully");
        }catch (error){
            setMessage('Failed to upload file');
        }
    };

    // const handleUpdate = async(id:string)=>{
    //     if(!file){
    //         setMessage('Please select a file');
    //         return;
    //     }

    //     try{
    //         await updateResume(id, file);
    //         setMessage("File updated successfully")
    //     }catch(error){
    //         setMessage("Failed to update file")
    //     }
    // };

    // const handleDelete = async(id:string) =>{
    //     try{
    //         await removeResume(id);
    //         setMessage('File deleted successfully')
    //     }catch(error){
    //         setMessage('Failed to delete file')
    //     }
    // };

    return(
        <div>
            <h1  className="text-white py-2">Resume Upload</h1>
            <input type="file" accept="application/pdf" onChange={handleFileChange} className="text-white"/>
            <p className="py-1, text-white">{message}</p>
            <button onClick={handleUpload} className="border border-white bg-transparent text-white rounded-xl p-2">Upload</button>
        </div>
    )

}

export default ResumeUploader;