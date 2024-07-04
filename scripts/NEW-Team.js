window.onload = function(){
    createYearOptions();
};

function setYearContent(selectedYear){
    const teamHeroDiv = document.getElementById('team_hero');
    teamHeroDiv.style.backgroundImage = `url('/img/teams/team_photos/team_${selectedYear}.webp')`

    const yearSpan = document.getElementById('displayedYear');
    const yearSpan_hero = document.getElementById('displayedYear_hero');
    yearSpan.textContent = selectedYear;
    yearSpan_hero.textContent = selectedYear;
};
function createYearOptions(){
    // NB: remember to add new year at the START OF ARRAY!
    let years = [2024, 2023];
    setYearContent(years[0]); // Default

    const yearSelectDiv = document.getElementById('yearSelect_Dd');
    const year_ul = document.createElement('ul');
    yearSelectDiv.appendChild(year_ul);

    // DOM - create the year-entries in dropdown (Dd)
    for (let i = 0; i < years.length; i++) {
        let year_li = document.createElement('li');
        year_li.className = 'logo_color';

        year_ul.appendChild(year_li);
        year_li.textContent = years[i];
        year_li.onclick = () => setYearContent(years[i]);
    };
};