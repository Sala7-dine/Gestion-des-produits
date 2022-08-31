
let AjouteClass = document.getElementById("AjouteClass");
let ModifierClass = document.getElementById('ModifierClass');

let reference = document.getElementById('reference');
let designation = document.getElementById('designation');
let prix = document.getElementById('prix');
let tva = document.getElementById('tva');
let dispo = document.getElementById('dispo');
let cnt = document.getElementById('cnt');

let nreference = document.getElementById('nreference');
let ndesignation = document.getElementById('ndesignation');
let nprix = document.getElementById('nprix');
let ntva = document.getElementById('ntva');
let ndispo = document.getElementById('ndispo');

let head = document.getElementById('head');

let myChart = document.getElementById("myChart");
let chart = document.getElementById("chart");

let AjouteBtn = document.getElementById("AjouteBtn");
let ModifiereBtn = document.getElementById("ModifiereBtn");

let tbody = document.getElementById('tbody');
let light = document.getElementById('light');
let darkmode = document.getElementById('darkmode');

let right = document.getElementById("right");
let table = document.getElementById('table');
let leftClass = document.getElementById('leftClass');

let clsth1 = document.getElementById('clsth1');
let clsth2 = document.getElementById('clsth2');
let clsth3 = document.getElementById('clsth3');
let clsth4 = document.getElementById('clsth4');
let clsth5 = document.getElementById('clsth5');
let clsth6 = document.getElementById('clsth6');
let clsth7 = document.getElementById('clsth7');

let span = document.getElementById('span');

let dashstyle = document.getElementById('dashstyle');
let toutproduit = document.getElementById('toutproduit');
let ajouteprod = document.getElementById('ajouteprod');
let suprimerto = document.getElementById('suprimerto');
let TrierProds = document.getElementById('TrierProds');
let h1 = document.getElementById('h1');
let h2 = document.getElementById('h2');

let temp = "";

let AffichageTbale = document.getElementById("AffichageTbale");

let rechercher = document.getElementById("rechercher");

if(localStorage.produit != null)
{
    ListProduit = JSON.parse(localStorage.produit);
}else 
{
    ListProduit = [];
}

function LireProduit()
{
    head.classList.remove('hide');
    rechercher.classList.remove('hide');
    AffichageTbale.classList.remove('hide');
    AjouteClass.classList.add("hide");
    AjouteClass.classList.remove("ajoute");
    chart.classList.add('hide');
    ModifierClass.classList.add('hide')
    ModifierClass.classList.remove('ajoute')
    
    if(ListProduit.length > 0)
    {
        let table = "";
        for(let i=0 ; i<ListProduit.length ; i++)
        {
            table += `
            <tr>
                <td>${ListProduit[i].ref}</td>
                <td>${ListProduit[i].des}</td>
                <td>${ListProduit[i].prx}</td>
                <td>${ListProduit[i].tv}</td>
                <td>${ListProduit[i].dis}</td>
                <td><i onclick="ModifierProduit(${i})" style="font-size:24px" class="fa">&#xf044;</i></td>
                <td><i onclick='SupprimerProduit(${i})' style="font-size:20px" class="fa">&#xf1f8;</i></td>
            </tr>
            `;
           
        }
        document.getElementById('tbody').innerHTML = table;
    }else
    {
        rechercher.classList.add('hide');
        AffichageTbale.classList.add('hide');

        alert('Aucun Produit a afficher');
    }
   
}

function AfficherAjoute()
{
    head.classList.add('hide');
    chart.classList.add('hide');
    rechercher.classList.add("hide");
    AffichageTbale.classList.add('hide');
    AjouteClass.classList.remove("hide");
    AjouteClass.classList.add("ajoute");
    ModifierClass.classList.add('hide');
    ModifierClass.classList.remove('ajoute');
}

function AjouteProduit()
{
    let j = 1;
    prod = {};
    prod.ref = reference.value;
    prod.des = designation.value;
    prod.prx = prix.value;
    prod.tv = tva.value;
    prod.dis = dispo.value;
    prod.comp = cnt.value;
    if(cnt.value > 1)
    {
        for(let i=0 ; i<cnt.value; i++)
        {
            ListProduit.push(prod);
        }
    }else
    {
        ListProduit.push(prod);
    }
    localStorage.setItem('produit',JSON.stringify(ListProduit));
    EffacerDonnee();

}

function EffacerDonnee()
{
    reference.value = "";
    designation.value = "";
    prix.value = ""; 
    tva.value = "";
    dispo.value = "";
    cnt.value = "";
    alert("Le Produit a bien été ajouté");
}

function ModifierProduit(id)
{
    temp = id;
    head.classList.add('hide');
    chart.classList.add('hide');
    rechercher.classList.add("hide");
    AffichageTbale.classList.add('hide');
    AjouteClass.classList.add("hide");
    AjouteClass.classList.remove("ajoute");
    ModifierClass.classList.remove('hide');
    ModifierClass.classList.add('ajoute');

    nreference.value = ListProduit[id].ref;
    ndesignation.value = ListProduit[id].des;
    nprix.value = ListProduit[id].prx;
    ntva.value = ListProduit[id].tv;
    ndispo.value = ListProduit[id].dis;

}

