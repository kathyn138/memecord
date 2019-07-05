(function() {
    'use strict';
    window.addEventListener('load', function() {
      
      var forms = document.getElementsByClassName('lovely-form');

      // checking if image url is valid input

      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          var imgBox = document.getElementById('imageLink');
          var imgBoxText = document.getElementById('inputNeeded');


          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();

            imgBoxText.style.color = '#f04747';
            imgBox.style.backgroundImage = 'none';
            imgBox.style.borderColor = '#f04747';
            imgBox.style.boxShadow = 'none';

            form.classList.add('was-validated');
          } else {
            imgBoxText.style.color = null;
            imgBox.style.backgroundImage = null;
            imgBox.style.borderColor = null;
            imgBox.style.boxShadow = null;
            form.classList.remove('was-validated');
          }

        }, false);
      });
    }, false);

    
  })();

  //second function below is for creation and removal of meme

  window.onload = function(){
    
    var form = document.querySelector('form');
    var memeLocation = document.getElementById('memeSection');

      form.addEventListener("submit", function(event){

        event.preventDefault();

        //creating img from image url and styling it
        var memeImg = document.createElement('img');
        var imgUrl = document.getElementById('imageLink').value;
        memeImg.src = imgUrl;
        memeImg.style.maxWidth = '600px';
        memeImg.style.marginTop = '30px';
        memeImg.style.marginLeft = '30px';
      

        //getting topText set up in its own div
        var topText = document.getElementById('topText').value;
        var topTextDiv = document.createElement('div');
        topTextDiv.innerText = topText;
        topTextDiv.classList.add('text');

        //getting botText set up in its own div
        var botText = document.getElementById('botText').value;
        var botTextDiv = document.createElement('div');
        botTextDiv.innerText = botText;
        botTextDiv.classList.add('text');
    
        var overallDiv = document.createElement('div');
    
        //appending the different parts together
        overallDiv.appendChild(memeImg);
        overallDiv.appendChild(topTextDiv);
        overallDiv.appendChild(botTextDiv);
        memeLocation.appendChild(overallDiv);

        overallDiv.style.position = 'relative';


        //styling text divs individually
        topTextDiv.style.top = '30px';
        botTextDiv.style.bottom = '15px';

        var bothText = document.querySelectorAll('.text');

        for (var i = 0; i < bothText.length; i++){
            //styling both text divs 
            bothText[i].style.position = 'absolute';
            bothText[i].style.maxWidth = '500px';
            bothText[i].style.left = '0';
            bothText[i].style.right = '0';
            bothText[i].style.marginLeft = 'auto';
            bothText[i].style.marginRight = 'auto';
            bothText[i].style.wordWrap = 'break-word';

            //styling both texts
            bothText[i].style.textAlign = 'center';
            bothText[i].style.fontSize = '48px'
            bothText[i].style.fontWeight = 'bolder';
            bothText[i].style.webkitTextStroke = '2px black';
        }

        //setting up the close button and appending to overallDiv
        //close button is for removing the meme from the page
        var close = document.createElement('button');
        close.classList.add('closeMeme');
        close.innerText = 'X';
        var closeDiv = document.createElement('div');
        closeDiv.appendChild(close);

        //styling close button 
        closeDiv.style.position = 'absolute';
        closeDiv.style.top = '30px';
        closeDiv.style.right = '0px';

        close.style.color = 'white';
        close.style.fontSize = '40px';

        close.style.width = '60px';
        close.style.height = '60px';
        close.style.backgroundColor = 'black';
        close.style.opacity = '.5';
        close.style.outline = '0';
        close.style.border = 'none';

        //removes image when you click on close button 
        close.addEventListener('click', function(){
            overallDiv.remove();
        })

        //enables the close button to appear when you hover over the meme
        overallDiv.addEventListener('mouseenter', function(){
            overallDiv.appendChild(closeDiv);
        })
        overallDiv.addEventListener('mouseleave', function(){
            overallDiv.removeChild(closeDiv);
        })
    });

    //clears form when it's submitted
    form.addEventListener("submit", function(event){
        document.querySelector('form').reset();

        });


    }
