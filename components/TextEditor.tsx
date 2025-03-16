import React, { useEffect, useRef, useState } from 'react';
import "quill/dist/quill.snow.css";
import { io, Socket } from "socket.io-client";
import { useRouter } from 'next/router';
import { useUser } from '@auth0/nextjs-auth0/client';

const TextEditor = () => {
    const [users, setUsers] = useState<any[]>([]); 
    const [socket, setSocket] = useState<Socket | null>(null);
    const [quill, setQuill] = useState<any>(null);
    const [usernames, setUsernames] = useState<string[]>([]);

    const quillRef = useRef<HTMLDivElement | null>(null);
    let router = useRouter();
    const {user } = useUser();

    const userName = user?.name;
    const documentId = router.query.slug;

    useEffect(() => {
        if (typeof window !== 'undefined') {
            import('quill').then(({ default: Quill }) => {
                if (quillRef.current && !quill) {
                    const editor = new Quill(quillRef.current, {
                        theme: 'snow',
                    });
                    setQuill(editor);
                }
            });
        }
    }, [quill]);

    useEffect(() => {
        const s = io("http://localhost:5000");
        setSocket(s);
        return () => {
            s.disconnect();
        };
    }, []);

    useEffect(() => {
        if (!socket || !quill) return;

        const handler = (delta: any, oldDelta: any, source: any) => {
            if (source !== "user") return;
            socket.emit("send-message", { documentId, message: delta });
        };

        quill.on("text-change", handler);

        return () => {
            quill.off("text-change", handler);
        };
    }, [socket, quill]);

    useEffect(() => {
        if (!socket || !quill) return;

        const handler = (delta: any) => {
            quill.updateContents(delta);
        };

        socket.on("receive-message", handler);

        return () => {
            socket.off("receive-message", handler);
        };
    }, [socket, quill]);

    useEffect(() => {
        if (!socket || !quill) return;

        socket.once("load-document", (document) => {
            quill.setContents(document);
            quill.enable();
        });

        socket.emit("join-document", { documentId,username:user?.name });

    }, [socket, quill, documentId,user]);

    useEffect(() => {
        if (!socket) return;

        const updateUserList = (userList: any[]) => {
            setUsers(userList);
            console.log(userList)
        };

        socket.on("update-user-list", updateUserList);

        return () => {
            socket.off("update-user-list", updateUserList);
        };
    }, [socket]);

    useEffect(() => {
        if (!socket) return;
    
        const updateUserList = (userList: any[]) => {
            setUsers(userList);
    
            // ✅ Extract only usernames and store them in state
            const names = userList.map(user => user.username);
            setUsernames(names);
    
            console.log("Updated usernames:", names);
        };
    
        socket.on("update-user-list", updateUserList);
    
        return () => {
            socket.off("update-user-list", updateUserList);
        };
    }, [socket]);
    


    return (
        <div className="h-screen flex bg-gray-900 text-white">
            <div className="w-[25%] px-5 py-5 hidden lg:block mx-4 my-5 border-2 border-amber-50">
                {
                    usernames.map((item,index)=>(
                        <div key={index} className='flex flex-wrap gap-3 col-gap-3'>
                        <div className="w-[45%] mt-3 h-[150px] flex justify-center items-center bg-gray-600 rounded-[12px]">
                        <div className="w-[80%] h-[80%] bg-white flex justify-center items-center text-center rounded-full">
                            <p className="text-2xl text-black">An</p>
                        </div>
                            </div>
                        </div>
                    ))
                }

            </div>
            <div className="w-[75%] flex flex-col justify-start items-center mx-4 h-[85vh]">
                <div ref={quillRef} className="bg-white text-black w-full rounded-[12px] p-2 h-full" />
                <div className="flex w-full justify-between mt-3">
                    <button className="alt-btn">Download</button>
                    <button className="dng-btn">Leave Room</button>
                </div>
            </div>
        </div>
    );
};

export default TextEditor;
