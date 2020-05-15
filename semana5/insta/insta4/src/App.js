import React from 'react';
import Post from './components/Post/Post';
import styled from 'styled-components'
import { SecaoComentario } from './components/SecaoComentario/SecaoComentario';

class App extends React.Component {
  state = {
    post: [
         {   
          nomeUsuario: "ave",
          fotoUsuario: "https://picsum.photos/50/50",
          fotoPost: "https://picsum.photos/200/150"
    },
  {
    nomeUsuario: "planicie",
    fotoUsuario: "https://picsum.photos/50/51",
    fotoPost: "https://picsum.photos/200/151"
  },
{
          nomeUsuario: "cachoeira",
          fotoUsuario: "https://picsum.photos/50/52",
          fotoPost: "https://picsum.photos/200/152"
},
    ]
  }
  render() {
    const listaDePosts = this.state.post.map(comentario => {
    return (
          <Post
          nomeUsuario={comentario.nomeUsuario}
          fotoUsuario={comentario.fotoUsuario}
          fotoPosto={comentario.fotoUsuario}
      />

        );
      });
 
    return (
      <div className={"app-container"}>
        <h1>Post</h1>
        {/* Como sempre, colocamos a variável com a lista de componentes
        gerados aqui. */}
        <div>{listaDePosts}</div>
      </div>
    );
  }
}

export default App;
