function addMore(){
    document.getElementById('error').innerHTML="";
let inputField=document.getElementById('inputField').value;
if(inputField==''){
    document.getElementById('error').innerHTML="Please enter value";
}
else{
    let box=document.getElementById('box');

    let li=document.createElement('li');
    li.textContent=inputField;

    let a=document.createElement('a');
        a.textContent=' '+' X';
        a.href="javascript:void(0)";
        a.className="remove";
        li.appendChild(a);

        let pos=box.firstElementChild;
        if(pos==null){
            box.appendChild(li);
        }
        else{
            box.insertBefore(li,pos);
        }
    
     }
     document.getElementById('inputField').value="";
}
let btn=document.querySelector('ol');
btn.addEventListener('click',function(e){
    let box=document.getElementById('box');
    
    let li=e.target.parentNode;
    box.removeChild(li);
});

