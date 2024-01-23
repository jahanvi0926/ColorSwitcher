const buttons= document.querySelectorAll('.button')
    const body=document.querySelector("body")
    buttons.forEach(function(button){
        button.addEventListener('click',function(e){
             console.log(e.target)
            if(e.target.id==='grey'){
                body.style.backgroundColor = 'grey'
            }
            if(e.target.id==='pink'){
                body.style.backgroundColor = 'pink'
            }
            if(e.target.id==='blue'){
                body.style.backgroundColor = 'blue'
            }
            if(e.target.id==='yellow'){
                body.style.backgroundColor = 'yellow'
                body.style.color='black'
            }
            if(e.target.id==='black'){
                body.style.backgroundColor = 'black'
                body.style.color='white'
            }
            if(e.target.id==='red'){
                body.style.backgroundColor = 'red'
            }
        })
    });