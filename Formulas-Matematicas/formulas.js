function diaAno(dia, mes1, bicesto=false) {
    // Cálculo que retorna o dia do ano. Ex: 108/365
    // Pode ser utilizado em qualquer ano, em anos bicestos é necessário o parâmetro 'true'.
    var janMax = 31;
    var abrMax = 31;
    if(bicesto == true){var fevMax=29}
    if(bicesto == false){var fevMax=28}
    var marMax = 30;
    var maiMax = 31;
    var junMax = 30;
    var julMax = 31;
    var agoMax = 31;
    var setMax = 30;
    var outMax = 31;
    var novMax = 30;
    var dezMax = 31;
    
    var jan = 0;        
    var fev = 0;
    var abr = 0;
    var mar = 0;
    var mai = 0;
    var jun = 0;
    var jul = 0;
    var ago = 0;
    var set = 0;
    var out = 0;
    var nov = 0;
    var dez = 0;
    
    if(mes1 == "jan"){var mes = jan;}
    if(mes1 == "fev"){var mes = fev + janMax;}
    if(mes1 == "mar"){var mes = mar + janMax + fevMax;}
    if(mes1 == "abr"){var mes = abr + janMax + fevMax + marMax;}
    if(mes1 == "mai"){var mes = mai + janMax + fevMax + marMax + abrMax;}
    if(mes1 == "jun"){var mes = jun + janMax + fevMax + marMax + abrMax + maiMax;}
    if(mes1 == "jul"){var mes = jul + janMax + fevMax + marMax + abrMax + maiMax + junMax;}
    if(mes1 == "ago"){var mes = ago + janMax + fevMax + marMax + abrMax + maiMax + junMax + julMax;}
    if(mes1 == "set"){var mes = set + janMax + fevMax + marMax + abrMax + maiMax + junMax + julMax + agoMax;}
    if(mes1 == "out"){var mes = out + janMax + fevMax + marMax + abrMax + maiMax + junMax + julMax + agoMax + setMax;}
    if(mes1 == "nov"){var mes = nov + janMax + fevMax + marMax + abrMax + maiMax + junMax + julMax + agoMax + setMax + outMax;}
    if(mes1 == "dez"){var mes = dez + janMax + fevMax + marMax + abrMax + maiMax + junMax + julMax + agoMax + setMax + outMax + novMax;}

    return dia + mes;
}

function conv_degree(degree) {
	var radian = degree * (Math.PI / 180);
    return radian;
}

function declinacao(dia_seq) {
    //original: 23.45 * Math.sin(conv_degree((360/365)*(284 + this.getDia_seq())))

    //usp
    var declinacao = 23.45 * Math.sin(conv_degree(360*(dia_seq - 80) / 365));
    return declinacao;
}

function duracaoDia(latitude, diaAno) {
    var T = 2/15 * Math.acos(-Math.tan(conv_degree(latitude)) * Math.tan(conv_degree(declinacao(diaAno)))) * (180 / Math.PI);
    return T;
}