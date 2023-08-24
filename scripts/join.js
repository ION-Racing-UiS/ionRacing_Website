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
/*      Mech template, handy for ctrl+c/v
                {
                    id: 0,
                    positionTitle: 'Mechtitle',
                    positionImgCode: 'mechFiller',
                    positionDescription: 'Description',
                    isAvailable: true,

                    tasks: [
                        {
                            taskId: 0,
                            taskDescription: 'Task'
                        },
                    ]
                }, */
                {
                    id: 0,
                    positionTitle: 'Chassis',
                    positionImgCode: 'mechFiller',
                    positionDescription: 'Design and production of the cars spaceframe and/or monocoque. <br> The chassis is the main component of the car, tying all components together, in addition to protecting the driver in the event of an accident. <br> You will learn:<br> Triangulation, force distribution, welding theory, teamwork, workshop skills.',
                    isAvailable: true,

                    tasks: [
                        {
                            taskId: 0,
                            taskDescription: 'Structural design'
                        },
                        {
                            taskId: 1,
                            taskDescription: 'Safety'
                        },
                        {
                            taskId: 2,
                            taskDescription: 'Triangulation'
                        },
                        {
                            taskId: 3,
                            taskDescription: 'Steel'
                        },
                        {
                            taskId: 4,
                            taskDescription: 'Welding'
                        },
                        {
                            taskId: 5,
                            taskDescription: 'Carbon fiber monocoque'
                        },
                        {
                            taskId: 6,
                            taskDescription: 'Spaceframe'
                        },

                    ]
                },
                {
                    id: 1,
                    positionTitle: 'Suspension',
                    positionImgCode: 'mechFiller',
                    positionDescription: 'Design and production of the cars suspension. <br> The purpose of the suspension is to keep the car stuck to the ground at all times, in addition to ensuring good handling and good driving cpabilities. <br> You will learn:<br> Force distribution, simulations suspension theory, dynamic driving theory, teamwork, workshop skills.',
                    isAvailable: true,

                    tasks: [
                        {
                            taskId: 1,
                            taskDescription: 'Structural designs'
                        },
                        {
                            taskId: 2,
                            taskDescription: 'Forces'
                        },
                        {
                            taskId: 3,
                            taskDescription: 'Simulations'
                        },
                        {
                            taskId: 4,
                            taskDescription: 'OptimumG & OptimumLap'
                        },
                        {
                            taskId: 5,
                            taskDescription: 'Uprights'
                        },
                        {
                            taskId: 6,
                            taskDescription: 'Wheelhubs'
                        },
                        {
                            taskId: 7,
                            taskDescription: 'Carbontubes'
                        },
                        {
                            taskId: 8,
                            taskDescription: 'Bearings'
                        },

                    ]
                },                {
                    id: 2,
                    positionTitle: 'Drivetrain',
                    positionImgCode: 'mechFiller',
                    positionDescription: 'Design and production of the cars drivetrain. <br>The drivetrain transmits the forces given by the motor into the wheels. This is done either through direct drive, or by utilizing a gearbox connected to a transmission. <br>You will learn:<br> Transmission systems, gearbox design, bearings, gears, teamwork, lap time simulations, KISSsoft simulations, workshop skills.',
                    isAvailable: true,

                    tasks: [
                        {
                            taskId: 0,
                            taskDescription: 'Power Transfer'
                        },{
                            taskId: 1,
                            taskDescription: 'Gearbox'
                        },{
                            taskId: 2,
                            taskDescription: 'Differential'
                        },{
                            taskId: 3,
                            taskDescription: 'Chaindrive'
                        },{
                            taskId: 4,
                            taskDescription: 'KISSsoft'
                        },{
                            taskId: 5,
                            taskDescription: 'Simulations'
                        },{
                            taskId: 6,
                            taskDescription: 'Torque'
                        },{
                            taskId: 7,
                            taskDescription: 'Powertrain'
                        },{
                            taskId: 8,
                            taskDescription: 'Electric motor'
                        },
                    ]
                },
                {
                    id: 3,
                    positionTitle: 'Ergonomics',
                    positionImgCode: 'mechFiller',
                    positionDescription: 'Design and production of the cars cockpit and safety equipment. <br>The ergonomics group is responsible for the cockpit, consisting of the cars steering and pedal system, in addition to the seat, firewall, dashboard, and safety equipment. <br> You will learn:<br> Surface modelling and 3D-Scanning, mold making, ergonomics theory, CAD, carbon fiber molding and infusion, teamwork, workshop skills.',
                    isAvailable: true,

                    tasks: [
                        {
                            taskId: 0,
                            taskDescription: 'Ergonomics'
                        },{
                            taskId: 1,
                            taskDescription: 'Cockpit'
                        },{
                            taskId: 2,
                            taskDescription: 'Comfort'
                        },{
                            taskId: 3,
                            taskDescription: 'Safety'
                        },{
                            taskId: 4,
                            taskDescription: 'Drivers seat'
                        },{
                            taskId: 5,
                            taskDescription: 'Steering wheel'
                        },{
                            taskId: 6,
                            taskDescription: 'Pedalbox'
                        },{
                            taskId: 7,
                            taskDescription: 'Firewall'
                        },
                    ]
                },
                                {
                    id: 4,
                    positionTitle: 'Aerodynamics',
                    positionImgCode: 'mechFiller',
                    positionDescription: 'Design and production of the cars aero package. The cars aero package has the function of providing downforce to the car, resulting in better grip while driving, yielding faster lap times on the track. <br>You will learn:<br> CFD analysis, aerodynamic simulation, carbon fiber molding, CAD, surface modeling, teamwork, workshop skills.',
                    isAvailable: true,

                    tasks: [
                        {
                            taskId: 0,
                            taskDescription: 'Aerodynamic simulations'
                        },{
                            taskId: 1,
                            taskDescription: 'Digital wind tunnel'
                        },{
                            taskId: 2,
                            taskDescription: 'Ansys'
                        },{
                            taskId: 3,
                            taskDescription: 'NablaFlow'
                        },{
                            taskId: 4,
                            taskDescription: 'XFFLR5'
                        },{
                            taskId: 5,
                            taskDescription: 'Handling'
                        },{
                            taskId: 6,
                            taskDescription: 'Downforce'
                        },{
                            taskId: 7,
                            taskDescription: 'Airfoils'
                        },{
                            taskId: 8,
                            taskDescription: 'Frontwing, Rearwing, Diffuser & Sidepods'
                        },{
                            taskId: 9,
                            taskDescription: 'CFD'
                        },
                    ]
                },{
                    id: 5,
                    positionTitle: 'Bodywork',
                    positionImgCode: 'mechFiller',
                    positionDescription: 'Design and production of the cars bodywork. <br>The bodywork is a key component in ensuring good aerodynamic flow around the car, in addition to protecting the driver from foreign objects on the track. The bodywork is designed around the cars chassis and is coordinated along with other components. <br> You will learn:<br> CAD, Teamwork, Carbonfiber molding and infusion, Workshop skills.',
                    isAvailable: true,

                    tasks: [
                        {
                            taskId: 0,
                            taskDescription: 'Bodywork'
                        },{
                            taskId: 1,
                            taskDescription: 'Carbon Fiber'
                        },{
                            taskId: 2,
                            taskDescription: 'Aerodynamics'
                        },{
                            taskId: 3,
                            taskDescription: 'Surface modeling'
                        },{
                            taskId: 4,
                            taskDescription: 'CAD'
                        },{
                            taskId: 5,
                            taskDescription: 'Molding & Infusion'
                        },{
                            taskId: 6,
                            taskDescription: 'Layup'
                        },
                    ]
                },{
                    id: 6,
                    positionTitle: 'Cooling',
                    positionImgCode: 'mechFiller',
                    positionDescription: 'Design and production of the cars cooling system. The cooling system is intended to keep the car running at a normal operating temperature at all times, controlling the heat from the motor and circuit boards. <br>You will learn:<br> Thermodynamic theory, Fluid dynamics, Cooling loops, teamwork, workshop skills.',
                    isAvailable: true,

                    tasks: [
                        {
                            taskId: 0,
                            taskDescription: 'Fluid Dynamics'
                        },{
                            taskId: 1,
                            taskDescription: 'Thermodynamics'
                        },{
                            taskId: 2,
                            taskDescription: 'Water pump'
                        },{
                            taskId: 3,
                            taskDescription: 'Cooling loop'
                        },{
                            taskId: 4,
                            taskDescription: 'Radiator'
                        },{
                            taskId: 5,
                            taskDescription: 'Coolant'
                        },{
                            taskId: 6,
                            taskDescription: 'Flowrate'
                        },{
                            taskId: 7,
                            taskDescription: 'CNC & Milling'
                        },
                    ]
                },{
                    id: 7,
                    positionTitle: 'Electro-Mechanical',
                    positionImgCode: 'mechFiller',
                    positionDescription: 'Coordination between mechanical and electrical systems on the car. <br>Includes design and production of components such as the cars battery container, ECU & MCU containers and the like. <br>You will learn:<br> Teamwork, coordination skills, carbon fiber molding and infusion, some electrical theory.',
                    isAvailable: true,

                    tasks: [
                        {
                            taskId: 0,
                            taskDescription: 'Coordination'
                        },{
                            taskId: 1,
                            taskDescription: 'Electrical systems'
                        },{
                            taskId: 0,
                            taskDescription: 'Battery, MCU & ECU Containers '
                        },{
                            taskId: 0,
                            taskDescription: 'Wiring protection'
                        },{
                            taskId: 0,
                            taskDescription: 'Mechanical guidance to the electrical team'
                        },{
                            taskId: 0,
                            taskDescription: 'Workshop skills'
                        },
                    ]
                },{
                    id: 8,
                    positionTitle: 'Support systems mechanical',
                    positionImgCode: 'mechFiller',
                    positionDescription: 'Responsible for misc. support items such as the battery trolley, push bar, quick jack. <br> You will learn:<br> Teamwork, Coordination skills, Welding, Grinding, Painting',
                    isAvailable: true,

                    tasks: [
                        {
                            taskId: 0,
                            taskDescription: 'Push bar'
                        },{
                            taskId: 1,
                            taskDescription: 'Battery Trolley'
                        },{
                            taskId: 2,
                            taskDescription: 'Misc Mechanical Parts'
                        },{
                            taskId: 3,
                            taskDescription: 'Welding'
                        },{
                            taskId: 4,
                            taskDescription: 'Grinding'
                        },{
                            taskId: 5,
                            taskDescription: 'Painting'
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