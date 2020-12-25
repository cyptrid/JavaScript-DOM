        //Event Handling
        // const close = document.querySelectorAll('.close');

        //     close.forEach(function(el){
        //     el.addEventListener('click', function(e){
        //         e.target.parentElement.style.display = 'none';
        //         //Prevent Default : menghentikan aksi default 
        //         e.preventDefault();
        //         e.stopPropagation();
        //     });
        // });
        
        //tag span di class : close jadikan tag a href

        //Event Bubbling
        // const cards = document.querySelectorAll('.card');
        // cards.forEach(function(card){
        //     card.addEventListener('click', function(){
        //         alert('ok');
        //     });
        // });

        //Event handling dan Event bubling di atas di comment dulu
        //tag a di class : close, ganti lagi ke span
        //Contoh 2 :Event Bubbling
        const container = document.querySelector('.container');
        container.addEventListener('click', function(e){
            if(e.target.className == 'close'){
                e.target.parentElement.style.display = "none";
            }
        });