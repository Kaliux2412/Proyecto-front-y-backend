const express = require('express')
let cors = require('cors')
const res = require('express/lib/response')
const app = express()
app.use(cors())
const port = 3001
let musica=[
    {
        imagen:"Deco/lovely.jpg",
        playlist: "ambiente",
        artista:"Billie Eilish",
        nombre:"Lovely",
        url: "audios/Billie_Eilish_-_Lovely_Ft_Khalid.mp3",
        karaoke:"https://youtu.be/Hy2RqJo11HE"
    },
    {
        imagen:"Deco/sunflower.jpg",
        playlist: "ambiente",
        artista:"Post Malone, Swae Lee",
        nombre:"Sunflower",
        url: "audios/Sunflower.mp3",
        karaoke:"https://youtu.be/awxvtj-0JKw?t=9"
    },
    {
        imagen:"Deco/get lucky.jpg",
        playlist: "ambiente",
        artista:"Daft Punk, Pharell Williams",
        nombre:"Get Lucky",
        url: "audios/Daft Punk Get Lucky.mp3",
        karaoke:"https://youtu.be/ePLaZOSBXJw?t=7"
    },
    {
        imagen:"Deco/happy.jpg",
        playlist: "ambiente",
        artista:"Pharell Williams",
        nombre:"Happy",
        url: "audios/Pharrell Williams-Happy.mp3",
        karaoke:"https://youtu.be/08IhZQUm7Mc?t=6"
    },
    {
        imagen:"Deco/blue sky.jpg",
        playlist: "ambiente",
        artista:"Electric Light Orchestra",
        nombre:"Mr. Blue Sky",
        url: "audios/Mr. Blue Sky.mp3",
        karaoke:"https://youtu.be/1A3kf7dq_14"
    },
    {
        imagen:"Deco/september.webp",
        playlist: "ambiente",
        artista:"Earth, Wind & Fire",
        nombre:"September",
        url: "audios/September.mp3",
        karaoke:"https://youtu.be/cKRmRYad318?t=10"
    },
    {
        imagen:"Deco/goodfeeling.webp",
        playlist: "ambiente",
        artista:"Florida",
        nombre:"Good Feeling",
        url: "audios/Good Feeling.mp3",
        karaoke:"https://youtu.be/07f7JUndw1I?t=12"
    },
    {
        ambiente: "Deco/AMBIENTE.png",
    },
]
let pop = [
    {
        imagen:"Deco/shapeofyou.jpg",
        nombre:"Shape of You",
        url: "audios/Shape of You.mp3",
        karaoke:"https://youtu.be/o71_MatpYV0?t=10"
    },
    {
        imagen:"Deco/countingstars.jpg",
        nombre:"Counting Stars",
        url: "audios/Counting Stars.mp3",
        karaoke:"https://youtu.be/PBn0A4kD71o?t=6"
    },
    {
        imagen:"Deco/jagger.jpg",
        nombre:"Moves Like Jagger",
        url: "audios/Moves Like Jagger.mp3",
        karaoke:"https://youtu.be/ViexBUcAayI?t=6"
    },
    {
        imagen:"Deco/beautiful.webp",
        nombre:"What Makes You Beautiful",
        url: "audios/What Makes You Beautiful.mp3",
        karaoke:"https://youtu.be/SLrJwiLsa9A?t=10"
    },
    {
        imagen:"Deco/uptownfunk.jpg",
        nombre:"Uptown Funk",
        url: "audios/Uptown Funk.mp3",
        karaoke:"https://youtu.be/OpRqT1PhPdE?t=5"
    },
    {
        imagen:"Deco/callmemaybe.jpg",
        nombre:"Call Me Maybe",
        url: "audios/Call Me Maybe.mp3",
        karaoke:"https://youtu.be/oWPesACFhBA"
    },
    {
        imagen:"Deco/somebody.jpg",
        nombre: "Somebody That Used To Love",
        url: "audios/Somebody That I Used To Know.mp3",
        karaoke:"https://youtu.be/g-cvByECSlE"
    },
    {
        pop: "Deco/pop.png",
    },

]
let famosas = [
    {
        imagen:"Deco/girls.jpg",
        nombre: "GIrls Like You",
        url: "audios/Girls Like You.mp3",
        karaoke:"https://youtu.be/VGKiz28UYRU" 
    },
    {
        imagen:"Deco/party.jpg",
        nombre: "Party Rock Athem",
        url: "audios/Party Rock Anthem.mp3",
        karaoke:"https://youtu.be/0WM9Amg7F5s" 
    },
    {
        imagen:"Deco/stressedout.jpg",
        nombre: "Stressed Out",
        url: "audios/twenty one pilots_ Stressed Out [OFFICIAL VIDEO].mp3",
        karaoke:"https://youtu.be/TXHl_BfbIW8" 
    },
    {
        imagen:"Deco/beliver.jpg",
        nombre: "Believer",
        url: "audios/believer.mp3",
        karaoke:"hhttps://youtu.be/_7qp0JMxOTs?t=8" 
    },
    {
        imagen:"Deco/rolling.jpg",
        nombre: "Rolling In The Deep",
        url: "audios/Rolling in the Deep2.mp3",
        karaoke:"https://youtu.be/Gkm449lK9Qw" 
    },
    {
        imagen:"Deco/enemy.jpg",
        nombre: "Enemy",
        url: "audios/Enemy.mp3",
        karaoke:"https://youtu.be/8FBc3bazVdQ?t=6" 
    },
    {
        imagen:"Deco/young.jpg",
        nombre: "We Are Young",
        url: "audios/We Are Young.mp3",
        karaoke:"https://youtu.be/piA8NT0P-a8?t=5" 
    },
    {
        famosas: "Deco/famosas.png",
    }
]
let recetarios = [
    {
        imagen: "Deco/Larousse.jpg",
        nombre: "Larousse Gastronomique",
        link: "https://docer.com.ar/doc/n8x58v5",
        descripcion: "Este maravilloso libro de cultura culinaria se escribio en 1938, redactada por el famoso cocinero francés Prosper Montagné. Este libro ofrece un sin fin de recetas, uso de utencilios y responde preguntas sobre la cocina."
    },
    {
        imagen: "Deco/laurome.jpg",
        nombre: "Larousse De La Cocina Mexicana",
        link: "https://pdfcoffee.com/larousse-de-la-cocina-mexicana-pdf-pdf-free.html",
        descripcion: "Este libro es como la enciclopedia de las recetas y coomida mexicana, aqui podras encontrar muchos tips y creaciones que no sabias que existian."
    },
    {
        imagen: "Deco/codech.webp",
        nombre: "Confesiones De Un Chef",
        link: "https://www.academia.edu/10619085/Anthony_Bourdain_Anthony_Bourdain_Confesiones_Confesiones_de_un_chef_de_un_chef",
        descripcion: "Este es un libro que cuenta todo sobre el mundo de la gastronomia, de una manera divertida y para pasar el rato. Este libro no contiene recetas."
    },
    {
        imagen: "Deco/cotra.jpg",
        nombre: "Cocinar Una Historia Natural de La Transformación",
        link: "https://www.scribd.com/document/528070733/Cocinar-Una-Historia-Natural-de-La-Transformacion-by-Pollan-Michael-Z-lib-org",
        descripcion: "Este libro te explica la evolucion que ha tenido la cocina y el porque deberias de cocinar."
    },
    {
        imagen: "Deco/regla.jpg",
        nombre: "Regla Para Comer Sanamente",
        link: "https://www.scribd.com/doc/138350616/Reglas-de-Alimentacion-Pollan",
        descripcion: "Este libro te da la clave para alimentarte sanamente y poder lograr tener una mejor salud, disfrutando de comer comida muy sabrosa pero con ingredientes muy sanos."
    },
    {
        imagen: "Deco/sal.jpg",
        nombre: "SAL, ÁCIDO, GRASA Y CALOR",
        link: "https://doku.pub/download/sal-grasa-acido-calor-el-arte-de-dominar-los-cuatro-elementos-de-la-buena-cocina-samin-nosratpdf-9qgxv6dkoxln",
        descripcion: "En este libro la escritora divide la cocina en 4 elementos principales los cuales son los del titulo, en donde representa cada uno viajando alrededor del planeta para conocer una sin fin de variedad de platillos."
    },
    {
        imagen: "Deco/moder.jpg",
        nombre: "Modernist Cuisine: El arte y la ciencia de la cocina",
        link: "https://docer.com.ar/doc/n80csev",
        descripcion: "Este es un quit de cinco libros donde, tambien contiene gran cantidad de recetas con una muy buena explicacion."
    },
    {
        imagen: "Deco/pro.jpg",
        nombre: "The Profesional Chef",
        link: "https://archive.org/details/theculinaryinstituteofamericatheprofessionalchef/page/n621/mode/2up",
        descripcion: "Este libro contiene la explicacion para convertirte en un chef profecional, desde como elegir cada ingrediente hasta como decorar y crear un platillo perfecto, un libro perfecto para las personas que quieran ser chefs profecionales."
    },
]
let canales = [
    {
        imagen: "Deco/vicky.jpg" ,
        nombre: "Vicky Receta Facil",
        imagendes: "Deco/vickydes.png",
        descripcion: "Esta YouTuber explica de una manera facil y clara como hacer una sinfin de variedad de recetas.",
        vinculo: "https://www.youtube.com/c/VICKYRECETAFACIL"
    },
    {
        imagen: "Deco/marisol.jpg" ,
        descripcion: "Ella hace sus videos de una manera que te diviertes y logras hacer cosas extremadamente ricas.",
        imagendes: "Deco/pinkdes.png",
        nombre: "Marisol Pink",
        vinculo: "https://www.youtube.com/user/Marisolpink"
    },
    {
        imagen: "Deco/rebe.jpg" ,
        imagendes: "Deco/rebedes.png",
        nombre: "RebeO",
        descripcion: "Ella hace videos rapidos pero muy claros y divertidos, sus recetas tambien son muy buenas.",
        vinculo: "https://www.youtube.com/c/RebeO"
    },
    {
        imagen: "Deco/cupcakes.jpg" ,
        imagendes: "Deco/cupdes.png",
        nombre: "Quiero Cupcakes!",
        descripcion: "Ella se especializa en hacer videos sobre como hace pasteles increibles, y de paso te pasa la receta.",
        vinculo: "https://www.youtube.com/c/QuieroCupcakesbcn"
    },
    {
        imagen: "Deco/guzzi.jpg" ,
        imagendes: "Deco/guzzides.png",
        nombre: "El Guzzi",
        descripcion: "Este chef super divertido te explicara como hacer muchisimas cosas y nunca aburrirte cocinando.",
        vinculo: "https://www.youtube.com/c/ElGuzii"
    },
    {
        imagen: "Deco/capital.jpg" ,
        imagendes: "Deco/capitaldes.png",
        nombre: "La Capital",
        descripcion: "Este canal sobre todo es dedicado para explicar a todos como se hace un buen platillo de cortes.",
        vinculo: "https://www.youtube.com/c/lacapitalcocina"
    },
    {
        imagen: "Deco/paulina.jpg" ,
        nombre: "Paulina Cocina",
        imagendes: "Deco/paudes.png",
        descripcion: "Ella cocina de una forma muy divertida y nos muestra recetas que no sabiamos que existian, y que todos podemos fallar al cocinar.",
        vinculo: "https://www.youtube.com/c/PaulinaCocinaNetBlog"
    },
]
let paises = [
    {
        nombre: "Rusia"
    },
    {
        nombre: "Mexico"
    }
]
app.get('/ambiente',(req,res)=>{
    res.json(musica)
})
app.get('/pop',(requ, respo)=>{
    respo.json(pop)
})
app.get('/famosas',(q,s)=>{
    s.json(famosas)
})
app.get('/recetarios',(q,r)=>{
    r.json(recetarios)
})
app.get('/recetarios/:id',(qu,pu)=>{
    let id = qu.params.id
    pu.json(recetarios[id])
})
app.get('/canales',(q,re)=>{
    re.json(canales)
})
app.get('/canales/:id',(requ,ress)=>{
    let id = requ.params.id
    ress.json(canales[id])
})
app.get('/paises/:elegido',(requ,ress)=>{
    let elegido = requ.params.elegido
    ress.json(paises[elegido])
    const paisesra = paises.filter(paises => paises[elegido])
    ress.json(paisesra)
    ress.send({cadapais: paisesra})
})
app.get('/paises/',(requ,ress)=>{
    ress.json(paises)
})
app.listen(port, ()=>{
    console.log(`El puerto esta listo ${port}`)
})