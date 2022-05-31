

const ruleta = document.querySelector('#ruleta')
const ruleta2 = document.getElementById('ruleta')
ruleta.addEventListener('click',girar)
function girar(){
 let rand = Math.random()* 7200
 calcular(rand)
 let sonido = document.querySelector('#audio')
 sonido.setAttribute('src', 'audios/rulsonido.mp3')
 ruleta2.appendChild(sonido)

    function premio (premios, img){
        let ingre = document.getElementById("ingredientes")
        ingre.style.width= "400px"
        ingre.style.backgroundImage = "url('Deco/reccetafo.jpg')"
        ingre.style.borderRadius = "10%"
        ingre.style.display = "block"
        ingre.style.top = "450px"
        let proceso = document.getElementById("proceso")
        proceso.style.backgroundColor = "beige"
        // proceso.style.backgroundRepeat = "no-repeat"
        proceso.style.display = "block"
        proceso.style.top = "450px"
        proceso.style.left = "420px"
        proceso.style.width = "600px"
        proceso.style.fontFamily = "receta"
        proceso.style.borderRadius = "10%"
        proceso.style.padding = "10px 10px 10px 10px"
        let elegido = document.getElementById('premios')
        elegido.style.color = "blue"  
        // elegido.style.paddingLeft = "10%"
        elegido.innerHTML =  "- LA RECETA ELEGIDA ES:" + " "+ premios +"-"
        let iprinci = document.getElementById('img')
        iprinci.style.paddingLeft = "150px"
        iprinci.style.paddingRight = "150px"
        iprinci.innerHTML = "<img src= "+img+">"
    }

    function calcular(){
        let valor = rand/360;
        valor = (valor - parseInt(valor.toString().split(".")[0]))*360;
        console.log(valor);
        ruleta2.style.transform = "rotate("+rand+"deg)";
        setTimeout(crear,7000)
        function crear(){
            switch(true){
                case valor > 0 && valor <= 90:
                    premio('PASTEL!!',"Deco/pastel.png")
                    // Esto es para crear el apartado de ingredientes
                    document.getElementById("espe0").innerHTML = "INGREDIENTES"
                    document.getElementById("li1").innerHTML = "-> Para hacer los bizcochos"
                    document.getElementById("li2").innerHTML = "* 250g de azucar"
                    document.getElementById("li3").innerHTML = "* 3 huevos"
                    document.getElementById("li4").innerHTML = "* 160ml de aceite vegetal"
                    document.getElementById("li5").innerHTML = "* 200ml de leche"
                    document.getElementById("li6").innerHTML = "* 1 cucharadita de vainilla (liquida)"
                    document.getElementById("li7").innerHTML = "* 250g de harina (de trigo preferentemente) pero si no tienes esta bien"
                    document.getElementById("li8").innerHTML = "* 70g de cacao en polvo"
                    document.getElementById("li9").innerHTML = "* 2 cucharaditas de levadura (para que se infle)"
                    document.getElementById("li10").innerHTML = "* 1 pizca de sal"
                    document.getElementById("li11").innerHTML = "* 100ml de agua caliente"
                    document.getElementById("li12").innerHTML = "* 2 cucharadas de miel"
                    document.getElementById("li13").innerHTML = "-> Para el ganache o la crema de sabor"
                    document.getElementById("li14").innerHTML = "* 350g de chocolate negro"
                    document.getElementById("li15").innerHTML = "* 700 ml de nata para montar"
                    // Esto sera el procedimiento para hacer la receta
                    document.getElementById("instru1").innerHTML = "-1. Primero haremos la ganache, para esto vamos a sacar un plato hondo y alli pondremos los 350g de chocolate negro, despues añadiremos los 700ml de nata para montar a esta la calentaremos ha fuego bajito hasta que comience a hervir y vas a dejar que repose con el chocolate por unos minutos para que derrita el chocolate. Pasado esto comienzas a batir y cuando tenga una consistencia esponjosa, cubres el bowl con un plastico y la metes al refrigerador por 8 horas" 
                    document.getElementById("instru2").innerHTML = "-2. Ahora vamos a hacer el bizcocho o panecito, para eso necesitaremos 250g de azucar y 3 huevos primero y lo batimos hasta que agarre un color blanquecino."
                    document.getElementById("instru3").innerHTML = "-3. Luego añadiremos 160ml de aceite vegetal, 200ml, la cucharadita de vainilla liquida  a la mezcla y lo batimos."
                    document.getElementById("instru4").innerHTML = "-4. Ahora añadiremos los ingredientes secos pero pondremos una coladora encima del bowl para que se cole mejor, pondremos los 250g de harina de trigo, los 70g de cacao en polvo, las 2 cucharaditas de levadura y una pizca de sal, lo colamos y batimos TODO :)"
                    document.getElementById("instru5").innerHTML = "-5. Para que quede jugoso el panecito le añadiras 100ml de agua caliente y las 2 cucharadas de miel."
                    document.getElementById("instru6").innerHTML = "-6. Ahora pondras la mezcla en los moldes (te recomiendo que sean 3 para que no sobre mezcla y todo quede perfecto) antes de poner la mezcla pouedes poner aceite anti-adherente o harina para que no se pegue."
                    document.getElementById("instru7").innerHTML = "-7. Mete los moldes al horno ya pre-calentado con un calor de 180 grados aproximadamente 25-30 minutos dependiendo de como veas el bizcocho, para eso puedes meter un palillo y ver si no hay restos."
                    document.getElementById("instru8").innerHTML = "-8. Saca los bizcochos y deja que se enfrien, y cuando se cumplan las 8 horas de refrigeracion del ganache vamos a pasar a ponerselo."
                    document.getElementById("instru9").innerHTML = "-9. Ahora vas a batir la ganache con una batidora ya que estara un poco dura."
                    document.getElementById("instru10").innerHTML = "-10. Como el bizcocho va a quedar un poco pandeado por arriba le bas a cortar con un cuchillo de la manera mas recta posible la parte inflada, para que asi el pastel quede completamente recto"
                    document.getElementById("instru11").innerHTML = "-11. Ahora vas a poner la ganache entre los bizcochos para tener muchas capas y si quieres puedes ponerle ganache por afuera para darle presentacion  y LISTOO HAZ ACABADO ESTE PASTEL ESQUISITO, PUEDES DECORARLO CON FRESAS O COMO TU QUIERAS!!"
                    document.getElementById("tiempo").innerHTML = "<img src='Deco/tiempa.png'>"
                    document.getElementById("instruccion").innerHTML = "Arrastra con el mouse hacia la caja vacia los 5 ingredientes ESENCIALES que se ocupan para hacer un pastel"
                    let caja1 = document.getElementById("caja1")
                    caja1.style.display = "block"
                    caja1.style.width = "300px"
                    caja1.style.height = "300px"
                    caja1.style.margin = "15px"
                    caja1.style.padding = "10px"
                    caja1.style.backgroundColor = "rgb(0, 221, 255)"
                    let caja2 = document.getElementById("caja2")
                    caja2.style.display = "block"
                    caja2.style.width = "300px"
                    caja2.style.height = "300px"
                    caja2.style.margin = "15px"
                    caja2.style.padding = "10px"
                    caja2.style.backgroundColor = "rgb(0, 221, 255)"
                    document.getElementById('dragtarget').innerHTML = "Chispas"
                    document.getElementById('drag2').innerHTML = "Mantequilla"
                    document.getElementById('drag3').innerHTML = "Harina"
                    document.getElementById('drag4').innerHTML = "Mayonesa"
                    document.getElementById('drag5').innerHTML = "Huevo"
                    document.getElementById('drag6').innerHTML = "Leche"
                    document.getElementById('drag7').innerHTML = "Vainilla"
                    document.getElementById('drag8').innerHTML = "Azucar"
                    
                    break
                case valor > 90 && valor <= 180:
                    premio("BATIDO!!","Deco/batidos.png")
                    document.getElementById("espe0").innerHTML = "INGREDIENTES"
                    document.getElementById("li1").innerHTML = "Esta receta contiene 3 sabores diferentes de batidos o mas bien frappucinos"
                    document.getElementById("li2").innerHTML = "-> Frappucino de Moka:"
                    document.getElementById("li3").innerHTML = "* 1 taza de hielo"
                    document.getElementById("li4").innerHTML = "* 1/3 de taza de cafe"
                    document.getElementById("li5").innerHTML = "* 1/3 de taza de leche"
                    document.getElementById("li6").innerHTML = "* 2 cucharadas de chocolate liquido o derretido"
                    document.getElementById("li7").innerHTML = "-> Frappucino de Chocochip:"
                    document.getElementById("li8").innerHTML = "* 1 taza de hielo"
                    document.getElementById("li9").innerHTML = "* 1/2 de cafe "
                    document.getElementById("li10").innerHTML = "* 1/4 de taza de leche"
                    document.getElementById("li11").innerHTML = "* 4 cucharadas de chispas de chocolate"
                    document.getElementById("li12").innerHTML = "* 2 cucharadas de chocolate liquido"
                    document.getElementById("li13").innerHTML = "-> Frappucino de caramelo:"
                    document.getElementById("li14").innerHTML = "* 1 taza de hielo"
                    document.getElementById("li15").innerHTML = "* 1/3 de taza de leche"
                    document.getElementById("li16").innerHTML = "* 4 cucharadas de caramelo (este se puede hacer hirviendo 1 taza de azucar, 90 gramos de mantequilla, 1/2 de crema para batir y una cucharadita de sal)"
                    // Esta parte es el metodo de preparacion
                    document.getElementById("instru1").innerHTML = "-1. PRIMERO HAREMOS EL DE MOKA:"
                    document.getElementById("instru2").innerHTML = "-2. Para eso nececitaremos vaciar una taza de hielo, 1/3 de taza de cafe, 1/3 de taza de leche y 2 cucharadas de chocolate liquido o derretido , TODO esto en una LICUADORA, lo licuas y listo ya tienes un delicioso frappucino!!"
                    document.getElementById("instru3").innerHTML = "-3. FRAPPUCINO DE CHOCOCHIP:"
                    document.getElementById("instru4").innerHTML = "-4. Para este necesitaremos tambien vaciar 1 taza de hielo, 1/2 de cafe, 1/4 de taza de leche, 4 cucharadas de chispas de chocolate y 2 cucharadas de chocolate liquido, lo LICUAS y listo!!"
                    document.getElementById("instru5").innerHTML = "-5. FRAPPUCINO DE CARAMELO:"
                    document.getElementById("instru6").innerHTML = "-6. Para este necesitamos hacer el caramelo casero,  primero hierve 1 taza de azucar, cuando ya este caramelizada pones 90 gramos de mantequillas, 1/2 taza de crema para batir y una cucharadita de sal, y listo tienes tu caramelo casero."
                    document.getElementById("instru7").innerHTML = "-7. Entonces nada mas licuas 1 taza de hielo, 1/3 de taza de leche y 4 cucharadas del caramelo que preparaste y listo puedes decorar el vaso como quieras poniendole crema batida o algo asi :)"
                    document.getElementById("tiempo").innerHTML = "<img src='Deco/tiemba.png'>"
                    document.getElementById("instruccion").innerHTML = "Arrastra con el mouse hacia la caja vacia los 3 ingredientes ESENCIALES que necesitas para hacer un Frappe"
                    document.getElementById('dragtarget').innerHTML = "Levadura"
                    document.getElementById('drag2').innerHTML = "Hielo"
                    document.getElementById('drag3').innerHTML = "Cafe"
                    document.getElementById('drag4').innerHTML = "Galletas"
                    document.getElementById('drag5').innerHTML = "Huevo"
                    document.getElementById('drag6').innerHTML = "Leche"
                    break
                case valor > 180 && valor <= 270:
                    premio("DONAS","Deco/donas.png")
                    document.getElementById("espe0").innerHTML = "INGREDIENTES"
                    document.getElementById("li1").innerHTML = "-> Para hacer la dona"
                    document.getElementById("li2").innerHTML = "* 500g de harina de trigo"
                    document.getElementById("li3").innerHTML = "* 3 huevos"
                    document.getElementById("li4").innerHTML = "* 75g de mantequilla"
                    document.getElementById("li5").innerHTML = "* 120ml de leche"
                    document.getElementById("li6").innerHTML = "* 2 cucharadas de levadura instantanea"
                    document.getElementById("li7").innerHTML = "* 100g de azucar"
                    document.getElementById("li8").innerHTML = "* Una cucharada de sal molida"
                    document.getElementById("li9").innerHTML = "* Una pizca de canela molida"
                    document.getElementById("li10").innerHTML = "* 1 una cucharadita de vainilla"
                    document.getElementById("li11").innerHTML = "* Aceite para freir"
                    document.getElementById("li12").innerHTML = "-> Para hacer el glaseado y decorar"
                    document.getElementById("li13").innerHTML = "* 15g de mantequilla"
                    document.getElementById("li14").innerHTML = "* 100g de chocolate semiamargo"
                    document.getElementById("li15").innerHTML = "* 100g de azucar glass"
                    document.getElementById("li16").innerHTML = "OPCIONAL: Chispas de colores o de chocolate"
                    // Parte de metodo de preparacion
                    document.getElementById("instru1").innerHTML = "-1. Primero tibia los 120ml leche, agregas una cucharada de harina de trigo, una cucharada de azucar y dos cucharadas de levadura y mezclas todo hasta que desaparezcan los grumos y lo dejas reposar por 10 minutos hasta que duplique su tamano"+ "<img src= 'Deco/sunflower.jpg' class= 'jiji'>"
                    document.getElementById("instru2").innerHTML = "-2. En una area limpia ya sea en una tabla o en la misma mesa, pon los 500g de harina de trigo y haces un hueco en el centro de la harina y en ese hueco pones la levadura que habias hecho junto con 3 huevos previamente batidos, pones lo que te quede de azucar, la cucharadita de la esencia de vainilla, otra cucharadita de canela y otra cucharadita de sal molida"
                    document.getElementById("instru3").innerHTML = "-3. Bates todo con la mano o guantes hasta que comience hacerce cono una masa y cuando ya tenga la textura de masa le agregas los 75g de mantequilla  a temperatura ambiente y lo vuelves a batir con la mano y cuando quede una masita mas amarilla y suave significa que ya acabaste de mezclar."
                    document.getElementById("instru4").innerHTML = "-4. Y con moldes o un vaso pudes hacer los circulos para darle forma a la dona y horneala por 1 hora o hasta que dupliquen su tamano."
                    document.getElementById("instru5").innerHTML = "-5. Vierte la taza de azucar glass en un bowl y con u a cuchara agrega poco a poco un chorrito de agua hasta que la mezcla tenga una consistencia cremosa (TODO ESTO ES PARA HACER El GLASEADO)."
                    document.getElementById("instru6").innerHTML = "-6. Pon en otro bowl la barra de chocolate derretido y los 15g de mantequilla y mezclalos bien (ESTO ES PARA HACER EL GLASEADO DE CHOCOLATE)."
                    document.getElementById("instru7").innerHTML = "-7. Saca las donas del horno y en una casuela honda vierte suficiente aceite para que las donas puedan sumergirse completamente y a fuego lento iras poniendo las donas. Por cada cara de la dona dejaras que se fria por 30 segundos hasta que tengan un color dorado."
                    document.getElementById("tiempo").innerHTML = "<img src='Deco/tiempa.png'>"
                    document.getElementById("instru8").innerHTML = "-8. Y listo, dejas que se enfrien por un ratito y ya con los glaseados que hiciste anteriormente podras decorarlas como se te antoje!!!!"
                    document.getElementById("tiempo").innerHTML = "<img src='Deco/tiemdo.png'>"
                    document.getElementById("instruccion").innerHTML = "Arrastra con el mouse hacia la caja vacia los materiales esenciales que se ocupan para hacer un pastel"
                    document.getElementById('dragtarget').innerHTML = "Levadura"
                    document.getElementById('drag2').innerHTML = "Harina"
                    document.getElementById('drag3').innerHTML = "mayonesa"
                    document.getElementById('drag4').innerHTML = "tequila"
                    break
                case valor > 270 && valor <= 360:
                    premio("HELADO","Deco/helado.png")
                    document.getElementById("espe0").innerHTML = "INGREDIENTES"
                    document.getElementById("li1").innerHTML = "Para hacer TODO el helado!!"
                    document.getElementById("li2").innerHTML = "* Un paquete de galletas OREO de 10 piezas"
                    document.getElementById("li3").innerHTML = "* Una lata de leche condensada (mediana)"
                    document.getElementById("li4").innerHTML = "* 500 ml de crema (la normal) o crema para batir"
                    document.getElementById("li5").innerHTML = "* Una cucharadita de vainilla (liquida)"
                    // Esto es el modo de preparacion
                    document.getElementById("instru1").innerHTML = "-1. Primero pondremos en un bowl todas las galletas de un paquete de OREO normal y las aplastas ya sea con un vaso o cuchara"+ "<img src= 'Deco/sunflower.jpg' class= 'jiji'>"
                    document.getElementById("instru2").innerHTML = "-2. Ahora en otro bowl vas a poner los 500ml de crema, toda la lata de leche condensada  y la cucharada de vainilla liquida par aque le de mas sabor y vas a batir todo"
                    document.getElementById("instru3").innerHTML = "-3. Luego pones los trocitos que hiciste con las galletas en la mezcla ."
                    document.getElementById("instru4").innerHTML = "-4. Por ultimo vacias toda la mezcla en un refractario para que se congele mejor y arriba le pones otros trocitos de galleta para que le de textura, le pones plastico de cocina y lo congelas por 5 horas y LISTO YA TE QUEDO UN HELADO SUPER SUAVE Y RICO!!!"
                    document.getElementById("tiempo").innerHTML = "<img src='Deco/tiemhe.png'>"
                    document.getElementById("instruccion").innerHTML = "Arrastra con el mouse hacia la caja vacia los ingredientes esenciales que se ocupan para hacer un pastel"
                    document.getElementById('dragtarget').innerHTML = "Levadura"
                    document.getElementById('drag2').innerHTML = "mantequilla"
                    document.getElementById('drag3').innerHTML = "mayonesa"
                    document.getElementById('drag4').innerHTML = "tequila"
                    break
            }   
        }
    }
}

