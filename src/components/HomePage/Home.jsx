import { Inter } from 'next/font/google'
import Link from "next/link"
import Image from "next/image"


export default function HomePage({ events_categories }) {
  return (
    <div className="home_body">
      {events_categories?.map((ev) => (
        <Link className="card" key={ev.id} href={`/events/${ev.id}`} passHref>

          <div className="image">
            <Image width={300} height={300} alt={ev.title} src={ev.image} />
          </div>
          <div className="content">
            <h2> {ev.title} </h2>
            <p> {ev.description} </p>
          </div>

        </Link>
      ))}
    </div>
  );
}