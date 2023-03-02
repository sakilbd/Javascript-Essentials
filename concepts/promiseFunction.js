// this one works in sensometer react  project in createRoomCard componene

const getBase64 = (file) => {
    return new Promise(resolve => {
        let fileInfo;
        let baseURL = "";
        // Make new FileReader
        let reader = new FileReader();

        // Convert the file to base64 text
        reader.readAsDataURL(file);

        // on reader load somthing...
        reader.onload = () => {
            // Make a fileInfo Object
            baseURL = reader.result;
            resolve(baseURL);
        };
        // console.log(fileInfo);
    });
};

getBase64(imageFile).then(result => {
    console.log(result)
})