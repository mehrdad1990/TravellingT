"use client";

import React, { useEffect, useState } from 'react';
import { AiFillDelete } from "react-icons/ai";
import { toast } from "sonner";

function Message() {
  const [parseMessage, setParseMessage] = useState<{ name: string, email: string, message: string } | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const messageFromStorage = localStorage.getItem("message");
      if (messageFromStorage) {
        try {
          setParseMessage(JSON.parse(messageFromStorage));
        } catch (error) {
          console.error("Error parsing message from localStorage:", error);
        }
      }
    }
  }, []);

  const deleteMessage = () => {
    const option = confirm("Are you really want to delete message");
    if (option) {
      localStorage.removeItem("message");
      toast("Message deleted Successfully");
      window.location.reload();
    } else {
      toast("Message not deleted");
    }
  };

  if (!parseMessage) {
    return null;
  }

  return (
    <div className="w-full flex">
      <div className='w-11/12 pl-8'>
        <h1 className="text-center my-4 text-4xl font-bold">Your Messages</h1>
        <div className="flex justify-around items-center">
          <p>This message is only visible to you</p>
          <button onClick={deleteMessage}>
            <AiFillDelete size={25} color='red' />
          </button>
        </div>
        <h1 className="mt-2 capitalize text-3xl font-bold">{parseMessage.name}</h1>
        <p className="mb-2 text-sm">{parseMessage.email}</p>
        <p className='text-lg'>{parseMessage.message}</p>
      </div>
    </div>
  );
}

export default Message;
