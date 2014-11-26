

function get_wholedata(input_path,start, limit,consumer_key_input,consumer_secrete_input )
{

var obj_changesets=get_changesets(input_path,start, limit,consumer_key_input,consumer_secrete_input );
var total_count=obj_changesets.count;
var total_times=total_count/50+1;    // total number of featching data

document.write("i am here");
var commit= new  Array();

var k=obj_changesets.length;
k--;
var commit_i=0
for (var i=0;i< obj_changesets.length; i++)
{commit[commit_i]=obj_changesets.changesets[k];
k--;
commit_i++;
}


document.write("i am there");
var start0= obj_changesets.changesets[0].node;

if(total_times>1)
{
for(var i=0; i< (total_times-1); i++)
{
var obj_changesets=get_changesets(input_path,start0, limit,consumer_key_input,consumer_secrete_input );

var k=obj_changesets.length;
k--;
k--;
for (var i=0;i< (obj_changesets.length-1); i++)
{commit[commit_i]=obj_changesets.changesets[k];
k--;
commit_i++;
}
}

}

return commit;



}
