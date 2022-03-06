import React from 'react';
import { useState } from 'react';
import axios from 'axios';

function LoginForm()
{
    const ProjectID = '51ed0246-0626-4084-9261-e40981453b41';
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ error, setError ] = useState('');
    const handleSubmit = async(e) =>
    {
        e.preventDefault();
        const authObject = { 'Project-ID': ProjectID, 'User-Name': username, 'User-Secret': password };
        try
        {
            await axios.get('https://api.chatengine.io/chats', { headers: authObject });
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            setError('');
            window.location.reload();
        } catch (error) {
            setError('Oops,incorrect credencials');
        }
        
    }
  return (
      <div className='wrapper'>
          <div className='form'>
              <h1 className='title'>Chat with Squads</h1>
              <form onSubmit={handleSubmit}>
                  <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className='input' placeholder='Username' required />
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='input' placeholder='Password' required />
                  <div align='center'>
                      <button type='submit' className='button'>
                          <span>Start</span>
                      </button>

                  </div>
              </form>
               <h2>{error}</h2>
          </div>  
      </div>
  )
}

export default LoginForm