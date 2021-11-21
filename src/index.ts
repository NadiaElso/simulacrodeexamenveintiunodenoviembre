let año: number;
let mes: number;
let dia: number;
año = 0;
mes = 0;
dia = 0;
let meses: number[] = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let contaraño, contarmeses, contardias: number;
contaraño = 365;
contarmeses = 0;
contardias = 0;
let total: number;
total = 0;
año = Number(prompt("Ingrese año"));
while (( año<2000||año>2050)) {
año=Number(prompt("Ingrese año entre el 2000 y 2050"));
}
if ((año % 4 === 0 && año % 100 !== 0) || año % 400 === 0) {
  contaraño = 366;
}
mes = Number(prompt("Ingrese mes"));
while (mes<1 || mes > 12) {
  mes = Number(prompt("Ingrese mes"));
}
for (let index = mes-1; index < meses.length; index++) {
  if (contaraño === 366) {
    meses[1] = 29;
  } else if (contaraño === 365) {
    meses[1] = 28;
  }
  contarmeses += meses[index];
}
dia = Number(prompt("Ingrese dìas actual"));
if (mes===1 ||mes===3 ||mes===5 ||mes===7 ||mes===8 ||mes===10 ||mes===12) {
  while (dia<1 || dia >31) {
    dia = Number(prompt("Ingrese dìas actual entre uno y 31"));
  }
}

if (mes===2&&contaraño===366) {
  while (dia<1 || dia >29) {
    dia = Number(prompt("Ingrese dìas actual entre uno y 29"));
  }
} else if (mes===2&&contaraño===365) {
  while (dia<1|| dia>28) {
    dia = Number(prompt("Ingrese dìas actual entre uno y 28"));
  }
}

if (mes===4 ||mes===6 ||mes===9 ||mes===11) {
  while (dia<1||dia>30) {
    dia = Number(prompt("Ingrese dìas actual entre uno y 30"));
  }
}

contardias = contaraño - contarmeses + dia;
total = contaraño - contardias;
console.log("Quedan para finalizar el año" + total, "dias");
