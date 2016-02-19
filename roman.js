function convert(x){

	var unitario = ['','I','II','III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
	var decimail = ['','X', 'XX', 'XXX', 'XL', 'L', 'LX','LXX', 'LXXX','XC'];
	var centena  = ['','C','CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
	var milhar   = ['','M', 'MM', 'MMM'];

	x = parseInt(x).toString();
	if(parseInt(x)==0){
		return '';
	}

	//unidades
	if(parseInt(x)<10){
		value = parseInt(x);
		return (value!=0) ? unitario[value] : '';
	}
	//decimais
	if(parseInt(x)<100){
		var parts = x.split('');
		var numero = parseInt(parts[0]);
		parts.splice(0,1)
		return decimail[parseInt(numero)] + convert(parts.join(''));
	}
	//centenas
	if(parseInt(x)<1000){
		var parts = x.split('');
		var numero = parseInt(parts[0]);
		parts.splice(0,1)
		return centena[parseInt(numero)] + convert(parts.join(''));

	}
	
	//milhar
	if(parseInt(x)<4000){
		var parts = x.split('');
		var numero = parseInt(parts[0]);
		parts.splice(0,1)
		return milhar[parseInt(numero)] + convert(parts.join(''));
	}else{
		return 'Não é possível converter';
	}
}

