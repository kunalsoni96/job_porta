import axios from 'axios';
export function PostData(type, userData) {
    return new Promise((resolve, reject) =>{
        super(props);
        this.state = {
        loginError: false,
        redirectToReferrer: false,
        };
        const social = {
            Token: userData.token,
            Name: userData.name,
            Email: userData.email,
            Provider: userData.provider,
            ProviderId: userData.provider_id,
            ProviderPic: userData.provider_pic,
        };
   
        axios({
            method: 'post',
            responseType: 'json',
            url: 'http://localhost:1000/CandidateUsers/login',
            data: social
        })
        .then(res => {
            // console.log(res);
            // console.log(res.data);
        })
        
    });
    
}