let par
function cargarpares(){
    par = [
        '<img src="Deco/prueba.png" style="margin-top: 10px">',
        '<img src="Deco/par2.png" style="margin-top: 10px">',
        '<img src="Deco/par3.png" style="margin-top: 10px">',
        '<img src="Deco/par4.png" style="margin-top: 10px">',
        '<img src="Deco/par5.png" style="margin-top: 10px">',
        '<img src="Deco/par6.png" style="margin-top: 10px">',
        '<img src="Deco/par7.png" style="margin-top: 10px">',
        '<img src="Deco/par8.png" style="margin-top: 10px">',
        '<img src="Deco/par9.png" style="margin-top: 10px">',
        '<img src="Deco/par10.png" style="margin-top: 10px">',
        '<img src="Deco/par11.png" style="margin-top: 10px">',
        '<img src="Deco/par12.png" style="margin-top: 10px">',
        '<img src="Deco/par13.png" style="margin-top: 10px">',
        '<img src="Deco/par14.png" style="margin-top: 10px">',
        '<img src="Deco/par15.png" style="margin-top: 10px">',
    ]
}
function generartablero(){
    cargarpares()
    let tablero = document.getElementById("tablero")
    let tarjetas = []
    for(let n = 0; n < 30; n++){
        tarjetas.push(`
            <div class="tarwrap" onclick="tarjetaselec(${n})">
                <div class="tarjeta" id="tarjeta${n}">
                    <div class="superior">
                        <img src="Deco/icono1.png" style="margin-top: 10px">
                    </div>
                    <div class="trasera" id="trasera${n}">
                        ${par[0]}
                    </div>
                </div>
            </div>`  
        )
        if(n%2==1){
            par.splice(0,1)
        }
    }
    tarjetas.sort(()=>Math.random()- 0.5)
    tablero.innerHTML = tarjetas.join(" ")
}

