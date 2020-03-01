// Create the chart
Highcharts.chart('skill-chart', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'My Technical Skills as of 2018'
    },
    subtitle: {
        text: 'Click the columns to view drilled down version of each category skill.'
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        title: {
            text: 'Total percent of each Skill Category'
        }

    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y:.1f}%'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },

    "series": [
        {
            "name": "My Skills",
            "colorByPoint": true,
            "data": [
                {
                    "name": "HTML",
                    "y": 90,
                    "drilldown": "HTML"
                },
                {
                    "name": "CSS",
                    "y": 65,
                    "drilldown": "CSS"
                },
                {
                    "name": "Javascript",
                    "y": 75,
                    "drilldown": "Javascript"
                },
                {
                    "name": "Back End",
                    "y": 85,
                    "drilldown": "BackEnd"
                },
                {
                    "name": "Build Tools",
                    "y": 65,
                    "drilldown": "BuildTools"
                },
                {
                    "name": "Servers",
                    "y": 75,
                    "drilldown": "Servers"
                },
                {
                    "name": "Cloud Computing",
                    "y": 75,
                    "drilldown": "Cloud"
                },
                {
                    "name": "Other",
                    "y": 40,
                    "drilldown": "Other"
                }
            ]
        }
    ],
    "drilldown": {
        "series": [
            {
                "name": "HTML",
                "id": "HTML",
                "data": [
                    [
                        "HTML5",
                        90
                    ],
                    [
                        "JSX",
                        60
                    ],
                    [
                        "JADE",
                        45
                    ],
                    [
                        "HAML",
                        65
                    ]
                ]
            },
            {
                "name": "CSS",
                "id": "CSS",
                "data": [
                    [
                        "CSS3",
                        75
                    ],
                    [
                        "Twitter Bootstrap",
                        85
                    ],
                    [
                        "Materialize CSS",
                        45
                    ],
                    [
                        "SASS",
                        25
                    ],
                    [
                        "Foundation",
                        35
                    ]
                ]
            },
            {
                "name": "Javascript",
                "id": "Javascript",
                "data": [
                    [
                        "Javascript",
                        65
                    ],
                    [
                        "jQuery",
                        65
                    ],
                    [
                        "AngularJS",
                        85
                    ],
                    [
                        "Angular",
                        75
                    ],
                    [
                        "React",
                        25
                    ],
                    [
                        "NodeJS",
                        25
                    ]
                ]
            },
            {
                "name": "Back End",
                "id": "BackEnd",
                "data": [
                    [
                        "Java",
                        90
                    ],
                    [
                        "Python",
                        65
                    ],
                    [
                        "Spring Framework",
                        60
                    ],
                    [
                        "Hibernate",
                        55
                    ],
                    [
                        "MyBatis",
                        45
                    ],
                    [
                        "Oracle",
                        75
                    ],
                    [
                        "MongoDB",
                        65
                    ]
                ]
            },
            {
                "name": "Build Tools",
                "id": "BuildTools",
                "data": [
                    [
                        "WebPack",
                        60
                    ],
                    [
                        "Gulp",
                        75
                    ],
                    [
                        "Grunt",
                        40
                    ],
                    [
                        "Bower",
                        35
                    ]
                ]
            },
            {
                "name": "Servers",
                "id": "Servers",
                "data": [
                    [
                        "Tomcat Web Server",
                        90
                    ],
                    [
                        "RedHat JBOSS Application Server",
                        75
                    ],
                    [
                        "IBM WebSphere Application Server",
                        40
                    ],
                    [
                        "Glassfish Application Server",
                        40
                    ],
                    [
                        "Weblogic Application Server",
                        35
                    ]
                ]
            },
            {
                "name": "Cloud Computing",
                "id": "Cloud",
                "data": [
                    [
                        "Amazon Web Services",
                        75
                    ],
                    [
                        "Heroku",
                        55
                    ],
                    [
                        "Openshift",
                        65
                    ]
                ]
            },
            {
                "name": "Other",
                "id": "Other",
                "data": [
                    [
                        "Git",
                        55
                    ],
                    [
                        "Perforce",
                        85
                    ],
                    [
                        "SubVersion",
                        55
                    ]
                ]
            }
        ]
    }
});