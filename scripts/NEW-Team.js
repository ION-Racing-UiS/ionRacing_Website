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
};
function createYearOptions(){
    // NB: remember to add new year at the START OF ARRAY!
    let years = [2024, 2023, 2022];

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

// liElement, relevantVar, relevantArray
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