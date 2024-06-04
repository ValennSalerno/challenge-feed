import tweets from "@/app/_data/tweets.json";
import { TweetsItem } from "@/app/_components/tweets-item";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { TweetsComments } from "@/app/_components/tweets-comments";

interface TweetPageProps {
  params: Params;
}

export default function TweetPage({ params }: TweetPageProps) {
  const id = Number(params.id);
  const tweet = tweets.find((tweet) => tweet.id === id);

  if (!tweet) {
    return <h1>Not found</h1>;
  }

  return (
    <div className="border-l border-r">
      <h1 className="text-black font-bold pl-3">Tweet</h1>
      <TweetsItem 
        tweet={tweet} 
        shouldRedirect={false} 
        showTopDate={false} 
      />
      <TweetsComments comments={tweet.comments} />
    </div>
  );
}