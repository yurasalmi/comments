function clicked(){
  var commentsElement = document.createElement('tr');
  commentsElement.innerHTML = '<td><p>'+document.getElementById('TextOfComment').value+'</p><p align=right><button>Ответить</button></p></td>';
  document.getElementById('TableOfComments').appendChild(commentsElement);
}
