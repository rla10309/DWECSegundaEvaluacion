$(document).ready(function(){
    $("#btnInfo").click(function(){
        var pais=$("#npais").val();
        if(pais.length==0){
            let infoerr="<p>No ha indicado ningún País</p>";
            $("#resultados").append(infoerr);
        }
        else{
            $.ajax({
                url:"catalogo.xml",
                dataType:"xml",
                type:"GET",
                async:true,
                success:function (result){
                    $(result).find("cd").each(function(){
                        if($(this).find("country").text()==pais){
                            let linea="<p>Titulo: "+$(this).find("title").text()+" Autor: "+$(this).find("artist").text()+"</p>";
                            $("#resultados").append(linea);
                        }
                    });
                },
                error:function(){
                    let infoerr="<p>No se han podido obtener los datos</p>";
                    $("#resultados").append(linea);
                }
            });
        }
    });
});