const b1 = document.querySelector('.b4');
const b2 = document.querySelector('.btn');
const name1 = document.querySelector('.name');

name1.addEventListener('mouseenter', function() { this.style.transform = 'scale(1.2)'});
name1.addEventListener('mouseleave', function() { this.style.transform = 'scale(1)'});

b1.addEventListener('mouseenter', function() { this.style.transform = 'scale(1.2)'});
b1.addEventListener('mouseleave', function() { this.style.transform = 'scale(1)'});

b2.addEventListener('mouseenter', function() { this.style.transform = 'scale(1.1)'});
b2.addEventListener('mouseleave', function() { this.style.transform = 'scale(1)'});




var mood = document.getElementById("light");

mood.addEventListener('click',()=>{
    document.documentElement.classList.toggle('light-mood');

    if(document.body.classList.toggle("light-mood"))
    {
        mood.src = "moon2.png";
    }
    else
    {
        mood.src = "sun2.png";
    }
});





const navlink1 = document.querySelector('.nav-link1');
const navlink2 = document.querySelector('.nav-link2');
const navlink3 = document.querySelector('.nav-link3');
const navlink4 = document.querySelector('.nav-link4');
const navlink5 = document.querySelector('.nav-link5');
const navlink6 = document.querySelector('.nav-link6');
const navlink7 = document.querySelector('.nav-link7');
const navlink8 = document.querySelector('.nav-link8');
const navlink9 = document.querySelector('.nav-link9');
const navlink10 = document.querySelector('.nav-link10');





