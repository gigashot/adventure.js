function securityBypassMinigame() {
    let secretNumber = Math.floor(Math.random() * 10) + 1; // Generate a random number between 1 and 10
    console.log("[Redacted] Security system activated. Guess the secret number to bypass the security.");

    let attempts = 5;

    while (attempts > 0) {
        let userInput = prompt("Guess the secret number (between 1 and 10). You have " + attempts + " attempts remaining:");

        if (parseInt(userInput) === secretNumber) {
            console.log("[Redacted] Security bypassed successfully.");
            alert("Security system bypassed. Infiltration successful!");
            return true;
        } else {
            attempts--;
            if (attempts > 0) {
                if (parseInt(userInput) < secretNumber) {
                    alert("Too low. Try again.");
                } else {
                    alert("Too high. Try again.");
                }
            }
        }
    }

    console.log("[MavelonCorp] Security breach detected. Alarm triggered.");
    alert("Security breach detected. Alarm triggered. Mission failed.");
    return false;
}

function startMission() {
    let ans1 = alert("╧╬½╫╖º╜Σδ÷ñ ?");
    console.log("[inner voice] Hmmm that's weird... Never seen that before");

    let response = prompt("[Redacted] Don't panic! Let me explain... Our people have uncovered disturbing plans of MavelonCorp, a formidable entity aiming to control the economy and to enforce '10-minute cities' and implement a dehumanizing social credit system. We seek your aid to stop MavelonCorp from within. Will you accept this mission before it's too late? (Yes/No)");

    if (response.toLowerCase() === "yes") {
        let username = prompt("[Redacted] What shall we call you?");
        console.log("[Redacted] Welcome, " + username + ". You have accepted to stand against MavelonCorp's tyranny.");
        alert("You are now a vital asset to [Redacted]. Your first task is to abuse your position in MavelonCorp and deploy a deadly malware to take it down");

        let contactResponse = prompt("You have the option to betray [Redacted] by alerting MavelonCorp of [Redacted]'s intentions to stop the infiltration. Will you betray [Redacted]? (Yes/No)");

        if (contactResponse.toLowerCase() === "yes") {
            console.log("[MavelonCorp] We have received your message, " + username + ". Your loyalty to MavelonCorp is noted. You shall await your next promotion soon...");
            return;
        } else {
            console.log("[Redacted] Proceed with caution, " + username + ". Betrayal could be costly.");
            alert("You've chosen not to betray [Redacted]. Your mission continues in secrecy.");

            let infiltrationSuccess = securityBypassMinigame();

            if (infiltrationSuccess) {
                alert("You have successfully infiltrated MavelonCorp's headquarters.");
                let action = prompt("Where do you upload the malware? (1) Upload malware to the center PC (2) Upload malware to the server directly?");

                if (action === "1") {
                    console.log("[Redacted] Well done, " + username + ". You've successfully uploaded malware to the center PC.");
                    alert("Your malware was automatically rejected; everybody knows that the Boss doesn't actually work, and just makes his subordinates do the work for him");
                    alert("SYSTEM EMERGENCY STOP security on route");
                    console.log("Security has detained you and put you into a cell for eternity. You will work for the rest of your life on fixing people's projects on github.com");
                } else {
                    console.log("[Redacted] Wise choice, " + username + ". You've almost uploaded malware to the server.");
                    console.log("All you have to do is to push the malware to the company's GitHub");
                    minigame(username);
                }
            } else {
                alert("MavelonCorp's security has foiled your plans. Mission failed!");
                console.log("[MavelonCorp] We have intercepted your infiltration attempt, " + username + ". Your efforts are futile.");
            }
        }
    } else {
        console.log("[Redacted] Your refusal is noted. The battle against MavelonCorp will persist without your aid.");
        alert("You've declined the mission. The repercussions of this decision may be severe.");
    }
}

function minigame(username) {
    let attempts = 3;

    alert("You have 3 attempts to push the malware to GitHub");

    while (attempts > 0) {
        let userInput = prompt("Attempt #" + (4 - attempts) + ": push the malware to GitHub (branch master!):");

        if (userInput.toLowerCase() === 'git push origin master') {
            alert("Malware successfully pushed to GitHub! You've bypassed MavelonCorp's security.");
            alert("Congratulations, you have stopped an evil corporation!");
            alert("However, MavelonCorp has detected the malware and initiated a counterattack.");
            alert("Security is on its way to your location!");

            let escapeChoice = prompt("Quick! You need to escape! Which route do you choose? (1) Ventilation shaft (2) Fire exit (3) Elevator shaft");

            switch (escapeChoice) {
                case '1':
                    console.log("[Redacted] Great thinking, " + username + "! You've successfully escaped through the ventilation shaft.");
                    alert("You've successfully evaded MavelonCorp's security and made it out safely!");
                    console.log("It's only a matter of time till MavelonCorp falls apart, good job")
                    break;
                case '2':
                    console.log("[MavelonCorp] You chose the fire exit, " + username + ", but it was a trap! You're surrounded!");
                    alert("You've successfully evaded MavelonCorp's security and made it out safely!");
                    console.log("It's only a matter of time till MavelonCorp falls apart, good job")
                    break;
                case '3':
                    console.log("[MavelonCorp] Bad choice, " + username + ". The elevator shaft was under surveillance. You're captured!");
                    alert("The elevator shaft was a trap! Security has captured you. Mission failed.");
                    console.log("MavelonCorp hasn't been stopped, the future is uncertain")
                    break;
                default:
                    console.log("[Redacted] " + username + ", you froze in the moment and couldn't decide. You're captured!");
                    alert("You froze in the moment! Security has captured you. Mission failed.");
                    console.log("MavelonCorp hasn't been stopped, the future is uncertain")
                    break;
            }

            return;
        } else {
            attempts--;
            if (attempts > 0) {
                alert("Incorrect command. Try again. Remaining attempts: " + attempts);
            }
        }
    }

    console.log("[MavelonCorp] We have detected your suspicious activity, " + username + ". Security is on its way. You're apprehended.");
    alert("Security has detained you. Your mission has failed.");
}

startMission();
