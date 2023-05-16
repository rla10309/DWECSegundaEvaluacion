var conexion;
var btn=document.getElementById("btnInfo");
btn.addEventListener('click',obtenerInformacion);
var sec=document.getElementById("resultados");
var sec;
var pais;

function obtenerInformacion(){
    pais=document.getElementById("npais").value;
    if(pais.length==0){
        infoerr= document.createElement("p");
        infoerr.innerHTML="No se ha indicado ningún País";
        sec.append(infoerr);
    }else{
        conexion=peticionAjax();
        conexion.onreadystatechange = obtenerInfoPais;
        conexion.open("GET","catalogo.xml",true);
        conexion.send(null);
    }
}

function peticionAjax(){
    var xmlHttp =null;
    if(window.ActiveXObject){
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }else{
        if(window.XMLHttpRequest){ // W3C
            xmlHttp=new XMLHttpRequest();
            if(xmlHttp.overrideMimeType){
                xmlHttp.overrideMimeType('application/xml');
            }
        }
    }
    return xmlHttp;
}

function obtenerInfoPais(){
    if(conexion.status==200 && conexion.readyState==4){
        respuesta=conexion.responseXML; //Obtener todos los datos del xml

        //vaciar la zona sec para que no tenga informacion previa

        let encontrado=false;
        let cd= respuesta.getElementsByTagName("cd");
        for(let i=0; i<cd.length;i++){
            if(cd[i].children[2].textContent==pais.toUpperCase()){
                var info=document.createElement("p");
                info.innerHTML="Title: "+cd[i].children[0].textContent+" Artist: "+cd[i].children[1].textContent;
                sec.append(info);
                encontrado=true;
            }
        }
        if(!encontrado){
            infoerr= document.createElement("p");
            infoerr.innerHTML="No existe ningún CD de ese pais";
            sec.append(infoerr);
        }


    }
}