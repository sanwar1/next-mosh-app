import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/auth";
import scenery from "@/public/images/pexels-yogendra-singh-3467921.jpg";

export default async function Home() {
    const session = await getServerSession(authOptions);
    return (
        <main>
            <h1>Hello {session && <span>{session.user!.name}</span>}!</h1>
            <Link href="/users">Users</Link>
            <ProductCard />
            <div>&nbsp;</div>
            <Image src={scenery} alt="scenery" />
        </main>
    );
}
