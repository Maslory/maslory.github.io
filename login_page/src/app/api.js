

async function fetchData () {
    try{
        const response = await fetch("http://localhost:3000/tokens");
        const data = await response.toJson();
        return data;
    }
    catch(e){
        console.log(e)
    }
}

export default fetchData;