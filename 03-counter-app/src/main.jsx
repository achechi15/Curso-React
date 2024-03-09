import React from 'react';
import ReactDOM from 'react-dom/client';
// import { HelloWorldApp } from './HelloWorldApp.jsx';
// import  { FirstApp } from './FirstApp';
import { CounterApp } from './CounterApp';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        
        {/* <HelloWorldApp />  */}
        {/* <FirstApp title='Hola, me llamo Alexis' subtitle='Esto es un subtitulo' num={ 2005 } /> */}
        <CounterApp value={10} />
    </React.StrictMode>
)