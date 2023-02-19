import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Conversation.module.css";

import { MessageResponse, StreamChat } from "stream-chat";
import {
  Chat,
  Channel,
  MessageList,
  Window,
  useMessageContext,
} from "stream-chat-react";
import "stream-chat-react/dist/css/v2/index.css";
import { useMemo } from "react";

interface Props {
  messages: MessageResponse[];
  conversation: {
    thumbnailUrl: string;
    name: string;
  };
}

const chatClient = new StreamChat(process.env.NEXT_PUBLIC_API_KEY!);
const userToken = process.env.NEXT_PUBLIC_USER_TOKEN;

chatClient.connectUser(
  {
    id: "twilight-lake-0",
    name: "twilight-lake-0",
  },
  userToken
);

function CustomAvatar(props: any) {
  const { groupStyles } = useMessageContext();
  if (
    groupStyles &&
    (groupStyles[0] === "top" || groupStyles[0] === "single")
  ) {
    return (
      <Image
        src={props.image}
        alt={props.name}
        width={32}
        height={32}
        style={{ borderRadius: 50 }}
      />
    );
  }
  return <div style={{ width: 32, height: 32 }} />;
}

export default function Conversation(props: Props) {
  const channel = useMemo(
    () =>
      chatClient.channel("messaging", "useless_channel", {
        members: ["twilight-lake-0"],
      }),
    []
  );
  return (
    <>
      <Head>
        <title>{props.conversation.name}</title>
        <meta
          name="description"
          content="Share your text conversations like never before!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content={props.conversation.thumbnailUrl} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.header}>
        <Link href="/" className={styles.homeButton}>
          <Image
            src="/icon.png"
            alt="Sophists"
            width={24}
            height={24}
            priority
          />
          <p style={{ marginLeft: 10 }}>Sophists</p>
        </Link>
      </div>
      <main className={styles.main}>
        <Chat client={chatClient} theme="team light">
          {channel && (
            <Channel channel={channel} Avatar={CustomAvatar}>
              <Window>
                <MessageList messages={props.messages} />
              </Window>
            </Channel>
          )}
        </Chat>
      </main>
    </>
  );
}

export async function getServerSideProps(context: { query: any }) {
  const { slug } = context.query;
  const res = await fetch(
    `${process.env.FIREBASE_FUNCTION_URL}/getConversation?conversationId=${slug}`
  );
  const data = await res.json();

  return {
    props: data,
  };
}
