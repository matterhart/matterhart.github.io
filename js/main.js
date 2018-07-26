function numberOnly(event){
    return !!Number.parseInt(event.key) || event.key==='0' || event.key==='Backspace' || event.key == 'Tab';
}
function formatNumber(obj, event){
    if(numberOnly(event) && !!Number.parseInt(event.key)){
        var val = (String(obj.value)).replace(/[^\d]/gi,'');
        var arr = val.split('');
        val = [arr.slice(0,2).join(''),arr.slice(2,4).join(''),arr.slice(4,8).join('')].join('-');
        switch(arr.length){
            case 1:case 2:
                obj.value= val.slice(0,arr.length);
            break;
            case 3:
                obj.value= val.slice(0,arr.length+1);
            break;
            default:
                obj.value= val.slice(0,arr.length+2);
        }
        return true;
    }
    return false;
}
function openPlayback(src,title,imgsrc)
{
    var frame = document.getElementsByTagName('iframe')[0];
    frame.src = "";
    document.getElementsByClassName('video_subtitle')[0].innerHTML=title;
    frame.style.background="url("+imgsrc+")";
    frame.style.backgroundSize = 'contain';
    frame.src = src;
    //frame.onload = function (){};
    document.getElementsByClassName('modal')[0].style.display="flex";
}
var interval;
var rotatorsDOM;
var selected;
var index;

function rotate(direction){
    rotatorsDOM = document.getElementsByClassName('rotator');
    selected = document.getElementsByClassName('rotator selected')[0];
    index = Array.from(rotatorsDOM).indexOf(selected);
    selected.style.opacity = 1;
    index = (rotatorsDOM.length + (index+direction) )%rotatorsDOM.length;
    interval = setInterval(function(){ fadeAnimate(-0.15, swapImage)},20);
}
function swapImage(){
    selected.className = 'rotator';
    selected = rotatorsDOM.item(index);
    selected.className = 'rotator selected';
    selected.style.opacity = 0;
    interval = setInterval(function(){ fadeAnimate(0.15)},20);
}
function fadeAnimate(delta, callback){
    var setOpacity = parseFloat(selected.style.opacity)+delta;
    if(setOpacity < 0 || setOpacity > 1){
        
        clearInterval(interval);
        if( typeof callback == 'function'){
            callback();
        }
    }
    selected.style.opacity = setOpacity;
}

function closeModal(e){
    if(e.target.className == "modal" || e.target.className == "close"){
    var iframe = document.getElementsByTagName('iframe')[0];
    iframe.src = iframe.src;
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
        let labelItem = form.children[i-1]
        if( item.tagName == 'DIV'){
            let subItem = item.children[0];
            if(item.className == 'formHolder')
            {
                subItem = item.children[1].children[0];
                labelItem = item.children[0];
            }

            switch(subItem.tagName){
                case 'LABEL':
                    payload += subItem.innerText+' ';
                break;
                case 'INPUT': case 'TEXTAREA':
                    if(subItem.value.trim() != "")
                    {
                        payload += subItem.value+"<br>";
                    }
                    else
                    {
                        labelItem.innerHTML += "<span style='color:red;font-weight:bold;'>*</span>";
                        errors = true;
                    }
                break;
            }
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
    document.getElementsByTagName('form')[0].innerHTML ='<p style="text-align:center;text-transform:none;">Amazing. Thank you for your interest in Alayna Erhart Studio. I’ll be in touch soon.</p>';    }
  var params = 'payload='+encodeURIComponent(payload)+'&';
    xmlHttp.send( params);
}
