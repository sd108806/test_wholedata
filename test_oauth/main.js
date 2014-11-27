

function main(input_path,start, limit,consumer_key_input,consumer_secrete_input)

{



//get_oauth();

/*
var obj_event=get_event(input_path );

document.write('obj_event.count  ' + obj_event.count+ '<br/>');
document.write('obj_event.events[0].node ' + obj_event.events[0].node+ '<br/>');
document.write('obj_event.events[0].description.commits[0].description ' + obj_event.events[0].description.commits[0].description+ '<br/>');
*/


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


for (var i=49*1;i<49*1+3;i++)
{
document.write('commit.length   ' + commit.length + '<br/>');
document.write('for 49 50 51  ' + '<br/>');
document.write('commit[i].node ' + commit[i].node+ '<br/>');
document.write('commit[i].files[0].type  ' + commit[i].files[0].type+ '<br/>');
document.write('commit[i].utctimestamp  ' + commit[i].utctimestamp+ '<br/>');
document.write('commit[i].author  ' + commit[i].author+ '<br/>');
document.write('commit[i].parents[0]  ' + commit[i].parents[0]+ '<br/>');
document.write('commit[i].message  ' + commit[i].message+ '<br/>');
document.write('commit[i].size  ' + commit[i].size+ '<br/>');
document.write('commit[i].branches[0]  ' + commit[i].branches[0]+ '<br/>');
document.write('(commit[i].files).length  '+  (commit[i].files).length+ '<br/>'  + '<br/>'  );
}

for (var i=49*2;i<49*2+3;i++)
{
document.write('commit.length   ' + commit.length + '<br/>');
document.write('for 98 99 100  ' + '<br/>');
document.write('commit[i].node ' + commit[i].node+ '<br/>');
document.write('commit[i].files[0].type  ' + commit[i].files[0].type+ '<br/>');
document.write('commit[i].utctimestamp  ' + commit[i].utctimestamp+ '<br/>');
document.write('commit[i].author  ' + commit[i].author+ '<br/>');
document.write('commit[i].parents[0]  ' + commit[i].parents[0]+ '<br/>');
document.write('commit[i].message  ' + commit[i].message+ '<br/>');
document.write('commit[i].size  ' + commit[i].size+ '<br/>');
document.write('commit[i].branches[0]  ' + commit[i].branches[0]+ '<br/>');
document.write('(commit[i].files).length  '+  (commit[i].files).length+ '<br/>'  + '<br/>'  );
}

for (var i=49*3;i<49*3+3;i++)
{
document.write('commit.length   ' + commit.length + '<br/>');
document.write('for 147 148 149  ' + '<br/>');
document.write('commit[i].node ' + commit[i].node+ '<br/>');
document.write('commit[i].files[0].type  ' + commit[i].files[0].type+ '<br/>');
document.write('commit[i].utctimestamp  ' + commit[i].utctimestamp+ '<br/>');
document.write('commit[i].author  ' + commit[i].author+ '<br/>');
document.write('commit[i].parents[0]  ' + commit[i].parents[0]+ '<br/>');
document.write('commit[i].message  ' + commit[i].message+ '<br/>');
document.write('commit[i].size  ' + commit[i].size+ '<br/>');
document.write('commit[i].branches[0]  ' + commit[i].branches[0]+ '<br/>');
document.write('(commit[i].files).length  '+  (commit[i].files).length+ '<br/>'  + '<br/>'  );
}

document.write('commit.length   ' + commit.length + '<br/>');
document.write('commit[length-1].node ' + commit[length-1].node+ '<br/>');
document.write('commit[length-1].files[0].type  ' + commit[length-1].files[0].type+ '<br/>');
document.write('commit[length-1].utctimestamp  ' + commit[length-1].utctimestamp+ '<br/>');
document.write('commit[length-1].author  ' + commit[length-1].author+ '<br/>');
document.write('commit[length-1].parents[0]  ' + commit[length-1].parents[0]+ '<br/>');
document.write('commit[length-1].message  ' + commit[length-1].message+ '<br/>');
document.write('commit[length-1].size  ' + commit[length-1].size+ '<br/>');
document.write('commit[length-1].branches[0]  ' + commit[length-1].branches[0]+ '<br/>');
document.write('(commit[length-1].files).length  '+  (commit[length-1].files).length+ '<br/>'  + '<br/>'  );


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