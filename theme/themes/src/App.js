import React, {useState} from 'react';
import './App.css';

function App() {
	const [eventName , seteventName] = useState('');
    const [applicantName , setapplicantName] = useState('');
	const [applicantAddress , setapplicantAddress] = useState('');
    const [applicantMobileNo , setapplicantMobileNo] = useState('');
	const [applicantEmailid , setapplicantEmailid] = useState('');
	const [eventAddress , seteventAddress] = useState('');
    const [eventDate , seteventDate] = useState('');
    const [eventTime , seteventTime] = useState('');
    const [noOfPeople , setnoOfPeople] = useState('');
	const [quantityOfVeg, setquantityOfVeg ] = useState('');
	const [quantityOfNonVeg, setquantityOfNonVeg] = useState('');
	const handleChange =(e)=>{
	seteventName(e.target.value);
	}
	const handleapplicantNameChange =(e)=>{
	setapplicantName(e.target.value);
	}
	const handleapplicantAddressChange =(e)=>{
	setapplicantAddress(e.target.value);
	}
    const handleapplicantMobileNoChange =(e)=>{
    setapplicantMobileNo(e.target.value);
    }
    const handleapplicantEmailidChange =(e)=>{
    setapplicantEmailid(e.target.value);
    }
    const handleeventAddressChange =(e)=>{
    seteventAddress(e.target.value);
    }
    const handleeventDateChange =(e)=>{
	seteventDate(e.target.value);
	}
	const handleeventTimeChange =(e)=>{
	seteventTime(e.target.value);
	}
	const handlenoOfPeopleChange =(e)=>{
	setnoOfPeople(e.target.value);
	}
	const handlequantityOfVegChange =(e)=>{
	setquantityOfVeg(e.target.value);
	}
	const handlequantityOfNonVegChange =(e)=>{
	setquantityOfNonVeg(e.target.value);
	}		

	const handleSubmit=(e)=>{
		alert('Event Details Added Succesfully :"' );
    }
return (
	<div className="App">
	<header className="App-header">
	<form onSubmit={(e) => {handleSubmit(e)}}>	
	    <div className ="label">
		<label >
		Event Name :
		</label>
		<input type="text" value={eventName} required onChange={(e)=> {handleChange(e)}} /> <br/>

		<label >
		Applicant Name :
		</label>
		<input type="text" value={applicantName} required onChange={(e)=> {handleapplicantNameChange(e)}} /> <br/>

		<label >
		Applicant Address :
		</label>
		<input type="text" value={applicantAddress} required onChange={(e)=> {handleapplicantAddressChange(e)}} /> <br/>
		
		<label >
		Applicant Mobileno :
		</label>
		<input type="number" value={applicantMobileNo} required onChange={(e)=> {handleapplicantMobileNoChange(e)}} /> <br/>

		<label>
		Email :
		</label>
		<input type="email" value={applicantEmailid} required onChange={(e)=> {handleapplicantEmailidChange(e)}} /> <br/>

		<label>
		Event Address :
		</label>
		<input type="text" value={eventAddress} required onChange={(e)=> {handleeventAddressChange(e)}} /> <br/>

		<label >
		Event Date :
		</label>
		<input type="date" value={eventDate} required onChange={(e)=> {handleeventDateChange(e)}} /> <br/>

		<label >
		Event Time :
		</label>
		<input type="time" value={eventTime} required onChange={(e)=> {handleeventTimeChange(e)}} /> <br/>

		<label >
	    Number of people :
		</label>
		<input type="number" value={noOfPeople} required onChange={(e)=> {handlenoOfPeopleChange(e)}} /> <br/>

		<label >
	    Number of veg items :
		</label>
		<input type="number" value={quantityOfVeg} required onChange={(e)=> {handlequantityOfVegChange(e)}} /> <br/>

		<label >
	    Number of non-veg items : 
		</label>
		<input type="number" value={quantityOfNonVeg} required onChange={(e)=> {handlequantityOfNonVegChange(e)}} /> <br/>

		<input type="submit" value="Submit"/>
		<br/><br/>
		</div>
	</form>	
	</header>
	</div>
);
}
export default App;
