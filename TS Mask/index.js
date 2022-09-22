// Author: Suman Roy
//Github: Suman373

//the function is executed when anywhere within the mask is clicked
    function playvoice(){
        const intro=new Audio('jarvis_intro.mp3');
        intro.play();
        const tip=document.getElementById('tip');
        tip.style.color="blue";
        tip.style.textShadow ="none";
        tip.innerText="Speaking....";

        document.querySelector(`.lowerface`).animate(
            [
              { height: '3px' },
              { height: '12px' }
            ],
            {
              duration: 1000,
              iterations: 20,
              direction: 'alternate'
            }
          );    
        

    }
    // this function is executed after 20s,which is the audio length, making sure html reloads and goes back to the initial state
    setTimeout(function(){
        document.location.reload();
    },23000);

    

