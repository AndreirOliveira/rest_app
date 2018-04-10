var $$ = Dom7;

$$(document).on('page:init', '.page[data-name="listar_reserva"]', function (e) {
    firebase.database().ref('reserva').on('value', function (snapshot){
        //usersList.innerHTML = '';
        $$("#usersListt").empty();
        
    
        snapshot.forEach(function(item){
                var listHtml = '<div class="row block block-strong">';
                listHtml += '<td class="label-cell col-20">'+item.key+'</td>';
                //listHtml += '<div class="col-20 fonteestoquejs">'+ item.val().Id +'</div>';
                listHtml += '<div class="col-12 fonteestoquejs">'+ item.val().Nome +'</div>';
                listHtml += '<div class="col-12 fonteestoquejs">'+ item.val().Pessoas +'</div>';
                listHtml += '<div class="col-12 fonteestoquejs">'+ item.val().Data +'</div>';
                listHtml += '<div class="col-12 fonteestoquejs">'+ item.val().Horario +'</div>';
                listHtml += '<div class="col-12 fonteestoquejs">'+ item.val().Email +'</div>';
                listHtml += '<div class="col-12 fonteestoquejs">'+ item.val().Telefone +'</div>';
                listHtml += '<div class="col-12 fonteestoquejs">'+ item.val().Mensagem +'</div>';
                listHtml += '</div>';
                //e.append(listHtml).innerHTML;
                $$("#usersListt").append(listHtml);
    
            
        })
    })
    
});


function apagarrr(){
    
        var apagarrr = document.getElementById('excluirrr').value;
    
        apagardb(apagarrr);
    }
    
    function apagardb(apaga){
    
        return firebase.database().ref().child('reserva').child(apaga).remove();
    }