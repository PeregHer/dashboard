import requests


def get_data():
    data = requests.get(f'https://disease.sh/v3/covid-19/countries/').json()

    countries = ['dk', 'de','fr','ie','hr','gb','ee','cy','fi','gr','se','nl','es','lt','it','mt','nc','pl','sk','hu','lu','si','be','cnm','bg','ro','lv','at','cz','pt']
    deaths_list =[]

    for country in countries:
        for info in data:
            # print(info["countryInfo"]["iso2"])
            if info["countryInfo"]["iso2"] == country.upper():
                try:
                    deaths = info['deathsPerOneMillion']
                    deaths_list.append([country, deaths])
                except:
                    continue
    return deaths_list