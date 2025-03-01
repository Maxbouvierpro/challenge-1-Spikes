import { data } from "autoprefixer"
import image from './assets/image.png'
import image1 from './assets/image-1.png'
import image2 from './assets/image-2.png'
import image3 from './assets/image-3.png'
import image4 from './assets/image-4.png'
import image5 from './assets/image-5.png'
    

const dataCards = [
    {
        id:1,
        name:'Shoguntoto',
        imgsrc:`${image}`,
        comment:`C'est une belle plateforme, les explications sont clairs, les maquettes professionnelles.`,
        at:'@thomasdev59'
    },
    {
        id:2,
        name:'Shoguntoto',
        imgsrc:`${image1}`,
        comment:`Ezis répond à toutes les questions afin de nous aider le plus possible dans notre objectif.`,
        at:'@thomasdev59'
    },
    {
        id:3,
        name:'Hocine',
        imgsrc:`${image2}`,
        comment:`J'aime bien le concept d'avoir une communauté, Ezis est très à l'écoute et n'hésite pas à répondre aux questions.`,
        at:'@hocine'
    },
    {
        id:4,
        name:'Youtmax654',
        imgsrc:`${image3}`,
        comment:`Je me suis grandement améliorer sur les technologies que j'utilise et sur ma façon de traviller sur un projet.`,
        at:'@youtmax654'
    },
    {
        id:5,
        name:'Baptiste',
        imgsrc:`${image4}`,
        comment:`Des projets de qualité avec toutes les ressources dont on aurait besoin pour les réaliser.`,
        at:'@baptiste_lechat'
    },
    {
        id:6,
        name:'Le D',
        imgsrc:`${image5}`,
        comment:`Le fait d'avoir accès à un discord et une communauté fait vraiment la différence.`,
        at:'@sport_devweb'
    }
]

export default dataCards;