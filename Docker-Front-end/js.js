$(document).ready(function () {
  $('#example').DataTable({
    "processing": true,
    "serverSide": true,
    "ajax": {
      "url": "../Index.php",
      "type": "POST"
  },
    "columns": [
      { "data": "id" },
      { "data": "firstName" },
      { "data": "lastName" },
      { "data": "gender" },
      { "data": "hireDate" },
      { "data": "birthDate" }
    ]
  });
});



/*$(function () {
  var dati;
  var index="http://localhost:8080/Index.php";

  $("body").ready(function () {
    getDati(index);  
  });

  //prende i dati da un url
  function getDati(url){
    $.ajax({
      url: url,
      method: 'GET',
      success: function(data) {
        dati = data;
        printTable(data['_embedded']['employees']);
  
        $("#self").html(data['page']['number']+1);
        if(data['page']['number']==0){
          $(".zero").css("display","none");
        }else{
          $(".zero").css("display","inline");
        }
        if(data['page']['number']==data['page']['totalPages']){
          $(".ultm").css("display","none");
        }else{
          $(".ultm").css("display","inline");
        }
      },
      error:function(data){
        console.log(data);
        }
      });
  };

  //posta una nuova persona nella tabella
  function postDati(person){
    $.ajax({
      type: "POST",
      url: index,
      data: JSON.stringify(person),
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      success: function(poi){getDati(dati['_links']['last']['href'])},
      error: function(errMsg) {console.log(errMsg);}
  });
  };

  //elimina una persona nella tabella
  function deleteDati(id){
    $.ajax({
      url: index+'?id='+id,
      type: "DELETE",
      success: function(data){;getDati(index+"?page="+dati['page']['number']+"&size=20");}
  })
  };

  //aggiornamento dati di una persona nella tabella
  function putDati(person){
    $.ajax({
      type: "PUT",
      url: index,
      data: JSON.stringify(person),
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      success: function(poi){getDati(dati['_links']['self']['href']);},
      error: function(errMsg) {console.log(errMsg);}
  });
  };

  //crea la tabella dai dati in input
  function printTable(dati) {
    var row = "";
    for (var i = 0; i < dati.length; i++) {
      row = row + "<tr>";
      row = row + "<td>" + dati[i].id + "</td>";
      row = row + "<td>" + dati[i].firstName + "</td>";
      row = row + "<td>" + dati[i].lastName + "</td>";
      row = row + '<td data-id = "' + dati[i].id + '"> <button type="button" class="btn btn-primary edit" data-bs-toggle="modal" data-bs-target="#editmodal" data-bs-whatever="@mdo">Modifica</button><button type="button" class="btn btn-danger elimina">Elimina</button> </td>';
      row = row + "</tr>";
    }
    $("tbody").html(row);
  }

  //allega l'url al bottone
  $(".pagina").bind("click", function (event) {
    getDati(dati['_links'][$(this).attr('id')]['href']);
  });

  //aggiunge il metodo postDati al bottono aggiungi della modale
  $("#aggiungi").bind("click", function (event) {

    var nome = $("#nome").val();
    var cognome = $("#cognome").val();
    $("#nome").val("");
    $("#cognome").val("");
    var person ={
      "birthDate": "2022-03-02",
      "firstName": nome,
      "gender": "M",
      "hireDate": "2022-03-02",
      "lastName": cognome,
    };
    postDati(person);
  });

  $("body").on("click", ".elimina", function (event) {
    deleteDati($(this).parent().attr("data-id"));
  });

  $("body").on("click", ".edit", function (event) {
    for(var i = 0; i < dati['_embedded']['employees'].length ; i++){
      if(dati['_embedded']['employees'][i].id==$(this).parent().attr("data-id")){
        $("#editnome").val(dati['_embedded']['employees'][i].firstName);
        $("#editcognome").val(dati['_embedded']['employees'][i].lastName);
        $("#salva").val(dati['_embedded']['employees'][i].id);
        break;
      }
    }
  });

  $("#salva").bind("click", function (event) {
    var nome = $("#editnome").val();
    var cognome = $("#editcognome").val();
    var id = $(this).val();
    $.ajax({
      url: index+"?id="+id,
      method: 'GET',
      success: function(data) {
      data.firstName=nome;
      data.lastName=cognome;
      putDati(data);
      }
    })
  });

});
*/