var typed = new Typed('#element', {
    strings: ['Larry Daniels', 'Developer', 'Designer'],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true,
    loopCount: Infinity,
  });

  window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar-example');
    var navLink = document.querySelector('.navbar-brand')
    var link1 = document.getElementById('link1')
    var link2 = document.getElementById('link2')
    var link3 = document.getElementById('link3')
    var link4 = document.getElementById('link4')
    var link5 = document.getElementById('link5')
    var link6 = document.getElementById('link6')
    var link7 = document.getElementById('link7')
    
    if (window.scrollY > 700) { 
      navbar.style.backgroundColor = '#fff';
      navbar.style.position ='fixed'
      navLink.style.color = '#000'; 
      link1.style.color = '#000'; 
      link2.style.color = '#000'; 
      link3.style.color = '#000'; 
      link4.style.color = '#000'; 
      link5.style.color = '#000'; 
      link6.style.color = '#000'; 
      link7.style.color = '#000'; 
  
    } else {
      navbar.style.backgroundColor = 'transparent';
      navLink.style.color = '#fff'; 
      link1.style.color = '#fff'; 
      link2.style.color = '#fff'; 
      link3.style.color = '#fff'; 
      link4.style.color = '#fff'; 
      link5.style.color = '#fff'; 
      link6.style.color = '#fff'; 
      link7.style.color = '#fff'; 
      navbar.style.position ='static'
       
    }
  });