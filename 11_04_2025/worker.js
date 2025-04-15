self.onmessage = function(event) {
    if (event.data === "start") {
        let i = 0;
        while (i < 1000000) {
            i++;
            self.postMessage(i);
        }
        self.postMessage("Heavy loop finished");
    }
}
