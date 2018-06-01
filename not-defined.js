module.exports=function(x){return x==null||(typeof x == 'number'&&isNaN(x))||(x.length<1&&typeof x!='function')||(typeof x=='object'&&Object.keys(x).length<1)}
