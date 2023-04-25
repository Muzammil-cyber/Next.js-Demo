import City from "@/src/components/Events/City/City";



export default function CityPage({ data, pageName }) {
    return (
        <City data={data} pageName={pageName} />
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
