import { TweetsList } from "./tweets-list";
import { UserAvatar } from "./user-avatar";

interface TweetsCommentsProps {
  comments: Tweet[];
}

export function TweetsComments({ comments }: TweetsCommentsProps) {
  return (
    <section>
      <div className="relative flex items-center gap-5 pl-4 border-b border-gray-300">
        <UserAvatar avatar="https://assets-global.website-files.com/6365d860c7b7a7191055eb8a/65a750df12418a35ab24688e_Jonathan%20Kelly-p-500.jpg" />
        <textarea
          maxLength={480}
          placeholder="WHAT'S HAPPENING?"
          className="text-black w-full py-3 focus:outline-none resize-none"
        />
        <button className="absolute bottom-7 right-4 bg-[#7ec8e3] rounded-full w-20 text-sm">Button</button>
      </div>
      <div>
        <TweetsList tweets={comments} shouldRedirect={false} showTopDate />
      </div>
    </section>
  );
}