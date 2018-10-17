let myData = require('../exampleMongo');

const GetTodos = () =>{
    return myData;
}

const  GetID = (id) =>{
    let at = myData.find(o => o.id == id);
    return at;
}

const PostData = (data) =>{
  
    const atlete =
    {
        id:  myData.length +1,
        nombre: data.nombre,
        profesion: data.profesion,
        pais: data.pais,
        edad: data.edad,
        correo: data.correo
    };
    myData.push(atlete);
    return atlete;
}

const  PutData = (data, id) => {
    const atleta = myData.findIndex(x => x.id==id);
    if(atleta==-1 || atleta ==null)
    {
        return null;
    }
   
   
    myData[atleta].nombre = data.nombre;
    myData[atleta].profesion = data.profesion;
    myData[atleta].pais = data.pais;
    myData[atleta].edad =data.edad;
    myData[atleta].correo = data.correo;
   return  myData[atleta];
}
const DeleteData = (id) => {
    let at = myData.findIndex(x => x.id==id);
    if(at > 0)
    {
        myData.splice(at,1);
        return true;
    }
  
    return false;
}


module.exports = {
    GetTodos: GetTodos,
    GetID: GetID,
    PostData: PostData,
    PutData: PutData,
    DeleteData: DeleteData
}