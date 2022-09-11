let teams = require('./db.json')
let globalID = 4

module.exports = {

    getTeams:(req,res)=>{
        res.status(200).send(teams)
    },
    
    deleteTeam:(req,res)=>{
        let index = teams.findIndex(elem=> elem.id === +req.params.id)
        teams.splice(index,1)
        res.status(200).send(teams)
    },
    createTeam:(req,res)=>{
        const {teamName, teamPoints, imageURL} = req.body
        let newTeam = {
            teamName,
            teamPoints : Number(teamPoints) ,
            imageURL,
            id: globalID
        }
        console.log(newTeam)
        teams.push(newTeam)
        globalID++
        res.status(200).send(teams)
    },
    updateTeam:(req,res)=>{
        const{type}=req.body
        let index = teams.findIndex(elem=> elem.id === +req.params.id)
        if (type === 'minus' && teams[index].teamScore >0){
            teams[index].teamScore -=1
            res.status(200).send(teams)
        }else if (type==='plus'){
            teams[index].teamScore +=1
            res.status(200).send(teams)
        }else{
            res.status(400).send('Invalid score')
        }
    
    },
    


 getCompliment: (req, res) => {
    const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
  
    // choose random compliment
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];
  
    res.status(200).send(randomCompliment);
 },

 getInsult: (req, res) => {
    const insults = ["Gee, you smell!", "I don't like your shirt!", "Your Javascript skills are alright i guess."];
  
    // choose random compliment
    let randomIndex = Math.floor(Math.random() * insults.length);
    let randomInsult = insults[randomIndex];
  
    res.status(200).send(randomInsult);
 }
}