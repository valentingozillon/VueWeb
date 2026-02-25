<template> 
    <h1 style="font-family: Arial, Helvetica, sans-serif;">À propos</h1>
    <div class="content">
        <h2 class="title">Présentation courte</h2>
        <img src="../assets/valentin.jpg" class="pics"/>
        <h3>
            Je suis Valentin Gozillon, développeur full stack diplômé d’Epitech (Bac +5), avec une spécialisation en Data Analyst à TU Dublin. 
            <br/> Formé à intervenir sur l’ensemble du cycle de développement d’un projet, je suis capable de travailler de l’analyse du besoin à la conception technique, jusqu’au développement, aux tests et à la mise en production.
            <br/> Au cours de mes études et de mes expériences professionnelles, j’ai évolué dans des environnements variés, allant de la startup à la grande ESN. Ces expériences m’ont permis de développer ma capacité d’adaptation, mon autonomie ainsi que mon sens du travail en équipe.
            <br/>Je travaille principalement avec les technologies suivantes : C#, .NET, Node.js, React, Angular, React Native, HTML, CSS, JavaScript, MySQL et SQL Server.
            <br/> Je suis actuellement à la recherche d’un CDI en tant que développeur, sans préférence technologique particulière, avec l’envie de contribuer à des projets ambitieux et de continuer à progresser techniquement.
        </h3>
        <h2>Parcours académique</h2>
        <div class="school">
            <img src="../assets/tudub.jpg"/>
            <img src="../assets/epitech.png"/>
        </div>
        <h3>
            Epitech – Programme Grande École (Bac +5)
            <br/>Formation orientée projet mettant l’accent sur l’autonomie, la résolution de problèmes et la maîtrise des architectures logicielles.
            <br/>
            <br/>TU Dublin – Spécialisation Data Analyst
            <br/>Approfondissement en analyse de données, traitement, structuration et exploitation des données pour l’aide à la décision.
        </h3>
        <h2>Expériences professionnelles</h2>
        <div class="school">
            <img src="../assets/enginest.jpg"/>
            <img src="../assets/five.png"/>
            <img src="../assets/sogeti.jpg"/>
        </div>
        <h3>
            Enginest – Startup d’applications (Stage de 6 mois)
            <br/> Participation au développement de l’application POEM en tant que développeur full stack.
            <br/> Technologies utilisées : C#, .NET, MySQL.
            <br/>
            <br/>Five Nordon – Entreprise industrielle (Stage de 6 mois)
            <br/>Développement d’outils internes destinés à optimiser la récupération de données via un poste à souder connecté, ainsi que création d’un site permettant de centraliser les informations des salariés.
            <br/>Technologies utilisées : C#, .NET, React, MySQL, SQL Server.
            <br/>
            <br/>Sogeti – ESN nationale (Stage de 6 mois)
            <br/>Consultant développeur intervenant sur des projets liés à des sites de paris sportifs.
            <br/>Technologies utilisées : Power Platform, JavaScript, C#, .NET.
        </h3>
        <h2>Parlons de moi</h2>
        <img src="../assets/valentin.jpg" class="pics" style="rotate: calc(180deg);"/>
        <h3>
            J’ai 24 ans et je suis quelqu’un de curieux et rigoureux au quotidien. J’aime comprendre en profondeur les sujets sur lesquels je travaille et chercher à m’améliorer en continu.
            <br/>
            <br/>Je suis passionné de sport. Après avoir pratiqué le football pendant plusieurs années, j’ai dû arrêter avec mes études, mais je vais aujourd’hui à la salle de sport trois à quatre fois par semaine. Je pratique également la plongée sous-marine depuis mes 15 ans.
            <br/>
            <br/>J’apprécie aussi les moments plus détendus, comme jouer aux jeux vidéo ou aux jeux de société avec mes amis.
            <br/>
            <br/>Enfin, je m’intéresse beaucoup aux nouvelles technologies et aux nouveaux langages dans le monde de la tech. J’aime découvrir, tester et rester à jour sur les évolutions du secteur.
        </h3>
    </div>
</template>

<script>
export default {
    name: 'AboutPage'
}
</script>

<style scoped>
h1, h2 {
    color: white;
    text-align: center;
}

h3 {
    padding-top: 50px;
    padding-bottom: 50px;
    padding-left: 15%;
    padding-right: 15%;
    color: white;
    margin-bottom: 25px;
}

.content {
    font-family: Arial, Helvetica, sans-serif;
    border-radius: 25px;
    margin-left: 5%;
    width: 90%;
    background-color: #4A919E;
}

.title {
    padding-top: 50px;
}

.pics {
    margin-top: 10px;
    margin-left: 40%;
    width: 20%;
}

.school {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
}

.school img {
  width: 200px;
  max-width: 20%;
}

</style>
