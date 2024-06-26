"use client";

import { format } from "date-fns";
import { useRouter } from "next/navigation";
import { UserAvatar } from "./user-avatar";
import { useState } from "react";

import toast, { Toaster } from "react-hot-toast";

interface TweetsItemProps {
  tweet: Tweet;
  shouldRedirect: boolean;
  showTopDate: boolean;
}

export function TweetsItem({
  tweet: data,
  shouldRedirect,
  showTopDate,
}: TweetsItemProps) {
  const { push } = useRouter();
  const [tweet, setTweet] = useState(data);
  const [actions, setActions] = useState({ like: false, retweet: false });
  const [isProcessing, setIsProcessing] = useState({ like: false, retweet: false });

  const simulateRequest = (type: "like" | "retweet") => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulo una chance del 20% del fallo del request
        Math.random() < 0.2
          ? reject(new Error("Internal Server Error"))
          : resolve(`Success: ${type}`);
      }, 500);
    });
  };

  const handleAction = (type: "like" | "retweet") => {
    if (isProcessing[type]) return; // Evitar acciones repetidas

    setIsProcessing(prev => ({ ...prev, [type]: true }));
    const key = type === "like" ? "likes" : "retweets";

    simulateRequest(type)
      .then(() => {
        setTweet((prev) => ({
          ...prev,
          [key]: actions[type] ? prev[key] - 1 : prev[key] + 1,
        }));
        setActions((prev) => ({ ...prev, [type]: !prev[type] }));
      })
      .catch((e) => {
        console.error(e.message); // Simulando que puedo verlo en NewRelic u otro
        return toast.error(e.message);
      })
      .finally(() => {
        setIsProcessing(prev => ({ ...prev, [type]: false }));
      });
  };

  return (
    <div
      className="bg-white py-3 px-4 flex gap-4 text-slate-500 border-b"
      onClick={() => (shouldRedirect ? push(`/tweet/${tweet.id}`) : null)}
      role={shouldRedirect ? "button" : "article"}
    >
      <div className="flex flex-col items-center">
        <UserAvatar avatar={tweet.user.avatar} />
      </div>
      <div className="flex flex-col gap-3 flex-grow">
        <div className="flex items-center gap-1">
          <p className="font-bold text-black">{tweet.user.firstName}</p>
          <p className="font-bold text-black">{tweet.user.lastName}</p>
          <p>{tweet.user.nickname} · </p>
          {showTopDate ? (
            <p>{format(new Date(tweet.createdAt), "MMM dd")}</p>
          ) : null}
          <p className="ml-auto "> ··· </p>
        </div>
        <div className="text-black">
          <p>{tweet.content}</p>
        </div>
        {!showTopDate ? (
          <span className="text-sm">
            {format(tweet.createdAt, "h:mm a, MMM dd, yyyy")}
          </span>
        ) : null}
        <div className="flex gap-4" onClick={(e) => e.stopPropagation()}>
          <div className="flex gap-1">
            <svg
              className="w-6 h-6 text-gray-800 dark:text-slate-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 17h6l3 3v-3h2V9h-2M4 4h11v8H9l-3 3v-3H4V4Z"
              />
            </svg>
            {tweet.comments?.length || 0}
          </div>
          <div
            className="flex gap-1"
            onClick={(event) => handleAction("retweet")} // Paso el evento al manejador de acción
            role="button"
          >
            <svg
              className="w-6 h-6 text-gray-800 dark:text-slate-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill={actions.retweet ? "#00a552" : "none"}
                stroke={actions.retweet ? "#00a552" : "currentColor"}
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m16 10 3-3m0 0-3-3m3 3H5v3m3 4-3 3m0 0 3 3m-3-3h14v-3"
              />
            </svg>
            {tweet.retweets}
          </div>
          <div
            className="flex gap-1"
            onClick={(event) => handleAction("like")} // Paso el evento al manejador de acción
            role="button"
          >
            <svg
              className="w-6 h-6 text-slate-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill={actions.like ? "red" : "none"}
                stroke={actions.like ? "red" : "currentColor"}
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
              />
            </svg>
            <span>{tweet.likes}</span>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
}