import React, {useState, useEffect} from 'react';
import './home.css'
import pic from './pic.jpg';
// import { Container } from "react";

function RegistrationForm() {
    
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [number, setNumber] = useState(null);
    const [gender, setGenders] = useState(null);
    const [password,setPassword] = useState(null);
    const [confirmPassword,setConfirmPassword] = useState(null);

    const [country, setCountry]= useState([]);
  const [countryid, setCountryid]= useState('');
  const [state, setSat]= useState([]);
  

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "lastName"){
            setLastName(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "number"){
            setNumber(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "confirmPassword"){
            setConfirmPassword(value);
        }
            if(id === "gender"){
                setGenders(value);
        }

    }

   
        //   =====================================================================================================================
        useEffect( ()=>{
     const getcountry= async ()=>{
       const req= await fetch("http://localhost/devopsdeveloper/country");
       const getres= await req.json();
       console.log(getres);
       setCountry(await getres);
  
     }
     getcountry();
  
  
        },[]);
  
        const handlecountry=(event)=>{
      const getcoutryid= event.target.value;
      setCountryid(getcoutryid);
      event.preventDefault();
        }
  
        useEffect( ()=>{
  
      const getstate= async ()=>{
        const resstate= await fetch(`http://localhost/devopsdeveloper/state/getstate/${countryid }`);
        const getst= resstate.json();
        setSat(await getst);
  
      }
      getstate();
  
        },[countryid]);
        // =================================================================================================================
        const handleSubmit  = () => {
        console.log(firstName,lastName,email,number,password,confirmPassword);
        }

        return(
        <div className="form">
            <div className="form-body">
                <div className="username">
                    <label className="form__label" for="firstName">First Name </label>
                    <input className="form__input" type="text" value={firstName} onChange = {(e) => handleInputChange(e)} id="firstName" placeholder=""/>
                </div>
                <div className="lastname">
                    <label className="form__label" for="lastName">Last Name </label>
                    <input  type="text" name="" id="lastName" value={lastName}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder=""/>
                </div>
                <div className="email">
                    <label className="form__label" for="email">Email </label>
                    <input  type="email" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder=""/>
                </div>
                <div className="number">
                    <label className="form__label" for="number">Phone Number </label>
                    <input type="text" name="" id="number" value={number} maxlength="10"  onChange = {(e) => handleInputChange(e)} placeholder=""/>
                </div>


                <div className="country">
                <label className="mb-2">Country</label>
                    <select name="country" id="country" className="form-control" onChange={(e)=>handlecountry(e)}>
                      <option>--Select Country--</option>
                      <option>--South Africa--</option>
                      <option>--Zimbabwe--</option>
                      <option>--Lesotho--</option>
                      <option>--Algeria--</option>
                      <option>--Ethopia--</option>

            {
                       country.map( (getcon)=>(
                     <option key={getcon.country_id} value={getcon.country_id }> { getcon.country_name}</option>
                       ))
                  }
                   
                   </select>
                 
                 <label className="mb-2">City</label>
                 <select name="City" id="state" className="form-control" onChange = {(e) => handleInputChange(e)}>
                     <option>--Select City--</option>
                     <option>--Pretoria--</option>
                     <option>--Harare--</option>
                     <option>--Maseru--</option>
                     <option>--Algiers--</option>
                     <option>--Addis Ababa--</option>
                     {
                       state.map( (st,index)=>(                    
                     <option key={index} value={st.state_id}>{ st.state_name}</option>
                       ))
                       }
                   </select>
                </div> 
                
                <div className="password">
                    <label className="form__label" for="password">Password </label>
                    <input className="form__input" type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
                </div>
                <div className="confirm-password">
                    <label className="form__label" for="confirmPassword">Confirm Password </label>
                    <input className="form__input" type="password" id="confirmPassword" value={confirmPassword} onChange = {(e) => handleInputChange(e)} placeholder="Confirm Password"/>
                </div>
            </div>

            <div className="genders">
                    <label className="form__label" for="genders">Gender 
                    <label className="form__input" type="gender" id="gender" value={gender} onChange = {(e) => handleInputChange(e)}/>
                    Male <input type="radio" name="Gender" value="Male" />
                    Female <input type="radio" name="Gender" value="Female" />
                    Other <input type="radio" name="Gender" value="Other" />
                    Preffered not say <input type="radio" name="Gender" value="Preffered" />
                    </label>
                    </div>
                   
            
            <div className="myImg">
            <img src={pic} alt="" height="90%" width="80%"/>
            </div>
            <div class="footer">
                <button onClick={()=>handleSubmit()} type="submit" class="btn">Register</button>
            </div>
        </div>
       
    )       
}
export default RegistrationForm


