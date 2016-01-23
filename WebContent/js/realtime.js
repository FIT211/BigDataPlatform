setInterval(function(){Push();},1000);
var i = 0;

function Push(){
	
	if (i == 0 || i == 60){
		
		i == 0;
		$.ajax({
    		url: "http://166.111.143.200:8000/RealtimeApplicationThroughput/Minute",
    		dataType: 'jsonp',
    		type: 'GET',
    		jsonpCallback: 'callback',          
    		success: function (data2) {           	           	        		            	
		
    		var throuput_minute = new Array();    
    		var countPacket_minute = new Array();   		
    		
    		var time_minute = new Array();
    		var count_minute = 0;
    		
    		for (count_minute = 0; count_minute < 1440; count_minute ++) {
    			
    			time_minute[count_minute] = 1440 - count_minute;
    			
    		}
		
    		for (x in data2) {           	
			    		
    			throuput_minute[x] = data2[x].throuput_minute/1000;   
    			countPacket_minute[x] = data2[x].countPacket_minute;   			
			
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
        
    		DrawEcharts2
    		
    		);	

    		function DrawEcharts2 (ec){
        	
    			DrawEchart3 (ec);
    			DrawEchart4 (ec);
        	
    		}
        
    		function DrawEchart3 (ec) {
    			var myChart3 = ec.init(document.getElementById('realtime-chart2')); 
            
    			option = {
            		color : ['#87cefa'],
            	    title : {
            	        text: '吞吐量统计数据（一天内）',
            	        subtext:'单位：kb/s'
            	    },
            	    tooltip : {
            	        trigger: 'axis',
            	        axisPointer:{
            	        	type:'shadow'
            	        }
            	    },
            	    legend: {
            	        data:['吞吐量（分钟级）'],
            	        y:"bottom"
            	    },
            	    toolbox: {
            	    	show : true,
            	        feature : {
            	            mark : {show: true},
            	            dataView : {show: true, readOnly: false},	                	            
            	            restore : {show: true},
            	            saveAsImage : {show: true}
            	        }
            	    },
            	    claculable:true,
            	    xAxis : [
            	        {
            	            type : 'category',
            	            //splitLine:{show:false},
            	            data : time_minute
            	        }
            	    ],
            	    yAxis : [
            	        {
            	            type : 'value'
            	        }
            	    ],
            	    series : [
            	        {
            	            name:'吞吐量（分钟级）',
            	        	type:'line',
            	        	stack:'Application',
            	        	itemStyle:{normal:{areaStyle:{type:'default'}}},
            	            data:throuput_minute 
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
            	    ],
            	    animation:false,
            	};
    			myChart3.setOption(option); 
    		}
        
    		function DrawEchart4 (ec) {
    			var myChart4 = ec.init(document.getElementById('realtime-chart4')); 
            
    			option = {
            		color : ['#87cefa'],
            	    title : {
            	        text: '分组统计数据（一天内）',
            	        subtext:'单位：个/s'
            	    },
            	    tooltip : {
            	        trigger: 'axis',
            	        axisPointer:{
            	        	type:'shadow'
            	        }
            	    },
            	    legend: {
            	        data:['分组（分钟级）'],
            	        y:"bottom"
            	    },
            	    toolbox: {
            	    	show : true,
            	        feature : {
            	            mark : {show: true},
            	            dataView : {show: true, readOnly: false},	                	            
            	            restore : {show: true},
            	            saveAsImage : {show: true}
            	        }
            	    },
            	    claculable:true,
            	    xAxis : [
            	        {
            	            type : 'category',
            	            //splitLine:{show:false},
            	            data : time_minute
            	        }
            	    ],
            	    yAxis : [
            	        {
            	            type : 'value'
            	        }
            	    ],
            	    series : [
            	        {
            	            name:'分组（分钟级）',
            	        	type:'line',
            	        	stack:'Application',
            	        	itemStyle:{normal:{areaStyle:{type:'default'}}},
            	            data:countPacket_minute 
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
            	    ],
            	    animation:false,
            	};
    			myChart4.setOption(option); 
    		}
	    
    		}//.bind(this),
    		//error: function (xhr, status, err) {
    		//    alert('Error:' + err);
    		//    alert("error");
    		//}.bind(this)
		});		
	}
	else{
		
		$.ajax({
            url: "http://166.111.143.200:8000/RealtimeApplicationThroughput/Second",
            dataType: 'jsonp',
            type: 'GET',
            jsonpCallback: 'callback',          
            success: function (data1) {           	           	        		            	
        		
        		var throuput_second = new Array();    
        		var countPacket_second = new Array();
        		
        		var time_second = new Array();
        		var count_second = 0;
        		
        		for (count_second = 0; count_second < 3600; count_second ++) {
        			
        			time_second[count_second] = 3600 - count_second;
        			
        		}
                   		
        		for (x in data1) {           	
        			
        			throuput_second[x] = data1[x].throuput_second/1000;   
        			countPacket_second[x] = data1[x].countPacket_second;
        			
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
	            
	            DrawEcharts1
	            
    	        );	
	
	            function DrawEcharts1 (ec){
	            	
	            	DrawEchart1 (ec);
	            	DrawEchart2 (ec);
	            	
	            }
	            
	            function DrawEchart1 (ec) {
	                var myChart1 = ec.init(document.getElementById('realtime-chart1')); 
	                
	                option = {
	                		color : ['#87cefa'],
	                	    title : {
	                	        text: '吞吐量统计数据（一小时内）',
	                	        subtext:'单位：kb/s'
	                	    },
	                	    tooltip : {
	                	        trigger: 'axis',
	                	        axisPointer:{
	                	        	type:'shadow'
	                	        }
	                	    },
	                	    legend: {
	                	        data:['吞吐量（秒级）'],
	                	        y:"bottom"
	                	    },
	                	    toolbox: {
	                	        show : true,
	                	        feature : {
	                	            mark : {show: true},	                	            
	                	            dataView : {show: true, readOnly: false},	                	            
	                	            restore : {show: true},
	                	            saveAsImage : {show: true}
	                	        }
	                	    },
	                	    claculable:true,
	                	    xAxis : [
	                	        {
	                	            type : 'category',
	                	            //splitLine:{show:false},
	                	            data : time_second
	                	        }
	                	    ],
	                	    yAxis : [
	                	        {
	                	            type : 'value'
	                	        }
	                	    ],
	                	    series : [
	                	        {
	                	            name:'吞吐量（秒级）',
	                	        	type:'line',
	                	        	stack:'Application',
	                	        	itemStyle:{normal:{areaStyle:{type:'default'}}},
	                	            data:throuput_second 
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
	                	    ],
	                	    animation:false,
	                	};
	                myChart1.setOption(option); 
	            }
	            
	            function DrawEchart2 (ec) {
	                var myChart2 = ec.init(document.getElementById('realtime-chart3')); 
	                
	                option = {
	                		color : ['#87cefa'],
	                	    title : {
	                	        text: '分组统计数据（一小时内）',
	                	        subtext:'单位：个/s'
	                	    },
	                	    tooltip : {
	                	        trigger: 'axis',
	                	        axisPointer:{
	                	        	type:'shadow'
	                	        }
	                	    },
	                	    legend: {
	                	        data:['分组（秒级）'],
	                	        y:"bottom"
	                	    },
	                	    toolbox: {
	                	    	show : true,
	                	        feature : {
	                	            mark : {show: true},
	                	            dataView : {show: true, readOnly: false},	                	            
	                	            restore : {show: true},
	                	            saveAsImage : {show: true}
	                	        }
	                	    },
	                	    claculable:true,
	                	    xAxis : [
	                	        {
	                	            type : 'category',
	                	            //splitLine:{show:false},
	                	            data : time_second
	                	        }
	                	    ],
	                	    yAxis : [
	                	        {
	                	            type : 'value'
	                	        }
	                	    ],
	                	    series : [
	                	        {
	                	            name:'分组（秒级）',
	                	        	type:'line',
	                	        	stack:'Application',
	                	        	itemStyle:{normal:{areaStyle:{type:'default'}}},
	                	            data:countPacket_second 
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
	                	    ],
	                	    animation:false,
	                	};
	                myChart2.setOption(option); 
	            }
        	    
            }//.bind(this),
            //error: function (xhr, status, err) {
            //    alert('Error:' + err);
            //    alert("error");
            //}.bind(this)
        });
	}    
	
	i ++;
};