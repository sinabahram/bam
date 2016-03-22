function test() {
    $.get("https://mathmlcloud.org/equation/56f1b9efc4c5565c0a205a14", function(data, status) {
        alert("Data: " + data + "\nStatus: " + status);
    });
}
