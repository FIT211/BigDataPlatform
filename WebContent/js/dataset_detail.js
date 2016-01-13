function get_dataset_detail(){
    require.config({
            paths: {
                echarts: '../js'
            }
        });

        require(
            [
                'echarts',
                'echarts/chart/line',
            ]
    );

    var myChart = require('echarts').init(document.getElementById('morris-area-chart')); 
    myChart.showLoading({
        text: '正在努力的读取数据中...',    //loading话术
    });

    var TIME = new Array();    
    var HTTP = new Array();
    var DNS = new Array();    
    var NBNS = new Array();    
    var SNMP = new Array();
    var RPC = new Array();    
    var TELNET = new Array();
    var UNKNOW = new Array();

    $.ajax({
        url: "http://localhost:8000/OfflineApplicationLayerResults/",
        dataType: 'jsonp',
        type: 'GET',
        jsonpCallback: 'callback',          
        success: function (data) {
            TIME = data.TIME
            HTTP = data.HTTP
            DNS = data.DNS
            NBNS = data.NBNS
            SNMP = data.SNMP
            RPC = data.RPC
            TELNET = data.TELNET
            UNKNOW = data.UNKNOW
        }
    });

    alert(TIME)
    myChart.hideLoading();
    option = {
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            data:['HTTP','DNS','NBNS','SNMP','RPC','TELNET','UNKNOW']
        },
        toolbox: {
            show : false,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : TIME
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'HTTP',
                type:'line',
                stack: '总量',
                itemStyle: {normal: {areaStyle: {type: 'default'}}},
                data:HTTP
            },
            {
                name:'DNS',
                type:'line',
                stack: '总量',
                itemStyle: {normal: {areaStyle: {type: 'default'}}},
                data:DNS
            },
            {
                name:'NBNS',
                type:'line',
                stack: '总量',
                itemStyle: {normal: {areaStyle: {type: 'default'}}},
                data:NBNS
            },
            {
                name:'SNMP',
                type:'line',
                stack: '总量',
                itemStyle: {normal: {areaStyle: {type: 'default'}}},
                data:SNMP
            },
            {
                name:'RPC',
                type:'line',
                stack: '总量',
                itemStyle: {normal: {areaStyle: {type: 'default'}}},
                data:RPC
            },
            {
                name:'TELNET',
                type:'line',
                stack: '总量',
                itemStyle: {normal: {areaStyle: {type: 'default'}}},
                data:TELNET
            },
            {
                name:'UNKNOW',
                type:'line',
                stack: '总量',
                itemStyle: {normal: {areaStyle: {type: 'default'}}},
                data:UNKNOW
            }
        ]
    };
            
    myChart.setOption(option);     
}