let selecciones = []

function tarjetaselec(n){
    let tarjeta = document.getElementById("tarjeta"+ n)
    if(tarjeta.style.transform != "rotateY(180deg)"){
        tarjeta.style.transform = "rotateY(180deg)"
        selecciones.push(n)
    }
    if(selecciones.length == 2){
        deseleccionar(selecciones)
        selecciones = []
    }
}
function deseleccionar(selecciones){
    setTimeout(()=>{
        let tarjeta1 = document.getElementById("tarjeta" + selecciones[0])
        let tarjeta2 = document.getElementById("tarjeta" + selecciones[1])
        let trasera1 = document.getElementById("trasera" + selecciones[0])
        let trasera2 = document.getElementById("trasera" + selecciones[1])
        if(trasera1.innerHTML != trasera2.innerHTML){
            tarjeta1 = document.getElementById("tarjeta" + selecciones[0])
            tarjeta2 = document.getElementById("tarjeta" + selecciones[1])
            tarjeta1.style.transform = "rotateY(0deg)"
            tarjeta2.style.transform = "rotateY(0deg)"
        }else{
            trasera1.style.background = "plum"
            trasera2.style.background = "plum"
        }
    },1000)
}

let recetarios = true
function traerRecetarios(){

    console.log('recetarios', recetarios)

    const mostrar =  document.getElementById("menufi")
    if(recetarios == true){
        console.log("crear")
        recetarios = false
        if(document.getElementById("canales").onclick){
            recetarios = false
        }
        const intro = document.createElement('p')
        intro.style.fontFamily = "fafers"
        intro.style.fontSize = "25px"
        intro.style.marginLeft = "60px"
        intro.style.marginRight = "60px"
        intro.innerHTML = "Si eres un fanatico de la cocina y quieres saber y aprender mas de esta, te recomendamos los mejores libros de cocina que debes leer :)"
        mostrar.appendChild(intro)
        fetch("http://localhost:3001/recetarios")
        .then(datos => datos.json())
        .then(datos=>{console.log(datos)
            // let tabla = document.createElement('table')
            // tabla.style.width = "40%"
            // tabla.style.backgroundImage
            const div = document.createElement("div")
            div.style.width = "1100px"
            div.appendChild(intro)
            for(let n = 0; n < datos.length; n++){
                const a1 = document.createElement("a")
                a1.href = `#vista${n}`
                a1.title = "Haz click para ver la informacion del libro"
                const direccion = document.createElement('button')
                direccion.className = "botonli"
                direccion.onclick = function(){
                    fetch(`http://localhost:3001/recetarios/${n}`)
                    .then(traer => traer.json())
                    .then(traer => {
                        console.log(traer)
                        const sec = document.createElement("section")
                        sec.id = `vista${n}`
                        sec.className = "modalesrec"

                        let caja = document.createElement("div")
                        caja.className = "boom"

                        let figura = document.createElement("figure")
                        
                        let grid = document.createElement("div")
                        grid.style.width = "300px"
                        grid.style.marginTop = "80px"
                        grid.style.marginBottom = "80px"

                        let img = document.createElement("img")
                        img.src = traer.imagen
                        img.className = "portada"
                        
                        let grid2 = document.createElement("div")
                        grid2.style.width = "300px"
                        grid2.style.height = "300px"
                        grid2.className = "sepa"

                        let des = document.createElement("p")
                        des.innerHTML = traer.descripcion


                        let nombre = document.createElement('p')
                        nombre.innerHTML = traer.nombre
                        nombre.className = "nombres1"

                        let link = document.createElement('a')
                        link.href = traer.link
                        link.innerHTML = "Pdf o Vinculo Del Libro"
                        link.className = "pdf"

                        let espacio = document.createElement("p")
                        espacio.innerHTML = " "

                        let cerrar = document.createElement("a")
                        cerrar.href = '#menufi'
                        cerrar.innerHTML = "Volver"
                        cerrar.className = "re1"

                        sec.appendChild(caja)
                        caja.appendChild(figura)
                        grid.appendChild(img)
                        figura.appendChild(grid)
                        grid2.appendChild(nombre)
                        grid2.appendChild(des)
                        grid2.appendChild(link)
                        grid2.appendChild(espacio)
                        grid2.appendChild(cerrar)
                        caja.appendChild(grid2)
                        div.appendChild(sec)

                        


                    })
                }
                const rece1 = document.createElement('img')
                rece1.src = datos[n].imagen
                rece1.style.borderRadius = "15%"
                rece1.style.width = "100px"
                rece1.style.height = "150px"
                rece1.style.marginBottom = "15px"
                rece1.style.boxShadow = "0 0 25px white"
                rece1.id = `rece${n}`


                direccion.appendChild(rece1)
                div.appendChild(a1) 
                a1.appendChild(direccion)
                mostrar.appendChild(div)

            }
        })
    }else{
        console.log("limpiar")
        // console.log(mostrar.lastChild)
        mostrar.removeChild(mostrar.lastChild)
        recetarios = true
    }

}
let canal = true
function traerCanales(){
    const mostrar =  document.getElementById("menufi")
    if(canal == true){
        canal = false
        if(document.getElementById("rece").onclick){
            canal = false
        }
        // document.getElementById("canales").onclick
        console.log("holaaaaa")
        fetch("http://localhost:3001/canales")
        .then(canales => canales.json())
        .then(canales=>{
            let imagenc = document.createElement("img")
            console.log(canales)
            const cajac = document.createElement("div")
            cajac.style.width = "1100px"
            for(let c = 0; c < canales.length; c++){
                const a = document.createElement("a")
                a.href = `#modal${c}`
                const vinculo = document.createElement("button")
                vinculo.onclick = function(){
                    fetch(`http://localhost:3001/canales/${c}`)
                    .then(traer1 => traer1.json())
                    .then(traer1 => {
                        console.log(traer1)
                        const sec = document.createElement("section")
                        sec.id = `modal${c}`
                        sec.className = "modales"

                        let caja = document.createElement("div")
                        caja.className = "cajita"

                        let figura = document.createElement("figure")
                        
                        let grid = document.createElement("div")
                        grid.style.width = "300px"

                        let img = document.createElement("img")
                        img.src = traer1.imagendes
                        img.className = "imagendes"
                        
                        let grid2 = document.createElement("div")
                        grid2.style.width = "300px"
                        grid2.style.height = "300px"
                        grid2.className = "info"

                        let des = document.createElement("p")
                        des.innerHTML = traer1.descripcion


                        let nombre = document.createElement('p')
                        nombre.innerHTML = traer1.nombre
                        nombre.className = "nombres"

                        let link = document.createElement('a')
                        link.href = traer1.vinculo
                        link.innerHTML = "Ir al Canal"
                        link.className = "link1"

                        let espacio = document.createElement("p")
                        espacio.innerHTML = " "

                        let cerrar = document.createElement("a")
                        cerrar.href = '#menufi'
                        cerrar.innerHTML = "Regresar"
                        cerrar.className = "re"

                        sec.appendChild(caja)
                        caja.appendChild(figura)
                        grid.appendChild(img)
                        figura.appendChild(grid)
                        grid2.appendChild(nombre)
                        grid2.appendChild(des)
                        grid2.appendChild(link)
                        grid2.appendChild(espacio)
                        grid2.appendChild(cerrar)
                        caja.appendChild(grid2)
                        cajac.appendChild(sec)

                    })
                }
                vinculo.title = "Haz click para saber mas sobre el canal"
                vinculo.className = "boto"
                imagenc = document.createElement("img")
                imagenc.style.width = "80px"
                imagenc.style.borderRadius = "50%"
                imagenc.src = canales[c].imagen
                imagenc.style.display = "inline-block"
                imagenc.style.boxShadow = "0 0 25px white"
                imagenc.id = `canal${c}`
                imagenc.className = "canalima"
                cajac.appendChild(a)
                a.appendChild(vinculo)
                vinculo.appendChild(imagenc)
                mostrar.appendChild(cajac)
                // let lista = l.length
                // console.log(lista)
                // if(document.getElementById(lista[0]).onclick){
                //     console.log("ssii")
                // }
            }

        })
    }
    else{
        mostrar.removeChild(mostrar.lastChild)
        canal = true
    }

}