"use strict";
const fs=require("fs");

//to loadNotes
const loadNotes=()=>{
    try{
        const data=fs.readFileSync("db.json").toString();//it can also be txt also
        return (JSON.parse(data));
    }
    catch(e){
        return {};
    }
    
}
//to save notes
const saveNotes=(data)=>{
    fs.writeFileSync("db.json",JSON.stringify(data))
}
//to add notes
const addNotes=(title,body)=>{
    const dataObj=loadNotes();
    dataObj[title]=body;
    saveNotes(dataObj);
}
const deleteNotes=(title)=>{
    const dataObj=loadNotes();
    delete dataObj[title];
    saveNotes(dataObj);
}

const listNotes=()=>{
    const dataObj=loadNotes();
    for(let key in dataObj){
        console.log(`${key}\n\t${dataObj[key]}`);
    }
}
const readNotes=(title)=>{
    const dataObj=loadNotes();
    console.log(dataObj[title]?dataObj[title]:"NONE");
}
const wipeNotes=()=>{
    saveNotes({});
}
wipeNotes();

module.exports={addNotes,deleteNotes,listNotes,readNotes,wipeNotes}