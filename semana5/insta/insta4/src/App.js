import React from 'react';

import Post from './components/Post/Post';

class App extends React.Component {
  state = {
    componente: [
         {   
        nomeUsuario: "ave",
          fotoUsuario: "https://picsum.photos/50/50",
          fotoPost: "https://picsum.photos/200/150"
    },

 

  }
  render() {
    return (
      <div className={'app-container'}>
        <Post
          {nomeUsuario={'ave'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
    }
        />
        <Post
          nomeUsuario={'planicie'}
          fotoUsuario={'https://picsum.photos/50/51'}
          fotoPost={'https://picsum.photos/200/151'}
        />
        <Post
          nomeUsuario={'cachoeira'}
          fotoUsuario={'https://picsum.photos/50/52'}
          fotoPost={'https://picsum.photos/200/152'}
        />
      </div>
    );
  }
}

export default App;
