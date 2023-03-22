NombreAlumnos = [];
function submit(){
    var AlumnosAgregados = [];
    for(var I = 1; I<=4; I++){
        var ObtenerNombres = document.getElementById("Nombre_Alumno_"+I).value;
        console.log(ObtenerNombres);
        NombreAlumnos.Push(ObtenerNombres);
}
console.log(NombreAlumnos);
var AlumnosLargo = NombreAlumnos.length();
console.log(AlumnosLargo);
for (var J = 0; J < AlumnosLargo; J++){
    AlumnosAgregados.push("<h4>Nombre"+NombreAlumnos[J]+"</h4>");
    console.log(AlumnosAgregados);
}
console.log(AlumnosAgregados);
document.getElementById("display_name_whit_commas").innerHTML = AlumnosAgregados;
var quitarComas = AlumnosAgregados.join(" ");
console.log(quitarComas);
document.getElementById("display_name_whit_commas").innerHTML = quitarComas
document.getElementById("submit_button").style.display = "none";
document.getElementById("sort_button").style.display = "inline-block";
}
function sort(){
    NombreAlumnos = 
}
