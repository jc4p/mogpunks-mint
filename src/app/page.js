import styles from "./page.module.css";
import { CollectionDisplay } from "@/components/CollectionDisplay";
import { MintForm } from "@/components/MintForm";

export const metadata = {
  title: 'MogPunks',
  description: 'Mint one of the 10,000 MogPunks on Base',
  other: {
    'fc:frame': JSON.stringify({
      version: "next",
      imageUrl: `${process.env.NEXT_PUBLIC_APP_URL}/collection-banner.png`,
      button: {
        title: "Mint Yours Now!",
        action: {
          type: "launch_frame",
          name: "MogPunks",
          url: `${process.env.NEXT_PUBLIC_APP_URL}`,
          splashImageUrl: `${process.env.NEXT_PUBLIC_APP_URL}/collection.gif`,
          splashBackgroundColor: "#1F1F1F"
        }
      }
    })
  }
};

export default function Page() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>MogPunks</h1>
        <p className={styles.subtitle}>Mint one of the 10,000 MogPunks on Base</p>
        <CollectionDisplay />
        <MintForm />
      </main>
    </div>
  );
}