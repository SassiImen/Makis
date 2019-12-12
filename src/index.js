import { prop } from 'ramda';
import { makis } from './app/data/makis';

// Créer  <titre>
const titre = document.createElement('h1');
titre.textContent = 'Makis';
const app = document.getElementById('app');
app.appendChild(titre);


// const img = document.createElement('img');
// img.src =`${a.image}`;

const afficherDescription = function (a) {
  return `${a.nom} :le prix d'une boite est : ${a.prix},  ce produit est ${a.description} `;
};


// Créer <prix de boite de makis>
const boiteMakis = (nb) => nb * 8;
const getRandom = (arr) => {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
  // return index;
};


// Créer <BUTTON>
let btn1;
let div1;
let div2;
for (const maki of makis) {
  div1 = document.createElement('p');
  div1.className = 'description';
  div2 = document.createElement('li');
  div2.className = 'boiteMakis';
  div1.innerText = afficherDescription(maki);
  div2.innerText = boiteMakis(maki.prix);
  app.appendChild(div1);
  app.appendChild(div2);
  btn1 = document.createElement('BUTTON');
  btn1.id = maki.id;
  btn1.textContent = 'Acheter';
  app.append(btn1);
  btn1.addEventListener('click', () => {
    const makiResNom = document.createElement('h2');
    const makiResPrix = document.createElement('h2');

    makiResNom.innerText = maki.nom;
    makiResPrix.innerText = maki.prix;

    panier.append(makiResNom);
    panier.append(makiResPrix);


    // <Supprimer>
    const btnRemove = document.createElement('BUTTON');
    btnRemove.textContent = 'Supprimer';
    panier.appendChild(btnRemove);
    btnRemove.addEventListener('click', () => {
      panier.remove(makiReserveNom);
      panier.remove(makiReservePrix);
    });
  });
}
const nomMakis = makis.map(prop('nom'));

// Créer <Head>
const head = document.createElement('header');
app.insertBefore(head, app.firstChild);


// const img = document.createElement('img');
// img.src =`${a.image}`;

// Créer <Image>
const imgMaki = makis.map(prop('image'));

const img = document.createElement('img');


const imgUrl = getRandom(imgMaki);
console.log('url', imgUrl);
img.setAttribute('src', imgUrl);
head.appendChild(img);
img.style.width = '15%';

// Créer <Image>
// const imgMaki = makis.map(prop('image'));
// const img = document.createElement('img');
// img.setAttribute('src', imgMaki[getRandom(imgMaki)]);
// head.appendChild(img);
// img.style.width = '15%';

// Créer <coloneMaki>

// const cloneMaki = clone(makis).map((maki) => ({
//   nom: maki.nom,
//   prix: maki.prix * 8,
// }));


//  <Affichage>
console.log(getRandom(makis));
console.log(getRandom(nomMakis));

// Créer <panier>
const panier = document.createElement('h2');
panier.textContent = 'Panier';
app.appendChild(panier);
