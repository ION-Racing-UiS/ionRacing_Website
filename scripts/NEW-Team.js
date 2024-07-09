const dd_selected = {
    selectedYear: '',
    selectedCategory: ''
};

window.onload = function(){
    createYearOptions();
    createCategoryOptions();
};

function setDdColor(liElement, relevantArray){
    for (let i = 0; i < relevantArray.length; i++) {
        let a = document.getElementById(`ddOpt_${relevantArray[i]}`);
        if (liElement != a) {
            a.style.color = '#FFFFFF';
        } else {
            a.style.color = '#009DDF';
        }
    };
};


function setYearContent(selectedYear, yearsArray){
    dd_selected.selectedYear = selectedYear;
    const teamHeroDiv = document.getElementById('team_hero');
    teamHeroDiv.style.backgroundImage = `url('/img/teams/team_photos/team_${selectedYear}.webp')`

    const yearSpan = document.getElementById('displayedYear');
    const yearSpan_hero = document.getElementById('displayedYear_hero');
    yearSpan.textContent = selectedYear;
    yearSpan_hero.textContent = selectedYear;

    const t = document.getElementById(`ddOpt_${selectedYear}`);
    setDdColor(t, yearsArray);

    // DOM STUFFS FOR THE CARDS
    getMembersData(selectedYear);
    console.log(dd_selected.selectedYear);
};
function createYearOptions(){
    // NB: remember to add new year at the START OF ARRAY!
    let years = [2024, 2023];

    const yearSelectDiv = document.getElementById('yearSelect_Dd');
    const year_ul = document.createElement('ul');
    yearSelectDiv.appendChild(year_ul);

    // DOM - create the year-entries in dropdown (Dd)
    for (let i = 0; i < years.length; i++) {
        let year_li = document.createElement('li');

        year_ul.appendChild(year_li);
        year_li.textContent = years[i];
        year_li.id = `ddOpt_${years[i]}`;
        year_li.onclick = () => setYearContent(years[i], years);
    };
    setYearContent(years[0], years); // Default
    dd_selected.selectedYear = years[0];
};


function setCategoryContent(selectedCategory, categories){
    const categorySpan = document.getElementById('displayedCategory');
    categorySpan.textContent = selectedCategory;

    const t = document.getElementById(`ddOpt_${selectedCategory}`);
    setDdColor(t, categories);
};
function createCategoryOptions(){
    const categories = ['All', 'Board', 'Administration', 'Mechanical', 'Electronics', 'Data'];

    const categorySelectDiv = document.getElementById('categorySelect_Dd');
    let category_ul = document.createElement('ul');

    categorySelectDiv.appendChild(category_ul);

    for (let i = 0; i < categories.length; i++) {
        let category_li = document.createElement('li');
        category_li.textContent = categories[i];
        category_ul.appendChild(category_li);
        category_li.id = `ddOpt_${categories[i]}`;
        category_li.onclick = () => setCategoryContent(categories[i], categories);
    };
    setCategoryContent(categories[0], categories); // Default
};


function clear_Html_Content(parent, child){
    console.log('DELETE');
    parent.removeChild(child);  
};
function create_Html_div(divClass) {
    let div = document.createElement('div'); 
    div.className = divClass;
    return div; 
};


function create_Html_memberCard(deptID, memberName, memberRoles, imgCode, deptName, year){
    // DO SOME CHECKING - IF THERE IS CONTENT FROM BEFORE: delete it before updating with rendering new content
    let deptId_txt = '';
    switch (deptID) {
        case 1:
            deptId_txt = 'boardMembers';
            break;
        case 2:
            deptId_txt = 'adminMembers';
            break;
        case 3:
            deptId_txt = 'mechMembers';
            break;
        case 4:
            deptId_txt = 'eleMembers';
            break;
        case 5:
            deptId_txt = 'dataMembers';
            break;
        default:
            break;
    };
    let membersContainer = document.getElementById(deptId_txt);



    let card = create_Html_div('membercard');
    let cardContentDiv = create_Html_div('membercard_content');

    // IMG
    let cardImg = document.createElement('img');
    cardImg.src = `/img/teams/members/${year}/${deptName}/${imgCode}.jpg`;

    let infoDiv = create_Html_div('member_info');
    let memberName_p = document.createElement('p');
    memberName_p.className = 'name_p';
    memberName_p.textContent = memberName;
    let memberRole_p = document.createElement('p');
    memberRole_p.textContent = memberRoles;

    membersContainer.appendChild(card);
    card.appendChild(cardContentDiv);
    cardContentDiv.appendChild(cardImg);
    cardContentDiv.appendChild(infoDiv);
    infoDiv.appendChild(memberName_p);
    infoDiv.appendChild(memberRole_p);

    //clear_Html_Content(membersContainer, card);
};


// Getting JSON-data
function getMembersData(year){
    fetch(`/websiteData/teams/${year}-team.json`).then(res => res.json()).then(data => {
        data.forEach(element => {
           let deptID = element.deptID;
           let deptName = element.deptName;
           let members = element.members;
           
           members.forEach(member => {
                create_Html_memberCard(deptID, member.name, member.roles, member.imgCode, deptName, year);
           });
        });
    });
};