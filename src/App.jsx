import './App.css';
import Welcome from './components/home/Welcome';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer />
      <div>
        <Welcome />
      </div>
    </>
  );
}

export default App;