function ModifierBtn()
{
    ListProduit[temp].ref = nreference.value;
    ListProduit[temp].des = ndesignation.value;
    ListProduit[temp].prx = nprix.value;
    ListProduit[temp].tv = ntva.value;
    ListProduit[temp].dis = ndispo.value;

    localStorage.produit = JSON.stringify(ListProduit);

    alert('Le Produit a bien été Modifier');
    LireProduit();
}


function SupprimerTout()
{
    localStorage.removeItem("produit");
    ListProduit.slice(0);
    location.reload();
    alert('tout les produit a bien été supprimer.');
}

function Rechercher()
{
    let table2 = "";
    for(let i=0 ; i<ListProduit.length ; i++)
    {
        if(ListProduit[i].des.toLowerCase().includes(rechercher.value))
        {
            table2 += `
            <tr>
                <td>${ListProduit[i].ref}</td>
                <td>${ListProduit[i].des}</td>
                <td>${ListProduit[i].prx}</td>
                <td>${ListProduit[i].tv}</td>
                <td>${ListProduit[i].dis}</td>
                <td><i style="font-size:24px" class="fa">&#xf044;</i></td>
                <td><i onclick='SupprimerProduit(${i})' style="font-size:20px" class="fa">&#xf1f8;</i></td>
            </tr>
            `;
        }
    }
    document.getElementById('tbody').innerHTML = table2;
}

function SupprimerProduit(i)
{
    ListProduit.splice(i,1);
    localStorage.produit = JSON.stringify(ListProduit);
    LireProduit();
}

function Trier()
{
    ListProduit.sort(function(a,b){return a.prx - b.prx});
    alert("les produit trier par prix.");
    LireProduit() 
}

function Dashboard()
{   
    head.classList.remove('hide');
    chart.classList.remove('hide');
    rechercher.classList.add("hide");
    AffichageTbale.classList.add('hide');
    AjouteClass.classList.add("hide");
    AjouteClass.classList.remove("ajoute");
    ModifierClass.classList.add("hide");
    ModifierClass.classList.remove("ajoute");

    let i1 = 0;
    let i2 = 0;
    let i3 = 0;
    let i4 = 0;
    let i5 = 0;

    let xValues = ["0-500", "500-1000", "1000-5000", "5000-10000", "+10000"];

    for(let i=0 ; i<ListProduit.length ; i++)
    {
        if(ListProduit[i].prx > 0 && ListProduit[i].prx <= 500)
        {
            i1++;
        }
        if(ListProduit[i].prx > 500 && ListProduit[i].prx <= 1000)
        {
            i2++;
        }
        if(ListProduit[i].prx > 1000 && ListProduit[i].prx <= 5000)
        {
            i3++;
        }
        if(ListProduit[i].prx > 5000 && ListProduit[i].prx <= 10000)
        {
            i4++;
        }
        if(ListProduit[i].prx > 10000)
        {
            i5++;
        }
    }

    let yValues = [i1, i2, i3, i4, i5];

    let barColors = [
        "#b91d47",
        "#00aba9",
        "#2b5797",
        "#e8c3b9",
        "#1e7145"
      ];

      new Chart("myChart", {
        type: "pie",
        data: {
          labels: xValues,
          datasets: [{
            backgroundColor: barColors,
            data: yValues
          }]
        },
        options: {
          title: {
            display: true,
            text: "Prix des Produit"
          }
        }
    });
}

let mode = 'left';

