import Cat from "@/src/components/Events/City/Cat/Cat";



const CatPage = ({ data }) => {
    return (
        <Cat data={data} />
    )
}

export default CatPage;

export async function getStaticPaths() {
    const { allEvents } = await import("/data/data.json");
    const allPaths = allEvents.map((path) => {
        return {
            params: {
                city: path.city,
                cat: path.id,
            },
        };
    });

    return {
        paths: allPaths,
        fallback: false,
    };
}

export async function getStaticProps(context) {
    const { allEvents } = await import("/data/data.json");
    const data = allEvents.find((e) => e.id === context.params.cat)
    return {
        props: {
            data
        }
    };
}