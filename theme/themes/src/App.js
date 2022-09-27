import React, {useState} from 'react';
import './App.css';

function App() {
	const [eventname , seteventname] = useState('');
    const [applicantname , setapplicantname] = useState('');
    const [applicantmobileno , setapplicantmobileno] = useState('');;
	const [email , setEmail] = useState('');
    const [eventadd , seteventadd] = useState('');
    const [eventdate , seteventdate] = useState('');
    const [eventtime , seteventtime] = useState('');
    const [numberofpeople , setnumberofpeople] = useState('');
	const handleChange =(e)=>{
	seteventname(e.target.value);
	}
	const handleapplicantnameChange =(e)=>{
	setapplicantname(e.target.value);
	}
    const handleapplicantmobilenoChange =(e)=>{
    setapplicantmobileno(e.target.value);
    }
    const handleEmailChange =(e)=>{
    setEmail(e.target.value);
    }
    const handleeventaddChange =(e)=>{
    seteventadd(e.target.value);
    }
    const handleeventdateChange =(e)=>{
	seteventdate(e.target.value);
	}
	const handleeventtimeChange =(e)=>{
	seteventtime(e.target.value);
	}
	const handlenumberofpeopleChange =(e)=>{
	setnumberofpeople(e.target.value);
	}	
	const handleSubmit=(e)=>{
		alert('Event Details Added Succesfully :"' );
    }
return (
	<div className="App">
	<header className="App-header">
	<form onSubmit={(e) => {handleSubmit(e)}}>	
		<label >
		Event Name:
		</label>
		<input type="text" value={eventname} required onChange={(e)=> {handleChange(e)}} /> <br/>
		<label >
		Applicant Name:
		</label>
		<input type="text" value={applicantname} required onChange={(e)=> {handleapplicantnameChange(e)}} /> <br/>
		<label >
		Applicant Mobileno:
		</label>
		<input type="number" value={applicantmobileno} required onChange={(e)=> {handleapplicantmobilenoChange(e)}} /> <br/>
		<label>
		Email:
		</label>
		<input type="email" value={email} required onChange={(e)=> {handleEmailChange(e)}} /> <br/>
		<label>
		Event Add:
		</label>
		<input type="text" value={eventadd} required onChange={(e)=> {handleeventaddChange(e)}} /> <br/>
		<label >
		Event Date:
		</label>
		<input type="date" value={eventdate} required onChange={(e)=> {handleeventdateChange(e)}} /> <br/>
		<label >
		Event Time:
		</label>
		<input type="time" value={eventtime} required onChange={(e)=> {handleeventtimeChange(e)}} /> <br/>
		<label >
	    Number of people:
		</label>
		<input type="number" value={numberofpeople} required onChange={(e)=> {handlenumberofpeopleChange(e)}} /> <br/>
		<input type="submit" value="Submit"/>
		<br/><br/>
	</form>	
	</header>
	</div>
);
}
export default App;