function DarkMode()
{
    var css = 'table tr:hover{background-color:#fff;color:white}'
    if(mode == 'left')
    {
        mode = 'right';
        light.style.float = mode;
        head.style.background = 'black';
        right.style.background = 'black';
        head.style.color = 'rgb(180, 96, 0)';
        light.style.background = 'black';
        darkmode.style.background = 'white'; 
        table.style.color = 'white';
        leftClass.style.background = 'linear-gradient(10deg,rgb(104, 104, 104) -16%,  rgb(31, 30, 30) 75%)';
        span.style.color = 'rgb(180, 96, 0)';
        clsth1.style.background = 'rgb(180, 96, 0)';
        clsth2.style.background = 'rgb(180, 96, 0)';
        clsth3.style.background = 'rgb(180, 96, 0)';
        clsth4.style.background = 'rgb(180, 96, 0)';
        clsth5.style.background = 'rgb(180, 96, 0)';
        clsth6.style.background = 'rgb(180, 96, 0)';
        clsth7.style.background = 'rgb(180, 96, 0)';
        rechercher.style.background = "rgb(31, 30, 30)";
        rechercher.style.color = "white";
        rechercher.style.border = "1px solid rgb(31, 30, 30)";
        dashstyle.style.color = 'rgb(180, 96, 0)';
        toutproduit.style.color = 'rgb(180, 96, 0)';
        ajouteprod.style.color = 'rgb(180, 96, 0)';
        suprimerto.style.color = 'rgb(180, 96, 0)';
        TrierProds.style.color = 'rgb(180, 96, 0)';
        h1.style.color = 'white';
        h2.style.color = 'white';
        reference.style.background = 'black';
        designation.style.background = 'black';
        prix.style.background = 'black';
        tva.style.background = 'black';
        dispo.style.background = 'black';
        cnt.style.background = 'black';
        nreference.style.background = 'black';
        ndesignation.style.background = 'black';
        nprix.style.background = 'black';
        ntva.style.background = 'black';
        ndispo.style.background = 'black';

        reference.style.color = 'white';
        designation.style.color = 'white';
        prix.style.color = 'white';
        tva.style.color = 'white';
        dispo.style.color = 'white';
        cnt.style.color = 'white';
        nreference.style.color = 'white';
        ndesignation.style.color = 'white';
        nprix.style.color = 'white';
        ntva.style.color = 'white';
        ndispo.style.color = 'white';
        
        reference.style.borderBottom = '1px solid rgb(180, 96, 10)';
        designation.style.borderBottom = '1px solid rgb(180, 96, 10)';
        prix.style.borderBottom = '1px solid rgb(180, 96, 10)';
        tva.style.borderBottom = '1px solid rgb(180, 96, 10)';
        dispo.style.borderBottom = '1px solid rgb(180, 96, 10)';
        cnt.style.borderBottom = '1px solid rgb(180, 96, 10)';
        
        nreference.style.borderBottom = '1px solid rgb(180, 96, 10)';
        ndesignation.style.borderBottom = '1px solid rgb(180, 96, 10)';
        nprix.style.borderBottom = '1px solid rgb(180, 96, 10)';
        ntva.style.borderBottom = '1px solid rgb(180, 96, 10)';
        ndispo.style.borderBottom = '1px solid rgb(180, 96, 10)';

        AjouteBtn.style.background = 'rgb(180, 96, 10)';
        ModifiereBtn.style.background = 'rgb(180, 96, 10)';




    }else
    {
        mode = 'left';
        light.style.float = mode;
        head.style.background = 'white';
        head.style.color = 'black';
        right.style.background = 'white';
        light.style.background = 'white';
        darkmode.style.background = 'black';
        table.style.color = 'black';
        leftClass.style.background = 'linear-gradient(10deg,var(--blueD) -16%, var(--blue) 75%)';
        span.style.color = 'rgb(2, 158, 185)';
        clsth1.style.background = 'rgb(0, 36, 126)';
        clsth2.style.background = 'rgb(0, 36, 126)';
        clsth3.style.background = 'rgb(0, 36, 126)';
        clsth4.style.background = 'rgb(0, 36, 126)';
        clsth5.style.background = 'rgb(0, 36, 126)';
        clsth6.style.background = 'rgb(0, 36, 126)';
        clsth7.style.background = 'rgb(0, 36, 126)';
        rechercher.style.background = "white";
        rechercher.style.color = "black";
        rechercher.style.border = "2px solid rgb(0, 36, 126)";
        dashstyle.style.color = 'white';
        toutproduit.style.color = 'white';
        ajouteprod.style.color = 'white';
        suprimerto.style.color = 'white';
        TrierProds.style.color = 'white';
        h1.style.color = 'black';
        h2.style.color = 'black';

        reference.style.background = 'white';
        designation.style.background = 'white';
        prix.style.background = 'white';
        tva.style.background = 'white';
        dispo.style.background = 'white';
        nreference.style.background = 'white';
        ndesignation.style.background = 'white';
        nprix.style.background = 'white';
        ntva.style.background = 'white';
        ndispo.style.background = 'white';
        cnt.style.background = 'white';

        reference.style.color = 'black';
        designation.style.color = 'black';
        prix.style.color = 'black';
        tva.style.color = 'black';
        dispo.style.color = 'black';
        cnt.style.color = 'black';
        nreference.style.color = 'black';
        ndesignation.style.color = 'black';
        nprix.style.color = 'black';
        ntva.style.color = 'black';
        ndispo.style.color = 'black';

        reference.style.borderBottom = '1px solid rgb(2, 158, 185)';
        designation.style.borderBottom = '1px solid rgb(2, 158, 185)';
        prix.style.borderBottom = '1px solid rgb(2, 158, 185)';
        tva.style.borderBottom = '1px solid rgb(2, 158, 185)';
        dispo.style.borderBottom = '1px solid rgb(2, 158, 185)';
        cnt.style.borderBottom = '1px solid rgb(2, 158, 185)';
        
        nreference.style.borderBottom = '1px solid rgb(2, 158, 185)';
        ndesignation.style.borderBottom = '1px solid rgb(2, 158, 185)';
        nprix.style.borderBottom = '1px solid rgb(2, 158, 185)';
        ntva.style.borderBottom = '1px solid rgb(2, 158, 185)';
        ndispo.style.borderBottom = '1px solid rgb(2, 158, 185)';

        
        AjouteBtn.style.background = 'linear-gradient(10deg,var(--blueD) -16%, var(--blue) 75%)';
        ModifiereBtn.style.background = 'linear-gradient(10deg,var(--blueD) -16%, var(--blue) 75%)';
    }
}