import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { api } from "../api/index";
import { FaEnvelope } from "react-icons/fa";
interface Message {
  id: string;
  content: string;
  priority: "high" | "low";
  timestamp: string;
  read: boolean;
}

export const MessageBox = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [updated, setIsUpdated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  const abortController = useRef<any>(null);

  useEffect(() => {
    const fetchListings = async () => {
      setIsLoading(true);
      setError(null);

      try {
        await fetch("http://localhost:8000/messages")
          .then((res) => res.json())
          .then((data) => {
            setMessages(data);
          });
      } catch (error) {
        setError("Something went wrong. Please try again later.");
      } finally {
        setIsLoading(false);
        setIsUpdated(false);
      }
    };
    fetchListings();
  }, [updated]);

  const handleReadMessage = (message: Message) => {
    fetch(`http://localhost:8000/messages/${message.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...message,
        read: !message.read,
      }),
    })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
    setIsUpdated(true);
  };

  return (
    <div className="p-3  text-purple-100">
      {messages.map((message) => (
        <div className="p-2 flex justify-between">
          <div className="flex">
            <FaEnvelope />
            <p className="px-2">{message.content}</p>
          </div>
          <button
            className="text-xs text-slate-400"
            onClick={() => handleReadMessage(message)}
          >
            {message.read ? "Mark as unread" : "Mark as read"}
          </button>
        </div>
      ))}
    </div>
  );
};
