

function main(input_path,start, limit,consumer_key_input,consumer_secrete_input)

{



//get_oauth();

/*
var obj_event=get_event(input_path );

document.write('obj_event.count  ' + obj_event.count+ '<br/>');
document.write('obj_event.events[0].node ' + obj_event.events[0].node+ '<br/>');
document.write('obj_event.events[0].description.commits[0].description ' + obj_event.events[0].description.commits[0].description+ '<br/>');
*/

//document.write("parseInt(5/3) "+ parseInt(5/3) + "5%3" +5%3);
var commit = new Array();
var commit=get_wholedata(input_path,start, limit,consumer_key_input,consumer_secrete_input );


document.write('commit.length   ' + commit.length + '<br/>');
document.write('commit[0].node ' + commit[0].node+ '<br/>');
document.write('commit[0].files[0].type  ' + commit[0].files[0].type+ '<br/>');
document.write('commit[0].utctimestamp  ' + commit[0].utctimestamp+ '<br/>');
document.write('commit[0].author  ' + commit[0].author+ '<br/>');
document.write('commit[0].parents[0]  ' + commit[0].parents[0]+ '<br/>');
document.write('commit[0].message  ' + commit[0].message+ '<br/>');
document.write('commit[0].size  ' + commit[0].size+ '<br/>');
document.write('commit[0].branches[0]  ' + commit[0].branches[0]+ '<br/>');
document.write('(commit[0].files).length  '+  (commit[0].files).length+ '<br/>'  + '<br/>'  );


/*
document.write('commit.length   ' + commit.length + '<br/>');
document.write('commit[50].node ' + commit[50].node+ '<br/>');
document.write('commit[50].files[0].type  ' + commit[50].files[0].type+ '<br/>');
document.write('commit[50].utctimestamp  ' + commit[50].utctimestamp+ '<br/>');
document.write('commit[50].author  ' + commit[50].author+ '<br/>');
document.write('commit[50].parents[0]  ' + commit[50].parents[0]+ '<br/>');
document.write('commit[50].message  ' + commit[50].message+ '<br/>');
document.write('commit[50].size  ' + commit[50].size+ '<br/>');
document.write('commit[50].branches[0]  ' + commit[50].branches[0]+ '<br/>');
document.write('(commit[50].files).length  '+  (commit[50].files).length+ '<br/>'  + '<br/>'  );
*/



//document.write('commit[20].node ' + commit[20].node+ '<br/>');


/*
var sta_rgb_res=sta_rgb(     );
//document.write('commit.length   '+ commit.length + '<br/>');

for (var i=0;i<commit.length;i++)
//document.write( 'sta_rgb_res[i].rgb i= '+ i + '   ' +sta_rgb_res[i].r+ ' '+sta_rgb_res[i].g+ ' '+sta_rgb_res[i].b+ '<br/>');

//document.write('sta_rgb_res.length ' + sta_rgb_res.length + '<br/>');

var total_rgb=new Array(sta_rgb_res.length);

 total_rgb=get_total_rgb(sta_rgb_res);
 */
 
 
/*
 for(var i=0;i<total_rgb.length;i++)
document.write('total_rgb[i] '+total_rgb[i]+ '<br/>');
*/

//graph(total_rgb);

//display(sta_rgb_res,total_rgb);
}