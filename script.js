// SPINNING LOGO
document.addEventListener("DOMContentLoaded", function() {
  const text = "FRONTEND**DEVELOPER**";
  const textContainer = document.querySelector('.text');
  const radius = 42; // Adjust the radius as necessary
  const angleIncrement = 360 / text.length;

  text.split('').forEach((char, index) => {
      const span = document.createElement('span');
      span.textContent = char;
      const angle = angleIncrement * index;
      span.style.transform = `rotate(${angle}deg) translate(${radius}px) rotate(-${265}deg)`;
      textContainer.appendChild(span);
  });
});


const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  })
}

if (close) {
  close.addEventListener('click', () => {
    nav.classList.remove('active');
  })
}

// FORM SUBMISSION

const form = document.getElementById('form');
    const result = document.getElementById('result');
    
    form.addEventListener('submit', function(e) {
        const formData = new FormData(form);
        e.preventDefault();
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        result.innerHTML = "Please wait..."
    
        fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: json
            })
            .then(async (response) => {
                let json = await response.json();
                if (response.status == 200) {
                    result.innerHTML = json.message;
                } else {
                    console.log(response);
                    result.innerHTML = json.message;
                }
            })
            .catch(error => {
                console.log(error);
                result.innerHTML = "Something went wrong!";
            })
            .then(function() {
                form.reset();
                setTimeout(() => {
                    result.style.display = "none";
                }, 3000);
            });
    });



    // Dark mode code
  btn.onclick = function(){
    document.body.classList.toggle('dark-theme');
    if(document.body.classList.contains('dark-theme')){
      icon.src = "moon.png "
      msg.innerHTML= 'Dark'
      btn.style.backgroundColor= "white"
      btn.style.color= "black"
      headMsg.style.textShadow = "-3px 1px black,1px 0 black, 0 2px black, 0 -1px black";
      swag.style.textShadow = '3px 3px 10px rgb(23, 3, 3)';
      swag2.style.textShadow = '3px 3px 10px rgb(23, 3, 3)';
      swag3.style.textShadow = '3px 3px 10px rgb(23, 3, 3)';

    }else{
      icon.src = "sun.png"
      msg.innerHTML = 'Light'
      btn.style.backgroundColor= "black"
      btn.style.color= "white"
      headMsg.style.textShadow = "5px 5px 3px white";
      swag.style.textShadow = "-1px 3px white,1px 0 white, 0 1px white, 0 -1px white";
      swag2.style.textShadow = "-1px 3px white,1px 0 white, 0 1px white, 0 -1px white";
      swag3.style.textShadow = "-1px 3px white,1px 0 white, 0 1px white, 0 -1px white";

    }
  }
