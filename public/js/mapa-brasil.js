google.load('visualization', '1', {
    'packages': ['geochart']
});

google.charts.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
        ['Region','Views', ''],
        ['Acre', 'Norte', 0],
        ['Alagoas', 'Nordeste', 1],
        ['Amapá', 'Norte', 0],
        ['Amazonas', 'Norte', 0],
        ['Bahia', 'Nordeste', 1],
        ['Ceará', 'Nordeste', 1],
        ['Distrito Federal', 'Centro-Oeste', 2],
        ['Espírito Santo', 'Sudeste', 3],
        ['Goiás', 'Centro-Oeste', 2],
        ['Maranhão', 'Nordeste', 1],
        ['Mato Grosso', 'Centro-Oeste', 2],
        ['Mato Grosso do Sul', 'Centro-Oeste', 2],
        ['Minas Gerais', 'Sudeste', 3],
        ['Pará', 'Norte', 0],
        ['Paraíba', 'Nordeste', 1],
        ['Paraná', 'Suld' , 4],
        ['Pernambuco', 'Nordeste', 1],
        ['Piauí', 'Nordeste', 1],
        ['Rio de Janeiro', 'Sudeste', 3],
        ['Rio Grande do Norte', 'Nordeste', 1],
        ['Rio Grande do Sul', 'Sul', 4],
        ['Rondônia', 'Norte', 0],
        ['Roraima', 'Norte', 0],
        ['Santa Catarina', 'Sul', 4],
        ['São Paulo', 'Sudeste', 3],
        ['Sergipe', 'Nordeste', 1],
        ['Tocantins', 'Norte', 0]
    ]);
    data.addColumn({type: 'string', role: 'tooltip', p:{html:true}}, 'ToolTip');

    var options = {
        region: 'BR',
        resolution: 'provinces',
        colorAxis: {
            values: [0, 1, 2, 3, 4, 5],
            colors: ['#01903E', '#0F75BD', '#FCB041', '#EE2554', '#7F3E99', 'blue']
        },
        datalessRegionColor: 'transparent',
        legend: 'none'
    };

    var chart = new google.visualization.GeoChart(document.getElementById('chart_div'));

    chart.draw(data, options);

    google.visualization.events.addListener(chart, 'regionClick', function (eventData) {
        // maybe you want to change the data table here...
        options['region'] = eventData.region;
        options['resolution'] = 'provinces';
        options['displayMode'] = 'markers';

        console.log(options['region']);
    })
}