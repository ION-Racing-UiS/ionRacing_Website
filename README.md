# Official Website for Ion Racing (2023 - present)
(Will be back to continue working on the site after september)

> [!WARNING]
> CRITICAL: The actual links to the application forms for student & partner are currently missing (bc the google forms are not yet finished 23.08.23)


### Fetures & pages that are planned, but not currently present:
- [ ] Some simple animations for better experience and flow (almost none atm --> work in progress)
- [ ] "Stay Updated" --> section at bottom of home page, containing Ion's latest social media posts (Facebook & Instagram)
- [ ] Garage Page
    -  Plan: Get everybody involved, have a garage we all can be proud of. Would be very nice to get inputs and giving everybody a say in this, vote for desins, come with ideas etc.

### ! Possiblie oopsies... (will check out) !
- Not sure if the website works perfectly on all browsers. Possibly a problem with nav on safari (mobile).
- Emails, added a small layer of protection (by encoding the email in the html instead of using plain text), however this is a first step. Will wait and see if further protection layers are needed.


## Quick Description of how/what/where to Place Data Inside the Js Files (Mainly used Vue framework)
### Adding positions-data on Join Us --> Positions:
TIPS: ctrl + F (windows) *** OR *** command + F (mac)  --> To quickly find the relevant variables, objects etc.

1. In "scripts/join.js" you have:
    ```
        data() {
            ...stuff..
        }
    ```
2. Find the lists (each field has it's positions-list) with objects (each object is a position). You will find this under the comment: "// POSITIONS DATA", e.g:
    ```
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
        ]
    ```
    > [!IMPORTANT]
    > Do NOT touch the " positionImgCode: " variable UNLESS you have an image to swap it with. Each field has a "filler-image" e.g. mechFiller above, so all positions have a default image to rely on. If you want to change the position image --> change the tekst inside the: positionImgCode: 'filename' (THE IMAGE HAS TO BE A .jpg FILE !!!) e.g.  positionImgCode: 'filename' NOT positionImgCode: 'mechFiller.jpg' ... (.jpg gets added automatically)

    > [!IMPORTANT]
    > Keep an eye on the "id:" variable, as each position-object MUST HAVE A UNIQUE ONE (only integers)

3. Add position, you can copy-paste the code below:
    ``` 
        {
            id: SomeInt,                                   
            positionTitle: 'Title',             
            positionImgCode: 'mechFiller OR eleFiller OR itFiller OR adminFiller',
            positionDescription: 'Description',
            isAvailable: true,

            tasks: [
                {
                    taskId: SomeInt,
                    taskDescription: 'Task'
                },
            ]
        },
    ```
    > [!NOTE]
    > Choose the relevant one from --> positionImgCode: mechFiller OR eleFiller OR itFiller OR adminFiller (default). You may also insert your own instead (customized). 

    > [!NOTE]
    > Add task by copying the " {...data...}, " -object inside "tasks: []". 
    
    > [!WARNING]
    > REMEMBER to check the id and taskId, as each task should have its unique id and each position has its own. Just look at the previous position-object and add 1 (increment).

    > [!IMPORTANT]
    > Remember to change the "isAvailable: true/false" boolean variable, depending on the availability of the position (true = available, false = unavailable).

    E.g:
    ```
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
            // ADDING A SECOND POSITION, giving it id of 0+1 = 1:
            {
                id: 1,
                positionTitle: 'MechTitle2',
                positionImgCode: 'mechFiller',
                positionDescription: 'Description',
                isAvailable: true,

                tasks: [
                    {
                        taskId: 0,
                        taskDescription: 'Task'
                    },
                    {
                        taskId: 1,
                        taskDescription: 'Task2'
                    },
                    {
                        taskId: 2,
                        taskDescription: 'Task3'
                    },
                ]
            },
        ],
    ```

