export async function postFetch(endpoint, bodyObj) {
    return await fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        redirect: "follow",
        body: JSON.stringify(bodyObj),
    }).then(res => {
        return res.json()
    }).then(res => {
        if(res.success) {
            return res;
        }
        throw Error(JSON.stringify(res))
    })
    .catch((e) => {
        console.log(e);
        return {}
    })
}

export async function getFetch(endpoint, auth) {
    return await fetch(endpoint, {
        method: "GET",
        redirect: "follow",
        headers: {
            Authorization: auth,
        },
    }).then(res => {
        return res.json()
    }).then(res => {
        if(res.success) {
            return res;
        }
        throw Error(JSON.stringify(res))
    })
    .catch((e) => {
        console.log(e);
        return {}
    })
}