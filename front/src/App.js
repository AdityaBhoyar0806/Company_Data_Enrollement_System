// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import Login from './component/Login';
import Signup from './component/Signup';
//import Success from './component/Success';
import CompanyForm from './component/CompanyForm';
//import CompanyForm from './component/CompanyForm';
// import CompanyForm from './component/CompanyForm';
import CompanyList from './component/CompanyList';
import CompanyDetail from './component/CompanyDetail';
import UpdateCompany from './component/UpdateCompany';

function App() {
  return (
    <div className='body'>
     
     <Router>

     {/* <Link to="/"><button>Signup</button></Link>
 <Link to="/Login"><button> Login</button></Link>
 <Link to="/CompanyForm"></Link> */}
 {/* <Link to="/CompanyForm"></Link> */}

    <Routes>
      <Route path='/' element ={<Signup></Signup>}></Route>
      <Route path='/Login' element ={<Login></Login>}></Route>
      {/* <Route path='/companyform' element ={<Success></Success>}></Route> */}
      <Route path='/CompanyForm' element ={<CompanyForm />}></Route>
      <Route path="/CompanyList" element={<CompanyList />}></Route> 
      <Route path="/CompanyDetail" element={<CompanyDetail />}></Route> 
      <Route path="/UpdateCompany/:id" element={<UpdateCompany />} />
{/* <Route path="/CompanyForm" element={<CompanyForm />}></Route>
      <Route path="/CompanyList" element={<CompanyList />}></Route> */}
    

    </Routes>
   </Router>
    
    </div>
  );
}

export default App;
