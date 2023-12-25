import React, {useState, useEffect, createContext} from "react";
import RevoCalendar from "revo-calendar";

var events = [
	{ 
	  name: "Buyout",
	  date: Date.now(),
	  allDay: true,
	},
	{
	  name: "Reservation",
	  date: +new Date("2023-10-16"),
	  extra: {
		icon: "M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09           4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z",
		text: "7 People",
	  },
	},
  ];
  
  const handleDeleteEvent = (index) => {
    {events.splice({index},1);}
  };
//   const handleAdditionOfEvent=(date) => {
// 	<div>
// 		<button>ADD EVENT!</button>
// 	</div>
	
//   }

const UserContext = createContext({user:"user", organisation:""});
// const Index = () => {
// 	return <RevoCalendar events={events} />;
//   };
function App() {
	const [user, setUser] = useState({level: "user", organisation: ""});

  return (
    <div className="App">
    	<UserContext.Provider value={{
    		user: user.level,
    		organisation: user.organisation
    	}}>
			<h1> Gymkhana Calendar </h1>
			<RevoCalendar events={events} allowDeleteEvent={true} allowAddEvent={true} deleteEvent={handleDeleteEvent}/>
			
		</UserContext.Provider>
    </div>
  );
}

export default App;
