window.onload = function(){
    setDepartment(0);
    getData('/websiteData/departments/mech.json', 'dept_0');
    getData('/websiteData/departments/electro.json', 'dept_1');
    getData('/websiteData/departments/admin.json', 'dept_2');
    getData('/websiteData/departments/it.json', 'dept_3');
};

// Creating DOM-elements
function create_Html_DataElements(deptDiv, positionDiv, roleTitle, roleDescription){
    // Position Container --> Data
    const dataDiv = document.createElement('div');
    dataDiv.className = 'positionData_container';

    // Data --> Title
    const titleSpan = document.createElement('span');
    titleSpan.className = 'position_title';
    titleSpan.textContent = roleTitle;

    // Data --> Description
    const descriptionP = document.createElement('p');
    descriptionP.className = 'position_descrip';
    descriptionP.innerHTML = roleDescription;

    deptDiv.appendChild(positionDiv);
    positionDiv.appendChild(dataDiv);
    dataDiv.appendChild(titleSpan);
    dataDiv.appendChild(descriptionP);
};
function create_Html_ImgElements(positionDiv, roleImgCode) {
    // Position Container --> Image
    const imgDiv = document.createElement('div');
    imgDiv.className = 'positionImg_container';
    
    const imgElement = document.createElement('img');
    imgElement.src = roleImgCode;
    imgElement.alt = 'Error loading the image';
    
    positionDiv.appendChild(imgDiv);
    imgDiv.appendChild(imgElement);
};
function create_Html_ExtraElements(positionDiv, tasks) {
    // Position Container --> Extra info
    const extraDiv = document.createElement('div');
    extraDiv.className = 'position_extrasContainer';

    const tasksUl = document.createElement('ul');

    const tasksSpan = document.createElement('span');
    tasksSpan.className = 'positionExtras';
    tasksSpan.textContent = 'Key Points';

    // Tasks DOM-appending
    positionDiv.appendChild(extraDiv);
    extraDiv.appendChild(tasksUl);
    tasksUl.appendChild(tasksSpan);

    // Tasks & SVG
    for (let i = 0; i < tasks.length; i++) {
        const tasksLi = document.createElement('li');
        const taskLiSpan = document.createElement('span');
        taskLiSpan.textContent = tasks[i];
    
        // Tasks SVG
        const taskSpan = document.createElement('span');
        taskSpan.className = 'taskSvgSpan';
    
        const taskSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        taskSvg.setAttribute('class', 'taskSvg');
        taskSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        taskSvg.setAttribute('width', '15');
        taskSvg.setAttribute('height', '15');
        taskSvg.setAttribute('fill', '#ffff');
        taskSvg.setAttribute('viewBox', '0 0 256 256');
            
        const taskSvgPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        taskSvgPath.setAttribute('d', "M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z");        
    
        taskSpan.appendChild(taskSvg);
        taskSvg.appendChild(taskSvgPath); 
        tasksUl.appendChild(tasksLi);
        tasksLi.appendChild(taskSpan);
        tasksLi.appendChild(taskLiSpan);  
    };
};

// Getting JSON-data
function getData(deptJsonLink, deptID){
    fetch(deptJsonLink).then(res => res.json()).then(data => {
        let deptDiv = document.getElementById(deptID);
        
        for (let i = 0; i < data.length; i++) {
            let roleTitle = data[i].roleTitle;
            let roleDescription = data[i].roleDescription;
            let roleImgCode = data[i].roleImgCode;
            let tasks = data[i].tasks;

            // Position Container
            const positionDiv = document.createElement('div');
            positionDiv.className = 'position_container';

            const mediaQuery = window.matchMedia('(min-width: 992px)');
            if (mediaQuery.matches) {
                // Desktop
                if (i%2 == 0) {
                    create_Html_DataElements(deptDiv, positionDiv, roleTitle, roleDescription);
                    create_Html_ImgElements(positionDiv, roleImgCode);
                    create_Html_ExtraElements(positionDiv, tasks);
                } 
                else {
                    create_Html_ImgElements(positionDiv, roleImgCode);
                    create_Html_DataElements(deptDiv, positionDiv, roleTitle, roleDescription);
                    create_Html_ExtraElements(positionDiv, tasks);
                };
            } 
            else {
                // NOT desktop
                create_Html_DataElements(deptDiv, positionDiv, roleTitle, roleDescription);
                create_Html_ImgElements(positionDiv, roleImgCode);
                create_Html_ExtraElements(positionDiv, tasks);
            };
        }
    });
};

// Displaying/hiding HTML content
function setDisplayNone(htmlElement){
    htmlElement.style.display = 'none';
};
function setDisplayBlock(htmlElement){
    htmlElement.style.display = 'block';
};


function displayDepartment(deptID){
    let deptList = ['dept_0', 'dept_1', 'dept_2', 'dept_3'];

    for (let i = 0; i < deptList.length; i++) {
        let deptElement = document.getElementById(deptList[i]);
        if (deptList[i] === deptID){
            setDisplayBlock(deptElement);
        }else{
            setDisplayNone(deptElement);
        };
    };
};

function setDepartment(id){
    // ['Mechanical', 'Electronics', 'Administration', 'Informatics'];
    let mechElement = document.getElementById('category_' + 0);
    let eleElement = document.getElementById('category_' + 1);
    let itElement = document.getElementById('category_' + 2);
    let adminElement = document.getElementById('category_' + 3);

    // Dynamic styling for the positions-navigation
    switch(id){
        case 0:
            mechElement.style.paddingBottom = '2rem';
            eleElement.style.paddingBottom = '0.5rem';
            itElement.style.paddingBottom = '0.5rem';
            adminElement.style.paddingBottom = '0.5rem';
        break;
        case 1:
            mechElement.style.paddingBottom = '0.5rem';
            eleElement.style.paddingBottom = '2rem';
            itElement.style.paddingBottom = '0.5rem';
            adminElement.style.paddingBottom = '0.5rem';
        break;
        case 2:
            mechElement.style.paddingBottom = '0.5rem';
            eleElement.style.paddingBottom = '0.5rem';
            itElement.style.paddingBottom = '2rem';
            adminElement.style.paddingBottom = '0.5rem';
        break;
        case 3:
            mechElement.style.paddingBottom = '0.5rem';
            eleElement.style.paddingBottom = '0.5rem';
            itElement.style.paddingBottom = '0.5rem';
            adminElement.style.paddingBottom = '2rem';
        break;
    };

    let depId = 'dept_' + id;
    displayDepartment(depId);

    return depId;
};