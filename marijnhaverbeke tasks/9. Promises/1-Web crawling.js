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

get('http://marijnhaverbeke.nl');
    urlsArray = []
function  callback(textHTML) {
    if(textHTML.search( /piranha/ig) != -1 )
        return true
}

function get(url, callback) {

        fetch(url)

            .then(function (response) {
                if (response.status === 200)
                    return response.text();
            })
            .then(function (text) {

            }

            }) {

    }
            })

//str.match(reg) с флагом g


            .catch(new Error("Network error"))
    }
