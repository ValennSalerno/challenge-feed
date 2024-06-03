import data from "@/app/_data/who-to-follow.json";
import Image from "next/image";
import { UserAvatar } from "./user-avatar";

export function WhoToFollow() {
  return (
    <div className="flex flex-col gap-3 mt-2">
      
      {data.map((user) => (
        <div key={user.id} className="py-3">
          <div className="flex justify-between items-center gap-2">
            <div className="flex gap-2">
              <UserAvatar avatar={user.avatar} />
              <div className="flex flex-col">
                <div className="text-black font-bold">
                  {user.firstName} {user.lastName}
                </div>
                <div className="text-slate-500 text-sm">{user.nickname}</div>
              </div>
            </div>
            <button
              className="bg-black rounded-full text-white px-4 py-2 ml-auto mr-4"
              role="button"
            >
              Follow
            </button>
          </div>
        </div>
      ))}
      <p className="text-cyan-400">Show more</p>
    </div>
  );
}