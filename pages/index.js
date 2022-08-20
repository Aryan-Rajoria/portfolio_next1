import Head from "next/head";
import moduleCSS from "../styles/index.module.css";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Aryan Rajoria</title>
                <meta
                    name="description"
                    content="Aryan Rajoria's Portfolio Website"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1 className=" text-7xl min-h-screen flex flex-col justify-center text-green-400 #index">
                Hello world!
            </h1>
        </div>
    );
}
