const mass = ["/img/platens/mercury.png","/img/platens/earth.png","/img/platens/moon.png","/img/platens/jupiter.png","/img/platens/neptune.png","/img/platens/uranus.png","/img/platens/venus.png","/img/platens/saturn.png"]
let url;
let num;

document.addEventListener('click',(event) =>{
    const targetMenu = document.getElementById('menu')

    if(event.target.closest('.image')){
        targetMenu.classList.toggle('visible')
    }

    if(event.target.closest('.container_menu')){
            const text = event.target.innerHTML
            num = event.target.value

            document.getElementById("span").innerText = text            
            targetMenu.classList.remove('visible')
        }
})       
     
function tap(){
    let text = document.getElementById('text');
    let logs = document.getElementById('log');
    let planetName = document.getElementById('span')

     
    if(typeof logs.innerHTML !== null){
        logs.innerHTML = ''
        logs.style.cssText=''
    }
//errors
    if(isNaN(+text.value) || typeof(num) == 'undefined' || text.value == ''){

            let div = document.createElement('div')
            let childDiv = document.createElement('div')
                
                logs.style.cssText =`
                min-width:100%;
                background-color:rgb(230, 230, 230,0.3);
                max-width: 1000px;
                width: 100%;
                margin: 20px auto; 
                padding: 30px 10rem;
                `

                div.style.cssText =`
                opacity:60%;
                background-color: rgb(185, 185, 185);
                width:100%;
                text-align:center;
                font-size:40px;
                padding:20px;
                ` 

            logs.prepend(div)
            div.prepend(childDiv)

            if(isNaN(+text.value) || text.value == '')childDiv.innerHTML = 'write a number'
            if(typeof(num) == 'undefined')childDiv.innerHTML = 'choose a planet'
        }else{
//result
        const image = document.createElement('img')
        image.setAttribute('src',`${mass[num]}`)
        image.setAttribute('alt','image')

        const divLog = document.createElement('div')
            
            divLog.innerHTML = `
            <div style="
                    align-items: center;
                    display: flex;
                    gap: 10px;
                    justify-content:center;
                    font-size: 20px;">
                    the weigth of the object on a 
                <h3>
                    ${planetName.innerText}
                </h3>
            </div>
            <div style="
                background-color:grey;  
                height: 120px;
                width: 120px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content:center;
            ">
                ${'math'}
            </div>`

        logs.prepend(image)
        logs.append(divLog) 

            logs.style.cssText =`
            margin-top:50px
            background-color:rgb(230, 230, 230,0.3);
            display:flex;
            flex-direction:row;
            padding:50px 20px;
            gap:20px;
            `
            divLog.style.cssText=`
            background-color: rgb(185, 185, 185,0.3);
            display:flex;
            flex-direction:column;
            align-items: center;
            color:white;
            height:250px;
            width:100%
            `
    }
} 