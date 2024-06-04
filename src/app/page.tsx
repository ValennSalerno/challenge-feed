import { TweetsList } from "./_components/tweets-list";
import tweets from "./_data/tweets.json";
import { UserAvatar } from "./_components/user-avatar";

export default function Home() {
  return (
    <main>
      <h1 className="text-black font-bold pl-3">Home</h1>
      <div className="h-16 group flex w-full border-none">
        <span
          className="relative text-center font-bold text-black flex-1 hover:bg-gray-200 flex items-center justify-center"
          role="button"
        >
          <span className="relative inline-block">
            For you
            <span className="absolute left-0 right-0 bottom-[-20px] h-1 bg-[#7ec8e3]"></span>
          </span>
        </span>
          <span 
            className="text-center flex-1 hover:bg-gray-200 flex items-center justify-center text-gray-800" role="button">
            Following
          </span>
        </div>
      <div className="border">
        <div className="relative flex items-start gap-5 border-b border-gray-300 pl-4 pt-4">
          <UserAvatar 
            avatar="https://assets-global.website-files.com/6365d860c7b7a7191055eb8a/65a750df12418a35ab24688e_Jonathan%20Kelly-p-500.jpg" />
          <svg 
            className="absolute bottom-4 left-4 w-6 h-6 text-gray-800 dark:text-white" 
            aria-hidden="true" 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            fill="none" 
            viewBox="0 0 24 24"
          >
            <path 
              stroke="#7ec8e3" 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="m3 16 5-7 6 6.5m6.5 2.5L16 13l-4.286 6M14 10h.01M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
            />
          </svg>
          <textarea
            maxLength={480}
            placeholder="WHAT'S HAPPENING?"
            className="w-full pr-4 text-black h-36 py-3 focus:outline-none resize-none "
          />
          <button className="absolute bottom-4 right-4 bg-[#7ec8e3] rounded-full w-20 text-sm">Tweet</button>
        </div>
        <TweetsList tweets={tweets} shouldRedirect showTopDate />
      </div>
    </main>
  );
}
