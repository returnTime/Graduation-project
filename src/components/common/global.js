let isLogInUser = localStorage.getItem('isLogIn');
let logInavatar = localStorage.getItem('avatar');
let logInUserToken = localStorage.getItem('token');

export default {
    isLogInUser,
    logInavatar,
    logInUserToken,
    isPop : false,
    revisePop(){
    this.isPop=!this.isPop;
    console.log(this.isPop);
    
        }
    }
