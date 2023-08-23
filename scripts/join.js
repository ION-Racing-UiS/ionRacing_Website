const positionsApp = Vue.createApp({
    data() {
        return{
            selectedPosition: 0, // id of selected position
            mechIsSelected: true, // default
            eleIsSelected: false,
            itIsSelected: false,
            adminIsSelected: false,

            // POSITION CATEGORIES for the positions-navigation
            positionCategories: [
                // id: 0 --> Mech
                // id: 1 --> Ele
                // id: 2 --> IT
                // id: 3 --> Admin
                {
                    id: 0,
                    categoryTitle: 'Mechanical',
                    isSelected: false
                },
                {
                    id: 1,
                    categoryTitle: 'Electrical',
                    isSelected: false
                },
                {
                    id: 2,
                    categoryTitle: 'IT',
                    isSelected: false
                },
                {
                    id: 3,
                    categoryTitle: 'Admin',
                    isSelected: false
                }
            ],


            // POSITIONS DATA
            // --- Positions MECH
            mechPositions: [
                {
                    id: 0,
                    positionTitle: 'MechTitle',
                    positionImgCode: 'mechFiller',
                    positionDescription: 'Description',
                    isAvailable: true,

                    tasks: [
                        {
                            taskId: 0,
                            taskDescription: 'Task'
                        },
                    ]
                },
            ],
            // --- Positions ELECTRO
            elePositions: [
                {
                    id: 0,
                    positionTitle: 'EleTitle',
                    positionImgCode: 'eleFiller',
                    positionDescription: 'Description',
                    isAvailable: true,

                    tasks: [
                        {
                            taskId: 0,
                            taskDescription: 'Task'
                        },
                    ]
                },
            ],
            // --- Positions DATA
            itPositions: [
                {
                    id: 0,
                    positionTitle: 'ItTitle',
                    positionImgCode: 'itFiller',
                    positionDescription: 'Description',
                    isAvailable: false,

                    tasks: [
                        {
                            taskId: 0,
                            taskDescription: 'Task'
                        },
                    ]
                },
            ],
            // --- Positions ADMIN
            adminPositions: [
                {
                    id: 0,
                    positionTitle: 'AdminTitle',
                    positionImgCode: 'adminFiller',
                    positionDescription: 'Description',
                    isAvailable: true,

                    tasks: [
                        {
                            taskId: 0,
                            taskDescription: 'Task'
                        },
                    ]
                },
            ]
        };
    },
    methods: {
        setPositions(id){
            // getting the span elements (each category)
            let mechElement = document.getElementById('category_' + 0);
            let eleElement = document.getElementById('category_' + 1);
            let itElement = document.getElementById('category_' + 2);
            let adminElement = document.getElementById('category_' + 3);

            switch(id){
                case 0:
                    this.mechIsSelected = true;
                    this.eleIsSelected = false;
                    this.itIsSelected = false;
                    this.adminIsSelected = false;

                    mechElement.style.paddingBottom = '2rem';
                    eleElement.style.paddingBottom = '0.5rem';
                    itElement.style.paddingBottom = '0.5rem';
                    adminElement.style.paddingBottom = '0.5rem';
                    break;
                case 1:
                    this.mechIsSelected = false;
                    this.eleIsSelected = true;
                    this.itIsSelected = false;
                    this.adminIsSelected = false;

                    mechElement.style.paddingBottom = '0.5rem';
                    eleElement.style.paddingBottom = '2rem';
                    itElement.style.paddingBottom = '0.5rem';
                    adminElement.style.paddingBottom = '0.5rem';
                    break;
                case 2:
                    this.mechIsSelected = false;
                    this.eleIsSelected = false;
                    this.itIsSelected = true;
                    this.adminIsSelected = false;

                    mechElement.style.paddingBottom = '0.5rem';
                    eleElement.style.paddingBottom = '0.5rem';
                    itElement.style.paddingBottom = '2rem';
                    adminElement.style.paddingBottom = '0.5rem';
                    break;
                case 3:
                    this.mechIsSelected = false;
                    this.eleIsSelected = false;
                    this.itIsSelected = false;
                    this.adminIsSelected = true;

                    mechElement.style.paddingBottom = '0.5rem';
                    eleElement.style.paddingBottom = '0.5rem';
                    itElement.style.paddingBottom = '0.5rem';
                    adminElement.style.paddingBottom = '2rem';
                    break;
                default:
                    this.mechIsSelected = true;
                    this.eleIsSelected = false;
                    this.itIsSelected = false;
                    this.adminIsSelected = false;

                    mechElement.style.paddingBottom = '2rem';
                    eleElement.style.paddingBottom = '0.5rem';
                    itElement.style.paddingBottom = '0.5rem';
                    adminElement.style.paddingBottom = '0.5rem';
            }
        },
        showPositions(){

        }
    }
}).mount('#positions_section');