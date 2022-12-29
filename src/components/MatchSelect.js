import React from 'react';

function MatchSelect({matches , handleSelect}) {
  return (
    <div>
      <select id='match-select' onChange={()=>handleSelect()}>
            <option value=''>-- Overview - select match --</option>
            {matches.length > 0 && matches.map(data => {
              return <option key={data.matchid} value={data.matchid}>{data.shortDate}: {data.homeTeamShort} vs. {data.awayTeamShort}</option>
            })}
          </select>
    </div>
  );
}

export default MatchSelect;