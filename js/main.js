var interval;
var margin;
function goright(){
    margin = 50;
    interval = setInterval(function(){ animateRight()},10);
    document.getElementById('right-arrow').style.display="none";
    document.getElementById('left-arrow').style.display="block";
}

function animateRight(){
    margin -= 50;
    if(margin <= -950){
        clearInterval(interval);
    }
    document.getElementsByClassName('frameHolder')[0].style.marginLeft= margin+"px";
}
function animateLeft(){
    margin += 50;
    if(margin >= 20){
        clearInterval(interval);
    }
    document.getElementsByClassName('frameHolder')[0].style.marginLeft= margin+"px";
}

function goleft(){
    margin = -950;
    interval = setInterval(function(){ animateLeft()},10);
    document.getElementById('left-arrow').style.display="none";
    document.getElementById('right-arrow').style.display="block";
}

function toggleForms()
{
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
var forms = ['<form style="display:block;width:80%;">\
                <label for="names">Your Names:</label><input type="text" id="names" /><br>\
                <label for="contact">Email:</label><input type="text" id="contact" /><br>\
                <label for="dates">Wedding Date:</label><input type="text" id="dates" /><br>\
                <label for="location">Wedding Location:</label><input type="text" id="location" /><br>\
                <label class="long" for="ramble">Tell me about your love. Ramble to your heart\'s content:</label><textarea rows="6" id="ramble"></textarea>\
                <label class="long" for="daydream">When day dreaming about your wedding day, what vibe do you envision:</label><textarea rows="6" id="daydream"></textarea>\
                <label class="long" for="songs">Name your 3 most recently played songs:</label><textarea rows="6" id="songs"></textarea> <br>\
              <div class = "filler" style="text-align: center;">\
              <a class="btn">submit</a></form>',
              '<form style="display:block;width:80%;">\
                <label for="names">Your Name:</label><input type="text" id="names" /><br>\
                <label for="contact">Email:</label><input type="text" id="contact" /><br>\
                <label class="long" for="ramble">What story would you like Sugar Dream Studio to help you tell:</label><textarea rows="6" id="ramble"></textarea>\
                <label class="long" for="daydream">What gets you out of bed in the morning?</label><textarea rows="6" id="daydream"></textarea>\
                <label class="long" for="songs">Team Pizza. Team Hamburger. Or Team Burrito. Pick one:</label><textarea rows="6" id="songs"></textarea> <br>\
              <div class = "filler" style="text-align: center;">\
              <a class="btn">submit</a></form>',
              '<form style="display:block;width:80%;">\
                <label for="names">Your Name:</label><input type="text" id="names" /><br>\
                <label for="contact">Email:</label><input type="text" id="contact" /><br>\
                <label class="long" for="desc">Event Name & Description:</label><textarea rows="6" id="desc"></textarea><br>\
                <label for="dates">Event Date:</label><input type="text" id="dates" /><br>\
                <label for="location">Event Location:</label><input type="text" id="location" /><br>\
                <label class="long" for="ramble">What about Sugar Dream studio has piqued your interest:</label><textarea rows="6" id="ramble"></textarea>\
                <label class="long" for="daydream">When day dreaming about your event, what vibe do you envision? </label><textarea rows="6" id="daydream"></textarea><br>\
              <div class = "filler" style="text-align: center;">\
              <a class="btn">submit</a></form>',
              '<p>Hey, ya know what? Just email me at <a style="color:white;text-decoration:none;font-weight: bold;" href="mailto:hello@sugardream.studio">hello@sugardream.studio</a> :)<br><br>I look forward to chatting with you!</p>'
              ];