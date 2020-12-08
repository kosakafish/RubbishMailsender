// @ts-check
const nodemailer = require("nodemailer")
const { default: Axios } = require("axios");

async function sendMail(text){
    var user = "######@qq.com";   //自定义
    var receiver = "#########@163.com";
    var pass = "#################"; //16位授权码
    let trans = nodemailer.createTransport(
        {
            host: "smtp.qq.com",
            port: 587,
            secure: false,
            auth: {
              user: user, // 用户账号
              pass: pass, //授权码,通过QQ获取
            },
        
        }
    );
    let info = await trans.sendMail(
        {
            from: `亲爱的老公<${user}>`, // sender address
            to: `亲爱的老婆<${receiver}>`, // list of receivers
            subject: "亲爱的老婆", // Subject line
            text: text, // plain text body
        
        }
    );
    console.log('成功');
    
}

function getHoneyword(){
    var url = "https://chp.shadiao.app/api.php";
    return Axios.get(url);
    
}
getHoneyword().then(res=>{
    console.log(res.data);
    sendMail(res.data);
})
