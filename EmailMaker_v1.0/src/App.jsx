import { useEffect,useState } from 'react';
import './App.css';
import Button from './components/Button';
import FormComponente from './components/FormComponente';
import ButtonAdd from './components/ButtonAdd';
import DynaForm from './components/DynaForm';
import axios from 'axios';
import Autoform from './components/AutoForm';
import Auto from './components/auto';
import DynaFormCopy from './components/DynaFormCopy'
function App() {
   
    const bilola = 'Gerar HTML';
    return (
        <>
            <div className=" w-96 text-center">
                <h1 className="text-gray-800 text-xl text-center font-bold"> Clique Abaixo para gerar seu template </h1>
            </div>

            <form action="https://emailmaker-server.onrender.com/MakeHTML" id="form" method="POST" autoComplete='off'>
                <div>
                    <input name="background" type="text" maxLength="7" placeholder="Cor do Background" className="focus:border-blue-100 px-4 py-2 bg-slate-700 rounded-md w-full  my-2 text-center" />
                </div>
                <DynaForm />
                <Button />
                
            </form>
            
        </>
    );
}

export default App;
