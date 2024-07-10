// NB: remember to add new year(s) at the START OF ARRAY! (at: function createYearOptions())
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
    const teamHeroDiv = document.getElementById('team_hero');
    teamHeroDiv.style.backgroundImage = `url('/img/teams/team_photos/team_${selectedYear}.webp')`

    const yearSpan = document.getElementById('displayedYear');
    const yearSpan_hero = document.getElementById('displayedYear_hero');
    yearSpan.textContent = selectedYear;
    yearSpan_hero.textContent = selectedYear;

    const t = document.getElementById(`ddOpt_${selectedYear}`);
    setDdColor(t, yearsArray);

    
    // DOM STUFFS FOR THE CARDS
    if (dd_selected.selectedYear == '') {
        getMembersData(selectedYear, 0);
        dd_selected.selectedYear = selectedYear;
    } 
    else if (dd_selected.selectedYear != selectedYear){
        getMembersData(selectedYear, 1);
        getMembersData(selectedYear, 0);
        dd_selected.selectedYear = selectedYear;
    }
    else {
        return
    };
};
function createYearOptions(){
    // NB: remember to add new year at the START OF ARRAY!
    let years = [2024, 2023, 2016];

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


function clear_Html_Content(child){
    child.remove();  
};
function create_Html_div(divClass) {
    let div = document.createElement('div'); 
    div.className = divClass;
    return div; 
};


// Getting JSON-data and displaying it
function getMembersData(year, yearStatus){
    let team_showcaseDiv = document.getElementById('team_showcase');
    switch (yearStatus) {
        case 0: // FALSE --> DOM content doesn't exist, Create & Render DOM content
            let df = new DocumentFragment(); // what to render to the DOM

            // FOR LOOP for opt array
            fetch(`/websiteData/teams/${year}-team.json`).then(res => res.json()).then(data => {
                data.forEach(dept => { 
                    let deptID = dept.deptID;
                    let deptName = dept.deptName;
                    let members = dept.members;

                    let deptTitle_txt = '';
                    switch (deptID) {
                        case 1:
                            deptTitle_txt = 'The Board';
                            break;
                        case 2:
                            deptTitle_txt = 'Administration';
                            break;
                        case 3:
                            deptTitle_txt = 'Mechanical';
                            break;
                        case 4:
                            deptTitle_txt = 'Electronics';
                            break;
                        case 5:
                            deptTitle_txt = 'Data';
                            break;
                    };

                    //Create section-part w/ divider and div for membercards
                    let teamMembers_section = document.createElement('section'); 
                    teamMembers_section.id = `${deptName}_section`;
                    teamMembers_section.className = 'teamMembersSection';

                    // Divider
                    let divider_div = document.createElement('div');
                    divider_div.classList.add('section_divider', 'flex_center');
                    let dividerStart_div = create_Html_div('divider');
                    let dividerStart_hr = document.createElement('hr');
                    let deptName_h4 = document.createElement('h4');
                    deptName_h4.className = 'team_showcase';
                    deptName_h4.textContent = deptTitle_txt;
                    let dividerEnd_div = create_Html_div('divider');
                    let dividerEnd_hr = document.createElement('hr');

                    // Section-content
                    let sectionContent_div = create_Html_div('section_content');
                    let membersContainer_div = create_Html_div('members_container');
                    membersContainer_div.id = `${deptName}Members`;

                    // Merging the DOM elements
                    teamMembers_section.appendChild(divider_div);
                    divider_div.appendChild(dividerStart_div);
                    dividerStart_div.appendChild(dividerStart_hr);
                    divider_div.appendChild(deptName_h4);
                    divider_div.appendChild(dividerEnd_div);
                    dividerEnd_div.appendChild(dividerEnd_hr);
                    teamMembers_section.appendChild(sectionContent_div);
                    sectionContent_div.appendChild(membersContainer_div);

                    df.appendChild(teamMembers_section);

                    members.forEach(member => {
                        let card = create_Html_div('membercard');
                        let cardContentDiv = create_Html_div('membercard_content');
                    
                        // IMG
                        let cardImg = document.createElement('img');
                        cardImg.src = `/img/teams/members/${year}/${deptName}/${member.imgCode}.jpg`;
                    
                        let infoDiv = create_Html_div('member_info');
                        let memberName_p = document.createElement('p');
                        memberName_p.className = 'name_p';
                        memberName_p.textContent = member.name;
                        let memberRole_p = document.createElement('p');
                        memberRole_p.textContent = member.roles;
                    
                        membersContainer_div.appendChild(card);
                        card.appendChild(cardContentDiv);
                        cardContentDiv.appendChild(cardImg);
                        cardContentDiv.appendChild(infoDiv);
                        infoDiv.appendChild(memberName_p);
                        infoDiv.appendChild(memberRole_p);
                    });
                });
                team_showcaseDiv.appendChild(df);
            });
            break; 
        case 1: // TRUE --> DOM content exists, delete it
            let membersSections = document.querySelectorAll('.teamMembersSection');
            membersSections.forEach(function(section) {
                clear_Html_Content(section);
              });
            break;
    };
};