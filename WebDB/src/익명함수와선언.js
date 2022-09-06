const relationship2={
    name: 'zero',
    friends: ['nero', 'hero', 'xero'],
    logFriends(){
        this.logFriends.forEach(friend =>{
            console.log(this.name, friend)
        })
    }
}