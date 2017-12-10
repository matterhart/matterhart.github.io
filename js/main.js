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
function closeModal(e){
    if(e.target.className == "modal" || e.target.className == "close"){
    document.getElementsByClassName('modal')[0].style.display="none";}
}
function submitForm()
{
    let form = document.getElementsByTagName('form')[0];
    let payload = "";
    let errors = false;
    for( i = 0; i<form.children.length; i++)
    {
        let item = form.children[i];
        switch(item.tagName){
            case 'LABEL':
                payload += item.innerText+' ';
            break;
            case 'INPUT': case 'TEXTAREA':
                if(item.value.trim() != "")
                {
                    payload += item.value+"<br>";
                }
                else
                {
                    form.children[i-1].innerHTML += "<span style='color:red;font-weight:bold;'>*</span>";
                    errors = true;
                }
            break;
        }
    }
    if(!errors)
    {
        sendRequest(payload);
    }
}

function sendRequest(payload){

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "POST", 'http://erhart.me/chat', true ); // false for synchronous request
    xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xmlHttp.onload = function() {
        document.getElementById('form-filler').innerHTML ='<p style="color:#777;margin:30px auto; width:75%;">Reach out if you need anything, <a style="color:#777;text-decoration:none;font-weight: bold;" href="mailto:hello@sugardream.studio">hello@sugardream.studio</a> :) I look forward to chatting with you!</p>';
    }
  var params = 'payload='+encodeURIComponent(payload)+'&';
    xmlHttp.send( params);
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
              <a class="btn" onclick="submitForm()">submit</a></form>',
              '<form style="display:block;width:80%;">\
                <label for="names">Your Name:</label><input type="text" id="names" />\
                <label for="contact">Email:</label><input type="text" id="contact" />\
                <label  for="ramble">What story would you like Sugar Dream Studio to help you tell:</label><textarea rows="6" id="ramble"></textarea>\
                <label  for="daydream">What gets you out of bed in the morning?</label><textarea rows="6" id="daydream"></textarea>\
                <label  for="songs">Team Pizza. Team Hamburger. Or Team Burrito. Pick one:</label><textarea rows="6" id="songs"></textarea> \
              <div class = "filler" style="text-align: center;">\
              <a class="btn" onclick="submitForm()">submit</a></form>',
              '<form style="display:block;width:80%;">\
                <label for="names">Your Name:</label><input type="text" id="names" />\
                <label for="contact">Email:</label><input type="text" id="contact" />\
                <label  for="desc">Event Name & Description:</label><textarea rows="6" id="desc"></textarea>\
                <label for="dates">Event Date:</label><input type="text" id="dates" />\
                <label for="location">Event Location:</label><input type="text" id="location" />\
                <label  for="ramble">What about Sugar Dream studio has piqued your interest:</label><textarea rows="6" id="ramble"></textarea>\
                <label  for="daydream">When day dreaming about your event, what vibe do you envision? </label><textarea rows="6" id="daydream"></textarea>\
              <div class = "filler" style="text-align: center;">\
              <a class="btn" onclick="submitForm()">submit</a></form>',
              '<p style="color:#777;margin:30px auto; width:75%;">Hey, ya know what? Just email me at <a style="color:#777;text-decoration:none;font-weight: bold;" href="mailto:hello@sugardream.studio">hello@sugardream.studio</a> :) I look forward to chatting with you!</p>'
              ];