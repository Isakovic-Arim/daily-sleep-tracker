import { useRef, useState } from "react";
import handleRequest from "../../utils/handleRequest";

function Update({ id }) {
    const [display, setDisplay] = useState(false);

    const handleClick = () => {
        setDisplay(!display);
    }

    return <>
        <button onClick={handleClick} className="bg-blue-500 text-white p-2">Edit</button>
        {
            display &&
            <div className="absolute w-full h-full inset-0 flex justify-center items-center">
                <div className="z-20 w-1/3 h-1/3 rounded-md bg-slate-300 shadow-lg">
                    <button onClick={handleClick} className="w-10 h-10 text-white bg-red-500 block rounded-tl-md">X</button>
                    <Form />
                </div>
            </div>
        }
    </>

    function Form() {
        const form = useRef(null);

        const [date, setDate] = useState(null);
        const [bedTime, setBedTime] = useState(null);
        const [wakeUpTime, setWakeUpTime] = useState(null);

        const handleSubmit = async (event) => {
            event.preventDefault();

            const data = { date: date, bedTime: date + "T" + bedTime, wakeUpTime: date + "T" + wakeUpTime };

            const url = 'statistics/' + id;
            const requestOptions = {
                method: "PUT",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            }

            handleRequest(url, requestOptions);
            setDisplay(false);
        }

        const handleReset = () => form.current.reset();

        return <form ref={form} onSubmit={handleSubmit}>
            <div>
                <label htmlFor="date" className="mr-2">Date</label>
                <input onChange={event => setDate(event.target.value)} required name='date' type="date" className="mb-2" />
            </div>

            <div>
                <label htmlFor="bedtime" className="mr-2">Bed Time</label>
                <input onChange={event => setBedTime(event.target.value)} required name='bedtime' type="time" className="mb-2" />
            </div>

            <div>
                <label htmlFor="wakeuptime" className="mr-2">Wake Up Time</label>
                <input onChange={event => setWakeUpTime(event.target.value)} required name='wakeuptime' type="time" className="mb-2" />
            </div>

            <button className="bg-red-500 rounded-md mr-5 p-1 text-white" onClick={handleReset}>Reset</button>
            <input className="bg-green-500 rounded-md p-1 text-white" type='submit' value='Submit' />
        </form>
    }
}

export default Update;