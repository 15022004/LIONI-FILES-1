
function afficher(id){
  let el= document.getElementById(id);
  if(el.style.display == 'none') {
    el.style.display = 'block';
  } else  {
    el.style.display ='none';
  }
};
document.body.addEventListener('click', function(){
  let el =document.getElementById(id);
  el.style.display = 'none';
}
)