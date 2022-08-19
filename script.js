/* 1)---------
IMPLEMENTAR UNA FUNCIÓN QUE TOME 2 NUMEROS COMO ARGUMENTOS (x y z) EN EL CUAL
SI x ES MENOR QUE z, x DIVIDE A z, CASO CONTRARIO SE MULTIPLICAN. RETORNAR
EL RESULTADO
 */

 function operaciones(x,z){
if (x<z){
    div = x/z
    return console.log(div)
} else{multi = x*z}
return console.log(multi)
}
operaciones(5,2)

/* 2)---------
IMPLEMENTAR UNA FUNCIÓN QUE TOME UN VALOR COMO ARGUMENTO Y RETORNE DE QUE TIPO
ES (SI ES STRING, NUMBER, BOOLEAN, ETC) */

function tipodato(a){
a = true
	return console.log(typeof(a))
}
tipodato()

/* 3)---------
IMPLEMENTAR UNA FUNCIÓN QUE TOME 6 VALORES (a,b,c,d,e,f) COMO ARGUMENTOS
- a y b SE SUMAN
- EL RESULTADO DE LA SUMA SE RESTA CON c
- LUEGO SE MULTIPLICA POR d Y SE DIVIDE POR e
- FINALMENTE SE HACE LA POTENCIA CON EL EXPONENTE f.
- SE RETORNA EL RESULTADO
- TIP: RECORDAR EL ORDEN */

function valores(a,b,c,d,e,f){
suma = a+b
resta = suma-c
multi = (resta*d)/e
potencia = multi**f
resultado = potencia
	return console.log(resultado)
}
valores(3,5,6,8,10,3)

/* 4)---------
IMPLEMENTAR UNA FUNCIÓN QUE TOME UN ARRAY COMO ARGUMENTO Y SE EXTRAIGA LOS
ULTIMOS 3 ELEMENTOS. RETORNAR EL RESULTADO COMO UN NUEVO ARRAY. */
let miArray = ["hola",3,4,"chau",5]
function array(){
    elemento1 = miArray[miArray.length-3]
    elemento2 = miArray[miArray.length-2]
    elemento3= miArray[miArray.length-1]
    nuevoArray = [elemento1,elemento2,elemento3]
	return console.log(nuevoArray)
}
array()
/* 5)---------
IMPLEMENTAR UNA FUNCIÓN QUE TOME UN ARRAY COMO ARGUMENTO, ORDENAR ALFABÉTICAMENTE
Y/O DE MAYOR A MENOR Y RETORNAR EL RESULTADO */
let miArray2 = [1,2,3,4,8,5,9,6]
function array2(){
 alfabetico = miArray2.sort()
	return console.log(alfabetico)
}
array2()

/* 6)---------
IMPLEMENTAR UNA FUNCIÓN QUE RECIBA COMO ARGUMENTO UN ARRAY (a) Y UN VALOR(b).
LA FUNCION DEBE REMOVER TODOS LOS ELEMENTOS DEL ARRAY IGUALES AL VALOR(b).
RETORNAR EL ARRAY FILTRADO */
let miArray3 = [1,2,6,5,4,7,3,3,3,3]
function array3(miArray3,b){
 for (let i = 0; i < miArray3.length; i++) {
    if(miArray3[i] === b){
        arrayFiltrado = miArray3.splice(0,i)
           }
 } 
 return console.log(arrayFiltrado)
}
array3(miArray3,3)

/* 7)---------
IMPLEMENTAR UNA FUNCIÓN QUE RECIBA UN ARRAY DE NUMEROS COMO ARGUMENTO Y QUE
RETORNE LA SUMA DE LOS ELEMENTOS DEL ARRAY. IDEM A ESTE APARTADO CREAR OTRA
FUNCIÓN QUE RETORNE EL PROMEDIO DE LOS ELEMENTOS DEL ARRAY. */
suma = 0;
let paraSumar = [1,2,3,4,5]
function sumaArray(){
for (let i = 0; i < paraSumar.length; i++) {
    suma += paraSumar[i]
    promedio = suma/5
}
return console.log(`suma: ${suma} promedio: ${promedio}%`)
}

sumaArray()

/* 8)---------
IMPLEMENTAR UNA FUNCIÓN QUE TOME: OBJETO CON 2 O 3 PROPIEDADES Y UN STRING
COMO ARGUMENTOS. DEBE RETORNAR EL VALOR DE LA PROPIEDAD CUYA KEY SEA IGUAL
AL VALOR DEL STRING DEL ARGUMENTO
 */
objeto = {nombre: 'Rosa', apellido: 'Gomez', Tel: '12434'}
let b = "apellido"
 function tomaObjeto(objeto, b){
for (key in objeto) {
       if(key === b){
        return (objeto[key])
       }

}
}
console.log(tomaObjeto(objeto,b))
 
/* 9)---------
IMPLEMENTAR UNA FUNCIÓN QUE RECIBA UN OBJETO COMO ARGUMENTO Y RETORNAR
LA SUMA DE TODOS SUS VALORES. */

numeros= {
    valor1: 10,
    valor2: 4,
    valor3: 19,
    "valor4": 14
}
let sumaValores = 0 
function sumarValores(){
    for (const key in numeros) {
    sumaValores+= numeros[key]
    }
    console.log(sumaValores)
}
sumarValores()

