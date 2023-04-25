import Image from "next/image";
import Link from "next/link";
import Header from "../Header";
import Footer from "../Footer";


export default function Events({ events_categories }) {
    return (
        <div className="events_page">
            {events_categories?.map((ev) => (
                <Link className="card" key={ev.id} href={`/events/${ev.id}`} passHref>
                    <Image src={ev.image} alt={ev.title} width={400} height={400} /> <h2>{ev.title} </h2>
                </Link>
            ))}
        </div>
    )
}