const fs = require('fs');
const { argv } = require('process');
const getNotes = () => {
    console.log("This has been called");
}
const addNote = (title,body) => {
    const notes = loadNotes();
    notes.push({
        title: argv.title,
        body: argv.body
    });
    saveNotes(notes);
}
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('./notes.json',dataJSON);
}
const loadNotes = ()=> {
    try {
        const data = JSON.parse(fs.readFileSync('./notes.json').toString());
        return data;
    }
    catch (err) {
        return [];
    }
}
module.export = {
    getNotes: getNotes,
    addNote: addNote
};