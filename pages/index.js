import Head from "next/head";
import moduleCSS from "../styles/index.module.css";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Aryan Rajoria</title>
                <meta
                    name="description"
                    content="Aryan Rajoria's portfolio website"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </div>
    );
}
