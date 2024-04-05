$(document).ready(function () {
    loadDataTable();
});

function loadDataTable() {

    $("#tblData").DataTable({
        "ajax": {
            "url": '/admin/product/getall',
            "dataSrc": "products" // This line is added to specify where to find the data array in your JSON
        },
        "columns": [
            { data: 'title', "width": "25%"},
            { data: 'isbn', "width": "15%"},
            { data: 'listPrice', "width": "10%"},
            { data: 'author', "width": "20%"},
            { data: 'category.name', "width": "15%"}
        ]
    });
}

