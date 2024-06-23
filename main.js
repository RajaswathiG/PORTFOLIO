// -------------------TOGGLE ICON NAVBAR--------------------------------------------------------------

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => 
    {
        menuIcon.classList.toggle('fa-xmark');
        navbar.classList.toggle('active');
    }
    

// -------------------SCROLL SECTION ACTIVE LINK--------------------------------------------------------------

let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
          let top = window.scrollY;
          let offset = sec.offsetTop - 150;
          let height = sec.offsetHeight;
          let id=sec.getAttribute('id');

          if(top >= offset && top < offset + height)
            {
                navLinks.forEach.apply(links => {
                    links.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                });
            };
        });

 // -------------------STICKY NAVBAR--------------------------------------------------------------
let header=document.querySelector('header');
header.classList.toggle('sticky',window.scrollY > 100);

// -------------------remove toggle icon and navbar--------------------------------------------------------------
menuIcon.classList.remove('fa-xmark');
navbar.classList.remove('active');
};

// -------------------SCROLL reveal-------------------------------------------------------------
ScrollReveal({ 
    distance: '80px',
    duration: 2000,
    delay: 200,
 });

 ScrollReveal().reveal('.home-content, heading',{origin: 'top'});
 ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form',{origin:'button'});
 ScrollReveal().reveal('.home-contact h1, .about-img',{origin:'left'});
 ScrollReveal().reveal('.home-contact p, .about-content',{origin:'right'});

// -------------------FORM JS-------------------------------------------------------------

function sendMail() {
    event.preventDefault(); 
    
    
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    
    if (subject === "") {
        subject = "(No Subject)";
    }

   
    let params = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        subject: subject,
        message: message
    };

   
    emailjs.send("service_50gvx5m", "template_f4kktps", params)
        .then(function(response) {
            console.log("Email sent successfully!", response);
            alert("Email sent successfully!");
            
            document.getElementById("firstname").value = "";
            document.getElementById("lastname").value = "";
            document.getElementById("email").value = "";
            document.getElementById("subject").value = "";
            document.getElementById("message").value = "";
        }, function(error) {
            console.error("Failed to send email. Error:", error);
            alert("Failed to send email. Please try again later.");
        });
}


      



// -------------------typed js-------------------------------------------------------------

const typed=new Typed('.multiple-text',
    {
        strings:['Software Development', 'Web Designing' ,'Database Management System'],
        typeSpeed: 70,
        backSpeed: 70,
        backDelay: 1000,
        loop:true,
    }
);