import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <link rel="stylesheet" href ="app.css"></link>
      
      <title> curriculum vitae </title>

      <div className="contenedor">
      <h1 className ="titulo">  curriculum vitae </h1>
      <div className="principal"></div>
      <div className="header"></div>
        <header className="header">
          <img src  className app-logo alt=""/>
          <img src="public/logo.jpg"/>

        </header> 
        <div className="nombre">
       <h1> Edith Stefany</h1> 
       <p> celular: 986337958  </p>      <p> Email:edkm198@gmail.com </p>
       </div>
       <div className="contenido">
      
        <h2 className="titulo"> datos personales </h2>
        <ul className="li">
            <li> edad: 23 años  </li>
            <li>ciudad : arequipa</li>
            <li>estado civil: soltera</li>
            
        </ul>
        </div>
    
    <div className="cuerpo"> 
    <div className="contenido"></div>
    <h2 className="titulo">objetivos </h2>
    <p>  Conseguir la estabilidad laboral en una empresa en la que pueda poner en práctica mis habilidades y conocimientos, con el fin de conseguir las metas propuestas y desempeñar mis funciones con eficiencia </p>
    <p> Consolidar mi carrera profesional en una empresa que me ofrezca nuevos retos constantemente.</p>

<div className="contenido">
    <h2 className="titulo"> Estudios</h2>
     <p>  "instituto superiorhonorio delgado espinoza (ISHDE)"</p>
     <p> estudiante de computacion e informatica (5to semestre) </p>
     </div>
     <div className="contenido">
    <h2 className="titulo"> antecedentes  laborales</h2>
     <p>  soporte tecnico  </p>      <p>año-2018 </p>
     <p> edicion de video </p>       <p> año-2019</p>
     </div>

     </div>
     
     </div>

         

       < h1 className=" enlace">link  de aula virtual  </h1> 
    
    <a  target="_blank" href = "https://clasesonlinesuf.milaulas.com "> link de aula moddle </a>
    
    
    < h1 className=" enlace">link  de pagina de wordpres </h1>
    <a target="_blank" href="misitiowebedithstefany.42web.io "> link de pagina wordpres </a>
    
    

    
    </div>
    
  );
}

export default App;
