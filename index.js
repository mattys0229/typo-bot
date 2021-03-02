var token = "by using this program you acknowledge that this can get you banned"

var bot = new Eris(token);
const Eris = require("eris");
console.log(" !!! warning !!! ")
console.log(" !!! using this program CAN get you banned !!! ")
console.log(" !!! use it on your own risk !!! ")
console.log(" !!! warning !!! ")
function rand(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const keyb = [
["q","w","e","r","t","z","u","i","o","p"],
["a","s","d","f","g","h","j","k","l"],
["y","x","c","v","b","n","m"]
]

function accentsTidy(s){ //pasted
    var r=s.toLowerCase();
    r = r.replace(new RegExp(/\s/g),"");
    r = r.replace(new RegExp(/[àáâãäå]/g),"a");
    r = r.replace(new RegExp(/æ/g),"ae");
    r = r.replace(new RegExp(/ç/g),"c");
    r = r.replace(new RegExp(/[èéêë]/g),"e");
    r = r.replace(new RegExp(/[ìíîï]/g),"i");
    r = r.replace(new RegExp(/ñ/g),"n");                
    r = r.replace(new RegExp(/[òóôõö]/g),"o");
    r = r.replace(new RegExp(/œ/g),"oe");
    r = r.replace(new RegExp(/[ùúûü]/g),"u");
    r = r.replace(new RegExp(/[ýÿ]/g),"y");
    r = r.replace(new RegExp(/\W/g),"");
    return r;
};

function rotate(letter){
var newsentence = ""
for (var j = 0; j < letter.length; j++)
{
var amigoingtodostuff = false

if (letter[j] == " ")
{
    newsentence += " ";
    continue;
}
if (j % 4 == 0){
    newsentence += letter[j]
    continue;
}

for (var i = 0; i < keyb.length; i++) {
if ( (keyb[i].includes(letter[j] ) ) )
{
    amigoingtodostuff = true
}
}

if (!amigoingtodostuff){
    newsentence += letter[j]
    continue;
}


for (var i = 0; i < keyb.length; i++)
{
var res = keyb[i].findIndex( (element) => element == letter[j] );
if (res != -1)
{
var arrind = i;
break;
}
} 

var moveby = Math.random() < 0.50 ? 1 : -1;
switch( rand(2) )
{
case 0:
  // -1 - 1
if (keyb[arrind][res + moveby] == undefined)
{
    moveby = 0 - moveby
}

res += moveby;

break;
case 1:
if (keyb[arrind + 1] != undefined && keyb[arrind - 1] != undefined && keyb[arrind + 1][res] != undefined && keyb[arrind - 1][res] != undefined)
{

if (keyb[arrind + moveby] == undefined)
{
    moveby = 0 - moveby
}

arrind += moveby;
}
break;

}
newsentence += keyb[arrind][res]
}
return newsentence
}

bot.connect(); // Get the bot to connect to Discord

bot.on("messageCreate", (msg) => {
    if(msg.author.id == bot.user.id) {
    //console.log(msg)

        if(msg.content.startsWith("exc"))
            return;

        var strWithTypos = rotate(msg.content.toString())
        console.log(msg.content + " -> " + strWithTypos)
        console.log("")
        bot.editMessage(msg.channel.id, msg.id, strWithTypos);
    } 
});
