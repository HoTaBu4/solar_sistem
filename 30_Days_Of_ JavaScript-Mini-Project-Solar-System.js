const mass = ["/img/platens/mercury.png","/img/platens/earth.png","/img/platens/moon.png","/img/platens/jupiter.png","/img/platens/neptune.png","/img/platens/uranus.png","/img/platens/venus.png","/img/platens/saturn.png"]
const freeFallAcceleration =[3.703,9.822,1.625,25.93,11.28,9.01,8.872,11.19]
let num;

document.addEventListener('click',(event) =>{
    const targetMenu = document.getElementById('menu')
    if(targetMenu){
        if(event.target.closest('.image')){
            targetMenu.classList.toggle('visible')
        }
    }   

    if(event.target.closest('.container_menu')){
            const text = event.target.innerHTML
            num = event.target.value

            document.getElementById("span").innerText = text            
            targetMenu.classList.remove('visible')
        }
})       
     
function tap(){
    let textInput = document.getElementById('text');
    let logs = document.getElementById('log');
    let planetName = document.getElementById('span')
    let error = document.getElementsByClassName('.errors')

     console.log(typeof logs.innerHTML !== null);
    if(typeof logs.innerHTML !== null){
        logs.innerHTML = ''
        logs.style.cssText=''
    }

    if(error){
        logs.classList.remove('errors')
    }
//errors
    if(isNaN(+textInput.value) || typeof(num) == 'undefined' || textInput.value == ''){

            let div = document.createElement('div')
                div.setAttribute('class','errors_background')

            let childDiv = document.createElement('div')
            
        logs.classList.add('errors')

            logs.prepend(div)
            div.prepend(childDiv)

            if(isNaN(+textInput.value) || textInput.value == '')childDiv.innerHTML = 'write a number'
            if(typeof(num) == 'undefined')childDiv.innerHTML = 'choose a planet'
        }else{
//result
        const image = document.createElement('img')
        image.setAttribute('src',`${mass[num]}`)
        image.setAttribute('alt','image')

        const divLog = document.createElement('div')
                divLog.setAttribute('class','log_info')
            
            divLog.innerHTML = `
            <div  class="output_text">
                    the weigth of the object on a 
                <h3>
                    ${planetName.innerText}
                </h3>
            </div>
            <div class="output_result">
                ${Math.floor(textInput.value * freeFallAcceleration[num])} N
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
    }
} 