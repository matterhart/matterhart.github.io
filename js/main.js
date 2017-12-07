var interval;
var margin;
var mulit;
function goright(){
    margin = 1;
    multi = -1;
    interval = setInterval(function(){ animateRight()},20);
    document.getElementById('right-arrow').style.display="none";
    
}

function animateRight(){
    margin += multi*0.05;
    document.getElementsByClassName('frameHolder')[0].style.opacity= margin;
    if(margin <= 0){
        multi = 1;
        clearInterval(interval);
        document.getElementById('subtitle').innerHTML = "Fremonster Spectacular &bull; Seattle";
        var frame = document.getElementsByTagName('iframe')[0];
        frame.onload = function () {interval = setInterval(function(){ animateRight()},20);};
        frame.src="https://player.vimeo.com/video/243380169?title=0&byline=0&portrait=0";
    }
    if(margin >= 1)
    {
        document.getElementById('left-arrow').style.display="block";
        clearInterval(interval);
    }
}
function animateLeft(){
    margin += multi*0.05;
    document.getElementsByClassName('frameHolder')[0].style.opacity= margin;
    if(margin <= 0){
        multi = 1;
        clearInterval(interval);
        document.getElementById('subtitle').innerHTML = "Aaron & Evelyn &bull; Seattle";
        var frame = document.getElementsByTagName('iframe')[0];
        frame.onload = function () {interval = setInterval(function(){ animateLeft()},20);};
        frame.src="https://player.vimeo.com/video/244116830?title=0&byline=0&portrait=0";
    }
    if(margin >= 1)
    {
        document.getElementById('right-arrow').style.display="block";
        clearInterval(interval);
    }
}

function goleft(){
    margin = 1;
    multi = -1;
    interval = setInterval(function(){ animateLeft()},20);
    document.getElementById('left-arrow').style.display="none";
}

function toggleForms()
{
    document.getElementsByClassName('modal')[0].style.display="flex";
    var form = document.getElementsByTagName('select')[0];
    switch(form.value)
    {
        case 'WEDDING':
            document.getElementById('form-filler').innerHTML = forms[0];
        break;
        case 'DOCUSHORT':
            document.getElementById('form-filler').innerHTML = forms[1];
        break;
        case 'EVENT':
            document.getElementById('form-filler').innerHTML = forms[2];
        break;
        case 'OTHER':
            document.getElementById('form-filler').innerHTML = forms[3];
        break;
    }
}
function closeModal(){
    document.getElementsByClassName('modal')[0].style.display="none";
}
var forms = ['<form style="display:block;width:80%;">\
                <label for="names">Your Names:</label><input type="text" id="names" />\
                <label for="contact">Email:</label><input type="text" id="contact" />\
                <label for="dates">Wedding Date:</label><input type="text" id="dates" />\
                <label for="location">Wedding Location:</label><input type="text" id="location" />\
                <label  for="ramble">Tell me about your love. Ramble to your heart\'s content:</label><textarea rows="6" id="ramble"></textarea>\
                <label  for="daydream">When day dreaming about your wedding day, what vibe do you envision:</label><textarea rows="6" id="daydream"></textarea>\
                <label  for="songs">Name your 3 most recently played songs:</label><textarea rows="6" id="songs"></textarea> \
              <div class = "filler" style="text-align: center;">\
              <a class="btn">submit</a></form>',
              '<form style="display:block;width:80%;">\
                <label for="names">Your Name:</label><input type="text" id="names" />\
                <label for="contact">Email:</label><input type="text" id="contact" />\
                <label  for="ramble">What story would you like Sugar Dream Studio to help you tell:</label><textarea rows="6" id="ramble"></textarea>\
                <label  for="daydream">What gets you out of bed in the morning?</label><textarea rows="6" id="daydream"></textarea>\
                <label  for="songs">Team Pizza. Team Hamburger. Or Team Burrito. Pick one:</label><textarea rows="6" id="songs"></textarea> \
              <div class = "filler" style="text-align: center;">\
              <a class="btn">submit</a></form>',
              '<form style="display:block;width:80%;">\
                <label for="names">Your Name:</label><input type="text" id="names" />\
                <label for="contact">Email:</label><input type="text" id="contact" />\
                <label  for="desc">Event Name & Description:</label><textarea rows="6" id="desc"></textarea>\
                <label for="dates">Event Date:</label><input type="text" id="dates" />\
                <label for="location">Event Location:</label><input type="text" id="location" />\
                <label  for="ramble">What about Sugar Dream studio has piqued your interest:</label><textarea rows="6" id="ramble"></textarea>\
                <label  for="daydream">When day dreaming about your event, what vibe do you envision? </label><textarea rows="6" id="daydream"></textarea>\
              <div class = "filler" style="text-align: center;">\
              <a class="btn">submit</a></form>',
              '<p>Hey, ya know what? Just email me at <a style="color:white;text-decoration:none;font-weight: bold;" href="mailto:hello@sugardream.studio">hello@sugardream.studio</a> :)I look forward to chatting with you!</p>'
              ];