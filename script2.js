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
            console.log()
            return
        } else {
            console.log("[Redacted] Proceed with caution, " + username + ". Betrayal could be costly.");
            alert("You've chosen not to betray [Redacted]. Your mission continues in secrecy.");

            
            let infiltrationSuccess = Math.random() < 0.999;

            if (infiltrationSuccess) {
                alert("You have successfully infiltrated MavelonCorp's headquarters.");
                let action = prompt("You have obtained crucial information. Do you prefer to (1) Upload malware to the center PC or (2) Upload malware to the server directly?");
                if (action === "1") {
                    console.log("[Redacted] Well done, " + username + ". You've successfully uploaded malware to the center PC.");
                    alert("Your malware was automaticaly rejected, everybody knows that the Boss doesnt actually work, and just makes his subordinates do the work for him");
                    alert("SYSTEM EMERGENCY STOP security on route");
                    console.log("Security has detained you and put you into a cell for eternity, you will work for the rest of your life on fixing peoples projects on github.com")  
                } else {
                    console.log("[Redacted] Wise choice, " + username + ". You've almost uploaded malware to the server.");
                    console.log("all you have to do it to push the malware to the company's github");
                    //minihra
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

    alert("You have 3 attempts to push the malware to GitHub, branch master.");

    while (attempts > 0) {
        let userInput = prompt("Attempt #" + (4 - attempts) + ": push the malware to GitHub, to branch master!:");

        if (userInput.toLowerCase() === 'git push origin master') {
            alert("Malware successfully pushed to GitHub! You've bypassed MavelonCorp's security.");
            alert("Congratulation you have stopped an evil corportion! ");
            alert("you have also lost your job... so goodluck finding a new one");
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