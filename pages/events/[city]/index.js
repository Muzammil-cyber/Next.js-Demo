import Image from "next/image";
import Link from "next/link";


export default function Page({ data, pageName }) {
    return (
        <div>
            <h1>Events in {pageName}</h1>
            {
                data.map(e => (
                    <div key={e.id}>
                        <Link href={`/events/${e.city}/${e.id}`}>
                            <Image src={e.image} alt='An Image' width={600} height={400} />
                            <h2>{e.title}</h2>
                            <p>{e.description}</p>
                        </Link>

                    </div >
                ))
            }
        </div>
    )
}

export async function getStaticPaths() {
    const { events_categories } = await import("/data/data.json");
    const paths = events_categories.map((e) => ({
        params: { city: e.id },
    }))

    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps(context) {

    const { allEvents } = await import("/data/data.json");
    const searchCity = context?.params.city;

    const foundData = allEvents.filter((e) => searchCity === e.city);

    return {
        props: { data: foundData, pageName: searchCity }
    };
}
