import { useRef, useState } from "react";
import { useStats } from "../ContextProvider";
import handleRequest from "../../utils/handleRequest";

function Entry() {
    const [display, setDisplay] = useState(false);

    const { stats, setStats } = useStats();

    const handleClick = () => {
        setDisplay(!display);
    };

    return <>
        <div className='flex justify-center'>
            <button onClick={handleClick} className='z-10 flex justify-center items-center w-48 bg-blue-500 px-1 py-2 rounded-full text-white text-2xl mb-5'>
                <span className='text-3xl'>+</span> New Entry
            </button>
        </div>
        {
            display &&
            <div className="absolute w-full h-full inset-0 flex justify-center items-center">
                <div className="z-20 fixed w-2/3 h-2/3 rounded-md bg-slate-300 shadow-lg">
                    <button onClick={handleClick} className="w-10 h-10 text-white bg-red-500 rounded-tl-md">X</button>
                    <Form />
                </div>
            </div>
        }
    </>;

    function Form() {
        const form = useRef(null);

        const [date, setDate] = useState(null);
        const [bedTime, setBedTime] = useState(null);
        const [wakeUpTime, setWakeUpTime] = useState(null);

        const handleSubmit = async (event) => {
            event.preventDefault();

            const data = { date: date, bedTime: date + "T" + bedTime, wakeUpTime: date + "T" + wakeUpTime };

            handleRequest('statistics', {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            setDisplay(false);
            setStats([data, ...stats]);
        }

        const handleReset = () => form.current.reset();

        return <form ref={form} onSubmit={e => handleSubmit(e)} className="p-10" action="/statistics" method="POST">
            <label htmlFor="date">Date</label>
            <input onChange={event => setDate(event.target.value)} required name='date' type="date" className="block mb-2" />

            <label htmlFor="bedtime">Bed Time</label>
            <input onChange={event => setBedTime(event.target.value)} required name='bedtime' type="time" className="block mb-2" />

            <label htmlFor="wakeuptime">Wake Up Time</label>
            <input onChange={event => setWakeUpTime(event.target.value)} required name='wakeuptime' type="time" className="block mb-2" />

            <button className="bg-red-500 rounded-md mr-5 p-1 text-white" onClick={handleReset}>Reset</button>
            <input className="bg-green-500 rounded-md p-1 text-white" type='submit' value='Submit' />
        </form>
    }
}

export default Entry;