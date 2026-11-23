import pandas as pd

# 1. Wczytanie danych
gpi = pd.read_csv('data/gpi.csv')
inform = pd.read_csv('data/inform.csv', sep='\t', skiprows=1, names=['econ_code', 'INFORM_RISK'], decimal=',')
wgi = pd.read_csv('data/wgi.csv', sep='\t')

gpi['Kraj'] = gpi['Kraj'].str.strip()
inform['econ_code'] = inform['econ_code'].str.strip()
wgi['econ_code'] = wgi['econ_code'].str.strip()
wgi['econ_name'] = wgi['econ_name'].str.strip()

# 2. Mapowanie nazw krajów z GPI na econ_code (ISO3)
wgi_name_to_iso = dict(zip(wgi['econ_name'], wgi['econ_code']))

gpi_manual_iso = {
    'Bosnia-Herzegovina': 'BIH',
    'Central African Rep.': 'CAF',
    'Congo': 'COG',
    'Congo DR': 'COD',
    'Cote d’Ivoire': 'CIV',
    'Czech Republic': 'CZE',
    'Egypt': 'EGY',
    'Ethiopia PDR': 'ETH',
    'Gambia': 'GMB',
    'Guinea Bissau': 'GNB',
    'Iran': 'IRN',
    'Lao Peoples Dem. Rep.': 'LAO',
    'Lebanese Republic': 'LBN',
    'North Korea': 'PRK',
    'Palestina': 'PSE',
    'Republic of Macedonia': 'MKD',
    'Somalia': 'SOM',
    'South Korea': 'KOR',
    'Taiwan Province of China': 'TWN',
    'Timor Leste': 'TLS',
    'Trinidad & Tobago': 'TTO',
    'Turkey': 'TUR',
    'UAE': 'ARE',
    'Venezuela': 'VEN',
    'Vietnam': 'VNM',
    'Yemen': 'YEM',
}

gpi['econ_code'] = gpi['Kraj'].map(lambda x: gpi_manual_iso.get(x, wgi_name_to_iso.get(x)))

# 3. Normalizacja ryzyka do zakresu [0, 1] (0 = najniższe ryzyko, 1 = najwyższe ryzyko)
gpi['gpi_risk'] = (gpi['Score'] - gpi['Score'].min()) / (gpi['Score'].max() - gpi['Score'].min())

inform['inform_risk'] = (
    (inform['INFORM_RISK'] - inform['INFORM_RISK'].min())
    / (inform['INFORM_RISK'].max() - inform['INFORM_RISK'].min())
)

wgi_clean = wgi[['econ_code', 'econ_name', 'score']].copy()
wgi_clean['wgi_risk'] = (
    (wgi_clean['score'].max() - wgi_clean['score'])
    / (wgi_clean['score'].max() - wgi_clean['score'].min())
)

# 4. Połączenie i wybór dokładnie 5 kolumn
merged = (
    wgi_clean[['econ_code', 'econ_name', 'wgi_risk']]
    .merge(gpi[['econ_code', 'Kraj', 'gpi_risk']], on='econ_code', how='outer')
    .merge(inform[['econ_code', 'inform_risk']], on='econ_code', how='outer')
)

merged['nazwa'] = merged['econ_name'].fillna(merged['Kraj'])

cols = ['econ_code', 'nazwa', 'gpi_risk', 'inform_risk', 'wgi_risk']
result = merged[cols].sort_values('econ_code').reset_index(drop=True)

risk_cols = ['gpi_risk', 'inform_risk', 'wgi_risk']
result[risk_cols] = result[risk_cols].round(4)

result.to_csv('data/normalized_risk.csv', index=False)