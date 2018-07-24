var a = { nome: 'Ronaldo Veras', idade: '37'};
var b = a;
b.nome='Ricardo Silva';
console.log(a);
var c = Object.freeze(a);
c.nome='Silvio Caldas';
console.log(c);
