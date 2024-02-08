const viewSettingsApp = Vue.createApp({
    data() {
        return{
            // year selection
            yearDropDownActive: false,
            selectedYear: -1, //index (-1 on startup), int version of chosen year
            yearStr: '', // from selected year index, correct year will be set and is ready to be used, string version of chosen year

            // category selection
            categoryDropDownActive: false,
            viewAll: true, //view all is chosen by default
            selectedCategory: 0, // index (0 on startup), int version of chosen category
            categoryStr: '', // string version of chosen category

            teamPhotoUrl: '', 
            hoverEffect: false,


            // TEAM YEAR
            teamYearOpt: [
                // Year: 2016 -status: OK
                {
                    i: 0, 
                    year: '2016',

                    // MEMBERS
                    boardMembers: [
                        {
                            memberId: 0,
                            memberName: 'Hans Kristian Holen',
                            imgCode: 'haho',
                            roles: 'Team Leader',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 1,
                            memberName: 'Nickolay Falkenhaug',
                            imgCode: 'nifa',
                            roles: 'Technical Leader',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 2,
                            memberName: 'Ola Næss Kaldestad',
                            imgCode: 'olka',
                            roles: 'Head of Marketing',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 3,
                            memberName: 'Henrik Knudsen',
                            imgCode: 'hekn',
                            roles: 'Head of Finance',
                            linkedUrl: '',
                            
                        }
                    ],
                    adminMembers: [
                        {
                            memberId: 0,
                            memberName: 'Ola Næss Kaldestad',
                            imgCode: 'olka',
                            roles: 'Group Leader',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 1,
                            memberName: 'Eirik Lie',
                            imgCode: 'eili',
                            roles: 'Event Manager',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 2,
                            memberName: 'Karoline Kverneland',
                            imgCode: 'kakv',
                            roles: 'Sponsor Relations',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 3,
                            memberName: 'Michael Thomson',
                            imgCode: 'mith',
                            roles: 'Sponsor Relations',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 4,
                            memberName: 'Mahdi Aminy Tehrani',
                            imgCode: 'filler',
                            roles: 'Marketing',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 5,
                            memberName: 'Mats Moldesæter',
                            imgCode: 'filler',
                            roles: 'Newsletters',
                            linkedUrl: '',
                            
                        },
                    ],
                    mechMembers: [
                        {
                            memberId: 0,
                            memberName: 'Edvin Rygh',
                            imgCode: 'edry',
                            roles: 'Group Leader - Monocoque',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 1,
                            memberName: 'Hans Kristian Holen',
                            imgCode: 'haho',
                            roles: 'SES (Monocoque)',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 2,
                            memberName: 'Carsten Christensen',
                            imgCode: 'cach',
                            roles: 'Rims (Monocoque)',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 3,
                            memberName: 'Phillip Jamissen',
                            imgCode: 'phja',
                            roles: 'Crashbox (Monocoque)',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 4,
                            memberName: 'Audun Brønseth',
                            imgCode: 'aubr',
                            roles: 'Nose (Monocoque)',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 5,
                            memberName: 'Thomas Haug',
                            imgCode: 'thha',
                            roles: 'Inserts (Monocoque)',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 6,
                            memberName: 'Nora Kristiansen',
                            imgCode: 'filler',
                            roles: 'Ergonomics (Monocoque)',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 7,
                            memberName: 'Simen Ekornåsvåg',
                            imgCode: 'siek',
                            roles: 'Group Leader - Suspension',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 8,
                            memberName: 'Tor Inge Berge',
                            imgCode: 'tobe',
                            roles: 'Steering',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 9,
                            memberName: 'Olaf Nornes Kvamsøy',
                            imgCode: 'olkv',
                            roles: 'Suspension',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 10,
                            memberName: 'Joakim S. Pettersen',
                            imgCode: 'jope',
                            roles: 'Upright (Suspension)',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 11,
                            memberName: 'Fredrik Kalager',
                            imgCode: 'frka',
                            roles: 'Gear & Brakes (Suspension)',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 12,
                            memberName: 'Truls Metzoni Skoglund',
                            imgCode: 'trsk',
                            roles: 'Drive Shaft (Suspension)',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 13,
                            memberName: 'Thea Emilie Finn',
                            imgCode: 'thfi',
                            roles: 'Engine Housing (Suspension)',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 14,
                            memberName: 'Gaute Vagle',
                            imgCode: 'gava',
                            roles: 'Dampers & ARB (Suspension)',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 15,
                            memberName: 'Aslak Tveit',
                            imgCode: 'astv',
                            roles: 'Pedalbox (Suspension)',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 16,
                            memberName: 'Anders Steinsland',
                            imgCode: 'anst',
                            roles: 'Group Leader - Aerodynamics',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 17,
                            memberName: 'Marius Didriksen Hansen',
                            imgCode: 'maha',
                            roles: 'Battery Cooling (Aerodynamics)',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 18,
                            memberName: 'Eirik Inge Hjelle',
                            imgCode: 'eihj',
                            roles: 'Wings (Aerodynamics)',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 19,
                            memberName: 'Tore Lundell-Nygjelten',
                            imgCode: 'tony',
                            roles: 'Sidepods (Aerodynamics)',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 20,
                            memberName: 'Magnus Hofstad',
                            imgCode: 'maho',
                            roles: 'Cooling (Aerodynamics)',
                            linkedUrl: '',
                            
                        }
                    ],
                    eleMembers: [
                        {
                            memberId: 0,
                            memberName: 'Magnus Ljostveit',
                            imgCode: 'malj',
                            roles: 'Group Leader - High Voltage',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 1,
                            memberName: 'Anders Helle',
                            imgCode: 'anhe',
                            roles: 'Engine Control (High Voltage)',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 2,
                            memberName: 'Fredrik Moldvær',
                            imgCode: 'frmo',
                            roles: 'Pre- and Discharge (High Voltage)',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 3,
                            memberName: 'Ove Nicolai Dalheim',
                            imgCode: 'ovda',
                            roles: 'Pre- and Discharge (High Voltage)',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 4,
                            memberName: 'Sindre Hauge',
                            imgCode: 'filler',
                            roles: 'HVD (High Voltage)',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 5,
                            memberName: 'Helge Vassbakk',
                            imgCode: 'heva',
                            roles: 'Group Leader - Battery',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 6,
                            memberName: 'Nickolay Falkenhaug',
                            imgCode: 'nifa',
                            roles: 'BMS (Battery)',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 7,
                            memberName: 'Magnus Høgden',
                            imgCode: 'maho',
                            roles: 'Battery Casing (Battery)',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 8,
                            memberName: 'Olav Riisa',
                            imgCode: 'olri',
                            roles: 'Accumulator Design (Battery)',
                            linkedUrl: '',
                            
                        }
                    ],
                    itMembers: [
                        {
                            memberId: 0,
                            memberName: 'Aleksander Ferkingstad',
                            imgCode: 'alfe',
                            roles: 'Group Leader - Electronics & Software',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 1,
                            memberName: 'Nicolas Fløysvik',
                            imgCode: 'nifl',
                            roles: 'Software Architecture',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 2,
                            memberName: 'Fredrik Mikal Wold',
                            imgCode: 'frwo',
                            roles: 'Telemetry',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 3,
                            memberName: 'Fredrik Wigsnes Jensen',
                            imgCode: 'frje',
                            roles: 'Microcontrollers',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 4,
                            memberName: 'Magne Årdal',
                            imgCode: 'maaar',
                            roles: 'Safety Circuits',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 5,
                            memberName: 'Olav Hobberstad',
                            imgCode: 'olho',
                            roles: 'Programming',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 6,
                            memberName: 'Stian Trondsen',
                            imgCode: 'sttr',
                            roles: 'Graphical UI',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 7,
                            memberName: 'Svein Ree',
                            imgCode: 'svre',
                            roles: 'Safety Circuits',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 8,
                            memberName: 'Mikal Laursen',
                            imgCode: 'filler',
                            roles: 'ECU',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 9,
                            memberName: 'Ådne Løvik Lillehammer',
                            imgCode: 'filler',
                            roles: 'ECU',
                            linkedUrl: '',
                            
                        }
                    ]
                },
                // Year: 2017 -status: OK
                {
                    i: 1, 
                    year: '2017',

                    // MEMBERS
                    boardMembers: [
                        {
                            memberId: 0,
                            memberName: 'Olaf Nornes Kvamsøy',
                            imgCode: 'olkv',
                            roles: 'Team Leader',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 1,
                            memberName: 'Helge Vassbakk',
                            imgCode: 'heva',
                            roles: 'Cheif Electrical Engineer',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 2,
                            memberName: 'Joakim Sandanger Pettersen',
                            imgCode: 'jope',
                            roles: 'Cheif Mechanical Engineer',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 3,
                            memberName: 'Truls Mentzoni Skoglund',
                            imgCode: 'trsk',
                            roles: 'Supply Chain Manager',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 4,
                            memberName: 'Magnus Ljostveit',
                            imgCode: 'malj',
                            roles: 'Head of Finance',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 5,
                            memberName: 'Magne Årdal',
                            imgCode: 'maaar',
                            roles: 'Head of Marketing',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 6,
                            memberName: 'Olav Risa',
                            imgCode: 'olri',
                            roles: 'HMS',
                            linkedUrl: '',
                            
                        }
                    ],
                    adminMembers: [
                        {
                            memberId: 0,
                            memberName: 'Magne Årdal',
                            imgCode: 'maaar',
                            roles: 'Head of Marketing',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 1,
                            memberName: 'Jan Alexander Bjerke',
                            imgCode: 'jabj',
                            roles: 'Media Manager',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 2,
                            memberName: 'Nora Fotland',
                            imgCode: 'nofo',
                            roles: 'Sponsor Relations',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 3,
                            memberName: 'Bente Egeland',
                            imgCode: 'beeg',
                            roles: 'Sponsor Relations',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 4,
                            memberName: 'Hanna Risinggård',
                            imgCode: 'hari',
                            roles: 'Event Manager',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 5,
                            memberName: 'Trym Ullestad',
                            imgCode: 'trul',
                            roles: 'role',
                            linkedUrl: 'Blog and Magazine',
                            
                        }
                    ],
                    mechMembers: [
                        {
                            memberId: 0,
                            memberName: 'Philip Lundberg Jamissen',
                            imgCode: 'phja',
                            roles: 'Group Leader - Monocoque',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 1,
                            memberName: 'Joakim Sandanger Pettersen',
                            imgCode: 'jope',
                            roles: 'Monocoque design/SES',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 2,
                            memberName: 'Kaja Sofie Lamvik',
                            imgCode: 'kala',
                            roles: 'Inserts (Monocoque)',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 3,
                            memberName: 'Karoline Kverneland',
                            imgCode: 'kakv',
                            roles: 'Ergonomics (Monocoque)',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 4,
                            memberName: 'Marius Aasen',
                            imgCode: 'maaa',
                            roles: 'Main and front hoop (Monocoque)',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 5,
                            memberName: 'Trygve Pollen',
                            imgCode: 'trpo',
                            roles: 'Assembly (Monocoque)',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 6,
                            memberName: 'Olaf Nornes Kvamsøy',
                            imgCode: 'olkv',
                            roles: 'Monocoque production/SES',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 7,
                            memberName: 'Truls Mentzoni Skoglund',
                            imgCode: 'trsk',
                            roles: 'Group Leader - Suspension',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 8,
                            memberName: 'Kristoffer Nielsen',
                            imgCode: 'krni',
                            roles: 'Drivetrain (Suspension)',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 9,
                            memberName: 'Maren Lodden',
                            imgCode: 'malo',
                            roles: 'Dampers & ARB (Suspension)',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 10,
                            memberName: 'Mia Katrin Risan',
                            imgCode: 'miri',
                            roles: 'Brakes & Pedalbox (Suspension)',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 11,
                            memberName: 'Audun Brønseth',
                            imgCode: 'aubr',
                            roles: 'Suspension',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 12,
                            memberName: 'Thea Emilie Finn',
                            imgCode: 'filler',
                            roles: 'Rims (Suspension)',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 13,
                            memberName: 'Erik Benjamin Bruns',
                            imgCode: 'erbr',
                            roles: 'Wheel Hub (Suspension)',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 14,
                            memberName: 'Tor Inge Berge',
                            imgCode: 'tobe',
                            roles: 'Coach (Suspension)',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 15,
                            memberName: 'Marius Hansen',
                            imgCode: 'maha',
                            roles: 'Group Leader - Aerodynamic',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 16,
                            memberName: 'Eivind Vinnes',
                            imgCode: 'eivi',
                            roles: 'Sidepod Design, (Aerodynamic)',
                            linkedUrl: '',
                            
                        }
                    ],
                    eleMembers: [
                        {
                            memberId: 0,
                            memberName: 'Olav Risa',
                            imgCode: 'olri',
                            roles: 'Group Leader - Battery',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 1,
                            memberName: 'Helge Vassbakk',
                            imgCode: 'heva',
                            roles: 'BMS, (Battery)',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 2,
                            memberName: 'Benjamin Kristoffer Risa Vik',
                            imgCode: 'filler',
                            roles: 'Accumulator Design (Battery)',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 3,
                            memberName: 'Anders Helle',
                            imgCode: 'anhe',
                            roles: 'Big Boss, High Voltage',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 4,
                            memberName: 'Sebastian Stokholm Ravndal',
                            imgCode: 'sera',
                            roles: 'High Voltage system',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 5,
                            memberName: 'Aleksander Ferkingstad',
                            imgCode: 'filler',
                            roles: 'Motorcontroller (High Voltage)',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 6,
                            memberName: 'Svein Grøttå Ree',
                            imgCode: 'svre',
                            roles: 'Group Leader - Electronics',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 7,
                            memberName: 'Tellef Goderstad Sunne',
                            imgCode: 'tesu',
                            roles: 'ECU/Wire harness/ Misc. electronics',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 8,
                            memberName: 'Stian Sagen',
                            imgCode: 'stsa',
                            roles: 'TSAL/Shutdown Circuit (Electronics)',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 9,
                            memberName: 'Fredrik Wigsnes Jensen',
                            imgCode: 'frje',
                            roles: 'μC-programming/ sensor analytics (Electronics)',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 10,
                            memberName: 'Aleksander Ferkingstad',
                            imgCode: 'filler',
                            roles: 'Coach (Electronics)',
                            linkedUrl: '',
                            
                        }
                    ],
                    itMembers: [
                        {
                            memberId: 0,
                            memberName: 'Nicolas Fløysvik',
                            imgCode: 'nifl',
                            roles: 'Group Leader - Software',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 1,
                            memberName: 'Hanna Risinggård',
                            imgCode: 'hari',
                            roles: 'Backend Developer',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 2,
                            memberName: 'Trude Marie Sele',
                            imgCode: 'trse',
                            roles: 'Backend Developer',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 3,
                            memberName: 'Alexander Lyon',
                            imgCode: 'ally',
                            roles: 'Frontend Developer',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 4,
                            memberName: 'Stian Trondsen',
                            imgCode: 'sttr',
                            roles: 'Analytics software',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 5,
                            memberName: 'Fredrik Wigsnes Jensen',
                            imgCode: 'frje',
                            roles: 'μC-programming/ sensor analytics',
                            linkedUrl: '',
                            
                        }
                    ]
                },
                // Year: 2018 -status: OK
                {
                    i: 2, 
                    year: '2018',

                    // MEMBERS
                    boardMembers: [
                        {
                            memberId: 0,
                            memberName: 'Erik Benjamin Bruns',
                            imgCode: 'erbr',
                            roles: 'Team Leader',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 1,
                            memberName: 'Morten Stien',
                            imgCode: 'most',
                            roles: 'HR',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 2,
                            memberName: 'Kaylee Van Der Linden',
                            imgCode: 'kali',
                            roles: 'Head of Marketing',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 3,
                            memberName: 'Janne Rasmussen Klungland',
                            imgCode: 'jakl',
                            roles: 'Head of Finance',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 4,
                            memberName: 'Didrik Andreas Johannessen',
                            imgCode: 'dijo',
                            roles: 'Chief Mechanical Engineer',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 5,
                            memberName: 'Nicolas Fløysvik',
                            imgCode: 'nifl',
                            roles: 'Chief Electrical Engineer',
                            linkedUrl: '',
                            
                        }
                    ],
                    adminMembers: [
                        {
                            memberId: 0,
                            memberName: 'Kaylee Van Der Linden',
                            imgCode: 'kali',
                            roles: 'Head of Marketing',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 1,
                            memberName: 'Tord Jardar Håkonsen',
                            imgCode: 'filler',
                            roles: 'Business',
                            linkedUrl: '',
                            
                        }
                    ],
                    mechMembers: [
                        {
                            memberId: 0,
                            memberName: 'Philip Jamissen',
                            imgCode: 'phja',
                            roles: 'Group Leader - Monocoque',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 1,
                            memberName: 'Atle Stensland',
                            imgCode: 'atst',
                            roles: 'Inserts',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 2,
                            memberName: 'Bjørnar Saurdal',
                            imgCode: 'bjsa',
                            roles: 'SES',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 3,
                            memberName: 'Roy Andre Larsen',
                            imgCode: 'rola',
                            roles: 'Simulation',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 4,
                            memberName: 'Marius Aasen',
                            imgCode: 'maaa',
                            roles: 'Seat & firewall',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 5,
                            memberName: 'Trygve Pollen',
                            imgCode: 'trpo',
                            roles: 'Jackup',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 6,
                            memberName: 'Eivind Vinnes',
                            imgCode: 'eivi',
                            roles: 'Air inlet',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 7,
                            memberName: 'Duy Nguyen',
                            imgCode: 'dung',
                            roles: 'AIP & IA',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 8,
                            memberName: 'Erik August Drivflaadt',
                            imgCode: 'erdr',
                            roles: 'Sidepods',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 9,
                            memberName: 'Vegard Johnsen',
                            imgCode: 'vejo',
                            roles: 'Roll hoops',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 10,
                            memberName: 'Thea Emilie Finn',
                            imgCode: 'filler',
                            roles: 'Production of Monocoque',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 11,
                            memberName: 'Anders Sletsjøe',
                            imgCode: 'ansl',
                            roles: 'Inspection hatches',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 12,
                            memberName: 'Audun Brønseth',
                            imgCode: 'aubr',
                            roles: 'Group Leader - Suspension',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 13,
                            memberName: 'Tor Inge Berge',
                            imgCode: 'tobe',
                            roles: 'Suspension',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 14,
                            memberName: 'Roger Hole',
                            imgCode: 'roho',
                            roles: 'Brakes & Pedal box',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 15,
                            memberName: 'Hemn Ahmed',
                            imgCode: 'heah',
                            roles: 'Upright',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 16,
                            memberName: 'Lars Olav Lauvik',
                            imgCode: 'lala',
                            roles: 'Steeringsystem',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 17,
                            memberName: 'Ramzi Cherif',
                            imgCode: 'rach',
                            roles: 'Wheelhub',
                            linkedUrl: '',
                            
                        }
                    ],
                    eleMembers: [
                        {
                            memberId: 0,
                            memberName: 'Anders Helle',
                            imgCode: 'anhe',
                            roles: 'Big Boss - Powertrain',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 1,
                            memberName: 'Alexander Thorkildsen',
                            imgCode: 'alth',
                            roles: 'Simulations & machining',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 2,
                            memberName: 'Arild Garvik',
                            imgCode: 'arga',
                            roles: 'Inhouse Inverter',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 3,
                            memberName: 'Benjamin Kristoffer Risa Vik',
                            imgCode: 'bevi',
                            roles: 'Accumulator',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 4,
                            memberName: 'Harald Thirud Skutvik',
                            imgCode: 'hask',
                            roles: 'High Voltage electronics',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 5,
                            memberName: 'Magne Årdal',
                            imgCode: 'maaar',
                            roles: 'Motor & High voltage system',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 6,
                            memberName: 'Raymond Tjørhom',
                            imgCode: 'ratj',
                            roles: 'Inhouse Inverter',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 7,
                            memberName: 'Sindre Varland',
                            imgCode: 'siva',
                            roles: 'Gear',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 8,
                            memberName: 'Stian Sagen',
                            imgCode: 'stsa',
                            roles: 'Accumulator container',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 9,
                            memberName: 'Tiedemann Bratten',
                            imgCode: 'filler',
                            roles: 'Cooling system & machining',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 10,
                            memberName: 'Martin Aleksander Evensen',
                            imgCode: 'filler',
                            roles: 'Driveshafts',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 11,
                            memberName: 'Sondre Kaavik',
                            imgCode: 'filler',
                            roles: 'Accumulator',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 12,
                            memberName: 'Sebastian Stokholm Ravndal',
                            imgCode: 'sera',
                            roles: 'Group Leader - Low Voltage',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 13,
                            memberName: 'Eirik Knudsen',
                            imgCode: 'eikn',
                            roles: 'Low Voltage Electronics',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 14,
                            memberName: 'Håvard Lapin',
                            imgCode: 'haala',
                            roles: 'Telemetry',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 15,
                            memberName: 'Stian Gjesdal',
                            imgCode: 'stgj',
                            roles: 'Low Voltage Battery',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 16,
                            memberName: 'Tron Torsen',
                            imgCode: 'trto',
                            roles: 'Shutdown Circuit',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 17,
                            memberName: 'Elzat Kadeer',
                            imgCode: 'elka',
                            roles: 'Shutdown Circuit',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 18,
                            memberName: 'Trym Ullestad',
                            imgCode: 'trul',
                            roles: 'Low Voltage Components',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 19,
                            memberName: 'Tord Falch',
                            imgCode: 'tofa',
                            roles: 'Sensors',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 20,
                            memberName: 'Eivind Mesna',
                            imgCode: 'eime',
                            roles: 'Sensors',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 21,
                            memberName: 'Shahid Alajev',
                            imgCode: 'shal',
                            roles: 'Dashboard',
                            linkedUrl: '',
                            
                        }
                    ],
                    itMembers: [
                        {
                            memberId: 0,
                            memberName: 'Nicolas Fløysvik',
                            imgCode: 'nifl',
                            roles: 'Group Leader - Software',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 1,
                            memberName: 'Stian Trondsen',
                            imgCode: 'sttr',
                            roles: 'Analytics Software',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 2,
                            memberName: 'Fredrik Wigsnes Jensen',
                            imgCode: 'frje',
                            roles: 'Documentation Software',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 3,
                            memberName: 'Daniel Barati',
                            imgCode: 'daba',
                            roles: 'Software Developer',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 4,
                            memberName: 'Ståle Andre Lund',
                            imgCode: 'stlu',
                            roles: 'Inventory System',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 5,
                            memberName: 'Sindre Tellevik',
                            imgCode: 'site',
                            roles: 'Inventory System',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 6,
                            memberName: 'Zahra Rezai',
                            imgCode: 'zare',
                            roles: 'Web Page',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 7,
                            memberName: 'Piraya Kerdpetch',
                            imgCode: 'pike',
                            roles: 'Web Page',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 8,
                            memberName: 'Qingqing Dai',
                            imgCode: 'filler',
                            roles: 'Web Page',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 9,
                            memberName: 'Jungwon Seo',
                            imgCode: 'filler',
                            roles: 'Software Developer',
                            linkedUrl: '',
                            
                        }
                    ]
                },
                // Year: 2019 -status: OK
                {
                    i: 3, 
                    year: '2019',

                    // MEMBERS
                    boardMembers: [
                        {
                            memberId: 0,
                            memberName: 'Erik Benjamin Bruns',
                            imgCode: 'erbr',
                            roles: 'Team Leader',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 1,
                            memberName: 'Sindre Varland',
                            imgCode: 'siva',
                            roles: 'COO',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 2,
                            memberName: 'Melissa Thomassen',
                            imgCode: 'meth',
                            roles: 'Head of Marketing',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 3,
                            memberName: 'Maria Mentel',
                            imgCode: 'mame',
                            roles: 'Head of Finance',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 4,
                            memberName: 'Alexander Thorkildsen',
                            imgCode: 'alth',
                            roles: 'Chief Mechanical Engineer',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 5,
                            memberName: 'Raymond Tjørhom',
                            imgCode: 'ratj',
                            roles: 'Chief Electrical Engineer',
                            linkedUrl: '',
                            
                        }
                    ],
                    adminMembers: [
                        {
                            memberId: 0,
                            memberName: 'Melissa Thomassen',
                            imgCode: 'meth',
                            roles: 'Head of Marketing',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 1,
                            memberName: 'Maren Joanna Julien',
                            imgCode: 'maju',
                            roles: 'Event Manager',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 2,
                            memberName: 'Truls Aslaksen',
                            imgCode: 'tras',
                            roles: 'Event',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 3,
                            memberName: 'Johan Bjørgvik',
                            imgCode: 'jobj',
                            roles: 'Event',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 4,
                            memberName: 'Olav Bjånes',
                            imgCode: 'olbj',
                            roles: 'Photo/Film',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 5,
                            memberName: 'Joachim Seyffarth',
                            imgCode: 'jose',
                            roles: 'Photo/Film',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 6,
                            memberName: 'Marita Førde',
                            imgCode: 'mafoe',
                            roles: 'Sponsor Relations',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 7,
                            memberName: 'Tord Jardar Håkonsen',
                            imgCode: 'tohaa',
                            roles: 'Business',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 8,
                            memberName: 'Abdur Rehman',
                            imgCode: 'filler',
                            roles: 'External Events',
                            linkedUrl: '',
                            
                        }
                    ],
                    mechMembers: [
                        {
                            memberId: 0,
                            memberName: 'Aleksander Sund',
                            imgCode: 'alsu',
                            roles: 'Group Leader - Chassis',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 1,
                            memberName: 'Marius Aasen',
                            imgCode: 'maaa',
                            roles: 'Firewall, Seat & Harness',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 2,
                            memberName: 'Trym Pedersen',
                            imgCode: 'trpe',
                            roles: 'Bodywork',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 3,
                            memberName: 'Sigurd Grøvdal Hansen',
                            imgCode: 'siha',
                            roles: 'Bodywork',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 4,
                            memberName: 'Andrè Gjerde',
                            imgCode: 'angj',
                            roles: 'AIP & Crashbox',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 5,
                            memberName: 'Philip Jamissen',
                            imgCode: 'filler',
                            roles: 'Hoops & Cost',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 6,
                            memberName: 'Trygve Pollen',
                            imgCode: 'trpo',
                            roles: 'Group Leader - Suspension',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 7,
                            memberName: 'Arman Zarghooni',
                            imgCode: 'filler',
                            roles: 'Dampers & ARB',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 8,
                            memberName: 'Anders Vatland',
                            imgCode: 'anva',
                            roles: 'Pedal Box',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 9,
                            memberName: 'Erik Hagen',
                            imgCode: 'erha',
                            roles: 'Brake System',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 10,
                            memberName: 'Aksel Søraunet',
                            imgCode: 'aksoe',
                            roles: 'Steering-system/wheel/Suspension Geometry',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 11,
                            memberName: 'Vegard Johnsen',
                            imgCode: 'filler',
                            roles: 'Suspension Geometry',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 12,
                            memberName: 'Joan Catafal Predagosa',
                            imgCode: 'jopr',
                            roles: 'Topology Optimization',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 13,
                            memberName: 'Jocelyn Bojda',
                            imgCode: 'jobo',
                            roles: 'Planetary Gear',
                            linkedUrl: '',
                            
                        }
                    ],
                    eleMembers: [
                        {
                            memberId: 0,
                            memberName: 'Stian Sagen',
                            imgCode: 'stsa',
                            roles: 'Group Leader - Powertrain',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 1,
                            memberName: 'Eivind Vinnes',
                            imgCode: 'eivi',
                            roles: 'Cooling & Sidepods',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 2,
                            memberName: 'Vegard Bror Trodal',
                            imgCode: 'vetr',
                            roles: 'Accumulator Container',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 3,
                            memberName: 'Hammad Ali',
                            imgCode: 'haal',
                            roles: 'Motor Controller',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 4,
                            memberName: 'Petter Minne',
                            imgCode: 'pemi',
                            roles: 'DC/DC',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 5,
                            memberName: 'Ruben Hesseberg',
                            imgCode: 'ruhe',
                            roles: 'DC/DC',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 6,
                            memberName: 'Jonas Tretteteig',
                            imgCode: 'jotr',
                            roles: 'Accumulator',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 7,
                            memberName: 'Per Gundersen Lund',
                            imgCode: 'pelu',
                            roles: 'Accumulator & Chargingcart',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 8,
                            memberName: 'Eirik Berge Knudsen',
                            imgCode: 'eikn',
                            roles: 'Group Leader - Electonics',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 9,
                            memberName: 'Håvard Lapin',
                            imgCode: 'filler',
                            roles: 'Shutdown',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 10,
                            memberName: 'Joakim Alsaker-Haugen',
                            imgCode: 'joha',
                            roles: 'ECU/Software',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 11,
                            memberName: 'Vebjørn Nåtun Krøyer',
                            imgCode: 'vekr',
                            roles: 'ECU/Sensors',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 12,
                            memberName: 'Andreas Byskov',
                            imgCode: 'anby',
                            roles: 'ECU/Sensors',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 13,
                            memberName: 'Christian Bauer-Nilsen',
                            imgCode: 'chni',
                            roles: 'Dashboard',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 14,
                            memberName: 'Sebastian Ravndal',
                            imgCode: 'sera',
                            roles: 'Mentor - Logistics',
                            linkedUrl: '',
                            
                        }
                    ],
                    itMembers: [
                        {
                            memberId: 0,
                            memberName: 'Truls Skadberg',
                            imgCode: 'trsk',
                            roles: 'Group Leader - IT',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 0,
                            memberName: 'Ali Karooni',
                            imgCode: 'alka',
                            roles: 'Website',
                            linkedUrl: '',
                            
                        }
                    ]
                },
                // Year: 2020 -status: OK
                {
                    i: 4, 
                    year: '2020',

                    // MEMBERS
                    boardMembers: [
                        {
                            memberId: 0,
                            memberName: 'Maren Joanna Julien',
                            imgCode: 'maju',
                            roles: 'Team Leader',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 1,
                            memberName: 'Vegard Bror Trodal',
                            imgCode: 'vetr',
                            roles: 'Coo',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 2,
                            memberName: 'Fredrik Rege',
                            imgCode: 'frre',
                            roles: 'Group Leader Administration/Economics',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 3,
                            memberName: 'Yohannes Dawit Kassaye',
                            imgCode: 'yoka',
                            roles: 'Group Leader Electronics',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 4,
                            memberName: 'Andreas Byskov',
                            imgCode: 'anby',
                            roles: 'Electronic Systems Architect',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 5,
                            memberName: 'Trym Pedersen',
                            imgCode: 'trpe',
                            roles: 'Group Leader Chassis',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 6,
                            memberName: 'Aksel Søraunet',
                            imgCode: 'aksoe',
                            roles: 'Group Leader Suspension',
                            linkedUrl: '',
                            
                        }
                    ],
                    adminMembers: [
                        {
                            memberId: 0,
                            memberName: 'Fredrik Rege',
                            imgCode: 'frre',
                            roles: 'Group Leader Administration/Economics',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 1,
                            memberName: 'Johan Bjørgvik',
                            imgCode: 'jobj',
                            roles: 'Logistics & Sponsors',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 2,
                            memberName: 'Olha Ivanova',
                            imgCode: 'oliv',
                            roles: 'Event',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 3,
                            memberName: 'Melissa Bamrungkho Thomassen',
                            imgCode: 'meth',
                            roles: 'Social media',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 4,
                            memberName: 'Einar Gjerde',
                            imgCode: 'eigj',
                            roles: 'Sponsors',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 5,
                            memberName: 'Karoline Hjeldnes',
                            imgCode: 'kahj',
                            roles: 'Event',
                            linkedUrl: '',
                            
                        }
                    ],
                    mechMembers: [
                        {
                            memberId: 0,
                            memberName: 'Trym Pedersen',
                            imgCode: 'trpe',
                            roles: 'Group Leader - Chassis',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 1,
                            memberName: 'Anders Gard',
                            imgCode: 'anga',
                            roles: 'Chassis Simulation',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 2,
                            memberName: 'Martin Mildt',
                            imgCode: 'mami',
                            roles: 'Chassis Design',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 3,
                            memberName: 'Sigurd Grøvdal Hansen',
                            imgCode: 'siha',
                            roles: 'Firewall & Seat',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 4,
                            memberName: 'Alexander Thorkildsen',
                            imgCode: 'filler',
                            roles: 'Mentor (Chassis)',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 5,
                            memberName: 'Aksel Søraunet',
                            imgCode: 'aksoe',
                            roles: 'Group Leader - Suspension',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 6,
                            memberName: 'Trygve Pollen',
                            imgCode: 'trpo',
                            roles: 'Brakes & Pedal box',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 7,
                            memberName: 'Olai Hagland',
                            imgCode: 'filler',
                            roles: 'Drivetrain',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 8,
                            memberName: 'Ole Kristian Brettingen',
                            imgCode: 'olbr',
                            roles: 'Suspension, Dampers & ARB',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 9,
                            memberName: 'Sondre Mikkelsen',
                            imgCode: 'somi',
                            roles: 'Suspension, Dampers & ARB',
                            linkedUrl: '',
                            
                        }
                    ],
                    eleMembers: [
                        {
                            memberId: 0,
                            memberName: 'Yohannes Dawit Kassaye',
                            imgCode: 'yoka',
                            roles: 'Group Leader Electronics',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 1,
                            memberName: 'Andreas Byskov',
                            imgCode: 'anby',
                            roles: 'Electronic Systems Architect',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 2,
                            memberName: 'Per Gundersen Lund',
                            imgCode: 'pelu',
                            roles: 'Motor-Controller & HV-Circuitry',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 3,
                            memberName: 'Raymond Tjørhom',
                            imgCode: 'ratj',
                            roles: 'Accumulator',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 4,
                            memberName: 'Mathias Skjelbred',
                            imgCode: 'mask',
                            roles: 'HV',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 5,
                            memberName: 'Åse Marie Pettersen',
                            imgCode: 'aaspe',
                            roles: 'HV',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 6,
                            memberName: 'Håvard Soma',
                            imgCode: 'haaso',
                            roles: 'Wiring Harness',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 7,
                            memberName: 'Jesper Flatheim',
                            imgCode: 'jefl',
                            roles: 'Wiring Harness',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 8,
                            memberName: 'André Rabba',
                            imgCode: 'anra',
                            roles: 'ECU',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 9,
                            memberName: 'Eirik Berge Knudsen',
                            imgCode: 'filler',
                            roles: 'Mentor',
                            linkedUrl: '',
                            
                        }
                    ],
                    itMembers: [
                        {
                            memberId: 0,
                            memberName: 'Truls Hansen Skadberg',
                            imgCode: 'trsk',
                            roles: 'Group Leader IT, System Administrator & Developer',
                            linkedUrl: '',
                            
                        }
                    ]
                },
                // Year: 2021 -status: OK
                {
                    i: 5, 
                    year: '2021',

                    // MEMBERS
                    boardMembers: [
                        {
                            memberId: 0,
                            memberName: 'Trygve Pollen',
                            imgCode: 'trpo',
                            roles: 'Team Leader',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 1,
                            memberName: 'Fredrik Rege',
                            imgCode: 'filler',
                            roles: 'Group Leader Administration',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 2,
                            memberName: 'Erlend Røstbø',
                            imgCode: 'erroe',
                            roles: 'Group Leader Mechanical',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 3,
                            memberName: 'Per Gundersen Lund',
                            imgCode: 'pelu',
                            roles: 'Group Leader Electronics',
                            linkedUrl: '',
                            
                        }
                    ],
                    adminMembers: [
                        {
                            memberId: 0,
                            memberName: 'Fredrik Rege',
                            imgCode: 'filler',
                            roles: 'Group Leader Administration',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 1,
                            memberName: 'Nasra Abdille',
                            imgCode: 'naab',
                            roles: 'Economics',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 2,
                            memberName: 'Hisham Mohamed Abid',
                            imgCode: 'filler',
                            roles: 'Cost',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 3,
                            memberName: 'Alf Martin Hammerstad',
                            imgCode: 'alha',
                            roles: 'Media',
                            linkedUrl: '',
                            
                        }
                    ],
                    mechMembers: [
                        {
                            memberId: 0,
                            memberName: 'Erlend Røstbø',
                            imgCode: 'erroe',
                            roles: 'Group Leader Mechanical',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 1,
                            memberName: 'Anders Gard',
                            imgCode: 'anga',
                            roles: 'Chassis & SES',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 2,
                            memberName: 'Martin Mildt',
                            imgCode: 'mami',
                            roles: 'Chassis',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 3,
                            memberName: 'Martin Larsen',
                            imgCode: 'mala',
                            roles: 'Steering System',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 4,
                            memberName: 'Olai Hagland',
                            imgCode: 'filler',
                            roles: 'Cooling System',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 5,
                            memberName: 'Sondre Mikkelsen',
                            imgCode: 'somi',
                            roles: 'Suspension',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 6,
                            memberName: 'Lars Andreas Flesjå Genthner',
                            imgCode: 'lage',
                            roles: 'Suspension',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 7,
                            memberName: 'Sigurd Grøvdal Hansen',
                            imgCode: 'siha',
                            roles: 'Fiber Layup',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 8,
                            memberName: 'Åse Marie Pettersen',
                            imgCode: 'aaspe',
                            roles: 'Ergonomics',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 9,
                            memberName: 'Vegard Bror Trodal',
                            imgCode: 'filler',
                            roles: 'Mentor',
                            linkedUrl: '',
                            
                        }
                    ],
                    eleMembers: [
                        {
                            memberId: 0,
                            memberName: 'Per Gundersen Lund',
                            imgCode: 'pelu',
                            roles: 'Group Leader Electronics',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 1,
                            memberName: 'Andreas Byskov',
                            imgCode: 'anby',
                            roles: 'System Architect',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 2,
                            memberName: 'Jesper Flatheim',
                            imgCode: 'jefl',
                            roles: 'Wiring Harness',
                            linkedUrl: '',
                            
                        }
                    ],
                    itMembers: [
                        {
                            memberId: 0,
                            memberName: 'Jan Markus Høie',
                            imgCode: 'jahoe',
                            roles: 'Group Leader IT',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 1,
                            memberName: 'Andreas Lindemark',
                            imgCode: 'filler',
                            roles: 'Software Developer',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 2,
                            memberName: 'Yohannes Dawit Kassaye',
                            imgCode: 'filler',
                            roles: 'Software Developer',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 3,
                            memberName: 'Truls Hansen Skadberg',
                            imgCode: 'filler',
                            roles: 'Mentor',
                            linkedUrl: '',
                            
                        }
                    ]
                },
                // Year: 2022 -status: OK
                {
                    i: 6, 
                    year: '2022',

                    // MEMBERS
                    boardMembers: [
                        {
                            memberId: 0,
                            memberName: 'Vegard Bror Trodal',
                            imgCode: 'vetr',
                            roles: 'Project Leader',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 1,
                            memberName: 'Andreas Byskov',
                            imgCode: 'anby',
                            roles: 'Chief Electrical Engineer',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 2,
                            memberName: 'Anders Gard',
                            imgCode: 'anga',
                            roles: 'Chief Mechanical Engineer',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 3,
                            memberName: 'Julia Tisko',
                            imgCode: 'juti',
                            roles: 'Administration & CFO',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 4,
                            memberName: 'Jan Markus Høie',
                            imgCode: 'jahoe',
                            roles: 'Head of IT',
                            linkedUrl: '',
                            
                        }
                    ],
                    adminMembers: [
                        {
                            memberId: 0,
                            memberName: 'Julia Tisko',
                            imgCode: 'juti',
                            roles: 'Administration/CFO',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 1,
                            memberName: 'Mariam Anna Urbonaite',
                            imgCode: 'maur',
                            roles: 'Sponsors',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 2,
                            memberName: 'Johannes Møllerup',
                            imgCode: 'jomoe',
                            roles: 'Sponsors',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 3,
                            memberName: 'Lasse Bang-Olsen',
                            imgCode: 'laol',
                            roles: 'Events',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 4,
                            memberName: 'Stian Nygård',
                            imgCode: 'stny',
                            roles: 'Media',
                            linkedUrl: '',
                            
                        }
                    ],
                    mechMembers: [
                        {
                            memberId: 0,
                            memberName: 'Anders Gard',
                            imgCode: 'anga',
                            roles: 'Chief Mechanical Engineer',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 1,
                            memberName: 'Einar Kjeka',
                            imgCode: 'eikj',
                            roles: 'Ergonomics',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 2,
                            memberName: 'Eric Michael Hofgaard',
                            imgCode: 'erho',
                            roles: 'Ergonomics',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 3,
                            memberName: 'Even Holen',
                            imgCode: 'evho',
                            roles: 'Accumulator Container',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 4,
                            memberName: 'Hermann Berg Nilssen',
                            imgCode: 'heni',
                            roles: 'Chassis & SES',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 5,
                            memberName: 'Tomas Martin Alvestad',
                            imgCode: 'toal',
                            roles: 'Chassis & SES',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 6,
                            memberName: 'Ole Mørkved',
                            imgCode: 'olmoe',
                            roles: 'Suspension',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 7,
                            memberName: 'Ruben Østli',
                            imgCode: 'ruoes',
                            roles: 'Suspension',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 8,
                            memberName: 'Jack RB Hill',
                            imgCode: 'jahi',
                            roles: 'Cooling',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 9,
                            memberName: 'Ruben Nordstokke',
                            imgCode: 'runo',
                            roles: 'Bodywork',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 10,
                            memberName: 'Mubarik Omar Ali Abdi',
                            imgCode: 'muab',
                            roles: 'Cooling',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 11,
                            memberName: 'Erlend Røstbø',
                            imgCode: 'filler',
                            roles: 'Mentor & CFD God',
                            linkedUrl: '',
                            
                        }
                    ],
                    eleMembers: [
                        {
                            memberId: 0,
                            memberName: 'Andreas Byskov',
                            imgCode: 'anby',
                            roles: 'Chief Electrical Engineer',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 1,
                            memberName: 'Gerd-Elise Hjelset',
                            imgCode: 'gehj',
                            roles: 'Accumulator',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 2,
                            memberName: 'Daniel Maudal',
                            imgCode: 'dama',
                            roles: 'Low Voltage',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 3,
                            memberName: 'Sondre Rosvoll Solheim',
                            imgCode: 'soso',
                            roles: 'Low Voltage',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 4,
                            memberName: 'Herman Sparøy',
                            imgCode: 'hesp',
                            roles: 'Dashboard',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 5,
                            memberName: 'Philip Shahdadfar',
                            imgCode: 'phsh',
                            roles: 'Dashboard',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 6,
                            memberName: 'Lars Johann Indreeide',
                            imgCode: 'lain',
                            roles: 'Dashboard & Logging',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 7,
                            memberName: 'Robin Holden',
                            imgCode: 'roho',
                            roles: 'ECU',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 8,
                            memberName: 'Runar Wallenius Skaget',
                            imgCode: 'rusk',
                            roles: 'ECU',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 9,
                            memberName: 'Sander Hovet',
                            imgCode: 'saho',
                            roles: 'ECU',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 10,
                            memberName: 'Per Gundersen Lund',
                            imgCode: 'filler',
                            roles: 'Mentor',
                            linkedUrl: '',
                            
                        }
                    ],
                    itMembers: [
                        {
                            memberId: 0,
                            memberName: 'Jan Markus Høie',
                            imgCode: 'jahoe',
                            roles: 'IT Wizard',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 1,
                            memberName: 'Alexander Kruke Bjugan',
                            imgCode: 'albj',
                            roles: 'Software Developer',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 2,
                            memberName: 'Kristian Vezina',
                            imgCode: 'krve',
                            roles: 'Software Developer',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 3,
                            memberName: 'Ole Kristian Valhammer',
                            imgCode: 'filler',
                            roles: 'Software Developer',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 4,
                            memberName: 'Martin Lauritsen',
                            imgCode: 'filler',
                            roles: 'Software Developer',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 5,
                            memberName: 'Truls Hansen Skadberg',
                            imgCode: 'filler',
                            roles: 'Mentor',
                            linkedUrl: '',
                            
                        }
                    ]
                },
                // Year: 2023 -status: OK
                {
                    i: 7, 
                    year: '2023',

                    // MEMBERS
                    boardMembers: [
                        {
                            memberId: 0,
                            memberName: 'Ole Mørkved',
                            imgCode: 'olmo',
                            roles: 'Project Leader',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 1,
                            memberName: 'Herman Berg Nilssen',
                            imgCode: 'heni',
                            roles: 'Chief Mechanical Engineer',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 2,
                            memberName: 'Philip Shahdadfar',
                            imgCode: 'phsh',
                            roles: 'Chief Electrical Engineer',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 3,
                            memberName: 'Lars Johann Indreeide',
                            imgCode: 'lajoin',
                            roles: 'Head of IT',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 4,
                            memberName: 'Stian Nygård',
                            imgCode: 'stny',
                            roles: 'Group leader Administration',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 5,
                            memberName: 'Andreas Byskov',
                            imgCode: 'anby',
                            roles: 'Chief Technical Engineer',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 6,
                            memberName: 'Einar Kjeka',
                            imgCode: 'eikj',
                            roles: 'Head of production',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 7,
                            memberName: 'Julia Tisko',
                            imgCode: 'juti',
                            roles: 'Chief financial Officer',
                            linkedUrl: '',
                            
                        },
                    ],
                    adminMembers: [
                        {
                            memberId: 0,
                            memberName: 'Stian Nygård',
                            imgCode: 'stny',
                            roles: 'Group leader Administration',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 1,
                            memberName: 'Julia Tisko',
                            imgCode: 'juti',
                            roles: 'Chief financial Officer',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 2,
                            memberName: 'Lasse Bang Olsen',
                            imgCode: 'laol',
                            roles: 'Event Manager',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 3,
                            memberName: 'Marcel Loua',
                            imgCode: 'malo',
                            roles: 'Head of Sponsor Relations',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 4,
                            memberName: 'Johan Sundt Brekne',
                            imgCode: 'jobr',
                            roles: 'Sponsor Management',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 5,
                            memberName: 'Sindre Fidje Andersen',
                            imgCode: 'sian',
                            roles: 'Sponsor Management',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 6,
                            memberName: 'Julie Dalseid',
                            imgCode: 'juda',
                            roles: 'Sponsor Management',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 7,
                            memberName: 'Michelle jensen',
                            imgCode: 'filler',
                            roles: 'Graphic Design and PR',
                            linkedUrl: '',
                            
                        },
                    ],
                    mechMembers: [
                        {
                            memberId: 0,
                            memberName: 'Hermann Berg Nilssen',
                            imgCode: 'heni',
                            roles: 'Chief Mechanical Engineer',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 1,
                            memberName: 'Omar Mohamad',
                            imgCode: 'ommo',
                            roles: 'Drivetrain',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 2,
                            memberName: 'Ole Mørkved',
                            imgCode: 'olmo',
                            roles: 'Suspension',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 3,
                            memberName: 'Ruben Østli',
                            imgCode: 'ruoos',
                            roles: 'Suspension & Bodywork',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 4,
                            memberName: 'Mathias Alten',
                            imgCode: 'maal',
                            roles: 'Bodywork',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 5,
                            memberName: 'Tomas Martin Alvestad',
                            imgCode: 'toal',
                            roles: 'Chassis',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 6,
                            memberName: 'David Shapiro',
                            imgCode: 'dash',
                            roles: 'Ergonomics and Firewall',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 7,
                            memberName: 'Sondre Undheim Carlsen',
                            imgCode: 'soca',
                            roles: 'Ergonomics and Firewall',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 8,
                            memberName: 'Einar Kjeka',
                            imgCode: 'eikj',
                            roles: 'Aerodynamics',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 9,
                            memberName: 'Even Holen',
                            imgCode: 'evho',
                            roles: 'Aerodynamics',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 10,
                            memberName: 'Ruben Nordstokke',
                            imgCode: 'runo',
                            roles: 'Aerodynamics',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 11,
                            memberName: 'Karl Henrik Lermo',
                            imgCode: 'kale',
                            roles: 'Aerodynamics',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 12,
                            memberName: 'Jack Bystøl-Hill',
                            imgCode: 'jahi',
                            roles: 'Cooling',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 13,
                            memberName: 'Lise Knudsen',
                            imgCode: 'likn',
                            roles: 'Cooling',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 14,
                            memberName: 'Martin Larsen',
                            imgCode: 'mala',
                            roles: 'Pedals and Steering',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 15,
                            memberName: 'Nora Iversen',
                            imgCode: 'filler',
                            roles: 'Accumalator container',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 16,
                            memberName: 'Ole Emil Strømsnes Egelandsaa',
                            imgCode: 'oleg',
                            roles: 'Drivetrain',
                            linkedUrl: '',
                            
                        },
                    ],
                    eleMembers: [
                        {
                            memberId: 0,
                            memberName: 'Philip Shahdadfar',
                            imgCode: 'phsh',
                            roles: 'Chief Electrical Engineer',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 1,
                            memberName: 'Andreas Byskov',
                            imgCode: 'anby',
                            roles: 'Chief Technical Engineer',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 2,
                            memberName: 'Per Gundersen Lund',
                            imgCode: 'pelu',
                            roles: 'HV-Circuitry',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 3,
                            memberName: 'Daniel Maudal',
                            imgCode: 'dama',
                            roles: 'Low Voltage',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 4,
                            memberName: 'Herman Sparøy',
                            imgCode: 'hesp',
                            roles: 'MCU',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 5,
                            memberName: 'Sondre Rosvoll Solheim',
                            imgCode: 'soso',
                            roles: 'ECU',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 6,
                            memberName: 'Runar Wallenius Skaget',
                            imgCode: 'rusk',
                            roles: 'ECU',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 7,
                            memberName: 'Sander Hovet',
                            imgCode: 'saho',
                            roles: 'ECU',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 8,
                            memberName: 'Mohammed Hassan Raghe',
                            imgCode: 'mora',
                            roles: 'Dashboard',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 9,
                            memberName: 'Trym Christensen',
                            imgCode: 'trch',
                            roles: 'Dashboard',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 10,
                            memberName: 'Sindre Mauland',
                            imgCode: 'sima',
                            roles: 'Dashboard',
                            linkedUrl: '',
                            
                        }
                    ],
                    itMembers: [
                        {
                            memberId: 0,
                            memberName: 'Lars Johann Indreeide',
                            imgCode: 'lain',
                            roles: 'Head of IT',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 1,
                            memberName: 'Alexander Kruke Bjugan',
                            imgCode: 'albj',
                            roles: 'Software Developer',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 2,
                            memberName: 'Anna Sund',
                            imgCode: 'filler',
                            roles: 'Web Developer & Designer',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 3,
                            memberName: 'Tord Martin Ytredal',
                            imgCode: 'toyt',
                            roles: 'Logging, Software Developer',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 4,
                            memberName: 'Sebastian Gustavsen',
                            imgCode: 'segu',
                            roles: 'Logging, Software Developer',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 5,
                            memberName: 'Sem Reiestad',
                            imgCode: 'sere',
                            roles: 'Logging, Software Developer',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 6,
                            memberName: 'Truls Hansen Skadberg',
                            imgCode: 'filler',
                            roles: 'Mentor',
                            linkedUrl: '',
                            
                        },
                        {
                            memberId: 7,
                            memberName: 'Jan Markus Høie',
                            imgCode: 'jahoe',
                            roles: 'Mentor',
                            linkedUrl: '',
                            
                        },
                    ]
                },// Year: 2024 -status: WIP
                {
                    i: 8, 
                    year: '2024',

                    // MEMBERS
                    boardMembers: [
                        {
                            memberId: 0,
                            memberName: 'Stian Nygård',
                            imgCode: 'stny',
                            roles: 'Project Leader',
                            linkedUrl: 'https://www.linkedin.com/in/stian-nyg%C3%A5rd-0934a9256/',
                            
                        },{
                            memberId: 1,
                            memberName: 'Marie Alle',
                            imgCode: 'maal',
                            roles: 'Head of Administration',
                            linkedUrl: '',
                            
                        },{
                            memberId: 2,
                            memberName: 'Lars Johann Indreeide',
                            imgCode: 'lain',
                            roles: 'Chief Information Officer',
                            linkedUrl: '',
                            
                        },{
                            memberId: 3,
                            memberName: 'Einar Kjeka',
                            imgCode: 'eikj',
                            roles: 'Head of Production',
                            linkedUrl: '',
                            
                        },{
                            memberId: 4,
                            memberName: 'Tomas Martin Alvestad',
                            imgCode: 'toal',
                            roles: 'Chief Mechanical Engineer',
                            linkedUrl: '',
                            
                        },{
                            memberId: 5,
                            memberName: 'Sondre Rosvoll Solheim',
                            imgCode: 'borre',
                            roles: 'Cheif Electical Engineer',
                            linkedUrl: '',
                            
                        },{
                            memberId: 6,
                            memberName: 'Lise Knudsen',
                            imgCode: 'likn',
                            roles: 'Chief Financial Officer',
                            linkedUrl: '',
                            
                        },{
                            memberId: 7,
                            memberName: 'Runar Wallenius Skaget',
                            imgCode: 'filler',
                            roles: 'Chief Technical Officer',
                            linkedUrl: '',
                            
                        }
                        
                    ],
                    adminMembers: [
                        {
                            memberId: 0,
                            memberName: 'Marie Alle',
                            imgCode: 'maal',
                            roles: 'Group leader Administration',
                            linkedUrl: '',
                            
                        },{
                            memberId: 1,
                            memberName: 'Ezster Kopacz',
                            imgCode: 'ezko',
                            roles: 'Head of events',
                            linkedUrl: '',
                            
                        },{
                            memberId: 2,
                            memberName: 'Juweriya Matan',
                            imgCode: 'juma',
                            roles: 'Head of Social Media',
                            linkedUrl: '',
                            
                        },{
                            memberID: 3,
                            memberName: 'Anne Isabel Rivero Jotun',
                            imgCode: 'anjo',
                            roles: 'Graphical Design',
                            linkedUrl: '',
                        },{
                            memberId: 4,
                            memberName: 'Emma Digernes Parnas',
                            imgCode: 'empa',
                            roles: 'Sponsor Relations',
                            linkedUrl: '',
                            
                        },{
                            memberId: 5,
                            memberName: 'Kamilla Gjerstad Jørgensen',
                            imgCode: 'kajo',
                            roles: 'Sponsor Relations',
                            linkedUrl: '',
                        },
                        
                    ],
                    mechMembers: [
                        {
                            memberId: 0,
                            memberName: 'Tomas Martin Alvestad',
                            imgCode: 'toal',
                            roles: 'Cheif Mechanical Engineer',
                            linkedUrl: '',
                            
                        },{
                            memberId: 1,
                            memberName: 'Einar Kjeka',
                            imgCode: 'eikj',
                            roles: 'Head of Production',
                            linkedUrl: '',
                            
                        },{
                            memberId: 2,
                            memberName: 'Even Braut',
                            imgCode: 'evbr',
                            roles: 'Bodywork',
                            linkedUrl: '',
                            
                        },{
                            memberId: 3,
                            memberName: 'Sondre Carlsen',
                            imgCode: 'soca',
                            roles: 'Bodywork',
                            linkedUrl: '',
                            
                        },{
                            memberId: 4,
                            memberName: 'Even Holen',
                            imgCode: 'evho',
                            roles: 'Aerodynamics',
                            linkedUrl: '',
                            
                        },{
                            memberId: 5,
                            memberName: 'Karl Henrik Lermo',
                            imgCode: 'kale',
                            roles: 'Aerodynamics',
                            linkedUrl: '',
                            
                        },{
                            memberId: 6,
                            memberName: 'Ørjan Mannsverk',
                            imgCode: 'orma',
                            roles: 'Aerodynamics',
                            linkedUrl: '',
                            
                        },{
                            memberId: 7,
                            memberName: 'Astror Albert',
                            imgCode: 'asal',
                            roles: 'Steering and Brakes, Ergonomics',
                            linkedUrl: '',
                            
                        },{
                            memberId: 8,
                            memberName: 'Lasse Pihl',
                            imgCode: 'lapi',
                            roles: 'Steering and Brakes, Ergonomics',
                            linkedUrl: '',
                            
                        },{
                            memberId: 9,
                            memberName: 'Loai Shikh Mohamed',
                            imgCode: 'lomo',
                            roles: 'Ergonomics',
                            linkedUrl: '',
                            
                        },{
                            memberId: 10,
                            memberName: 'Hamza Shafiq',
                            imgCode: 'hash',
                            roles: 'Chassis',
                            linkedUrl: '',
                            
                        },{
                            memberId: 11,
                            memberName: 'Jacob Hazell',
                            imgCode: 'jaha',
                            roles: 'Electromechanical',
                            linkedUrl: '',
                            
                        },{
                            memberId: 12,
                            memberName: 'Tayeb Amedi',
                            imgCode: 'taam',
                            roles: 'Electromechanical',
                            linkedUrl: '',
                            
                        },{
                            memberId: 13,
                            memberName: 'Jorge Rosales',
                            imgCode: 'jora',
                            roles: 'Electromechanical',
                            linkedUrl: '',
                            
                        },{
                            memberId: 14,
                            memberName: 'Mubarik Omar Ali Abdi',
                            imgCode: 'muab',
                            roles: 'Drivetrain',
                            linkedUrl: '',
                            
                        },{
                            memberId: 15,
                            memberName: 'Ole Emil Strømsnes Egelandsaa',
                            imgCode: 'oleg',
                            roles: 'Drivetrain',
                            linkedUrl: '',
                            
                        },{
                            memberId: 16,
                            memberName: 'Steven Høiland',
                            imgCode: 'stho',
                            roles: 'Suspension',
                            linkedUrl: '',
                            
                        },
                        
                    ],
                    eleMembers: [
                        {
                            memberId: 0,
                            memberName: 'Sondre Rosvoll Solheim',
                            imgCode: 'borre',
                            roles: 'Chief Electrical Engineer',
                            linkedUrl: '', 
                        },{
                            memberId: 1,
                            memberName: 'Runar Wallenius Skaget',
                            imgCode: 'filler',
                            roles: 'Chief Technical Officer',
                            linkedUrl: '', 
                        },{
                            memberId: 0,
                            memberName: 'Aditya Borah',
                            imgCode: 'adbo',
                            roles: 'ECU Sensors',
                            linkedUrl: '', 
                        },{
                            memberId: 0,
                            memberName: 'Tom Mantel',
                            imgCode: 'toma',
                            roles: 'ECU Sensors',
                            linkedUrl: '', 
                        },{
                            memberId: 0,
                            memberName: 'Alister Suttie',
                            imgCode: 'alsu',
                            roles: 'Low voltage',
                            linkedUrl: '', 
                        },{
                            memberId: 0,
                            memberName: 'Tormod Engen',
                            imgCode: 'toen',
                            roles: 'Low Voltage',
                            linkedUrl: '', 
                        },{
                            memberId: 0,
                            memberName: 'Tomas Øverby',
                            imgCode: 'toov',
                            roles: 'Low Voltage',
                            linkedUrl: '', 
                        },{
                            memberId: 0,
                            memberName: 'Athavan Tharmaratnam',
                            imgCode: 'atth',
                            roles: 'Embedded',
                            linkedUrl: '', 
                        },{
                            memberId: 0,
                            memberName: 'Frida Wagner',
                            imgCode: 'frwa',
                            roles: 'Embedded',
                            linkedUrl: '', 
                        },{
                            memberId: 0,
                            memberName: 'Joakim Olerud Jensen',
                            imgCode: 'joje',
                            roles: 'Embedded',
                            linkedUrl: '', 
                        },{
                            memberId: 0,
                            memberName: 'Herman Sparøy',
                            imgCode: 'hesp',
                            roles: 'Embedded',
                            linkedUrl: '', 
                        },{
                            memberId: 0,
                            memberName: 'Mohammed Hassan Raghe',
                            imgCode: 'mora',
                            roles: 'Embedded',
                            linkedUrl: '', 
                        },{
                            memberId: 0,
                            memberName: 'Sander Tyvand Hovet',
                            imgCode: 'redhead',
                            roles: 'ECU control',
                            linkedUrl: '', 
                        },{
                            memberId: 0,
                            memberName: 'Markus Brekka',
                            imgCode: 'mabr',
                            roles: 'ECU',
                            linkedUrl: '', 
                        },{
                            memberId: 0,
                            memberName: 'Uliana Kulebyakina',
                            imgCode: 'ulku',
                            roles: 'ECU',
                            linkedUrl: '', 
                        },{
                            memberId: 0,
                            memberName: 'Vegard Steen',
                            imgCode: 'vest',
                            roles: 'MCU',
                            linkedUrl: '', 
                        },
                        
                    ],
                    itMembers: [
                        {
                            memberId: 0,
                            memberName: 'Lars Johann Indreeide',
                            imgCode: 'lain',
                            roles: 'Head of IT',
                            linkedUrl: '',
                            
                        },{
                            memberId: 0,
                            memberName: 'Alexander Kruke Bjugan',
                            imgCode: 'albj',
                            roles: 'AI Engineer',
                            linkedUrl: '', 
                        },{
                            memberId: 0,
                            memberName: 'Martin Sævareid Lauritsen',
                            imgCode: 'mala',
                            roles: 'AI Engineer',
                            linkedUrl: '', 
                        },{
                            memberId: 0,
                            memberName: 'Anna Sund',
                            imgCode: 'filler',
                            roles: 'Web developer & Design',
                            linkedUrl: '', 
                        },{
                            memberId: 0,
                            memberName: 'Lukas Fernandes Berntsen',
                            imgCode: 'filler',
                            roles: 'AI Engineer',
                            linkedUrl: '', 
                        },
                        
                    ]
                }
            ],


            // TEAM CATEGORY (Read comments below)
            // categoryId info:
                // 0 = View All
                // 1 = Board, 
                // 2 = Administration, 
                // 3 = Mechanical, 
                // 4 = Electronics, 
                // 5 = IT
            teamCategory: [
                // VIEW ALL
                {
                    categoryId: 0,
                    categoryTitle: 'All',
                    sectionTitle: '...',
                    isSelected: true
                },
                // Board
                {
                    categoryId: 1,
                    categoryTitle: 'Board',
                    sectionTitle: 'The Board',
                    isSelected: true
                },
                // Admin
                {
                    categoryId: 2,
                    categoryTitle: 'Administration',
                    sectionTitle: 'Administration',
                    isSelected: true                     
                },
                // Mech
                {
                    categoryId: 3,
                    categoryTitle: 'Mechanical',
                    sectionTitle: 'Mechanical',
                    isSelected: true                    
                },
                // Electro
                {
                    categoryId: 4,
                    categoryTitle: 'Electronics',
                    sectionTitle: 'Electronics',
                    isSelected: true                      
                },
                // IT
                {
                    categoryId: 5,
                    categoryTitle: 'IT',
                    sectionTitle: 'IT',
                    isSelected: true
                },
            ]
        };
    },
    methods: {
        setCurrentYear (){
            let currentYear = new Date().getFullYear();
            return currentYear.toString();
        },
        toggle (setting) {
            if(setting === 'year'){
                if(this.yearDropDownActive === false){
                    this.yearDropDownActive = true;
                }else{
                    this.yearDropDownActive = false;
                };
                this.categoryDropDownActive = false;
            };

            if(setting === 'category'){
                if(this.categoryDropDownActive === false){
                    this.categoryDropDownActive = true;
                }else{
                    this.categoryDropDownActive = false;
                };
                this.yearDropDownActive = false;
            };
        },
        setHover(){
            const elements = document.querySelectorAll('.membercard');

            if(this.hoverEffect === false){
                this.hoverEffect = true;
                elements.forEach(element => {
                    element.classList.add('hover_effect');
                    });

                window.addEventListener('scroll', function () {
                    elements.forEach(element => {
                    element.classList.remove('hover_effect');
                    });
                });
                this.hoverEffect = false;
            }else{
                return;
            };
        },

        setView(i){
            this.selectedCategory = i;

            if(this.teamCategory[i].categoryId === 0){ // if all is chosen...
                this.viewAll = true;
                for (let index = 0; index < this.teamCategory.length; index++) {
                    this.teamCategory[index].isSelected = true;
                };
            }else{  // If all is not chosen...
                this.viewAll = false;
                for (let index = 0; index < this.teamCategory.length; index++) {
                    if(this.teamCategory[i].categoryId  === index){
                        this.teamCategory[index].isSelected = true;
                    }
                    else{
                        this.teamCategory[index].isSelected = false;
                    };
                };
            };

            this.categoryDropDownActive = false;
        },
        checkYear(year){
            if(year === this.selectedYear){
                return true;
            }else{
                return false;
            }
        },

        getYear(){
            if(this.yearStr !== ''){
                return this.yearStr;
            }else{
                this.yearStr = this.setCurrentYear();
                return this.yearStr;
            }
        },

        registerYear (yearId) {
            this.selectedYear = yearId;
            this.yearStr = this.teamYearOpt[yearId].year;

            // Set hero image
            this.teamPhotoUrl = '/img/teams/team_photos/team_' + this.teamYearOpt[yearId].year + '.webp';

            this.yearDropDownActive = false;
        },
        setYear(){
            // default: takes data from the last added year (should be current year)
            if(this.selectedYear === -1){
                this.year = this.optReversed[0].year; 
                this.isSelectedYear(this.year);
                this.selectedYear = this.optReversed[0].i; 
                this.teamPhotoUrl = '/img/teams/team_photos/team_' + this.teamYearOpt[this.selectedYear].year + '.webp';
            }else{
                this.year = this.teamYearOpt[this.selectedYear].year; 
            }
            return this.year;
        },
        setCategory(){
            // default: takes data from the last added year (should be current year)
            if(this.selectedCategory === 0){
                this.categoryTitle = this.teamCategory[0].categoryTitle; 
                this.isSelectedCategory(this.categoryTitle);
            }else{
                this.categoryTitle = this.teamCategory[this.selectedCategory].categoryTitle; 
            }
            return this.categoryTitle;
        },
    },
    computed: {
        optReversed() {
          return this.teamYearOpt.slice().reverse();
        },
        isSelectedYear() {
            return (index) => this.selectedYear === index;
        },
        isSelectedCategory() {
            return (index) => this.selectedCategory === index;
        },
      },
}).mount('#teamApp');
