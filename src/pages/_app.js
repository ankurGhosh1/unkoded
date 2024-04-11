import "@/styles/globals.css";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <div className={jakarta.className}>
      <Component {...pageProps} />
    </div>
  );
}
