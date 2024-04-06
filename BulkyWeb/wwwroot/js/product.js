﻿$(document).ready(function () {
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
            { data: 'author', "width": "15%"},
            { data: 'category.name', "width": "10%" },
            {
                data: 'id',
                "render": function (data) {
                    return `<div class="w-75 btn-group" role="group"> 
							<a href="/admin/product/upsert?id=${data}" class="btn btn-primary mx-2">
								<i class="bi bi-pencil-square"></i> Edit
							</a>

							<a href="/admin/product/delete?id=${data}" class="btn btn-danger mx-2">
								<i class="bi bi-trash-fill"></i> Delete
							</a>
						</div>`;
                }
            }
        ]
    });
}
