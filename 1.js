/*JS*/
 document.addEventListener('DOMContentLoaded',function(){
    var navbar = document.getElementById('navigation');
    var status = 'under 50';


     window.addEventListener('scroll',function(){
        if (window.pageYOffset > 50){
            if (status == 'under 50'){
                status = 'over 50';
                navbar.classList.add('bg');
            }
        }
        else if ( window.pageYOffset <= 50) {
            if ( status == 'over 50'){
                status = 'under 50';
                navbar.classList.remove('bg');
            }
        }
    })
})

 /*Jquery*/

$(document).ready(function () {
	 $('.skill-information').slideUp();
    $('._1line').click(function(){
        $(this).children('.skill-information').slideToggle();
    })

})
