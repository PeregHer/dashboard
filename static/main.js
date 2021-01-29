Highcharts.chart('france_total', {

  title: {
    text: 'Cas de covid en France par jour'
  },

  subtitle: {
    text: 'Source: data.gouv.fr'
  },

  yAxis: {
    title: {
      text: 'Nombre de personnes'
    }
  },

  xAxis: {
    type: 'datetime',
    accessibility: {
      rangeDescription: 'Range: 2018 to now'
    }

  },

  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle'
  },

  plotOptions: {
    series: {
      label: {
        connectorAllowed: false
      },
      pointStart: 2018
    }
  },
  

  series: [{
    name: 'Hospitalisation',
    data: value[0],
    pointStart: Date.UTC(2020, 2, 18), 
    pointInterval: 3600 * 1000 * 24
  }, {
    name: 'Réanimation',
    data: value[1],
    pointStart: Date.UTC(2020, 2, 18), 
    pointInterval: 3600 * 1000 *24
  }, {
    name: 'Décès',
    data: value[2],
    pointStart: Date.UTC(2020, 2, 18), 
    pointInterval: 3600 * 1000 *24
  },
  

],

  responsive: {
    rules: [{
      condition: {
        maxWidth: 500
      },
      chartOptions: {
        legend: {
          layout: 'horizontal',
          align: 'center',
          verticalAlign: 'bottom'
        }
      }
    }]
  }

});

Highcharts.chart('france_nouveau', {

  title: {
    text: 'Cas de covid en France par jour'
  },

  subtitle: {
    text: 'Source: data.gouv.fr'
  },

  yAxis: {
    title: {
      text: 'Nombre de personnes'
    }
  },

  xAxis: {
    type: 'datetime',
    accessibility: {
      rangeDescription: 'Range: 2018 to now'
    }

  },

  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle'
  },

  plotOptions: {
    series: {
      label: {
        connectorAllowed: false
      },
      pointStart: 2018
    }
  },
  

  series: [{
    name: 'Hospitalisation',
    data: value_nouveau[0],
    pointStart: Date.UTC(2020, 2, 18), 
    pointInterval: 3600 * 1000 * 24
  }, {
    name: 'Réanimation',
    data: value_nouveau[1],
    pointStart: Date.UTC(2020, 2, 18), 
    pointInterval: 3600 * 1000 *24
  }, {
    name: 'Décès',
    data: value_nouveau[2],
    pointStart: Date.UTC(2020, 2, 18), 
    pointInterval: 3600 * 1000 *24
  },
  

],

  responsive: {
    rules: [{
      condition: {
        maxWidth: 500
      },
      chartOptions: {
        legend: {
          layout: 'horizontal',
          align: 'center',
          verticalAlign: 'bottom'
        }
      }
    }]
  }

});

// Create the chart
Highcharts.mapChart('contenant', {
  chart: {
      map: 'custom/european-union'
  },

  title: {
      text: "Nombre de mort/million d'habitants dans l'Union Européenne"
  },

  subtitle: {
      text: 'Source : data.gouv.fr'
  },

  legend: {
      align: 'left',
      floating: true,
      verticalAlign: 'center',
      layout: 'vertical',
      enabled: true,
},

  mapNavigation: {
      enabled: true,
      buttonOptions: {
          verticalAlign: 'bottom'
      }
  },

  colorAxis: {
      min: 0,
      minColor: '#eae2b7',
      maxColor: '#d62828',
      stops: [[0, '#eae2b7'], [0.33, '#fcbf49'], [0.66, '#f77f00'], [1, '#d62828']]
  },

  series: [{
      data: data,
      name: "Décès par million d'hab.",
      states: {
          hover: {
              color: '#BADA55'
          }
      },
      dataLabels: {
          enabled: true,
          format: '{point.name}',
          color: '#000000'
      }
  }]
});

Highcharts.mapChart('france_age', {
  chart: {
      map: 'countries/fr/fr-all'
  },

  title: {
      text: 'Nombre de décès au 21/01/2021'
  },

  subtitle: {
      text: 'Source map: <a href="http://code.highcharts.com/mapdata/countries/fr/fr-all.js">France</a>'
  },

  mapNavigation: {
      enabled: true,
      buttonOptions: {
          verticalAlign: 'bottom'
      }
  },

  colorAxis: {
      min: 0,
      minColor: '#eae2b7',
      maxColor: '#d62828',
      stops: [[0, '#eae2b7'], [0.33, '#fcbf49'], [0.66, '#f77f00'], [1, '#d62828']]
  },

  series: [{
      data: dataMapFr,
      name: 'DC',
      states: {
          hover: {
              color: '#BADA55'
          }
      },
      dataLabels: {
          enabled: true,
          format: '{point.name}',
          color: '#000000'
      }
  }, {
      name: 'Separators',
      type: 'mapline',
      data: Highcharts.geojson(Highcharts.maps['countries/fr/fr-all'], 'mapline'),
      color: 'silver',
      nullColor: 'silver',
      showInLegend: false,
      enableMouseTracking: false
  }]
});



