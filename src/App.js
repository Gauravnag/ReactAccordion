import { useEffect, useState } from "react";
import API from "./API";

const App = () => {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState("");

  const getApiData = async () => {
    try {
      const resp = await API.get("/posts");
      setData(resp.data);
      console.log(resp) 
    } catch(error) {
      setIsError(error.message)
    }
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