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
function openPlayback(src,title,imgsrc)
{
    var frame = document.getElementsByTagName('iframe')[0];
    document.getElementsByClassName('video_subtitle')[0].innerHTML=title;
    frame.style.background="url("+imgsrc+")";
    frame.style.backgroundSize = 'contain';
    frame.src = src;
    //frame.onload = function (){};
    document.getElementsByClassName('modal')[0].style.display="flex";
    
    
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
    if(form.getElementsByClassName('radioInput').length == 1 && form.getElementsByClassName('selected').length == 1)
    {
        let item = form.getElementsByClassName('selected')[0];
        payload += item.innerText + "<br>";
    }
    else if(form.getElementsByClassName('radioInput').length == 1)
    {
        errors=true;
        form.getElementsByClassName('radioLabel')[0].innerHTML += "<span style='color:red;font-weight:bold;'>*</span>";

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
        document.getElementById('form-filler').innerHTML ='<p style="color:#777;margin:30px 0px; width:100%;">Amazing. Thank you for your interest in Sugar Dream Studio. I’ll be in touch soon.</p>';
    }
  var params = 'payload='+encodeURIComponent(payload)+'&';
    xmlHttp.send( params);
}
function radioInputClick(obj,event)
{
  parentEle = obj.parentNode;
  for(var i = 0;i < parentEle.children.length;i++)
  {
    element = parentEle.children[i];
    if( element.tagName == 'LI')
    {
      element.className = '';
    }
  }

  obj.className='selected';
}

var forms = ['<form >\
                <label for="names">Your Names:</label><input type="text" id="names" />\
                <label for="contact">Email:</label><input type="text" id="contact" />\
                <label for="dates">Wedding Date:</label><input type="text" id="dates" />\
                <label for="location">Wedding Location:</label><input type="text" id="location" />\
                <label  for="ramble">Tell me about your love. Ramble to your heart\'s content:</label><textarea rows="6" id="ramble"></textarea>\
                <label  for="daydream">When day dreaming about your wedding day, what vibe do you envision:</label><textarea rows="6" id="daydream"></textarea>\
                <label  for="songs">Name your 3 most recently played songs:</label><textarea class="triple" rows="3" id="songs"></textarea> \
              <div class = "filler" style="text-align: center;padding-top:55px;">\
              <a class="btn" onclick="submitForm()">submit</a></form>',
              '<form >\
                <label for="names">Your Name:</label><input type="text" id="names" />\
                <label for="contact">Email:</label><input type="text" id="contact" />\
                <label  for="ramble">What story would you like Sugar Dream Studio to help you tell:</label><textarea rows="6" id="ramble"></textarea>\
                <label  for="daydream">What gets you out of bed in the morning:</label><textarea rows="6" id="daydream"></textarea>\
                <label class="radioLabel" for="songs">Team Pizza. Team Hamburger. Or Team Burrito. Pick one:</label>\
                <div style="margin: 20px;width:300px;">\
                  <ul class="radioInput">\
                    <li onclick="radioInputClick(this,event)"><div class="radioBtn"></div>pizza</li>\
                    <li onclick="radioInputClick(this,event)"><div class="radioBtn"></div>hamburger</li>\
                    <li onclick="radioInputClick(this,event)"><div class="radioBtn"></div>burrito</li>\
                  </ul>\
                </div> <div class = "filler" style="text-align: center;">\
              <a class="btn" onclick="submitForm()">submit</a></form>',
              '<form >\
                <label for="names">Your Name:</label><input type="text" id="names" />\
                <label for="contact">Email:</label><input type="text" id="contact" />\
                <label  for="desc">Event Name & Description:</label><textarea rows="6" id="desc"></textarea>\
                <label for="dates">Event Date:</label><input type="text" id="dates" />\
                <label for="location">Event Location:</label><input type="text" id="location" />\
                <label  for="ramble">What about Sugar Dream studio has piqued your interest:</label><textarea rows="6" id="ramble"></textarea>\
              <div class = "filler" style="text-align: center;">\
              <a class="btn" onclick="submitForm()">submit</a></form>',
              '<p style="color:#777;margin:30px 0px; width:100%;">Hey, ya know what? Just email me at <a style="color:#777;text-decoration:none;font-weight: bold;" href="mailto:hello@sugardream.studio">hello@sugardream.studio</a> :)<br>I look forward to chatting with you!</p>'
              ];