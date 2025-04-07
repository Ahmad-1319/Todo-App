import {  BrowserRouter as Router,Route,  Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
// import TodoList from './components/TodoList';
// import SignUp from './components/SignUp';
// import Login from './components/Login';
import { ToastContainer } from 'react-toastify';
import Todolist from './components/Todolist';
import SignUp from './components/SignUp';
import Login from './components/login';
import { ModeProvider } from './Context/modeContext';
import { TodoProvider } from './Context/todoContext';
import ProtectedRoute from './ProtectedRoute';
function App() {

  return (
<>
<ModeProvider>
  <TodoProvider>

<Router>
  <Navbar/>
  <ToastContainer
  position="top-right"
  autoClose={3000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="colored"
  className="fixed top-5 right-2 md:right-5 w-[250px] md:w-[350px] z-[9999]"
  toastClassName={() =>
    "bg-gray-900 text-white text-sm md:text-base py-3 px-4 rounded-lg shadow-xl border-l-4 border-blue-500"
  }
  bodyClassName={() => "text-xs md:text-sm font-semibold"}
  progressClassName="bg-blue-500"
/>

   
  <Routes>
  <Route path="/login" element={<Login/>}/>
  <Route path="/signup" element={<SignUp/>}/>
  <Route element={<ProtectedRoute/>}>
    <Route path="/" element={<Todolist/>}/>
    </Route>

   
</Routes>
</Router>
</TodoProvider>
</ModeProvider>
</>

)}

export default App;
