function readClass(num) {
	uNames = ["","як","ду","се","чор","панҷ","шаш","ҳафт","ҳашт","нӯҳ"];
	dNames = ["","даҳ","бист","си","чил","панҷоҳ","шашт","ҳафтод","ҳаштод","навад"];
	cNames = ["","сад","ду сад","се сад","чор сад","панҷ сад","шаш сад ","ҳафт сад","ҳашт сад","нӯҳ сад"];
	r = [];
	l = num.length;
	
	if (1 == l) {
		c = 0;
		d = 0;
		u = num[0];
	}
	if (2 == l) {
		c = 0;
		d = num[0];
		u = num[1];
	}
	if (3 == l) {
		c = num[0];
		d = num[1];
		u = num[2];
	}
	
	if (c != "0" && d == "0" && u != "0") {
		r[0] = cNames[+c];
		r[1] = dNames[+d]+" ";
		r[2] = uNames[+u];
	} else {
		r[0] = cNames[+c];
		r[1] = dNames[+d];
		r[2] = uNames[+u];
	}
	
	return r;
}

function removeZeros(num){
	l = num.length;
	r = num;
	for (i=0;i<l;i++){
		if (num[i] == "0") {
			r = num.slice(i+1);
		} else {
			break;
		}
	}
	return r;
}


function functiontj(num){
	num = removeZeros(num);
	l = num.length;
	if (l < 4) {
		b = [];
		m = [];
		t = [];
		o = readClass(num);
		
		r = o.join(" ");
	}
	if (l < 7 && 3 < l) {
		b = [];
		m = [];
		t = readClass(num.slice(0,-3));
		o = readClass(num.slice(-3));
		
		r = t.join(" ")+" ҳазору "+o.join(" ");
	}
	if (l < 10 && 6 < l) {
		b = [];
		m = readClass(num.slice(0,-6));
		t = readClass(num.slice(-6,-3));
		o = readClass(num.slice(-3));
		
		r = m.join(" ")+" миллиону "+t.join(" ")+" ҳазору "+o.join(" ");
	}
	if (l < 13 && 9 < l) {
		b = readClass(num.slice(0,-9));
		m = readClass(num.slice(-9,-6));
		t = readClass(num.slice(-6,-3));
		o = readClass(num.slice(-3));
		
		r = b.join(" ")+" миллярду "+m.join(" ")+" миллиону "+t.join(" ")+" ҳазору "+o.join(" ");
	}
	if (12 < l) {
		r = "Адади шумо дохил кардаги беҳад калон аст";
	}
	
	r = r.trim();
	r = r.replace(/\s+/g, " ");
	r = r.replace(/\s\+/g, " у");
	console.log(num);
	console.log(r);
	return r;
}

