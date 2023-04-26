import Image from "next/image";
import { useRouter } from "next/router";
import { useRef, useState } from "react";


export default function Cat({ data, pageName }) {

    const inputEmail = useRef();
    const router = useRouter();
    const [message, setMessage] = useState('');



    async function onSubmit(e) {
        e.preventDefault();
        const email = inputEmail.current.value;
        const eventId = router.query.cat;


        // ACCESS THROUGH REQ.PARAMS
        const res = await fetch(`/api/${email}/${eventId}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

        })

        // ACCESS THROUGH REQ.BODY
        //     const url = `/api/emailRegistration`;
        //     const response = await fetch(url, {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify({
        //             email, eventId
        //         })
        //     }
        //     );
        const response = await res.json();

        setMessage(response.message);
        inputEmail.current.value = '';


    }

    return (
        <div className="event_single_page">
            <h1> {data.title} </h1>
            <Image src={data.image} width={1000} height={500} alt={data.title} />
            <p> {data.description} </p>
            <form onSubmit={onSubmit} className="email_registration">
                <label> Get Registered for this event!</label>
                <input
                    ref={inputEmail}
                    type="email"
                    id="email"
                    placeholder="Please insert your email here"
                    required
                />
                <button type="submit">Submit</button>
            </form>
            <p>{message}</p>
        </div>
    )
}
