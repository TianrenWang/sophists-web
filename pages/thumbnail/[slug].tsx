import Image from "next/image";
import { MessageResponse } from "stream-chat";
import styles from "../../styles/Thumbnail.module.css";

interface Props {
  message: MessageResponse;
}

export default function Thumbnail(props: Props) {
  const user = props.message.user!;
  return (
    <main>
      <Image
        src={user.image as string}
        alt={user.name!}
        width={32}
        height={32}
        style={{ borderRadius: 50 }}
      />
      <p className={styles.text}>{props.message.text}</p>
    </main>
  );
}

export async function getServerSideProps(context: { query: any }) {
  const { slug } = context.query;
  const res = await fetch(
    `${process.env.FIREBASE_FUNCTION_URL}/getThumbnailMessage?conversationId=${slug}`
  );
  const data = await res.json();
  return {
    props: {
      message: data,
    },
  };
}
