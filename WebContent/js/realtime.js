setTimeout(function(){Push();},1000);
setInterval(function(){Push();},1000);
function Push(){

$.ajax({
            url: "http://166.111.143.200:8000/RealtimeApplicationThroughput/",
            dataType: 'jsonp',
            type: 'GET',
            jsonpCallback: 'callback',
            success: function (data) {           	           	        		            	
        		
        		var throuput = new Array();
        		var countPacket = new Array();
            
        		var count=0;
        		
        		for (x in data) {           	
        			
        			throuput[x] = data[x].throuput;
        			countPacket[x] = data[x].countPacket;
        			count++;
        		}	
        		
        		for (;count<60;count++){
    				throuput[count] = 0;
    				countPacket[count] = 0;
    			}
        		
        		require.config({
		            paths: {
		                echarts: '../js'
		            }
		        });
   			 
        		require(
	            [
	                'echarts',
	                'echarts/chart/line',
	               
	            ],
	            DrawEcharts
    	        );	
	
	            function DrawEcharts (ec){
	            	DrawEchart1 (ec);
	            	DrawEchart2 (ec);
	            	DrawEchart3 (ec);
	            	DrawEchart4 (ec);
	            }
	            
	            function DrawEchart1 (ec) {
	                var myChart1 = ec.init(document.getElementById('realtime-chart1')); 
	                
	                option = {
	                	    title : {
	                	        text: 'Application Statistics',
	                	        subtext:'attention to the magnitude'
	                	    },
	                	    tooltip : {
	                	        trigger: 'axis',
	                	        axisPointer:{
	                	        	type:'shadow'
	                	        }
	                	    },
	                	    legend: {
	                	        data:['throuput','countPacket'],
	                	        y:"bottom"
	                	    },
	                	    toolbox: {
	                	        show : true,
	                	        feature : {
	                	            mark : {show: true},
	                	            dataView : {show: true, readOnly: false},
	                	            magicType: { show: true, type: ['line', 'bar'] },
	                	            restore : {show: true},
	                	            saveAsImage : {show: true}
	                	        }
	                	    },
	                	    claculable:true,
	                	    xAxis : [
	                	        {
	                	            type : 'category',
	                	            //splitLine:{show:false},
	                	            data : ['60','59','58','57','56','55','54','53','52','51','50','49','48','47','46','45','44','43','42','41','40','39','38','37','36','35','34','33','32','31','30','29','28','27','26','25','24','23','22','21','20','19','18','17','16','15','14','13','12','11','10','9','8','7','6','5','4','3','2','1']
	                	        }
	                	    ],
	                	    yAxis : [
	                	        {
	                	            type : 'value'
	                	        }
	                	    ],
	                	    series : [
	                	        {
	                	            name:'throuput',
	                	        	type:'line',
	                	        	stack:'Application',
	                	        	itemStyle:{normal:{areaStyle:{type:'default'}}},
	                	            data:throuput 
	                	            //markLine:{
	                	            //	data:[{
	                	            //		type:"max",
	                	            //		name:"MAX"
	                	            //	},{
	                	            //		type:"min",
	                	            //		name:"MIN"
	                	            //	}]
	                	            //}
	                	        },  
	                	        {
	                	        	name:'countPacket',
	                	        	type:'line',
	                	        	stack:'Application',
	                	        	itemStyle:{normal:{areaStyle:{type:'default'}}},
	                	            data:countPacket
	                	        },	                	       
	                	    ],
	                	    animation:false,
	                	};
	                myChart1.setOption(option); 
	            }
	            
	            function DrawEchart2 (ec) {
	                var myChart2 = ec.init(document.getElementById('realtime-chart2')); 
	                
	                option = {
	                	    title : {
	                	        text: 'Application Statistics',
	                	        subtext:'attention to the magnitude'
	                	    },
	                	    tooltip : {
	                	        trigger: 'axis',
	                	        axisPointer:{
	                	        	type:'shadow'
	                	        }
	                	    },
	                	    legend: {
	                	        data:['throuput','countPacket'],
	                	        y:"bottom"
	                	    },
	                	    toolbox: {
	                	        show : true,
	                	        feature : {
	                	            mark : {show: true},
	                	            dataView : {show: true, readOnly: false},
	                	            magicType: { show: true, type: ['line', 'bar'] },
	                	            restore : {show: true},
	                	            saveAsImage : {show: true}
	                	        }
	                	    },
	                	    claculable:true,
	                	    xAxis : [
	                	        {
	                	            type : 'category',
	                	            //splitLine:{show:false},
	                	            data : ['60','59','58','57','56','55','54','53','52','51','50','49','48','47','46','45','44','43','42','41','40','39','38','37','36','35','34','33','32','31','30','29','28','27','26','25','24','23','22','21','20','19','18','17','16','15','14','13','12','11','10','9','8','7','6','5','4','3','2','1']
	                	        }
	                	    ],
	                	    yAxis : [
	                	        {
	                	            type : 'value'
	                	        }
	                	    ],
	                	    series : [
	                	        {
	                	            name:'throuput',
	                	        	type:'line',
	                	        	stack:'Application',
	                	        	itemStyle:{normal:{areaStyle:{type:'default'}}},
	                	            data:throuput 
	                	            //markLine:{
	                	            //	data:[{
	                	            //		type:"max",
	                	            //		name:"MAX"
	                	            //	},{
	                	            //		type:"min",
	                	            //		name:"MIN"
	                	            //	}]
	                	            //}
	                	        },  
	                	        {
	                	        	name:'countPacket',
	                	        	type:'line',
	                	        	stack:'Application',
	                	        	itemStyle:{normal:{areaStyle:{type:'default'}}},
	                	            data:countPacket
	                	        },	                	       
	                	    ],
	                	    animation:false,
	                	};
	                myChart2.setOption(option); 
	            }   
	            
	            function DrawEchart3 (ec) {
	                var myChart3 = ec.init(document.getElementById('realtime-chart3')); 
	                
	                option = {
	                	    title : {
	                	        text: 'Application Statistics',
	                	        subtext:'attention to the magnitude'
	                	    },
	                	    tooltip : {
	                	        trigger: 'axis',
	                	        axisPointer:{
	                	        	type:'shadow'
	                	        }
	                	    },
	                	    legend: {
	                	        data:['throuput','countPacket'],
	                	        y:"bottom"
	                	    },
	                	    toolbox: {
	                	        show : true,
	                	        feature : {
	                	            mark : {show: true},
	                	            dataView : {show: true, readOnly: false},
	                	            magicType: { show: true, type: ['line', 'bar'] },
	                	            restore : {show: true},
	                	            saveAsImage : {show: true}
	                	        }
	                	    },
	                	    claculable:true,
	                	    xAxis : [
	                	        {
	                	            type : 'category',
	                	            //splitLine:{show:false},
	                	            data : ['60','59','58','57','56','55','54','53','52','51','50','49','48','47','46','45','44','43','42','41','40','39','38','37','36','35','34','33','32','31','30','29','28','27','26','25','24','23','22','21','20','19','18','17','16','15','14','13','12','11','10','9','8','7','6','5','4','3','2','1']
	                	        }
	                	    ],
	                	    yAxis : [
	                	        {
	                	            type : 'value'
	                	        }
	                	    ],
	                	    series : [
	                	        {
	                	            name:'throuput',
	                	        	type:'line',
	                	        	stack:'Application',
	                	        	itemStyle:{normal:{areaStyle:{type:'default'}}},
	                	            data:throuput 
	                	            //markLine:{
	                	            //	data:[{
	                	            //		type:"max",
	                	            //		name:"MAX"
	                	            //	},{
	                	            //		type:"min",
	                	            //		name:"MIN"
	                	            //	}]
	                	            //}
	                	        },  
	                	        {
	                	        	name:'countPacket',
	                	        	type:'line',
	                	        	stack:'Application',
	                	        	itemStyle:{normal:{areaStyle:{type:'default'}}},
	                	            data:countPacket
	                	        },	                	       
	                	    ],
	                	    animation:false,
	                	};
	                myChart3.setOption(option); 
	            }
	            
	            function DrawEchart4 (ec) {
	                var myChart4 = ec.init(document.getElementById('realtime-chart4')); 
	                
	                option = {
	                	    title : {
	                	        text: 'Application Statistics',
	                	        subtext:'attention to the magnitude'
	                	    },
	                	    tooltip : {
	                	        trigger: 'axis',
	                	        axisPointer:{
	                	        	type:'shadow'
	                	        }
	                	    },
	                	    legend: {
	                	        data:['throuput','countPacket'],
	                	        y:"bottom"
	                	    },
	                	    toolbox: {
	                	        show : true,
	                	        feature : {
	                	            mark : {show: true},
	                	            dataView : {show: true, readOnly: false},
	                	            magicType: { show: true, type: ['line', 'bar'] },
	                	            restore : {show: true},
	                	            saveAsImage : {show: true}
	                	        }
	                	    },
	                	    claculable:true,
	                	    xAxis : [
	                	        {
	                	            type : 'category',
	                	            //splitLine:{show:false},
	                	            data : ['60','59','58','57','56','55','54','53','52','51','50','49','48','47','46','45','44','43','42','41','40','39','38','37','36','35','34','33','32','31','30','29','28','27','26','25','24','23','22','21','20','19','18','17','16','15','14','13','12','11','10','9','8','7','6','5','4','3','2','1']
	                	        }
	                	    ],
	                	    yAxis : [
	                	        {
	                	            type : 'value'
	                	        }
	                	    ],
	                	    series : [
	                	        {
	                	            name:'throuput',
	                	        	type:'line',
	                	        	stack:'Application',
	                	        	itemStyle:{normal:{areaStyle:{type:'default'}}},
	                	            data:throuput 
	                	            //markLine:{
	                	            //	data:[{
	                	            //		type:"max",
	                	            //		name:"MAX"
	                	            //	},{
	                	            //		type:"min",
	                	            //		name:"MIN"
	                	            //	}]
	                	            //}
	                	        },  
	                	        {
	                	        	name:'countPacket',
	                	        	type:'line',
	                	        	stack:'Application',
	                	        	itemStyle:{normal:{areaStyle:{type:'default'}}},
	                	            data:countPacket
	                	        },	                	       
	                	    ],
	                	    animation:false,
	                	};
	                myChart4.setOption(option); 
	            }
        	    
            }.bind(this),
            //error: function (xhr, status, err) {
            //    alert('Error:' + err);
            //    alert("error");
            //}.bind(this)
        });
};