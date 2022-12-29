import { useEffect, useState } from "react";
import { fetchMatches } from "./api-client.js";
import "./App.css";
import Header from "./components/Header.js";
import MatchHeader from "./components/MatchHeader.js";

function App() {
  const [matches, setMatches] = useState([])
  const [reservedTickets, setResTics] = useState([])
  const [selectedMatch, setSelectedMatch] = useState([])
  
  useEffect(()=> {
    const getMatches = async () => {
      const matches =  await fetchMatches()
      matches.map(match => {
        const date = new Date(match.timestamp*1000).toLocaleString('en-GB', {timeZone: 'Europe/London'})
        match.date = date
        match.shortDate = match.date.slice(0,10)
      })
      // console.log(matches)
      setMatches(matches)
    }
    getMatches()
  },[])

  const handleSelect = () => {
    if (document.getElementById("match-select").value != '') {
      const selMatch = matches.filter((match) => match.matchid == document.getElementById("match-select").value)
      setSelectedMatch(selMatch)
    } else {
      setSelectedMatch([])
    }
  }

  return (
    <div className="App">
      <div className="Header">
        <Header />
      </div>
      <div className="body">
        <div className="dropdown">
          <select id='match-select' onChange={()=>handleSelect()}>
            <option value=''>-- Overview - select match --</option>
            {matches.length > 0 && matches.map(data => {
              return <option key={data.matchid} value={data.matchid}>{data.shortDate}: {data.homeTeamShort} vs. {data.awayTeamShort}</option>
            })}
          </select>
        </div>

        <div className="next-matches">
          {matches.length !== 0 && selectedMatch.length === 0 && matches.map(data =>{
            return <MatchHeader key={data.matchid} data={data}/>
          })}
        </div>
        <div className="comments">Comments</div>
      </div>
    </div>
  );
}

export default App;
