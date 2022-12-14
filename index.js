import fetch from 'node-fetch';
// const apiRick = async (id) =>{
//     const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
//     const data = await res.json();
//     const {name, species} = data;
//     console.log(
//         `Nombre: ${name}
// Especie: ${species}`);
// }    
const getRick = async () =>{
    const resp = await fetch('https://rickandmortyapi.com/api/character/');
    const {results} = await resp.json();
    const info = results.map(data =>({
        name: data.name,
        specie: data.species,
    }));
    console.log(info);
}
getRick();

const apiCountry = async(lng) =>{
    const res2 = await fetch(`https://restcountries.com/v3.1/lang/${lng}`);
    const data2 = await res2.json();
    const [info] = data2;
    const {name:{common}} = info;
    // // const {common} = name;
    console.log(`País: ${common}`);
}
apiCountry('spa');



//     input: process.stdin,    
//     output: process.stdout
//   });
//   //Devuelve string independientemente si ingresamos caracteres, numeros o signos
//   readline.question('Ingresa el id del personaje que deseas: ', id => {
    //     console.log(id);    
        //     readline.close();
        //   });
        // fetch('https://rickandmortyapi.com/api/character/1')
        // .then((info)=> info.json().then((res) => console.log(res)))
        // .catch((err)=>{console.log(err)});
        
        
        // fetch('https://rickandmortyapi.com/api/character/1')
        // .then((info)=> info.json().then((res) =>{
            //     const {name, species} = res;    
            //     console.log(name,species);    
                // } ))
// .catch((err)=>{console.log(err)});


// const apiCountry = async(name) =>{
    //     const res2 = await fetch(`https://restcountries.com/v3.1/name/${name}`);    
    //     const data2 = await res2.json();
    //     console.log(data2);
    //     const {fifa} = data2;
    //     console.log(fifa);
    // }
    // apiCountry('mexico');
    
    // Object.keys(info).map(key =>{
            // const readline = require('readline').createInterface({
        //     const {name:{common}} = info;
        //     console.log(common);
        // })