import useFetch from '../hooks/useFetch'

function CustomHook() {
    const {data,loading} = useFetch('https://quotable.io/quotes',{})
  
    if(loading){
        return <h3>Loading...</h3>
    }
    console.log(data)
    return (
        <div>
            {data.results.map((result) => (
                   <p key={result._id}>{result.content}</p>
            ))}
        </div>
    )
}

export default CustomHook
