'use client';

import React, { useState } from "react";
import { postData } from "@/app/(root)/api/apiMethod";

const TemplateComponent: React.FC = () => {

    const [motivationData, setData] = useState({id:'', content: '' });


    const handleCreateLetter = async () => {
        if (!motivationData.content) {
            alert('Content cannot be empty');
            return;
        }
        try {
            await postData(motivationData, 'template');
            alert('Template created successfully');
            setData({id: '', content: '' });
        } catch (error: any) {
            alert(error.message);
        }
    };

    return (
        <div className="text-white">
            <h1 className="text-body-bold">Your motivation letter template</h1>
            <div className="text-black py-4">
                <textarea
                    placeholder="Content"
                    value={motivationData.content}
                    onChange={(e) => setData({ ...motivationData, content: e.target.value })}
                    className="w-full h-full resize-none p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    rows={20}
                />
            </div>
            <button onClick={handleCreateLetter} className="border border-white bg-transparent text-white rounded-xl p-2 hover:bg-blue-700">Save template</button>
        </div>
    );
}

export default TemplateComponent;
