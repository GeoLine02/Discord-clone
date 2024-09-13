import StudyGroupIamge from "../../assets/images/StudyGroup.svg";
import VoiceChatImage from "../../assets/images/VoiceChatIamge.svg";
import PrivateChannelsImage from "../../assets/images/PrivateChannelsIamge.svg";
import FeatureCard from "@/components/ui/FeatureCard";

export default function Home() {
  return (
    <div>
      <FeatureCard
        altText="study-group"
        description="Discord servers are organized into topic-based channels where you
            can collaborate, share, and just talk about your day without
            clogging up a group chat."
        imageSrc={StudyGroupIamge}
        title="Create an invite-only place where you belong"
      />
      <FeatureCard
        altText="voice chats"
        description="Grab a seat in a voice channel when you’re free. Friends in your
            server can see you’re around and instantly pop in to talk without
            having to call."
        imageSrc={VoiceChatImage}
        title="Where hanging out is easy"
        direction="rtl"
        bgColor="bglightgray"
      />
      <FeatureCard
        altText="Private channels"
        description="Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more."
        imageSrc={PrivateChannelsImage}
        title="From few to a fandom"
        direction="ltr"
      />
    </div>
  );
}
