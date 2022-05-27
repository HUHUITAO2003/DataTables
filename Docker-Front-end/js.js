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
