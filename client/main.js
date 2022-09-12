const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)


const insultBtn = document.getElementById("insultButton")

const getInsult = () => {
    axios.get("http://localhost:4000/api/insult/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};


insultBtn.addEventListener('click', getInsult)


const getNameGen = () => {
    axios.get("http://localhost:4000/api/getNameGen/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};


nameGenButton.addEventListener('click', getNameGen)

const baseURL = 'http://localhost:4000/api/teams'
const form = document.querySelector('form')

const teamsCallback = ({data :teams })=>displayTeams(teams)
const errCallback = err => console.log(err)

const getAllTeams = () => axios.get(baseURL).then(teamsCallback).catch(errCallback)

const createTeam = body=>axios.post(baseURL,body).then(teamsCallback).catch(errCallback)

const deleteTeam = id => axios.delete(`${baseURL}/${id}`).then(teamsCallback).catch(errCallback)
const updateTeam = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(teamsCallback).catch(errCallback)


    function submitHandler(e){
        e.preventDefault()
        let teamName = document.querySelector('#teamName')
        let teamScore = document.querySelector('#teamScore')
        let imageURL = document.querySelector('#img')

        let bodyObj = {
            teamName : teamName.value ,
            teamScore : teamScore.value,
            imageURL: imageURL.value
        }
        createTeam(bodyObj)
        teamName.value = ''
        teamScore.value =''
        imageURL.value = ''


    }

    function createTeamCard(team){
        const teamCard = document.createElement('div')
        teamCard.classList.add('team-card')

        teamCard.innerHTML = `<img alt = 'team cover image' src = ${team.imageURL} class = 'teamLogo'/>
        <p class="teamName">${team.teamName}</p>
        <div class = 'btns-container'>
            <button onclick = "updateTeam(${team.id}, 'minus')">-</button>
            <p class="teamScore">${team.teamScore}</p>
            <button onclick = "updateTeam(${team.id}, 'plus')">+</button>
        </div>
        <button onclick= "deleteTeam(${team.id})">delete</button>
        `

        teamsContainer.appendChild(teamCard)
    }

    function displayTeams(arr){
        teamsContainer.innerHTML = ``
        for(let i = 0; i <arr.length; i++){
            createTeamCard(arr[i])
        }
    }
    form.addEventListener('submit', submitHandler)
    getAllTeams()
   
    