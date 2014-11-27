

function get_wholedata(input_path,start, limit,consumer_key_input,consumer_secrete_input )
{

var max_fetch=50;


// first 50 or 49
//document.write("i am here1 ");
var obj_changesets=get_changesets(input_path,start, limit,consumer_key_input,consumer_secrete_input );
var total_count=obj_changesets.count;

var total_times;
if(total_count%(max_fetch-1)!=0)
 total_times=parseInt( total_count/(max_fetch-1) )+1;    // total number of featching data  instore 49 commits to the array commit
else
total_times=parseInt ( total_count/(max_fetch-1) );

//document.write("total_times " + total_times + "<br/>");



var commit= new  Array();

var num_copy_to_commit;
if(obj_changesets.changesets.length==50)
num_copy_to_commit=49;
else
num_copy_to_commit=obj_changesets.changesets.length;




var start_copy_point=obj_changesets.changesets.length-1;


var commit_i=0
for (var i=0;i< num_copy_to_commit; i++)
{commit[commit_i]=obj_changesets.changesets[start_copy_point];
start_copy_point--;
commit_i++;
}


//document.write('internal commit.length   first' + commit.length + '<br/>');



// middle  part


if(total_times>1)
{
for(var i=0; i< (total_times-2); i++)
{
var start0= obj_changesets.changesets[0].node;

var obj_changesets=get_changesets(input_path,start0, limit,consumer_key_input,consumer_secrete_input );
//document.write("obj_changesets.changesets[49].node " + obj_changesets.changesets[49].node + '<br/>');


for(var j=(max_fetch-1); j>0;j--)
{
commit[commit_i]=obj_changesets.changesets[j];
//document.write("commit_i "+ commit_i +"<br/>");
commit_i++;

}

//document.write("i "+ i+"<br/>");
//document.write("total_times "+ total_times+ "<br/>");
}
//document.write("we are here2"+"<br/>");
}

//document.write('internal commit.length   second' + commit.length + '<br/>');


// final 50 or 49 commmits
if(total_times>=3)
{
var start0= obj_changesets.changesets[0].node;
var obj_changesets=get_changesets(input_path,start0, limit,consumer_key_input,consumer_secrete_input );

var num_copy_to_commit2;
if(obj_changesets.changesets.length==50)
num_copy_to_commit2=49;
else
num_copy_to_commit2=obj_changesets.changesets.length;




var start_copy_point2=obj_changesets.changesets.length-1;


for (var i=0;i< num_copy_to_commit; i++)
{commit[commit_i]=obj_changesets.changesets[start_copy_point2];
start_copy_point2--;
commit_i++;
}

}

//document.write("commit.length third"+commit.length+ "<br/>");

return commit;



}
