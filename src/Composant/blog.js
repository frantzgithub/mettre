
import '../style/blog.css';
export default function Blog({titre, text, auteur, image, alt, title}) {
  
  return (
    <div className="contenu">
    <h1>{titre}</h1>
    <img src={image} alt={alt} title={title} />
    <p>{text}</p>
    <p className="small" >{auteur}</p>
    </div>
    );
}