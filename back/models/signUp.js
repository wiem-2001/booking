const mongoose= require('mongoose');


let schemaClient = mongoose.Schema({
    
    nom:{ type:String,
        
      },

    prenom:{ type:String,
      
    },
    email:{ type:String,
      
    },
    naissance:{ type:Date,
      
    },
    tel:{ type:Number,
      
    },
    sexe:{ type:String,
      
    },
  
    password:{ type:String,
     
    },
    
})

var Client=mongoose.model('client',schemaClient)
var url='mongodb://localhost:27017/booking'


exports.registerClient=(nom,prenom,email,naissance,tel,sexe,password)=>{
    //test email if exist 
    return new Promise((resolve,reject)=>{
        mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{

            return Client.findOne({email:email})

        }).then((client)=>{
            if (client){
                mongoose.disconnect(),
                reject('email is used')
            }
            

        }).then(()=>{
            let client= new Client ({
            nom:nom,
            prenom:prenom,
            email:email,
            naissance:naissance,
            tel:tel,
            sexe:sexe,
            password:password,
           
        })
        return client.save()
        
        }).then((client)=>{
            mongoose.disconnect()
            resolve('compte crée !')
        }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
        })

    })

}

exports.loginClient=(email,password)=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{

            return Client.findOne({email:email})

        }).then((client)=>{

            if(client){

               
 
                 if(password == client.password){
                     mongoose.disconnect();
                     resolve('client trouvé');
                 }
                 else{
                     mongoose.disconnect();
                     reject('invalid password');
                 }
                
            }else{
                mongoose.disconnect();
                reject('user introuvable');
            }
              
             
})
    })}
