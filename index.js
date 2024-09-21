*{
    padding: 0;
    margin: 0;
    font-family: "Jersey 20", sans-serif;
}

html {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
}

body {
    background-color: darkslateblue;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    width: 100%;
    align-items: center;
}

header{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    font-size: 5rem;
    margin-top: 13vh;
}

.gameName {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

.creator {
    width: 50vw;
    display: flex;
    justify-content: end;
    align-items: center;
    font-size: 2rem;
    color: white;
}

.hr {
    width: 100%;
}

.container {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    width: 100%;
    align-items: center;
    padding-bottom: 7vh;
}

h1{
    font-optical-sizing: auto;
    font-size: 54px;
    font-weight: 400;
    padding-bottom: 9vh;
    padding-top: 9vh;
    color: white;
}

.squaresContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    width: 22.2rem; 
}

.square {
    border: solid 0.3rem;
    border-radius: 1.5rem;
    width: 9rem;
    height: 9rem;
}

.square span {
    visibility: hidden;
}

.square:hover {
    opacity: 0.8;
    border-color: whitesmoke;
    cursor:pointer;
    transition: all 0.1s;
}

.squareClicked {
    opacity: 1 !important;
    box-shadow: 2px 1px 6px 0.1px whitesmoke;
    background-color: white !important;
}

.squareShowing {
    opacity: 1;
    border-color: whitesmoke;
    box-shadow: 2px 1px 6px 0.1px whitesmoke;
}

.greenSquare {
    background-color: green;
}

.redSquare {
    background-color: red;
}

.yellowSquare {
    background-color: yellow;
}

.blueSquare {
    background-color: blue;
}

.keyboardControl {
    font-size: 2rem;
    font-weight: 600;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    position: absolute;
    left: 75vw;
    top: 42vh;
    width: 9.5rem;
    border: solid 0.2rem;
    border-radius: 1rem;
    padding: 1rem;
}

h2 {
    font-size: 2rem;
    color: white;
    padding-bottom: 1rem;
    text-align: center;
}

.key_cont {
    margin: 0.4rem;
    background-color: red;
    border: solid 0.1rem;
    border-radius: 2rem;
    width: 3.2rem;
    display: flex;
    justify-content: center;
}

#i {
    background-color: green;
}

#o {
    background-color: red;
}

#k {
    background-color: yellow;
}

#l {
    background-color: blue;
}

.levelAndHighScore {
    display: flex;
    font-size: 3.0rem;
    margin-top: 7vh;
}

.currentLevelDiv {
    padding-right: 7rem;
}

.redWarning {
    color: red;
}

@media (max-width: 850px) {

    header{
        font-size: 5rem;
        margin-top: 0vh;
    }

    body {
        transform: scale(0.78);
    }
    
    .creator {
        width: 100vw;
        font-size: 2rem;
    }
    
    h1 {
        transform: scale(0.88);
        margin-top: 3vh;
        margin-bottom: 00vh;
        padding-top: 0vh;
        padding-bottom: 0vh;
        width: 100%;
        height: 25vh;
        font-size: 45px;
        
    }

    .squaresContainer {
        margin-top: 0vh;
        gap: 3rem;
        width: 22.2rem; 
    }

    .keyboardControl {
        display: none;
    }

    .levelAndHighScore {
        transform: scale(0.80);
        bottom: 80vh;
        font-size: 3.0rem;
    }

    .currentLevelDiv {
        width: 9.8rem; 
        padding-right: 2.00rem;
    }

    .highestScoreDiv {
        width: 19.8rem; 
    }

}

