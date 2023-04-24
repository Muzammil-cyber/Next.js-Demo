import Image from "next/image";
import Link from "next/link";

const Events = ({ events_categories }) => {
    return (
        <div>
            <h1>Events Page</h1>
            {events_categories.map(e => <div key={e.id}><Link href={`events/${e.id}`} passHref>
                <Image src={e.image} alt='An Image' width={600} height={400} />

                <h2>{e.title}</h2>
            </Link></div>)
            }
        </div>)
}




export default Events;

export async function getStaticProps(context) {
    const { events_categories } = await import("/data/data.json")
    return {
        props: { events_categories }
    };
}