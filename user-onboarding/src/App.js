import React, { useState, useEffect} from 'react';
// import Formik  from 'formik';
// import * as Yup from 'yup';
import axios from 'axios';
import FormikLoginForm from './Form';
import './App.css';

const initialForm = {
  name: '',
  email: '',
  password: '',
};


function App() {
  const [ usersList, setUsersList] = useState([]);
  const [ serverError, setServerError] = useState('');

  const fetchUsers = () => {
    axios.get('https://reqres.in/api/users_')
      .then(response => {
        setUsersList(response.data);
      })
      .catch(error => {
        setServerError(error.message);
      })
  }





  return (
    <div className="App">
      <FormikLoginForm />
      
    </div>
  );
}

export default App;
