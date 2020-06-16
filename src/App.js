import React, { useEffect, useState } from 'react';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';
import api from './services/api';


function App() {
  const [github_username, setGithubusername] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    )
  }, []);

  async function handleChange(e){
    e.preventDefault();

    const response = await api.post('/devs', {
      github_username,
      techs,
      latitude,
      longitude
    })
    console.log(response.data);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleChange}>

          <div className='input-block'>
              <label htmlFor='github_username'>Usuário Github</label>
              <input name='github_username' 
              id='github_username' 
              required 
              value ={github_username} 
              onChange={e => setGithubusername(e.target.value)}
              />
          </div>
          
          <div className='input-block'>
              <label htmlFor='techs'>Tecnologias</label>
              <input name='techs'
               id='techs' 
               required 
               value ={techs} 
               onChange={e => setTechs(e.target.value)}
               />
          </div>
          
          <div className='input-group'>
              <div className='input-block'>
                  <label htmlFor='Latitude'>Latitude</label>
                  <input type='number' 
                  name='Latitude' 
                  id='Latitude' 
                  required 
                  value ={latitude} 
                  onChange={e => setLatitude(e.target.value)}
                  />
              </div>

              <div className='input-block'>
                  <label htmlFor='Longitude'>Longitude</label>
                  <input type='number'
                   name='Longitude' 
                   id='Longitude'
                   required 
                   value ={longitude}
                   onChange={e => setLongitude(e.target.value)}
                  />
              </div>
          </div>
          <button type='submit'>Enviar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className='dev-item'>
            <header>
            <img src="https://www.nomadfoods.com/wp-content/uploads/2018/08/placeholder-1-e1533569576673-960x960.png" alt="Placeholder"></img>
              <div className='user-info'>
                <strong>Lorem Ipsum</strong>
                <span>Lorem Ipsum</span>
              </div>
            </header>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque viverra vulputate erat, nec porta nibh interdum at. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
            <a href='http://google.com'>Acessar link</a>
          </li>

          <li className='dev-item'>
            <header>
            <img src="https://www.nomadfoods.com/wp-content/uploads/2018/08/placeholder-1-e1533569576673-960x960.png" alt="Placeholder"></img>
              <div className='user-info'>
                <strong>Lorem Ipsum</strong>
                <span>Lorem Ipsum</span>
              </div>
            </header>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque viverra vulputate erat, nec porta nibh interdum at. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
            <a href='http://google.com'>Acessar link</a>
          </li>

          <li className='dev-item'>
            <header>
            <img src="https://www.nomadfoods.com/wp-content/uploads/2018/08/placeholder-1-e1533569576673-960x960.png" alt="Placeholder"></img>
              <div className='user-info'>
                <strong>Lorem Ipsum</strong>
                <span>Lorem Ipsum</span>
              </div>
            </header>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque viverra vulputate erat, nec porta nibh interdum at. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
            <a href='http://google.com'>Acessar link</a>
          </li>

          <li className='dev-item'>
            <header>
            <img src="https://www.nomadfoods.com/wp-content/uploads/2018/08/placeholder-1-e1533569576673-960x960.png" alt="Placeholder"></img>
              <div className='user-info'>
                <strong>Lorem Ipsum</strong>
                <span>Lorem Ipsum</span>
              </div>
            </header>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque viverra vulputate erat, nec porta nibh interdum at. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
            <a href='http://google.com'>Acessar link</a>
          </li>
        </ul>
      </main>
    </div>
  );
}
export default App;
