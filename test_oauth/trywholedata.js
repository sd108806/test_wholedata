

function get_wholedata(input_path,start, limit,consumer_key_input,consumer_secrete_input )
{

// first 50 or 49
document.write("i am here1 ");
var obj_changesets=get_changesets(input_path,start, limit,consumer_key_input,consumer_secrete_input );
var total_count=obj_changesets.count;

var total_times;
if(total_count/(limit-1)!=0)
 total_times=total_count/(limit-1)+1;    // total number of featching data  instore 49 commits to the array commit
else
total_times=total_count/(limit-1);

document.write("i am here2 ");



var commit= new  Array();

var k;
if(obj_changesets.changesets.length==50)
k=49;
else
k=obj_changesets.changesets.length;


k--;

document.write("obj_changesets.changesets.length "+obj_changesets.changesets.length+ "<br/>");
document.write("k "+k+ "<br/>");


var commit_i=0
for (var i=0;i< obj_changesets.changesets.length; i++)
{commit[commit_i]=obj_changesets.changesets[k];
k--;
commit_i++;
}


document.write('internal commit.length   first' + commit.length + '<br/>');



// middle  part


if(total_times>1)
{
for(var i=0; i< (total_times-2); i++)
{
var start0= obj_changesets.changesets[0].node;

var obj_changesets=get_changesets(input_path,start0, limit,consumer_key_input,consumer_secrete_input );

for(var j=(limit-1); j>0;j--)
{
commit[commit_i]=obj_changesets.changesets[j];
commit_i++;
}

}
}
document.write('internal commit.length   second' + commit.length + '<br/>');


// final 50 or 49 commmits
if(total_times>=3)
{
var start0= obj_changesets.changesets[0].node;
var obj_changesets=get_changesets(input_path,start0, limit,consumer_key_input,consumer_secrete_input );

var k2;
if(obj_changesets.changesets.length==50)
k2=49;
else
k2=obj_changesets.changesets.length;


k2--;

document.write("obj_changesets.changesets.length "+obj_changesets.changesets.length+ "<br/>");
document.write("k2 "+k2+ "<br/>");


for (var i=0;i< obj_changesets.changesets.length; i++)
{commit[commit_i]=obj_changesets.changesets[k2];
k2--;
commit_i++;
}

}

document.write("commit.length third"+commit.length+ "<br/>");

return commit;



}
