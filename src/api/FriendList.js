// import BaseAPI from '@/api/BaseAPI'
import Friend from './entity/Friend'
import Friends from './__mock/friends.json'

const FriendListAPI = {
  getFriendList () {
    // const url = '/__mock/friends.json'
    return new Promise((resolve) => {
      setTimeout(() => {
        // resolve(FriendList)
        const friendList = Friends.map(friend => new Friend(friend))
        resolve(friendList)
      }, 1000)
    })
    // return BaseAPI.get(url)
    //   .then(data => {
    //     const friends = data.map(friend => new FriendList(friend))
    //     return Promise.resolve(friends)
    //   })
  }
}

export default FriendListAPI
