import Events from "@/src/components/Events/Events";


const EventsPage = ({ events_categories }) => {
    return (
        <Events events_categories={events_categories} />
    )
}




export default EventsPage;

export async function getStaticProps(context) {
    const { events_categories } = await import("/data/data.json")
    return {
        props: { events_categories }
    };
}