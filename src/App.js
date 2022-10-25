import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState("");

  // Use Promise Method
  const getApiData = async () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((resp) => { return resp.json() }  )
    .then((actualData) => { setData(actualData) })
    .catch((error) =>  setIsError(error) )  
  }

  useEffect(() => {
    getApiData();
  }, [])

    return(
        <>
          <h2>Axios Data Fetch</h2>
          {
            data.slice(0,15).map((curr) => {
              const { id, title, body } = curr;
              return(
                <div key={id} style={{width: "400px", border: "1px solid #000" }}>
                  <h4>Title: {title.slice(0,15).toUpperCase()}</h4>
                  <p> {body.slice(0,100)} </p>
                </div>
              )
            })
          }

          {isError !== "" && <h2 style={{color: "red"}}> {isError} </h2> }
        </>
    )
}
export default App;