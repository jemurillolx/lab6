const express = require('express');
const app = express();


app.listen(3000);

console.log('Server Start.....');
console.log('!!!!Listening on port 3000');
app.use(express.json());
let atletas = [
    { id: 1, nombre: 'Jorge', profesion: 'Estudiante', pais: 'Guatemala', edad: '20', correo: 'p1@gmail.com' },
    { id: 2, nombre: 'Emilio', profesion: 'Estudiante', pais: 'Mexico', edad: '21', correo: 'p2@gmail.com' },
    { id: 3,  nombre: 'Jose', profesion: 'Doctor', pais: 'Guatemala', edad: '25', correo: 'p3@gmail.com'  },
    { id: 4, nombre: 'Miguel', profesion: 'Doctor', pais: 'Canada', edad: '28', correo: 'p4@gmail.com'  },
    { id: 5, nombre: 'Martha', profesion: 'Doctor', pais: 'USA', edad: '27', correo: 'p5@gmail.com'  }
];
let varid = 5;



/*insert*/
app.post('/api/atletas', (req, res) => {
    if (!req.body.nombre) {
        res.status(400).send('Ingrese el nombre del atleta');
        return;
    }
    if (!req.body.profesion) {
        res.status(400).send('Ingrese la profesión del atleta');
        return;
    }
    if (!req.body.pais) {
        res.status(400).send('Ingrese el país del atleta');
        return;
    }
    if (!req.body.edad) {
        res.status(400).send('Ingrese la edad del atleta');
        return;
    }
    if (!req.body.correo) {
        res.status(400).send('Ingrese el correo del atleta');
        return;
    }

    varid++;
    const atlete =
    {
        id: varid,
        nombre: req.body.nombre,
        profesion: req.body.profesion,
        pais: req.body.pais,
        edad: req.body.edad,
        correo: req.body.correo
    };
    atletas.push(atlete);
    res.status(201).send(atletas);
}
);
/*select all */
app.get('/api/atletas', (req, res) => {
    res.status(200).send(atletas);
}
);
/*select one person */
app.get('/api/atletas/:id', (req, res) => {
    const atleta = atletas.find(j => j.id === parseInt(req.params.id));
    if (!atleta) {
        req.status(404).send('Not exist atlete.');
        return;
    }
    res.status(200).send(atleta);
}
);


app.put('/api/atletas/:id', (req, res) => {
    const atleta = atletas.find(j => j.id === parseInt(req.params.id));
    if (!atleta) {
        req.status(404).send('Atlete not exist.');
        return;
    }
    if (!req.body.nombre) {
        res.status(400).send('Ingrese el nombre del atleta');
        return;
    }
    if (!req.body.profesion) {
        res.status(400).send('Ingrese la profesión del atleta');
        return;
    }
    if (!req.body.pais) {
        res.status(400).send('Ingrese el país del atleta');
        return;
    }
    if (!req.body.edad) {
        res.status(400).send('Ingrese la edad del atleta');
        return;
    }
    if (!req.body.correo) {
        res.status(400).send('Ingrese el correo del atleta');
        return;
    }

    atleta.nombre = req.body.nombre;
    atleta.profesion = req.body.profesion;
    atleta.pais = req.body.pais;
    atleta.edad = req.body.edad;
    atleta.correo = req.body.correo;
    res.status(204).send(atleta);
}
);

app.delete('/api/atletas/:id', (req, res) => {
    const atlete = atletas.find(j => j.id === parseInt(req.params.id));
    if (!atlete) {
        req.status(404).send('Atleta no encontrado.');
        return;
    }
    const index = atletas.indexOf(atlete);
    atletas.splice(index, 1);
    res.status(204).send(atletas);
}
);