if(window.outerWidth <= 300)
{
    window.onscroll = function()
    {
        if(this.scrollY <= 600)
        {
            document.querySelector('.activee')?.classList.remove('activee');
            navlink6.classList.add('activee');
        }
        else if(this.scrollY > 600 && this.scrollY < 3100)
        {
            document.querySelector('.activee')?.classList.remove('activee');
            navlink7.classList.add('activee');
        }
        else if(this.scrollY >= 3100 && this.scrollY <= 4800)
        {
            document.querySelector('.activee')?.classList.remove('activee');
            navlink8.classList.add('activee');
        }
        else if(this.scrollY > 4800 && this.scrollY <= 6200)
        {
            document.querySelector('.activee')?.classList.remove('activee');
            navlink9.classList.add('activee');
        }
        else
        {
            document.querySelector('.activee')?.classList.remove('activee');
            navlink10.classList.add('activee');     
        }
    }
}
else if(window.outerWidth <= 370)
{
    window.onscroll = function()
    {
        if(this.scrollY <= 600)
        {
            document.querySelector('.activee')?.classList.remove('activee');
            navlink6.classList.add('activee');
        }
        else if(this.scrollY > 600 && this.scrollY < 2600)
        {
            document.querySelector('.activee')?.classList.remove('activee');
            navlink7.classList.add('activee');
        }
        else if(this.scrollY >= 2600 && this.scrollY <= 4000)
        {
            document.querySelector('.activee')?.classList.remove('activee');
            navlink8.classList.add('activee');
        }
        else if(this.scrollY > 4000 && this.scrollY <= 5600)
        {
            document.querySelector('.activee')?.classList.remove('activee');
            navlink9.classList.add('activee');
        }
        else
        {
            document.querySelector('.activee')?.classList.remove('activee');
            navlink10.classList.add('activee');     
        }
    }
}
else if(window.outerWidth <= 470)
{
    window.onscroll = function()
    {
        if(this.scrollY <= 600)
        {
            document.querySelector('.activee')?.classList.remove('activee');
            navlink6.classList.add('activee');
        }
        else if(this.scrollY > 600 && this.scrollY < 2300)
        {
            document.querySelector('.activee')?.classList.remove('activee');
            navlink7.classList.add('activee');
        }
        else if(this.scrollY >= 2300 && this.scrollY <= 3650)
        {
            document.querySelector('.activee')?.classList.remove('activee');
            navlink8.classList.add('activee');
        }
        else if(this.scrollY > 3650 && this.scrollY <= 5200)
        {
            document.querySelector('.activee')?.classList.remove('activee');
            navlink9.classList.add('activee');
        }
        else
        {
            document.querySelector('.activee')?.classList.remove('activee');
            navlink10.classList.add('activee');     
        }
    }
}
else if(window.outerWidth <= 635)
{
    window.onscroll = function()
    {
        if(this.scrollY <= 600)
        {
            document.querySelector('.activee')?.classList.remove('activee');
            navlink6.classList.add('activee');
        }
        else if(this.scrollY > 600 && this.scrollY < 2000)
        {
            document.querySelector('.activee')?.classList.remove('activee');
            navlink7.classList.add('activee');
        }
        else if(this.scrollY >= 2000 && this.scrollY <= 3449)
        {
            document.querySelector('.activee')?.classList.remove('activee');
            navlink8.classList.add('activee');
        }
        else if(this.scrollY > 3450 && this.scrollY <= 5100)
        {
            document.querySelector('.activee')?.classList.remove('activee');
            navlink9.classList.add('activee');
        }
        else
        {
            document.querySelector('.activee')?.classList.remove('activee');
            navlink10.classList.add('activee');     
        }
    }
}
else if(window.outerWidth <= 895)
{
    window.onscroll = function()
    {
        if(this.scrollY <= 600)
        {
            document.querySelector('.activee')?.classList.remove('activee');
            navlink6.classList.add('activee');
        }
        else if(this.scrollY > 600 && this.scrollY < 2000)
        {
            document.querySelector('.activee')?.classList.remove('activee');
            navlink7.classList.add('activee');
        }
        else if(this.scrollY >= 2000 && this.scrollY <= 3449)
        {
            document.querySelector('.activee')?.classList.remove('activee');
            navlink8.classList.add('activee');
        }
        else if(this.scrollY > 3450 && this.scrollY <= 4290)
        {
            document.querySelector('.activee')?.classList.remove('activee');
            navlink9.classList.add('activee');
        }
        else
        {
            document.querySelector('.activee')?.classList.remove('activee');
            navlink10.classList.add('activee');     
        }
    }
}
else if(window.outerWidth <= 950)
{
    window.onscroll = function()
    {
        if(this.scrollY <= 480)
        {
            document.querySelector('.active')?.classList.remove('active');
            navlink1.classList.add('active');
        }
        else if(this.scrollY > 480 && this.scrollY < 2000)
        {
            document.querySelector('.active')?.classList.remove('active');
            navlink2.classList.add('active');
        }
        else if(this.scrollY >= 2000 && this.scrollY <= 2800)
        {
            document.querySelector('.active')?.classList.remove('active');
            navlink3.classList.add('active');
        }
        else if(this.scrollY > 2800 && this.scrollY <= 3800)
        {
            document.querySelector('.active')?.classList.remove('active');
            navlink4.classList.add('active');
        }
        else
        {
            document.querySelector('.active')?.classList.remove('active');
            navlink5.classList.add('active'); 
        }
    }
}
else
{
    window.onscroll = function()
    {
        if(this.scrollY <= 600)
        {
            document.querySelector('.active')?.classList.remove('active');
            navlink1.classList.add('active');
        }
        else if(this.scrollY > 600 && this.scrollY < 2000)
        {
            document.querySelector('.active')?.classList.remove('active');
            navlink2.classList.add('active');
        }
        else if(this.scrollY >= 2000 && this.scrollY <= 2900)
        {
            document.querySelector('.active')?.classList.remove('active');
            navlink3.classList.add('active');
        }
        else if(this.scrollY > 2900 && this.scrollY <= 3650)
        {
            document.querySelector('.active')?.classList.remove('active');
            navlink4.classList.add('active');
        }
        else
        {
            document.querySelector('.active')?.classList.remove('active');
            navlink5.classList.add('active');
        }
    }
}








const menu = document.getElementById('menu-icon');
const menu2 = document.getElementById('menu-icon2');
const navv = document.querySelector('.navbar2');

function dis()
{
    if(navv.style.display = 'none')
    {
        menu.style.display = "none";
        menu2.style.display = "block";
        navv.style.display = 'block'
    }
}

function disn()
{
    if(navv.style.display = 'block')
    {
        menu.style.display = "block";
        menu2.style.display = "none";
        navv.style.display = 'none'    
    }
}