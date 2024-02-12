var PROJECTS= [
    {
        img: "../iamge/provel.png",
        title: "مشروع1",
        description:"نبذة عن مشروع1"
    },
    {
        img: "../iamge/provel2.png",
        title: "مشروع2",
        description:"نبذة عن مشروع 2"
    },
    {
        img: "../iamge/provel3.png",
        title: "مشروع3",
        description:"نبذة عن مشروع 3"
    },
];

    var projectsDiv= document.getElementById("projects");
    for(let i=0; i < PROJECTS.length; i++){
        var currentProject =  PROJECTS[i];
        //div
        var projectDiv = document.createElement("div");
        var divStyle= document.createAttribute("style");
        divStyle.value="display:inline-block; width:250px; margin:10px;";
        projectDiv.setAttributeNode(divStyle);
        // h3
        var title= document.createElement("h3");
        var titleNode=document.createTextNode(currentProject.title);
        title.appendChild(titleNode);
        //img
        var image= document.createElement("img");
        var source= document.createAttribute("src");
        source.value= "./images/" + currentProject.img;
        image.setAttributeNode(source);
        var imgStyle= document.createAttribute("style");
        imgStyle.value= "width:300px; height:200px;";
        image.setAttributeNode(imgStyle);
        //p
        var p = document.createElement("p");
        var pNode=document.createTextNode(currentProject.description);
        
        p.appendChild(pNode);
        projectDiv.appendChild(title);
        projectDiv.appendChild(image);
        projectDiv.appendChild(p);

        projectsDiv.appendChild(projectDiv);
    }