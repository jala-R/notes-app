const yargs = require("yargs"),
    {addNotes,deleteNotes,listNotes,readNotes,wipeNotes}=require("./notes.js");

yargs.command({
    command:"add",
    describe:"to addd",
    handler:function(argv){
        addNotes(argv.title,argv.body);
    },
    builder:{
        title:{
            describe:"its a title",
            demandOption:true,
            type:"string"
        },
        body:{
            describe:"body for the node",
            demandOption:true,
            type:"stirng"
        }
    }
})
yargs.command({
    command:"remove",
    describe:"to remove",
    handler:function(argv){
        deleteNotes(argv.title);
    },
    builder:{
        title:{
            describe:"title to delete",
            demandOption:true,
            type:"string"
        }
    }

})

yargs.command({
    command:"list",
    describe:"to list",
    handler:function(){
        listNotes();
    }
})
yargs.command({
    command:"read",
    describe:"to read",
    handler:function(argv){
        readNotes(argv.title);
    },
    builder:{
        title:{
            describe:"its the title",
            demandOption:true,
            type:"string"
        }
    }
})
yargs.command({
    command:"flush",
    describe:"to flush",
    handler:function(){
        wipeNotes();
    }
})
yargs.parse();