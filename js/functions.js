// document.body.onload =function(){ // document hace referencia al documento html, luego accede al body y ejecuta la función deseada

// alert("Hola mundo")
// }

function suma(){ // Las funciones siempre están a la espera de ser invocadas
    var A = 0;
    var B = 0;
    var SUMA = 0;

    alert("Este algoritmo realiza una suma de dos valores ingresados por el usuario");
    
    A = parseInt(prompt("Por favor ingrese el primer valor a sumar")); // Esto saca el mensaje de salida y guarda el valor al mismo tiempo (lee)
    B = parseInt(prompt("Por favor ingrese el segundo valor a sumar")); //prompt captura valores de tipo string y parseInt los convierte a valores enteros

    SUMA = A + B;

    alert("El resultado de la suma es: " + SUMA);

}

function operacionesBasicas(){
    var A = 0;
    var B = 0;
    var SUMA = 0;
    var RESTA = 0;
    var MULTIPLICACION = 0;
    var DIVISION = 0;

    alert("Este algoritmo realiza las operaciones básicas de dos valores ingresados por el usuario");

    A = parseInt(prompt("Por favor ingrese el primer valor"));
    B = parseInt(prompt("Por favor ingrese el segundo valor"));

    SUMA = A + B;
    RESTA = A - B;
    MULTIPLICACION = A * B;
    DIVISION = A / B;

    alert("El resultado de la suma es: " + SUMA + "\nEl resultado de la resta es: " + RESTA + "\nEl resultado de la multiplicación es: " + MULTIPLICACION + "\nEl resultado de la división es: " + DIVISION);

}

function mayorQue(){

    var A = 0;
    var B = 0;

    alert("Este algoritmo compara dos valores ingresados por el usuario y define el mayor de los dos");

    A = parseInt(prompt("Por favor ingrese el primer valor"));
    B = parseInt(prompt("Por favor ingrese el segundo valor"));

    if (A>B){
            alert("El número mayor es: " + A);
    }   else if (A==B){
            alert(A + " Es igual a " + B);
    }   else {
            alert("El número mayor es: " + B);

    }

}

function menorDeTresNum(){

    var A = 0;
    var B = 0;
    var C = 0;

    alert("Este algoritmo compara tres valores ingresados por el usuario y define el menor de los tres");

    A = parseInt(prompt("Por favor ingrese el primer valor"));
    B = parseInt(prompt("Por favor ingrese el segundo valor"));
    C = parseInt(prompt("Por favor ingrese el tercer valor"));

    if ((A==B) && (A==B)){
            alert("Los tres valores son iguales: " + A);
    } else if ((A<B && A<B)){
            alert("El numero menor de los tres es: " + A);
    } else if (B<C){
            alert ("El numero menor de los tres es " + B);
    } else{
            alert("El numero menor de los tres es " + C);
    }

}

function parVsImpar(){
    var A = 0;
    var cal = 0;

    alert("Este algoritmo analiza el valor ingresado por el usuario y define si es par o impar");

    A = parseInt(prompt("Por favor ingrese el valor a analizar"));

    cal = A % 2;

    if (cal == 0){
        alert("El número es par");
    } else{
        alert("El número es impar");   
    }

}

function alCuadrado(){
        var A = 0;
        var C = 0;

        alert("Este algoritmo calcula el cuadrado de un número ingresado por el usuario");

        A = parseInt(prompt("Por favor ingrese un valor"));

        C = A*A;

        alert("El cuadrado del valor ingresado es: " + C);

}

function areaTri(){
        var A = 0;
        var B = 0;
        var AREA = 0;

        alert(" Este algoritmo  calcula el ára de un triángulo a partir de los valores ingresados");

        B = parseInt(prompt("Ingrese el valor de la BASE del triángulo"));
        A = parseInt(prompt("Ingrese el valor de la ALTURA del triángulo"));

        AREA = (B*A)/2;

        alert("El ÁREA del triangulo es: " + AREA);

}

