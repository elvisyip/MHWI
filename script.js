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
            layout: "fitColumns",
            resizeableColumnFit: true,
            columnHeaderVertAlign: "bottom",
            data: data,
            columns: [
                { title: "龍種", field: "type", width: 100, resizable: true, frozen: true },
                { title: "魔物", field: "name", width: 100, resizable: true, frozen: true },
                {
                    title: "屬性剋制",
                    columns: [
                        { title: "火", field: "fire", width: 100, resizable: true, formatter: "star", formatterParams: { stars: 3 } },
                        { title: "水", field: "water", width: 100, resizable: true, formatter: "star", formatterParams: { stars: 3 } },
                        { title: "雷", field: "thunder", width: 100, resizable: true, formatter: "star", formatterParams: { stars: 3 } },
                        { title: "冰", field: "ice", width: 100, resizable: true, formatter: "star", formatterParams: { stars: 3 } },
                        { title: "龍", field: "dragon", width: 100, resizable: true, formatter: "star", formatterParams: { stars: 3 } },
                    ]
                },
                {
                    title: "彈藥剋制",
                    columns: [
                        { title: "毒", field: "poison", width: 100, resizable: true, formatter: "star", formatterParams: { stars: 3 } },
                        { title: "睡", sleep: "sleep", width: 100, resizable: true, formatter: "star", formatterParams: { stars: 3 } },
                        { title: "麻", field: "paralysis", width: 100, resizable: true, formatter: "star", formatterParams: { stars: 3 } },
                        { title: "爆", field: "explode", width: 100, resizable: true, formatter: "star", formatterParams: { stars: 3 } },
                        { title: "昏", field: "coma", width: 100, resizable: true, formatter: "star", formatterParams: { stars: 3 } },
                    ]
                },
                { title: "備註", field: "remark", width: 100, resizable: true },
            ],
        });
    });


}