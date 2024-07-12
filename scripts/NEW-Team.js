// NB: remember to add new year(s) at the START OF ARRAY! (at: function createYearOptions())
const dd_selected = {
    selectedYear: '',
    selectedCategory: ''
};

window.onload = function(){
    createYearOptions();
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

    const ddOption_YearDiv = document.getElementById(`ddOpt_${selectedYear}`);
    setDdColor(ddOption_YearDiv, yearsArray);

    // DOM STUFFS FOR THE DROPDOWN MENU
    let categorySelect_ul = document.getElementById('category_list');
    if (dd_selected.selectedYear === '') {
        dd_selected.selectedYear = selectedYear;
        createCategoryOptions(selectedYear);
    }
    else if (dd_selected.selectedYear !== selectedYear){
        dd_selected.selectedYear = selectedYear;
        clear_Html_Content(categorySelect_ul);
        createCategoryOptions(selectedYear);
    }
    else {
        return
    };
};
function createYearOptions(){
    // NB: remember to add new year at the START OF ARRAY!
    let years = [2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016];

    const yearSelectDiv = document.getElementById('yearSelect_Dd');
    let df = new DocumentFragment();
    const year_ul = document.createElement('ul');
    df.appendChild(year_ul);

    // DOM - create the year-entries in dropdown (Dd)
    for (let i = 0; i < years.length; i++) {
        let year_li = document.createElement('li');

        year_ul.appendChild(year_li);
        year_li.textContent = years[i];
        year_li.id = `ddOpt_${years[i]}`;
        year_li.onclick = () => setYearContent(years[i], years);
    };
    yearSelectDiv.appendChild(df);
    setYearContent(years[0], years); // Default
};


function setCategoryContent(selectedCategory, categories, yearSelected){
    // Displaying the current selectedOption + some styling
    const categorySpan = document.getElementById('displayedCategory');
    categorySpan.textContent = selectedCategory;
    const ddOptionDiv = document.getElementById(`ddOpt_${selectedCategory}`);
    setDdColor(ddOptionDiv, categories);

    // Initiating the members json-data
    let categoryID = 0;
    switch (selectedCategory) { // "Converting" selectedCategory (str) to categoryID (int)
        case 'Board':
            categoryID = 1;
            break;
        case 'Administration':
            categoryID = 2;
            break;
        case 'Mechanical':
            categoryID = 3;
            break;
        case 'Electronics':
            categoryID = 4;
            break;
        case 'Data':
            categoryID = 5;
            break;
        default:
            categoryID = 0;
            break;
    };

    // DOM STUFFS FOR THE CARDS
    if (dd_selected.selectedCategory === '') {
        dd_selected.selectedCategory = categoryID;
        getMembersData(yearSelected, 0, categoryID);
    } 
    else if (dd_selected.selectedCategory !== categoryID || dd_selected.selectedYear === yearSelected){
        getMembersData(yearSelected, 1, dd_selected.selectedCategory);
        getMembersData(yearSelected, 0, categoryID);
        dd_selected.selectedCategory = categoryID;
    }
    else {
        return
    };
};
function createCategoryOptions(yearSelected){
    const categories = ['All', 'Board', 'Administration', 'Mechanical', 'Electronics', 'Data'];
    const categorySelectDiv = document.getElementById('categorySelect_Dd');
    
    let category_ul = document.createElement('ul');
    category_ul.id = 'category_list';
    categorySelectDiv.appendChild(category_ul);

    for (let i = 0; i < categories.length; i++) {
        let category_li = document.createElement('li');
        category_li.textContent = categories[i];
        category_ul.appendChild(category_li);
        category_li.id = `ddOpt_${categories[i]}`;
        category_li.onclick = () => setCategoryContent(categories[i], categories, yearSelected);
    };

    if (dd_selected.selectedCategory === '') {
        setCategoryContent(categories[0], categories, yearSelected)
    }else{
        setCategoryContent(categories[dd_selected.selectedCategory], categories, yearSelected)
    };
};


function clear_Html_Content(element){
    element.remove();  
};
function create_Html_div(divClass) {
    let div = document.createElement('div'); 
    div.className = divClass;
    return div; 
};


function renderDept(deptID, deptName, members, year, df){
    // Text that will be shown in the "divider" of each section
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
    return df;
};

// Getting JSON-data and displaying it
function getMembersData(year, yearStatus, categoryID){
    let team_showcaseDiv = document.getElementById('team_showcase');
    let i = categoryID - 1;

    switch (yearStatus) {
        case 0: // FALSE --> DOM content doesn't exist, Create & Render DOM content
            let df = new DocumentFragment();
            fetch(`/websiteData/teams/${year}-team.json`).then(res => res.json()).then(data => {
                if (categoryID == 0) { // ALL depts
                    data.forEach(dept => { 
                        let deptID = dept.deptID;
                        let deptName = dept.deptName;
                        let members = dept.members;
    
                        df = renderDept(deptID, deptName, members, year, df);
                    });
                } else { // SPESIFIC dept
                    let deptID = data[i].deptID;
                    let deptName = data[i].deptName;
                    let members = data[i].members;

                    df = renderDept(deptID, deptName, members, year, df);
                };
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