import handleRequest from "../../utils/handleRequest";

function Deletion({id}) {
    const handleClick = () => {
        handleRequest('statistics/' + id, {method: 'DELETE'})
    }

    return <button onClick={handleClick} className='bg-red-500 p-2'>X</button>;
}

export default Deletion;