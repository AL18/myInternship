// Block scope.2:
// Constant non-constance

// Does the fact that account is constant mean that we can't update password? ' +
// 'Why, or why not? And if not, how could we make it so that we can't?

const account = {
    username: "marijn",
    password: '11111'
}

let proxy = new Proxy(account, {
    set(target, prop, value) {
        if (prop === 'password') {
            console.log('Can`t update password')
            return
        }
        console.log('Updated successfully')
         target[prop] = value;
        return true
    }
})


// Object.defineProperty(account, 'password', {
//     value: '11111',
//     writable: false
// });

proxy.password = "s3cret"
proxy.username = "user1"

console.log(proxy.password)
console.log(proxy.username)
