


import HomePage from "../src/components/HomePage/Home"



export default function Home({ events_categories }) {
  return (
    <HomePage events_categories={events_categories} />
  )
}

export async function getServerSideProps(context) {
  const { events_categories } = await import('/data/data.json');
  return {
    props: { events_categories }
  };
}
