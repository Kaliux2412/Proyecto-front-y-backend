let mostrar = false
function llenartabla(lista){
    const div = document.getElementById('wrap')
    if(mostrar == false){
        mostrar = true
        console.log(lista)
        let ambi = document.getElementById("botonambi")
        let pop = document.getElementById("botonpop")
        let fam = document.getElementById("botonfam")
        fetch("http://localhost:3001/"+ lista)
        .then(info => info.json())
        .then(info =>{
            console.log(info)
            const tabla = document.createElement('table')
            tabla.style.width = "60%"
            tabla.style.marginLeft = "250px"
            tabla.style.marginRight = "150px"
            tabla.className = "tabla"+ lista
            tabla.style.backgroundColor = "black"
            tabla.style.boxShadow = "5px 5px 5px 5px black"
            tabla.style.borderRadius = "10%"
            div.appendChild(tabla)
    
            if(ambi.onclick && tabla.className === 'tablaambiente'){
                tabla.style.display= "block"
            }
            if(pop.onclick && tabla === 'tablapop'){
                tabla.style.display= "block"
            }
            if(fam.onclick && tabla === 'tablafamosas'){
                tabla.style.display= "block"
            }
            const principal = document.createElement("img")
            if(lista === 'pop'){
                principal.id = "pop"
                principal.src = info[7].pop
            }
            if(lista === 'famosas'){
                principal.id = "famosas"
                principal.src = info[7].famosas
            }
            if(lista === 'ambiente'){
                principal.id = "ambi"
                principal.src = info[7].ambiente
            }
            principal.style.borderRadius = "50%"
            principal.style.marginLeft = "0"
            principal.style.marginRight = "0"
            const celpri = document.createElement("th")
            celpri.colSpan = "5"
            tabla.appendChild(celpri)
            celpri.appendChild(principal)
            for(let c = 0; c < info.length - 1; c++){
                console.log(info[c].nombre)
                const imagenes = document.createElement("img")
                imagenes.style.width = "80px";
                imagenes.style.borderRadius = "50%"
                imagenes.src = info[c].imagen
                const espacio =  document.createElement("tr")
                const celimg = document.createElement("th")
                const celdas = document.createElement("th")
                celdas.style.width = "10%"
                const celaudi = document.createElement("th")
                celaudi.style.width = "40%"
                const celka = document.createElement("th")
                const ult = document.createElement("th")
                const nombres = document.createElement("p")
                const karaoke = document.createElement("a")
                const btn = document.createElement("button")
                const like = document.createElement('button')
                like.style.borderRadius = "50%"
                like.style.width = "60px"
                like.style.height = "60px"
                like.style.backgroundColor = "black"
                const icon = document.createElement('i')
                icon.className = "fa-solid fa-heart"
                icon.style.fontSize = "30px"
                icon.style.textAlign = "center"
                icon.style.color = "white"
                like.appendChild(icon)
                btn.style.width = "60px"
                btn.style.height = "60px"
                btn.style.borderRadius = "50%"
                karaoke.title = "Click para cantarla en karaoke"
                function s (){
                    karaoke.href = info[c].karaoke
                    karaoke.target = "blank" 
                }
                karaoke.addEventListener('click',s)
                btn.style.backgroundImage = 'url("Deco/karaokeico.png")'
                karaoke.appendChild(btn)
                nombres.style.color = "white"
                nombres.style.textAlign = "center"
                const audios = document.createElement("audio")
                audios.controls = audios
                audios.src = info[c].url
                nombres.textContent = info[c].nombre
                tabla.appendChild(espacio)
                espacio.appendChild(celimg)
                celimg.appendChild(imagenes)
                espacio.appendChild(celdas)
                celdas.appendChild(nombres)
                espacio.appendChild(celaudi)
                espacio.appendChild(celka)
                celaudi.appendChild(audios)
                celka.appendChild(karaoke)
                espacio.appendChild(ult)
                ult.style.width = "10%"
                celka.style.width = "10%"
                celimg.style.width = "15%"
                ult.appendChild(like)
            }
        })
    }else{
        div.removeChild(div.lastChild)
        mostrar = false
    }
}