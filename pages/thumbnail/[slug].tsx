import Image from "next/image";
import { MessageResponse } from "stream-chat";
import styles from "../../styles/Thumbnail.module.css";

interface Props {
  messages: MessageResponse[];
  conversation: { thumbnailMessageId: string };
}

export default function Thumbnail(props: Props) {
  const thumbnailMessageId = props.conversation.thumbnailMessageId;
  const thumbnailIndex = props.messages.findIndex(
    (message) => message.id === thumbnailMessageId
  );
  const previewMessages = props.messages.slice(
    thumbnailIndex,
    thumbnailIndex + 5
  );
  return (
    <main className={styles.main}>
      {previewMessages.map((message, index) => {
        const sameUserAsPreviousMessage =
          index && previewMessages[index - 1].user?.id === message.user?.id;
        const Avatar = !sameUserAsPreviousMessage ? (
          <Image
            src={message.user?.image as string}
            alt={message.user?.name!}
            width={32}
            height={32}
            style={{ borderRadius: 50 }}
          />
        ) : (
          <div style={{ width: 32, height: 32 }} />
        );
        return (
          <div className={styles.message} key={message.id}>
            {Avatar}
            <p className={styles.text}>{message.text}</p>
          </div>
        );
      })}
    </main>
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
