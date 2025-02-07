
// Hämtar informationen från en API
async function fetchData(callback) {
    try{
        let response = await fetch(' https://i4kif2xfk7.execute-api.eu-north-1.amazonaws.com/bodies', {
            method: 'GET',
            headers: {'x-zocom': 'solaris-BHRyCR5Lgznl28Tr'}
        })
        // Felmeddelande om informationen inte hittas
        if(!response.ok){
            throw new Error("Could not fetch resource");
        }
        // Om informationen hittas skickas den ut som en callback function
        const data = await response.json();
        console.log(data);
        callback(data);
    }
    catch(error){
        console.error(error);
    }
}


