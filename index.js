function gerarQRcode(){
    var inputUsuario = document.querySelector('textarea').value;
    var googleChartAPI = 'https://chart.googleapis.com/chart?cht=qr&chs=300x300&chld=h&chl='; /*cht = tipo,chs = tamanho, chld = backup de dados (caso o qrcod se danifique uma parte dele ira bastar para ler o conteudo, chl = conteudo) */
    var conteudoQRcode = googleChartAPI + encodeURIComponent(inputUsuario);
    document.querySelector("#QRcodeImage").src = conteudoQRcode;
}