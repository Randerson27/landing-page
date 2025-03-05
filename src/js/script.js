/*menu stick top*/
$(document).ready(function(){
    $('#btn-hamburguer').on('click',function (){
            $('#mobile-menu').toggleClass('active')
        });
    });
    
    const header = document.querySelector('.header');
    const logo = document.querySelector('logo');
    window.addEventListener('scroll', function(){
        if(this.scrollY > 100){
            header.classList.add('slidedown');
            // logo.style.color = '#000';
        }else{
            header.classList.remove('slidedown');
            // logo.style.color = '';
        } 
    });
    
    /*Menu scroll active*/
            let navLinks = document.querySelectorAll('.btnLinks');
            let sections = document.querySelectorAll('.section');
    
            window.onscroll = () => {
                sections.forEach(sec =>{
                    let top = window.scrollY;
                    let offset = sec.offsetTop -500;
                    let height = sec.offsetHeight;
                    let id = sec.getAttribute('id');
    
                    if(top >= offset && top < offset + height){
                        navLinks.forEach(link => {
                            link.classList.remove('active');
                        });
                        document.querySelector(`header nav a[href='#${id}']`).classList.add('active');
                    };
                });
            };
    
    
    
    
    
    