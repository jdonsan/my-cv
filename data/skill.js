module.exports = {
    model: 'Skill',
    documents: [
        {
            name: 'JavaScript',
            category: 'Lenguaje de programación',
            description: `
                Me gusta mucho programar con este lenguaje de programación. 
                Me da una libertad a la hora de desarrollar que no consigo con otros.
                Me divierte mucho programar aplicaciones en JS.
            `,
            type: 'FRONT',
            level: 85,
            yearsExperience: 4,
            logo: 'img/skill/js.png',
            active: true
        },
        {
            name: 'CSS3',
            category: 'Hojas de estilos',
            description: `
                No me considero un experto en CSS. Lo tengo respeto y me falta 
                mucho para llegar a ser un buen maquetador con CSS, pero si me defiendo bien
                y puedo ser muy resolutivo.
            `,
            type: 'FRONT',
            level: 65,
            yearsExperience: 4,
            logo: 'img/skill/css3.png',
            active: true
        },
        {
            name: 'HTML5',
            category: 'Lenguaje de marcado',
            description: `
                Disfruto mucho maquetando con HTML. Me gusta aportar el mayor valor semántico
                a mi marcado e intento aprovechar todas las ventajas que nos aporta la nueva versión.
            `,
            type: 'FRONT',
            level: 90,
            yearsExperience: 4,
            logo: 'img/skill/html5.png',
            active: true
        },
        {
            name: 'AngularJS',
            category: 'Framework de programación',
            description: `
                He usado otros frameworks como Ember o BackboneJS, pero con el que más disfruto, el que 
                mejor entiendo y con el que más productivo soy es con el framework de Google.
            `,
            type: 'FRONT',
            level: 85,
            yearsExperience: 3,
            logo: 'img/skill/angular.png',
            active: true
        },
        {
            name: 'NodeJS',
            category: 'Plataforma de servidor',
            description: `
                Estamos usando NodeJS para bastantes proyectos y cada vez desarrollamos de una manera más cómoda
                y sencilla. Conseguimos APIs muy mantenibles y fàciles de probar.
            `,
            type: 'BACK',
            level: 65,
            yearsExperience: 2,
            logo: 'img/skill/node.png',
            active: true
        },
        {
            name: 'MongoDB',
            category: 'Base de datos',
            description: `
                Para proyectos concretos, me gusta mucho trabajar con MongoDB y la versatilidad que me da. Le veo
                limitaciones, pero me ayuda mucho a crear prototipos rápidamente.
            `,
            type: 'BACK',
            level: 55,
            yearsExperience: 2,
            logo: 'img/skill/mongo.png',
            active: true
        }
    ]
};