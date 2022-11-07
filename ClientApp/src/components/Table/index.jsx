export default function Table({ children }) {
    return <div className="w-1/3 max-w-full">
        <h1 className='font-bold text-2xl'>Sleep Stats</h1>
            <table className="w-full">
                <thead className='text-md text-gray-400 text-center'>
                    <tr>
                        <th />
                        <th>Time of sleep</th>
                        <th>Wake up time</th>
                        <th>Sleep duration</th>
                        <th />
                    </tr>
                </thead>
                <tbody className="bg-slate-300">
                    {children}
                </tbody>
            </table>
    </div>;
}