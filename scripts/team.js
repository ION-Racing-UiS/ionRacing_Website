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
        clear_Html_Content(categorySelect_ul);
        createCategoryOptions(selectedYear);
        dd_selected.selectedYear = selectedYear;
    }
    else {
        return
    };
};
function createYearOptions(){
    // NB: remember to add new year at the START OF ARRAY!
    let years = [2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016];

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
        year_li.onclick = function() {
            setYearContent(years[i], years);
            toggleDisplay('yearSelect_Dd');
          };
    };
    yearSelectDiv.appendChild(df);
    if (dd_selected.selectedYear === '') {
        setYearContent(years[0], years); // Default
    } else {
        setYearContent(years[dd_selected.selectedYear], years);
    };
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
    else if ((dd_selected.selectedCategory !== categoryID && dd_selected.selectedYear === yearSelected) || (dd_selected.selectedCategory === categoryID && dd_selected.selectedYear !== yearSelected)){
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
        category_li.onclick = function() {
            setCategoryContent(categories[i], categories, yearSelected);
            toggleDisplay('categorySelect_Dd');
          };
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

function setSvgStyling(svgElement, width, height){
    svgElement.setAttribute("width", `${width}`);
    svgElement.setAttribute("height", `${height}`);
    svgElement.setAttribute("viewBox", "0 0 512 512");
    svgElement.setAttribute("fill", "#FFFFFF");
};
function setMemberLink(linkType, linkData, linkElement, svgElement){
    if (linkData && linkData.length >= 5) {
        switch (linkType) {
            case "email":
                linkElement.href = `mailto:${linkData}`;
                break;
            case "linkedIn":
                linkElement.href = linkData;
            break;
            default:
                break;
        }
        svgElement.style.opacity = "0.5";
    } else {
        svgElement.style.opacity = "0.1";
        linkElement.style.pointerEvents = "none";
        linkElement.style.cursor = "default";
    };
};
function create_membersLinks_components(email, linkedIn, divElement){
    // EMAIL & LINKEDIN COMPONENTS
    let memberEmailContainer_div = create_Html_div('memberContact_links');
    let memberEmailContainer_a = document.createElement("a");
    memberEmailContainer_a.target = "_blank";
    let memberEmailContainer_svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    setSvgStyling(memberEmailContainer_svg, 30, 30);
    setMemberLink("email", email, memberEmailContainer_a, memberEmailContainer_svg);
    let memberEmailContainer_path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    memberEmailContainer_path.setAttribute("d", "M424 80H88a56.06 56.06 0 00-56 56v240a56.06 56.06 0 0056 56h336a56.06 56.06 0 0056-56V136a56.06 56.06 0 00-56-56zm-14.18 92.63l-144 112a16 16 0 01-19.64 0l-144-112a16 16 0 1119.64-25.26L256 251.73l134.18-104.36a16 16 0 0119.64 25.26z");

    // LinkedIn elements
    let memberLinkedInContainer_div = create_Html_div('memberContact_links');
    let memberLinkedInContainer_a = document.createElement("a");
    memberLinkedInContainer_a.target = "_blank";
    let memberLinkedInContainer_svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    setSvgStyling(memberLinkedInContainer_svg, 28, 28);
    setMemberLink("linkedIn", linkedIn, memberLinkedInContainer_a, memberLinkedInContainer_svg);
    let memberLinkedInContainer_path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    memberLinkedInContainer_path.setAttribute("fill", "#FFFFFF");
    memberLinkedInContainer_path.setAttribute("d", "M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z");

    // Append DOM elements
    divElement.appendChild(memberEmailContainer_div);
    memberEmailContainer_div.appendChild(memberEmailContainer_a);
    memberEmailContainer_a.appendChild(memberEmailContainer_svg);
    memberEmailContainer_svg.appendChild(memberEmailContainer_path);
    divElement.appendChild(memberLinkedInContainer_div);
    memberLinkedInContainer_div.appendChild(memberLinkedInContainer_a);
    memberLinkedInContainer_a.appendChild(memberLinkedInContainer_svg);
    memberLinkedInContainer_svg.appendChild(memberLinkedInContainer_path);
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
    
    // !-- Section-content --!
    // Member elements
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
        cardImg.onerror = function () {
            cardImg.src = `/img/teams/members/${year}/${deptName}/filler.jpg`;
        };
    
        let infoDiv = create_Html_div('member_info');
        let memberName_p = document.createElement('p');
        memberName_p.className = 'name_p';
        memberName_p.textContent = member.name;
        let memberRole_p = document.createElement('p');
        memberRole_p.textContent = member.roles;

        let memberLinksContainer_div = create_Html_div('memberContact_links_container');
    
        membersContainer_div.appendChild(card);
        card.appendChild(cardContentDiv);
        cardContentDiv.appendChild(cardImg);
        cardContentDiv.appendChild(infoDiv);
        infoDiv.appendChild(memberName_p);
        infoDiv.appendChild(memberRole_p);

        infoDiv.appendChild(memberLinksContainer_div);

        create_membersLinks_components(member.email, member.linkedIn, memberLinksContainer_div);
    });
    return df;
};
// Getting JSON-data and displaying it
function getMembersData(year, yearStatus, categoryID){
    let team_showcaseDiv = document.getElementById('team_showcase');
    let i = categoryID - 1;
    let team_footer = document.getElementById('team_footer');

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
                team_footer.style.marginTop = '3rem';
            });
            break; 
        case 1: // TRUE --> DOM content exists, delete it
            team_footer.style.marginTop = '400rem';
            let membersSections = document.querySelectorAll('.teamMembersSection');
            membersSections.forEach(function(section) {
                clear_Html_Content(section);
            });
            break;
    };
};