function calMetros(){
        var A = 0;
        var B = 0;

        alert("Este algoritmo convierte un valor en METROS a PUL y KM");

        A = parseInt(prompt("Ingrese un valor (m)"));

        B = A*100;

        alert("Valor ingresado: " + A + " M" + "\nConversion a CM: " + B);

        B = 0;
        B = A*39.37;

        alert("valor ingresado: " + A + " M" + "\nConversion a PUL: " + B);

        B = 0;
        B = A/1000;

        alert("valor ingresado: " + A + " M" + "\nConversion a KM: " + B);

}

function cifras(){
        var A = 0;

        alert("Este algoritmo determinar la cantidad de cifras de un numero ingresado por el usuario");

        A = parseInt(prompt("Ingrese el valor a analizar"));

        if (A<10) {
                alert("El numero tiene una cifra");
        } else if ((A==10)||(A<100)){
                alert("El numero tiene dos cifras");
        } else if ((A==100)||(A<1000)){
                alert("El numero tiene tres cifras");
        }else{
                alert("El numero tiene cuatro cifras o mas");     
        }

}

function nace(){
        var C = 2022;
        var EDAD = 0;
        var NACE = 0;

        alert("Este algoritmo calcula el año de nacimiento a partir de la edad ingresada");

        EDAD = parseInt(prompt("Ingrese su edad"));
        NACE = C-EDAD;

        alert("El usuario nació en el año: "+ NACE);


}

function capitalBanco(){
        var capital = 0;
        var n = 0;
        var intAnual = 0;
        var intFinal = 0;
        var capitalFinal = 0;

        alert("Este algoritmo calcula el interés de n años al 2% mensual de un capital invertido");

       capital = parseInt(prompt("Ingrese el capital invertido"));
       n = parseInt(prompt("Ingrese el numero de años a calcular"));

       intAnual = (capital*2/100)*12;
       intFinal = intAnual*n;
       capitalFinal = capital+intFinal;

       alert(" El capital final por " + n + " años es de  $" + capitalFinal + " pesos");

}

function colegio(){
        var A = 0;
        var B = 0;
        var C = 0;
        var D = 0;
        var E = 0;
        var NOTA = 0;
        var PROM = 0;
        var ESC = 3;

        alert("Este algoritmo halla el PROMEDIO de cinco notas de un alumno y dice si pasa o no la materia de ingles en el colegio ABC ");
        alert(" RECUERDE: la escala de notas es de 1 a 5 - el alumno reprueba con un valor igual o menor que 2.9 ");

       A = parseFloat(prompt(" Ingrese el valor de la primera nota de ingles "));
       B = parseFloat(prompt(" Ingrese el valor de la segunda nota de ingles "));
       C = parseFloat(prompt(" Ingrese el valor de la tercera nota de ingles "));
       D = parseFloat(prompt(" Ingrese el valor de la cuarta nota de ingles "));
       E = parseFloat(prompt(" Ingrese el valor de la quinta nota de ingles "));
       

       PROM = (A+B+C+D+E)/5;

       if (PROM>=ESC) {
               alert("El PROMEDIO de las notas ingresadas fue de: " + PROM + " EL ALUMNO APROBO.");

       } else {
                alert(" El PROM de las notas ingresadas fue de: ", PROM, " EL ALUMNO REPROBO. ")
       }


} 

function fruteria(){
        var kiloPrecio = 4500;
        var k = 0;
        var desc = 0;
        var compra = 0;
        var descFin = 0;
        var compraFin = 0;

        alert(" Este algoritmo que calcula el descuento de frutas segun kilos comprados");

        k = parseFloat(prompt(" Ingrese la cantidad de kilos comprados "));

        if (k<=2) {
                desc = 0;
        } else if ((k>2) && (k<=5)) {
                desc = 10;
        } else if ((k>5) && (k<=10)) {
                desc = 15;
        } else {
                desc = 20;   
        }   
         
         compra = kiloPrecio*k;
         descFin = (compra*desc)/100;
         compraFin = compra-descFin;

         alert(" El descuento fue del: " + desc + " %" + " equivalente a $" + descFin + "\n Valor inicial de la compra $" + compra +  "\nLa compra final es de $" + compraFin);        
        
}

    



