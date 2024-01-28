const divs = document.querySelectorAll('.box-content');

divs.forEach(div => {
    div.addEventListener('click', function(){
        divs.forEach(div => {
            if(div !== this){
                div.classList.remove('ativo');
                div.style.backgroundColor = '';
            }
        });
        this.classList.toggle('ativo');
    })
})

divs.forEach(div=>{
    div.addEventListener('mousedown', function(){
        divs.forEach(div=> {
            if(div !== this){
                div.classList.remove('segurando');
                div.style.backgroundColor='';
            }
        })
        this.classList.toggle('segurando');
    })
})

divs.forEach(div=>{
    div.addEventListener('mouseup', function(){
        divs.forEach(div=> {
            if(div !== this){
                div.classList.remove('segurando');
                div.style.backgroundColor='';
            }
        })
        this.classList.toggle('segurando');
    })
})