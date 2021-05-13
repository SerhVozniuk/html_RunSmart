const post = async (url, data) =>{
    const res = await fetch(url, {
        method: 'POST',
        body: data,
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
    })
    if(!res.ok){
        throw new Error(`status ${res.status}`);
    }
    return await res.json();
}

export default post
