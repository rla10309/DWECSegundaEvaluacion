

    let elem;
    function dragstart(caja, evento){
        elem = caja.id;
        evento.dataTransfer.setData("Data", caja.id);
        console.log(evento);
    }
    function over(target, evento){
        if(elem=="div1" && target.id=="section3"){
            return false;
        } else if(elem=="div2" && target.id=="section3"){
            return false;
        } else if(elem=="div3" && target.id=="section2"){
            return false;
        } else return true;
    }

    function drop(target, evento){
        var contenedor = evento.dataTransfer.getData("Data");
        target.appendChild(document.getElementById(contenedor));
    }



