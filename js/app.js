let amigos = [];
function adicionar(){
    let nome = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');
    amigos.push(nome.value);
    if(lista.textContent == ''){
    lista.textContent = nome.value;
    nome = document.getElementById('nome-amigo').value = '';
 }
 else{
    lista.textContent = lista.textContent + ', ' + nome.value;
    nome = document.getElementById('nome-amigo').value = '';
 }
}

function sortear(){
    let botao = document.getElementById('botaoAdd');
    botao.classList.remove('primary');
    botao.classList.add('disabled');
    embaralhar(amigos);
    let sorteio = document.getElementById('lista-sorteio');
    for(let i=0;i<amigos.length;i++){
        if(i==amigos.length-1){
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '-->' + amigos[0] + '<br>';
        }
        else{
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '-->' + amigos[i+1] + '<br>';
        }
    }
   
}

function embaralhar(){
  for(let indice = amigos.length;indice;indice--){
    let indiceAleatorio = Math.floor(Math.random()*indice);
    let elemento = amigos[indice-1];

    [amigos[indice-1], amigos[indiceAleatorio]] = [amigos[indiceAleatorio], amigos[indice-1]];
  }
}

function reiniciar(){
    document.getElementById('lista-amigos').textContent = '';
    document.getElementById('lista-sorteio').innerHTML = ''; 
    let botao = document.getElementById('botaoAdd');
    botao.classList.remove('disabled');
    botao.classList.add('button', 'primary');
    
}