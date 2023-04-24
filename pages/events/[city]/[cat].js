import Image from "next/image";



const Event = ({ data }) => {
    return (
        <div>
            <Image src={data.image} alt='An Image' width={1000} height={500} />
            <h1>{data.title}</h1>
            <p>{data.description}</p>
        </div>
    )
}

export default Event;

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