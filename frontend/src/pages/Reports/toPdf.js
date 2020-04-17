export default function toPdf() {
  const today = new Date();
  const date = `${today.getDate()}/${
    today.getMonth() + 1
  }/${today.getFullYear()}`;
  const time = `${today.getHours()}:${today.getMinutes()}`;
  const dateTime = `${date} ${time}`;

  var divToPrint = document.getElementById('myTable');
  var newWin = window.open('');

  newWin.document.write(
    '<center><h1 style="font: 14px Arial; font-weight: bold;">Universidade Federal Rural do Semi-Árido</h1></center>'
  );
  newWin.document.write(
    '<center><h1 style="font: 12px Arial; font-weight: bold;">Gerado as: ',
    dateTime,
    '</h1></center>'
  );
  newWin.document.write(
    '<center><h2 style="font: 12px Arial; font-weight: bold;">RELATÓRIO - CONTROLE DE ENTREGA DE EPIS</h2></center>'
  );
  newWin.document.write(
    '<center><h1 style="font-size: 12px, font: Arial; font-weight: bold;">',
    divToPrint.outerHTML,
    '</h1></center>'
  );
  newWin.print();
  newWin.close();
  return newWin;
}
