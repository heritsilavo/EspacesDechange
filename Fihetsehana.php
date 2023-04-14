<!DOCTYPE html>
<html lang="en">
<head>
    <script src="html2pdf.bundle.min.js"></script>    
    <script src="pdf.js" defer></script>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        .PDF{
            width:100%;
            height:auto;
        }
        table{
            width: 100%;
            border-collapse: collapse;
        }
        th,td{
            border: 1px solid;
            padding: 10px;
        }
        .hide{
            display: none;
        }
    </style>
    <title>Document</title>
</head>
<body>
    <section class="body">
        <section class="formulaire">
            <form action="" method="post">
                <label for="dateDeb">Date debut:</label>
                <input type="date" name="dateDeb" id="dateDeb" required><br>

                <label for="dateFin">Date final</label>
                <input type="date" name="dateFin" id="dateFin" required><br>
                <input type="submit" value="Affiche" id="Affiche">
            </form>
            <button class="hide" onclick="generatePDF()" >Telecharger PDF</button>
        </section>
        <section class="PDF hide">
            <div class="entree">
                <h3>Mouvement des entrees en caisse</h3>
            </div>
            <div class="sortie">
                <h3>Mouvement des soties en caisse</h3>
            </div>           
        </section>
    </section>
</body>
</html>