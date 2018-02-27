// Promises.1:
// Web crawling
// There is one page on the domain http://marijnhaverbeke.nl that contains the word “Piranha”.
// It is linked from the domain's top page.
//
//     Given this Promise-returning implementation of an HTTP get request,
//     write a simple promise-based “crawler” that first fetches the top page,
//     then uses some crude regexp technique to find linked URLs in that page,
//     and fetches all linked local pages, in parallel.
//     It scans the content of those pages for the word “Piranha”,
//     and logs the address of any matching pages to the console.

function sendReqToItem(urlsArray) {
    return urlsArray.map(item => {
        return fetch(`http://marijnhaverbeke.nl/${item}`)
            .then(response => response.status === 200 && response.text())
            .then(text => text.includes('piranha') && item)
            .catch(error => console.log(error))
    })
}

function get(url, callback) {
    fetch(url)
        .then(response => response.status === 200 && response.text())
        .then(text => text
            .match(/<a href=["|'](?!http)(?!mail)(.*?)["|']/ig)
            .map(item => item.slice(9, -1))
        )
        .then(urlsArray => {
            Promise.all(sendReqToItem(urlsArray))
                .then( foo => callback(foo.filter(cur => cur)))
        })
        .catch(error => console.log(error))
}
get(
    'http://marijnhaverbeke.nl',
    res => console.log(res)
);