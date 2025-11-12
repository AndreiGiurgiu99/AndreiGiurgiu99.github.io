const quaggaConfig = {
    inputStream: {
        target: document.querySelector('#camera'),

        type: 'LiveStream', 
        constraints: {
            width: { min: 640 },
            height: { min: 480 },
            facingMode: 'environment',
            aspectRatio: { min: 1, max: 2 }
        }
    },
    decoder: {
        readers: ['code_39_reader', 'ean_reader', 'ean_8_reader', 'code_128_reader']
    },
    }

Quagga.init(quaggaConfig, function (err){
    if (err) {
        console.error(err);
        return;
    }   
    Quagga.start();
    console.log("Quagga started successfully.");
});

Quagga.onDetected(function (result) {
    alert("Barcode detected: " + result.codeResult.code);
    
});
