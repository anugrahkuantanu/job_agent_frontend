import { postData, putData, deleteData } from "../api/apiMethod";

export const uploadResume = async (file:File) => {
    const formData = new FormData();
    formData.append('file:', file);
    
    return await postData(formData, "resume");
};

export const updateResume = async (id: string, file:File) => {
    const formData = new FormData();
    formData.append('file', file);
    
    return await putData(formData, `resume/${id}`);
};

export const removeResume = async (id:string) => {
    return await deleteData(`resume/${id}`);
};