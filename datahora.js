var dataActual = new Date();

document.body.innerHTML = dataActual.getDate() + "/" + String(dataActual.getMonth() + 1).padStart(2,'0') + "/"+ dataActual.getFullYear() +"<br/>" + dataActual.getHours() + ":" + String(dataActual.getMinutes()).padStart(2,'0');


/*
String(dataActual.getMonth() + 1).padStart(2,'0') - Para o mês ficar sempre com 2 digitos
String(dataActual.getMinutes()).padStart(2,'0') - Para os minutos ficarem sempre com 2 digitos
getMonth() + 1 - O array dos meses começa em zero, adicionar um para ficar com o mês correcto
*/