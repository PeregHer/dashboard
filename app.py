from flask import Flask, render_template, request, url_for, flash, redirect,jsonify
import pandas as pd 
from data import get_data

app = Flask(__name__)
app.config['SECRET_KEY'] = 'abcdefgh'





@app.route('/')
def index():

    # Traitement des données :
    
    data_nb_covid=pd.read_csv('donnees-hospitalieres-covid19-2021-01-21-19h03.csv',sep=';')

    data=data_nb_covid[data_nb_covid["sexe"]==0].groupby(['jour']).sum()
    dataMap = get_data()

    posts=[list(data['hosp'].values),list(data['rea'].values),list(data['dc'].values)]


    data_nouveau_cas=pd.read_csv('donnees-hospitalieres-nouveaux-covid19-2021-01-21-19h03.csv',sep=';')
    data_nouveau_cas=data_nouveau_cas.groupby(['jour']).sum()

    posts2=[list(data_nouveau_cas['incid_hosp'].values),list(data_nouveau_cas['incid_rea'].values),list(data_nouveau_cas['incid_dc'].values)]



    df = pd.read_csv("C:/Users/julie/Desktop/Microsoft/BRIEF Tableaux/donnees-hospitalieres-classe-age-covid19-2021-01-21-19h03.csv", sep=";")
    # print(df)
    # df_mask = df["cl_age90"] == 90
    df_mask_annee = df["jour"] == "2021-01-21"
    filtered_df = df[df_mask_annee]
    data_dc = filtered_df.groupby(["reg"]).sum()
    lst_reg = {94 : 'fr-cor', 53: 'fr-bre', 52:'fr-pdl', 93:'fr-pac', 76:'fr-occ', 75:'fr-naq', 27:'fr-bfc', 24:'fr-cvl', 11:'fr-idf' , 32:'fr-hdf', 84:'fr-ara', 44:'fr-ges', 28:'fr-nor', 4:'fr-lre', 6:'fr-may', 3:'fr-gf', 2:'fr-mq', 1:'fr-gua'}
    data = []
    i = 0
    # print(data_dc)


    for ligne in data_dc.index:
        # print(data_dc["dc"])
        # print(lst_reg[i])
        # print(ligne)
        data.append([lst_reg[ligne], data_dc["dc"][ligne]])
        i += 1


    return render_template('index.html',value=posts, data=dataMap,value_nouveau=posts2, dataMapFr=data)

