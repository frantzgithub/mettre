import Nav from '../Composant/header';
import Blog from '../Composant/blog';
import image from '../logo.svg';
import Vue from '../img/vue.jpg';
import { Pied } from '../Composant/pied';
import './page.css';
import Angular from '../img/angular.png';


export const Acceuil = () => {
    const contenu = [{
        img: image,
        alt: 'logo de react',
        title: 'travail avec react est vraiment amusant',
        text: 'react est un librairie de JavaScript très populaire dans le monde du développement web.',
        auteur: 'écrit par moi'
        
    },
    {
        img: Vue,
        alt: 'logo de vue',
        title: 'travail avec vue est vraiment amusant',
        text: 'vue est un librairie de JavaScript très populaire dans le monde du développement web.',
        auteur: 'écrit par moi'
    },
    {
        img: Angular,
        alt: 'logo d\'angular',
        title: 'travail avec angular est vraiment amusant',
        text: 'angular est un librairie de JavaScript très populaire dans le monde du développement web.',
        auteur: 'écrit par moi'
    }
    ]
  return (
    <div>
      <Nav />
      {contenu.map(( {img, alt, title, text, auteur}) => {
          return <Blog image={img} alt={alt} title={title} text={text} auteur={auteur} />
      })}
      
      <Pied />
    </div>
    );
}

