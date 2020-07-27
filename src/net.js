/**
* Retrieve an xhr item located at the specified url
*
* @param   {string  - path to xhr resource
* @returns {Promise}
**/
function get(url) {
    if(typeof XMLHttpRequest === "undefined"){
        const msg = "XMLHttpRequest in undefined. Please an xmlhttprequest package";
        console.error(msg);
        return new Promise(function(resolve, reject) {reject(new Error(msg));});
    }

    return new Promise(function(resolve, reject) {
        let req = new XMLHttpRequest();
        req.responseType = 'document';
        req.open('GET', url, true);
        req.setRequestHeader('accept', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9')
        req.onload = function() {
            if (req.status == 200) {
                resolve(req.response);
            } else {
                reject(new Error(req.statusText));
            }
        };
        req.onerror = function() {
            reject(new Error('IO Error'));
        };
        req.send();
    });
}

/**
* Retrieve a JSON file located at the specified url
*
* @param   {string} url - path to json document
* @returns {Promise}
**/
function getJSON(url) {
    if(typeof XMLHttpRequest === "undefined"){
        const msg = "XMLHttpRequest in undefined. Please an xmlhttprequest package";
        console.error(msg);
        return new Promise(function(resolve, reject) {reject(new Error(msg));});
    }

    return new Promise(function(resolve, reject) {
        let req = new XMLHttpRequest();
        req.open('GET', url);
        req.onload = function() {
            if (req.status == 200) {
                let text = req.responseText;
                try {
                    resolve(JSON.parse(text));
                } catch e {
                    console.warn("Failed trying to parse", text);
                }
            } else {
                reject(new Error(req.statusText));
            }
        };
        req.onerror = function() {
            if (reject) {
                reject(new Error('IO Error'));
            }
        };
        req.send();
    });
}


/**
* Retrieve a parsed HTML document located at the specified url
*
* @param   {string} url - path to html document
* @returns {Promise}
**/
function getHTML(path) {
    if(typeof XMLHttpRequest === "undefined"){
        const msg = "XMLHttpRequest in undefined. Please an xmlhttprequest package";
        console.error(msg);
        return new Promise(function(resolve, reject) {reject(new Error(msg));});
    }
    return new Promise(function(resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", path);
        xhr.responseType = "document";
        xhr.onload = function() {
            if (xhr.status == 200) {
                resolve(this.responseXML);
            }
            else  {
                reject(new Error(`getHTML Error: ${xhr.statusText} ${path}`));
            }
        }
        xhr.onerror = () => { if (reject) reject(new Error(`getHTML Error: ${xhr.statusText} ${path}`)); }
        xhr.send();
    });
}

export {get, getJSON, getHTML}