import React from 'react';
import { IconLeft, IconRight, SeasonCtn } from './style/SeasonDisplayStyle';


const seasonConfig = {
  summer: {
    text:'Lets hit the beach!',
    iconName:'sun'
  },
  winter:{
    text:'Burr, it is chilly!',
    iconName:'snowflake'
  }
}
const getSeason = (lat, month)=> {
  // month > 2 && month < 9 is meaning Apr to Sep (=> Summer)
   if(month > 2 && month < 9){
     return lat > 0 ? 'summer' : 'winter';
   } else {
    return lat > 0 ? 'winter' : 'summer';
   }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const{text, iconName} = seasonConfig[season]

  return (
    <>
    <SeasonCtn className={` ${season} icon`} >
      <IconLeft className={`massive ${iconName} icon`} season={season}/>
      <h2> 
        {text}
      </h2>
      <IconRight className={`massive ${iconName} icon`} season={season}/>
    </SeasonCtn>
    </>
  )
};

export default SeasonDisplay
