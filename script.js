function updateLabel(e, value) {
    document.querySelector(".hlabel").innerHTML = value
}

document.onkeydown = (event) => {
    if (event.code === "F2") {
        if (confirm("Udah?")) {
            let fn = `${Date.now().toString()}.txt` // new Date(Date.now());
            saveTextAsFile(fn)
            document.querySelector(".text").value = ""
        };
    }
}

function saveTextAsFile(fileName) {
    let encoder = new TextEncoder()
    let textToWrite = encoder.encode((Number(document.querySelector(".r").value) % 10).toString() + document.querySelector(".text").value).join(",");
    //TextDecoder.decode(new Uint8Array(string.split(",")));
    let textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
    let downloadLink = document.createElement("a");
    downloadLink.download = fileName;
    downloadLink.innerHTML = "Download File";
    if (window.webkitURL != null) {
        downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    }
    downloadLink.click();
}