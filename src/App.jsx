import React, {useState, useEffect} from 'react'

export default function App() {
const [usersdata, setUsersData] = useState([]);

let rendered = false;
useEffect(() => {
  
  if(!rendered){
    const dataFetcher = async () => {
      const response = await fetch('https://randomuser.me/api/?results=500');
      const data = await response.json();
      console.log(data.results);
      setUsersData(data.results);
    }

    dataFetcher().catch(err => console.log(err.message))
  }

  return ()=>{
    rendered = true;
  }
}, [])

  return (
    <React.Fragment>
      <div>{usersdata.map((item, index) => {
        return (
          <div key={index}>
            {item.name.title + ' ' + item.name.first+ ' ' + item.name.last}
          </div>
        )
      })}</div>
    </React.Fragment>
  )
}
