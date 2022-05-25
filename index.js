import express from 'express';
import cheerio from 'cheerio';
import fs from 'fs-extra';
import { dirname } from 'path';
import path from 'path';
import { fileURLToPath } from 'url';
import phantom from 'phantom';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3003;
const country="zh";

let pageNamelistURL=[
  "",
  "outright",
  "parlays-multiples",
  "each-way",
  "cashout",
  "american-football",
  "archery",
  "athletic",
  "aussie",
  "badminton",
  "baseball",
  "basketball",
  "beach-soccer",
  "beach-volleyball",
  "boxing",
  "cricket",
  "cycling",
  "darts",
  "esports",
  "field-hockey",
  "financial-bets",
  "football",
  "futsal",
  "golf",
  "gymnastics",
  "handball",
  "ice-hockey",
  "judo",
  "lacrosse",
  "lottery",
  "medal-betting",
  "motor-sports",
  "olympics",
  "rowing",
  "rugby",
  "snooker",
  "softball",
  "table-tennis",
  "tennis",
  "triathlon-modern-pentahlon",
  "volleyball",
  "water-polo",
  "weightlifting",
  "wintersports-winterolympics"
  
];

let countrys=[
  "en",
  "id",
  "ja",
  "km",
  "ko",
  "pt",
  "th",
  "vi",
  "zh"
];

let countrysurl=[
  "en-gb",
  "id-id",
  "ja-jp",
  "km-kh",
  "ko-kr",
  "pt-br",
  "th-th",
  "vi-vn",
  "zh-cn"
];

function loadHTML(path){
  return new Promise(function(resolve,reject){
    fs.readFile(path,'utf8',function(err,data){
      if(err){
          console.log(err);
          reject(err);
      }
      resolve(data)
  });
  })
}
function writeHTML(data,path){
  return new Promise(function(resolve,reject){
    fs.outputFile(path,data.html(),'utf-8',function(err){
      if(err){
        console.log(err);
       
      }
      resolve()
    })
  })
}

const initServer = async () => {

  app.use('/', express.static(path.join(__dirname, './')));

  app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));

 



    
    

    
    

   for(var c=0;c<countrys.length;c++){
    /* for(var i=0;i<pageNamelistURL.length;i++){
      let rulepath;
      if(pageNamelistURL[i]==""){
         rulepath=__dirname+"/"+countrys[c]+"/sports/general.html"
      }else{
         rulepath=__dirname+"/"+countrys[c]+"/sports/"+pageNamelistURL[i]+".html"
      }
      let rulepath_new;
      if(pageNamelistURL[i]==""){
        rulepath_new=__dirname+"/MB/"+countrys[c]+"/rules/sports.html"
     }else{
      rulepath_new=__dirname+"/MB/"+countrys[c]+"/rules/sports/"+pageNamelistURL[i]+".html"
     }
      let rule=await loadHTML(rulepath);
      let rule_new=await loadHTML(rulepath_new);
      let $ = cheerio.load(rule);
      let $$ = cheerio.load(rule_new);

     //   const instance = await phantom.create();
    //    const page = await instance.createPage();
    //    await page.on('onResourceRequested', function(requestData) {
     //     console.info('Requesting', requestData.url);
     //   }); 
       // let requrl='https://www.188bet.blue/'+countrysurl[c]+'/rules/sports/'+pageNamelistURL[i];
        let filename=pageNamelistURL[i];
        if(pageNamelistURL[i]==""){
         // requrl='https://www.188bet.blue/'+countrysurl[c]+'/rules/sports';
          filename="general";
        } 



        //const status = await page.open(requrl); 
        // const hcontent = await page.property('content'); 
       
        


        
        if(pageNamelistURL[i]==""){
          
          filename="general";
        }


        $(".maindiv").html($$(".maindiv").html())
        
        await writeHTML($,"./patched/"+countrys[c]+"/sports/"+filename+".html"); 
    } 

    
    let rulepath_new=__dirname+"/"+countrys[c]+"/sports/parlays-multiples.html"
    let rule=await loadHTML(rulepath_new);
    let $ = cheerio.load(rule);
    var tbcontainer = $('<div class="tbContainer"></div>');
    $(".tblrules").wrap(tbcontainer);
    await writeHTML($,"./patched/"+countrys[c]+"/sports/parlays-multiples.html");   */
  }   
    




    
    

        
    
   /*  for(var i=0;i<$(".menu-item").length;i++){
        let spid=$('.menu-item')[i].attribs.id;
        let qs="#"+spid;

        let translatedSource=await loadHTML("./"+country+"/sports/"+spid+".html");
        let $$ = cheerio.load(translatedSource);
        let trsnalgedtext
        if(spid=="general"){
           trsnalgedtext=$$(".rule-h2").html();
        }else{
           trsnalgedtext=$$("#pagetop").html();
        }
        console.log(qs);
        console.log(trsnalgedtext);
        $(qs).text(trsnalgedtext);
        

    }  */
    
   
    

}


initServer().catch(err => {
    console.log(err);
  })
  