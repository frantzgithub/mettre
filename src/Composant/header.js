
import '../style/header.css';

export default function Nav() {
  return (
    <>
      <header>
        <h1>Bienvenue </h1>
        <div className='nav'>
          <button className='acc' >Accueil</button>
          <button className='acc' >se connecter</button>
        </div>
      </header>
    </>
    );
}