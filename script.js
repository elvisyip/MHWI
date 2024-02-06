let data;
let table;
document.addEventListener("DOMContentLoaded", (event) => {


    showData();

});

function readJson() {
    return new Promise(function (resolve, reject) {
        fetch("data.json").then(response => {
            return response.json();
        }).then(response => {
            console.log(response);

            data = response;
            resolve();
        })
    });
}

function showData() {

    readJson().then(function (value) {
        table = new Tabulator("#table", {
            height: "100%",
            layout: "fitDataFill",
            resizeableColumnFit: true,
            columnHeaderVertAlign: "bottom",
            data: data,
            columns: [
                { title: "龍種", field: "type", width: 90, resizable: true, frozen: true },
                { title: "魔物", field: "name", width: 120, resizable: true, frozen: true },
                {
                    title: "屬性剋制",
                    columns: [
                        { title: "火", field: "fire", width: 90, resizable: true, formatter: "star", formatterParams: { stars: 3 } },
                        { title: "水", field: "water", width: 90, resizable: true, formatter: "star", formatterParams: { stars: 3 } },
                        { title: "雷", field: "thunder", width: 90, resizable: true, formatter: "star", formatterParams: { stars: 3 } },
                        { title: "冰", field: "ice", width: 90, resizable: true, formatter: "star", formatterParams: { stars: 3 } },
                        { title: "龍", field: "dragon", width: 90, resizable: true, formatter: "star", formatterParams: { stars: 3 } },
                    ]
                },
                {
                    title: "狀態異常",
                    columns: [
                        { title: "毒", field: "poison", width: 90, resizable: true, formatter: "star", formatterParams: { stars: 3 } },
                        { title: "睡眠", field: "sleep", width: 90, resizable: true, formatter: "star", formatterParams: { stars: 3 } },
                        { title: "麻痺", field: "paralysis", width: 90, resizable: true, formatter: "star", formatterParams: { stars: 3 } },
                        { title: "爆破", field: "explode", width: 90, resizable: true, formatter: "star", formatterParams: { stars: 3 } },
                        { title: "昏厥", field: "coma", width: 90, resizable: true, formatter: "star", formatterParams: { stars: 3 } },
                    ]
                },
                { title: "備註", field: "remark", resizable: true },
            ],
        });

        // table.setFilter("type", "=", "鳥龍種");
    });


}

function search() {
    table.clearFilter();

    let searchType = document.querySelector("#searchType").value;
    let searchName = document.querySelector("#searchName").value;

    if (searchType != "") {
        table.setFilter("type", "=", searchType);
    }

    if (searchName != "") {
        table.setFilter("name", "like", searchName);
    }
}