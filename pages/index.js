import Head from "next/head";

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

            <h1 className="text-3xl font-bold underline">Hello world!</h1>
        </div>
    );
}
