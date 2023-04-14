
document.getElementById('Affiche').addEventListener('click',function(e) {
    document.querySelectorAll('.hide').forEach(element => {
        element.classList.remove('hide');
    });

    e.preventDefault()
    const dateDeb = document.getElementById('dateDeb').value
    const dateFin = document.getElementById('dateFin').value
    
    const url="data.php?dateDeb=%27"+dateDeb+"%27&&dateFin=%27"+dateFin+"%27";
    console.log(url);
    const req=new XMLHttpRequest();    
    req.open("GET",url,true);
    req.send(null);

    req.onreadystatechange=function(){
        if(req.readyState===4 && req.status===200){
            const data=JSON.parse(req.response)
            console.log(data);

            //entree
            const tableEntree=document.createElement('table')
            tableEntree.classList.add('tabila')
            
            const theadS =document.createElement('thead');tableEntree.appendChild(theadS)
            const tbodyS =document.createElement('tbody');tableEntree.appendChild(tbodyS)
            

            theadS.innerHTML="<tr>\
                <th>idEntree</th>\
                <th>Motif</th>\
                <th>montantEntree</th>\
                <th>dateEntree</th>\
                <th>idEglise</th>\
            </tr>"
            data[0].forEach(element => {
                tbodyS.innerHTML+=`<tr>
                <td>${element.idEntree}</td>
                <td>${element.motif}</td>
                <td>${element.montantEntree}</td>
                <td>${element.dateEntree}</td>
                <td>${element.idEglise}</td>
            </tr>`
            });

            document.querySelector('.entree').appendChild(tableEntree)

            //Sortie
            const tableSortie=document.createElement('table')
            tableSortie.classList.add('tabila')
            
            const thead =document.createElement('thead');tableSortie.appendChild(thead)
            const tbody =document.createElement('tbody');tableSortie.appendChild(tbody)
                thead.innerHTML="<tr>\
                <th>idSortie</th>\
                <th>Motif</th>\
                <th>montantSortie</th>\
                <th>dateSortie</th>\
                <th>idEglise</th>\
            </tr>"
            data[1].forEach(element => {
                tbody.innerHTML+=`<tr>
                <td>${element.idSortie}</td>
                <td>${element.motif}</td>
                <td>${element.montantSortie}</td>
                <td>${element.dateSortie}</td>
                <td>${element.idEglise}</td>
            </tr>`
            });

            document.querySelector('.sortie').appendChild(tableSortie)
        }else{
            console.log("error");
        }
    } 
})

//save as PDF
function generatePDF(){
    const element=document.querySelector('.PDF');
    const option={
        filename:'Fihetsehana.pdf',
        orientation:'landscape',
        unit:'mm',
        format:'a4',
        compressPDF:true
    };
    html2pdf().set(option).from(element).save()
}